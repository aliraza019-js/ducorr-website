import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Email configuration
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'ali.septemsystem@gmail.com';
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

// Configure email transporter only if creds provided
const canSendEmail = Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);
const transporter = canSendEmail
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD,
      },
    })
  : null as unknown as nodemailer.Transporter;

// Google Sheets API configuration
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = process.env.GOOGLE_SHEET_NAME || 'Contact Submissions';

// Service Account (preferred for write access)
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const SERVICE_ACCOUNT_PRIVATE_KEY = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, queryType, project, message, preferredDate, preferredTime, mode, location, attendees } = body;

    // Build email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Query Type: ${queryType}
      Project Type: ${project || 'Not specified'}
      
      Booking Details:
      Preferred Date: ${preferredDate || 'Not specified'}
      Preferred Time: ${preferredTime || 'Not specified'}
      Mode: ${mode || 'Not specified'}
      Location/Platform: ${location || 'Not specified'}
      Estimated Attendees: ${attendees || 'Not specified'}
      
      Message:
      ${message}
      
      Submitted at: ${new Date().toISOString()}
    `;

    // Send email (optional)
    if (canSendEmail) {
      try {
        const mailOptions = {
          from: GMAIL_USER,
          to: CONTACT_TO_EMAIL,
          subject: `New Contact Form Submission - ${queryType}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>'),
        };
        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error('Email send error (continuing without failing):', mailError);
      }
    }

    // Prepare row data
    const sheetData = [
      new Date().toISOString(),
      firstName,
      lastName,
      email,
      phone || '',
      company || '',
      queryType,
      project || '',
      preferredDate || '',
      preferredTime || '',
      mode || '',
      location || '',
      attendees || '',
      message,
    ];

    // Log to Google Sheet (prefer service account)
    if (SPREADSHEET_ID) {
      if (SERVICE_ACCOUNT_EMAIL && SERVICE_ACCOUNT_PRIVATE_KEY) {
        try {
          const jwt = new google.auth.JWT({
            email: SERVICE_ACCOUNT_EMAIL,
            key: SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });
          const sheets = google.sheets({ version: 'v4', auth: jwt });
          await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:N`,
            valueInputOption: 'RAW',
            requestBody: { values: [sheetData] },
          });
        } catch (serviceError) {
          console.error('Service account Sheets append failed:', serviceError);
        }
      } else if (GOOGLE_SHEETS_API_KEY) {
        try {
          const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}!A:N:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ values: [sheetData] }),
            }
          );
          if (!response.ok) {
            console.error('Failed to log to Google Sheet (API key method):', await response.text());
          }
        } catch (sheetError) {
          console.error('Error logging to Google Sheet (API key method):', sheetError);
        }
      } else {
        console.warn('No Google Sheets credentials provided. Skipping sheet append.');
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
