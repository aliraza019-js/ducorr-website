import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * API Route to save job application data to Google Sheets
 * Creates/updates a Google Sheet with 4 tabs (one per step)
 * Each candidate submission adds a new row
 */

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_JOB_APPLICATIONS_ID || '';
const SHEET_NAMES = {
  step1: 'Step 1 - Personal Information',
  step2: 'Step 2 - Employment & References',
  step3: 'Step 3 - Document Uploads',
  step4: 'Step 4 - Agreement',
};

/**
 * Initialize Google Auth (shared for Sheets and Drive)
 */
function getGoogleAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
    ],
  });
}

/**
 * Initialize Google Sheets API client
 */
function getSheetsClient() {
  const auth = getGoogleAuth();
  return google.sheets({ version: 'v4', auth });
}

/**
 * Initialize Google Drive API client
 */
function getDriveClient() {
  const auth = getGoogleAuth();
  return google.drive({ version: 'v3', auth });
}

/**
 * Upload file to Google Drive and return shareable link
 */
async function uploadFileToDrive(
  drive: any,
  fileData: { name: string; content: string; type: string },
  candidateEmail: string,
  fileType: 'certificates' | 'cv' | 'lastPaySlips' | 'selfVideo'
): Promise<string | null> {
  try {
    if (!fileData.content) {
      return null;
    }

    // Convert base64 to buffer
    const fileBuffer = Buffer.from(fileData.content, 'base64');

    // Create folder name based on candidate email (sanitized)
    const sanitizedEmail = candidateEmail.replace(/[^a-zA-Z0-9@._-]/g, '_');
    const folderName = `Job Applications - ${sanitizedEmail}`;
    
    // Try to find or create folder
    let folderId: string | null = null;
    
    try {
      // Search for existing folder (escape single quotes in name)
      const escapedFolderName = folderName.replace(/'/g, "\\'");
      const folderSearch = await drive.files.list({
        q: `name='${escapedFolderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: 'files(id, name)',
        spaces: 'drive',
      });

      if (folderSearch.data.files && folderSearch.data.files.length > 0) {
        folderId = folderSearch.data.files[0].id;
      } else {
        // Create new folder
        const folderMetadata = {
          name: folderName,
          mimeType: 'application/vnd.google-apps.folder',
        };

        const folder = await drive.files.create({
          requestBody: folderMetadata,
          fields: 'id',
        });

        folderId = folder.data.id || null;
      }
    } catch (folderError) {
      console.error('[Google Drive] Error creating/finding folder:', folderError);
      // Continue without folder - files will be in root
    }

    // Upload file
    const fileMetadata = {
      name: fileData.name,
      parents: folderId ? [folderId] : undefined,
    };

    const media = {
      mimeType: fileData.type || 'application/octet-stream',
      body: fileBuffer,
    };

    const uploadedFile = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink, webContentLink',
    });

    // Make file publicly viewable (or at least accessible to anyone with link)
    await drive.permissions.create({
      fileId: uploadedFile.data.id!,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    // Return shareable link
    const shareableLink = `https://drive.google.com/file/d/${uploadedFile.data.id}/view`;
    console.log(`[Google Drive] Uploaded ${fileType}: ${fileData.name} -> ${shareableLink}`);
    
    return shareableLink;
  } catch (error) {
    console.error(`[Google Drive] Error uploading ${fileType}:`, error);
    return null;
  }
}

/**
 * Get or create sheet by name
 */
async function getOrCreateSheet(sheets: any, spreadsheetId: string, sheetName: string) {
  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const existingSheet = spreadsheet.data.sheets?.find(
      (sheet: any) => sheet.properties.title === sheetName
    );

    if (existingSheet) {
      return existingSheet.properties.sheetId;
    }

    // Create new sheet
    const addSheetResponse = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: sheetName,
              },
            },
          },
        ],
      },
    });

    return addSheetResponse.data.replies[0].addSheet?.properties.sheetId;
  } catch (error) {
    console.error('Error getting/creating sheet:', error);
    throw error;
  }
}

/**
 * Get headers for a step
 */
function getStepHeaders(step: 1 | 2 | 3 | 4): string[] {
  switch (step) {
    case 1:
      return [
        'Submission Date',
        'Email',
        'First Name',
        'Last Name',
        'Position Sought',
        'Position Sought (Other)',
        'Contact Cell Number',
        'Present Address',
        'Current Legal Status in UAE',
        'Availability',
        'Availability (Other)',
        'UAE Driving License',
        'How were you referred to Ducorr',
        'Referral Source (Other)',
        'High School Graduation Date',
        'University Name',
        'University Degree',
        'University Graduation Date',
        'University Final Grade',
      ];
    case 2:
      return [
        'Submission Date',
        'Email',
        'Job 1 - Business Name',
        'Job 1 - Business Type',
        'Job 1 - Business Type (Other)',
        'Job 1 - Position Title',
        'Job 1 - Reporting To',
        'Job 1 - Supervisor Rating',
        'Job 1 - Start Date',
        'Job 1 - End Date',
        'Job 1 - Starting Salary',
        'Job 1 - Final Salary',
        'Job 1 - Reason for Leaving',
        'Job 1 - Reason for Leaving (Other)',
        'Job 2 - Business Name',
        'Job 2 - Business Type',
        'Job 2 - Business Type (Other)',
        'Job 2 - Position Title',
        'Job 2 - Reporting To',
        'Job 2 - Supervisor Rating',
        'Job 2 - Start Date',
        'Job 2 - End Date',
        'Job 2 - Starting Salary',
        'Job 2 - Final Salary',
        'Job 2 - Reason for Leaving',
        'Job 2 - Reason for Leaving (Other)',
        'Job 3 - Business Name',
        'Job 3 - Business Type',
        'Job 3 - Business Type (Other)',
        'Job 3 - Position Title',
        'Job 3 - Reporting To',
        'Job 3 - Supervisor Rating',
        'Job 3 - Start Date',
        'Job 3 - End Date',
        'Job 3 - Starting Salary',
        'Job 3 - Final Salary',
        'Job 3 - Reason for Leaving',
        'Job 3 - Reason for Leaving (Other)',
        'Professional Reference 1 - Full Name',
        'Professional Reference 1 - Position',
        'Professional Reference 1 - Company Name',
        'Professional Reference 1 - Contact Email',
        'Professional Reference 1 - Contact Number',
        'Professional Reference 2 - Full Name',
        'Professional Reference 2 - Position',
        'Professional Reference 2 - Company Name',
        'Professional Reference 2 - Contact Email',
        'Professional Reference 2 - Contact Number',
        'Personal Reference 3 - Full Name',
        'Personal Reference 3 - Position',
        'Personal Reference 3 - Company Name',
        'Personal Reference 3 - Contact Email',
        'Personal Reference 3 - Contact Number',
      ];
    case 3:
      return [
        'Submission Date',
        'Email',
        'Certificates File Name',
        'Certificates File Size (KB)',
        'Certificates Drive Link',
        'CV/Resume File Name',
        'CV/Resume File Size (KB)',
        'CV/Resume Drive Link',
        'Last Pay Slips File Name',
        'Last Pay Slips File Size (KB)',
        'Last Pay Slips Drive Link',
        'Self Video File Name',
        'Self Video File Size (KB)',
        'Self Video Drive Link',
      ];
    case 4:
      return [
        'Submission Date',
        'Email',
        'Agreement Accepted',
        'Submitted At',
      ];
    default:
      return [];
  }
}

/**
 * Convert form data to row values for a step
 */
function formDataToRow(data: any, step: 1 | 2 | 3 | 4): any[] {
  const submissionDate = new Date().toISOString();
  const email = data.email || '';

  switch (step) {
    case 1:
      return [
        submissionDate,
        email,
        data.firstName || '',
        data.lastName || '',
        data.positionSought || '',
        data.positionSoughtOther || '',
        data.contactCellNo || '',
        data.presentAddress || '',
        data.legalStatus || '',
        data.availability || '',
        data.availabilityOther || '',
        data.drivingLicense || '',
        data.referralSource || '',
        data.referralSourceOther || '',
        data.highSchoolGraduationDate || '',
        data.universityName || '',
        data.universityDegree || '',
        data.universityGraduationDate || '',
        data.universityFinalGrade || '',
      ];
    case 2:
      const jobs = data.jobs || [];
      const row: any[] = [submissionDate, email];

      // Add up to 3 jobs (pad with empty strings if less)
      for (let i = 0; i < 3; i++) {
        const job = jobs[i] || {};
        row.push(
          job.businessName || '',
          job.businessType || '',
          job.businessTypeOther || '',
          job.positionTitle || '',
          job.reportingTo || '',
          job.supervisorRating || '',
          job.startDate || '',
          job.endDate || '',
          job.startingSalary || '',
          job.finalSalary || '',
          job.reasonForLeaving || '',
          job.reasonForLeavingOther || ''
        );
      }

      // Add references
      row.push(
        data.reference1FullName || '',
        data.reference1Position || '',
        data.reference1CompanyName || '',
        data.reference1ContactEmail || '',
        data.reference1ContactNumber || '',
        data.reference2FullName || '',
        data.reference2Position || '',
        data.reference2CompanyName || '',
        data.reference2ContactEmail || '',
        data.reference2ContactNumber || '',
        data.reference3FullName || '',
        data.reference3Position || '',
        data.reference3CompanyName || '',
        data.reference3ContactEmail || '',
        data.reference3ContactNumber || ''
      );

      return row;
    case 3:
      const formatFile = (file: any, driveLink?: string | null) => {
        if (!file) return ['Not provided', '', 'N/A'];
        const fileName = file.name || file.filename || 'Unknown';
        const fileSize = file.size ? `${(file.size / 1024).toFixed(2)} KB` : 'Unknown size';
        const link = driveLink || 'Not uploaded';
        return [fileName, fileSize, link];
      };

      return [
        submissionDate,
        email,
        ...formatFile(data.certificates, data.certificatesDriveLink),
        ...formatFile(data.cv, data.cvDriveLink),
        ...formatFile(data.lastPaySlips, data.lastPaySlipsDriveLink),
        ...formatFile(data.selfVideo, data.selfVideoDriveLink),
      ];
    case 4:
      return [
        submissionDate,
        email,
        data.agreementAccepted ? 'Yes' : 'No',
        data.submittedAt || submissionDate,
      ];
    default:
      return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('[Google Sheets API] Starting job application save...');
    
    if (!SPREADSHEET_ID) {
      console.error('[Google Sheets API] Error: GOOGLE_SHEETS_JOB_APPLICATIONS_ID not configured');
      return NextResponse.json(
        { error: 'Google Sheets ID not configured' },
        { status: 500 }
      );
    }

    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
      console.error('[Google Sheets API] Error: Google Service Account credentials not configured');
      return NextResponse.json(
        { error: 'Google Service Account credentials not configured' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('[Google Sheets API] Received data for:', body.email || 'Unknown email');
    
    const sheets = getSheetsClient();
    const drive = getDriveClient();
    console.log('[Google Sheets API] Google Sheets and Drive clients initialized');

    // Upload files to Google Drive first
    const candidateEmail = body.email || 'unknown';
    const driveLinks: Record<string, string | null> = {};

    const filesToUpload = [
      { key: 'certificates', data: body.certificates, type: 'certificates' as const },
      { key: 'cv', data: body.cv, type: 'cv' as const },
      { key: 'lastPaySlips', data: body.lastPaySlips, type: 'lastPaySlips' as const },
      { key: 'selfVideo', data: body.selfVideo, type: 'selfVideo' as const },
    ];

    console.log('[Google Drive] Starting file uploads...');
    for (const fileInfo of filesToUpload) {
      if (fileInfo.data && fileInfo.data.content) {
        try {
          const link = await uploadFileToDrive(
            drive,
            {
              name: fileInfo.data.filename || fileInfo.data.name || `${fileInfo.type}.pdf`,
              content: fileInfo.data.content,
              type: fileInfo.data.contentType || fileInfo.data.type || 'application/pdf',
            },
            candidateEmail,
            fileInfo.type
          );
          driveLinks[`${fileInfo.key}DriveLink`] = link;
        } catch (error) {
          console.error(`[Google Drive] Failed to upload ${fileInfo.key}:`, error);
          driveLinks[`${fileInfo.key}DriveLink`] = null;
        }
      }
    }
    console.log('[Google Drive] File uploads completed');

    // Add drive links to body for sheet storage
    const bodyWithDriveLinks = {
      ...body,
      ...driveLinks,
    };

    // Process each step
    const results = [];
    for (const step of [1, 2, 3, 4] as const) {
      const sheetName = SHEET_NAMES[`step${step}` as keyof typeof SHEET_NAMES];
      console.log(`[Google Sheets API] Processing Step ${step}: ${sheetName}`);
      
      try {
        // Get or create sheet
        const sheetId = await getOrCreateSheet(sheets, SPREADSHEET_ID, sheetName);
        console.log(`[Google Sheets API] Sheet "${sheetName}" ready (ID: ${sheetId})`);

        // Get headers
        const headers = getStepHeaders(step);
        
        // Check if headers exist (first row)
        const headerCheck = await sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!A1:Z1`,
        });

        // Add headers if sheet is empty
        if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
          console.log(`[Google Sheets API] Adding headers to "${sheetName}"`);
          await sheets.spreadsheets.values.update({
            spreadsheetId: SPREADSHEET_ID,
            range: `${sheetName}!A1`,
            valueInputOption: 'RAW',
            requestBody: {
              values: [headers],
            },
          });
          console.log(`[Google Sheets API] Headers added to "${sheetName}"`);
        } else {
          console.log(`[Google Sheets API] Headers already exist in "${sheetName}"`);
        }

        // Convert form data to row
        const row = formDataToRow(bodyWithDriveLinks, step);
        console.log(`[Google Sheets API] Prepared row for "${sheetName}" with ${row.length} columns`);

        // Append row
        const appendResponse = await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!A:Z`,
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          requestBody: {
            values: [row],
          },
        });

        const updatedRange = appendResponse.data.updates?.updatedRange;
        console.log(`[Google Sheets API] Successfully added row to "${sheetName}" at ${updatedRange}`);
        results.push({ step, sheetName, success: true, range: updatedRange });
      } catch (stepError) {
        console.error(`[Google Sheets API] Error processing Step ${step}:`, stepError);
        results.push({ step, sheetName, success: false, error: stepError instanceof Error ? stepError.message : 'Unknown error' });
        // Continue with other steps even if one fails
      }
    }

    const successCount = results.filter(r => r.success).length;
    console.log(`[Google Sheets API] Completed: ${successCount}/4 steps saved successfully`);

    if (successCount === 4) {
      return NextResponse.json({
        success: true,
        message: 'Application saved to Google Sheets successfully',
        details: results,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: `Partially saved: ${successCount}/4 steps succeeded`,
        details: results,
      }, { status: 207 }); // 207 Multi-Status
    }
  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    return NextResponse.json(
      {
        error: 'Failed to save to Google Sheets',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

