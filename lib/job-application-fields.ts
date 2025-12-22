/**
 * Field mapping for Job Application Form
 * Organized by steps for Excel export
 */

export interface JobApplicationData {
  // Step 1: Personal Information
  email: string;
  firstName: string;
  lastName: string;
  positionSought: string;
  positionSoughtOther: string;
  contactCellNo: string;
  presentAddress: string;
  legalStatus: string;
  availability: string;
  availabilityOther: string;
  drivingLicense: string;
  referralSource: string;
  referralSourceOther: string;
  highSchoolGraduationDate: string;
  universityName: string;
  universityDegree: string;
  universityGraduationDate: string;
  universityFinalGrade: string;
  
  // Step 2: Employment History & References
  jobs: Array<{
    businessName: string;
    businessType: string;
    businessTypeOther: string;
    positionTitle: string;
    reportingTo: string;
    supervisorRating: string;
    startDate: string;
    endDate: string;
    startingSalary: string;
    finalSalary: string;
    reasonForLeaving: string;
    reasonForLeavingOther: string;
  }>;
  reference1FullName: string;
  reference1Position: string;
  reference1CompanyName: string;
  reference1ContactEmail: string;
  reference1ContactNumber: string;
  reference2FullName: string;
  reference2Position: string;
  reference2CompanyName: string;
  reference2ContactEmail: string;
  reference2ContactNumber: string;
  reference3FullName: string;
  reference3Position: string;
  reference3CompanyName: string;
  reference3ContactEmail: string;
  reference3ContactNumber: string;
  
  // Step 3: Document Uploads
  certificates: File | null;
  cv: File | null;
  lastPaySlips: File | null;
  selfVideo: File | null;
  
  // Step 4: Agreement
  agreementAccepted: boolean;
  submittedAt: string;
}

/**
 * Step 1: Personal Information Fields
 */
export const STEP1_FIELDS = [
  { key: 'email', label: 'Email' },
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'positionSought', label: 'Position Sought' },
  { key: 'positionSoughtOther', label: 'Position Sought (Other)' },
  { key: 'contactCellNo', label: 'Contact Cell Number' },
  { key: 'presentAddress', label: 'Present Address - City & Country' },
  { key: 'legalStatus', label: 'Current Legal Status in UAE' },
  { key: 'availability', label: 'Availability' },
  { key: 'availabilityOther', label: 'Availability (Other)' },
  { key: 'drivingLicense', label: 'UAE Driving License' },
  { key: 'referralSource', label: 'How were you referred to Ducorr' },
  { key: 'referralSourceOther', label: 'Referral Source (Other)' },
  { key: 'highSchoolGraduationDate', label: 'High School Graduation Date' },
  { key: 'universityName', label: 'University Name' },
  { key: 'universityDegree', label: 'University Degree' },
  { key: 'universityGraduationDate', label: 'University Graduation Date' },
  { key: 'universityFinalGrade', label: 'University Final Grade' },
] as const;

/**
 * Step 2: Employment History & References Fields
 * Note: Jobs are dynamic, so we'll handle them separately
 */
export const STEP2_EMPLOYMENT_FIELDS = [
  { key: 'businessName', label: 'Business Name' },
  { key: 'businessType', label: 'Business Type' },
  { key: 'businessTypeOther', label: 'Business Type (Other)' },
  { key: 'positionTitle', label: 'Position Title' },
  { key: 'reportingTo', label: 'Reporting To' },
  { key: 'supervisorRating', label: 'Supervisor Rating' },
  { key: 'startDate', label: 'Start Date' },
  { key: 'endDate', label: 'End Date' },
  { key: 'startingSalary', label: 'Starting Salary' },
  { key: 'finalSalary', label: 'Final Salary' },
  { key: 'reasonForLeaving', label: 'Reason for Leaving' },
  { key: 'reasonForLeavingOther', label: 'Reason for Leaving (Other)' },
] as const;

export const STEP2_REFERENCE_FIELDS = [
  // Professional Reference 1
  { key: 'reference1FullName', label: 'Professional Reference 1 - Full Name' },
  { key: 'reference1Position', label: 'Professional Reference 1 - Position' },
  { key: 'reference1CompanyName', label: 'Professional Reference 1 - Company Name' },
  { key: 'reference1ContactEmail', label: 'Professional Reference 1 - Contact Email' },
  { key: 'reference1ContactNumber', label: 'Professional Reference 1 - Contact Number' },
  // Professional Reference 2
  { key: 'reference2FullName', label: 'Professional Reference 2 - Full Name' },
  { key: 'reference2Position', label: 'Professional Reference 2 - Position' },
  { key: 'reference2CompanyName', label: 'Professional Reference 2 - Company Name' },
  { key: 'reference2ContactEmail', label: 'Professional Reference 2 - Contact Email' },
  { key: 'reference2ContactNumber', label: 'Professional Reference 2 - Contact Number' },
  // Personal Reference 3
  { key: 'reference3FullName', label: 'Personal Reference 3 - Full Name' },
  { key: 'reference3Position', label: 'Personal Reference 3 - Position' },
  { key: 'reference3CompanyName', label: 'Personal Reference 3 - Company Name' },
  { key: 'reference3ContactEmail', label: 'Personal Reference 3 - Contact Email' },
  { key: 'reference3ContactNumber', label: 'Personal Reference 3 - Contact Number' },
] as const;

/**
 * Step 3: Document Uploads Fields
 */
export const STEP3_FIELDS = [
  { key: 'certificates', label: 'Certificates File' },
  { key: 'cv', label: 'CV/Resume File' },
  { key: 'lastPaySlips', label: 'Last Pay Slips File' },
  { key: 'selfVideo', label: 'Self Video File' },
] as const;

/**
 * Step 4: Agreement Fields
 */
export const STEP4_FIELDS = [
  { key: 'agreementAccepted', label: 'Agreement Accepted' },
  { key: 'submittedAt', label: 'Submitted At' },
] as const;

/**
 * Get all field labels for a step
 */
export function getStepFields(step: 1 | 2 | 3 | 4) {
  switch (step) {
    case 1:
      return STEP1_FIELDS;
    case 2:
      return [...STEP2_EMPLOYMENT_FIELDS, ...STEP2_REFERENCE_FIELDS];
    case 3:
      return STEP3_FIELDS;
    case 4:
      return STEP4_FIELDS;
    default:
      return [];
  }
}

/**
 * Flatten form data for Excel export
 */
export function flattenFormDataForExcel(data: any): {
  step1: Record<string, any>;
  step2: Record<string, any>;
  step3: Record<string, any>;
  step4: Record<string, any>;
} {
  // Step 1: Personal Information
  const step1: Record<string, any> = {};
  STEP1_FIELDS.forEach(field => {
    step1[field.label] = data[field.key] || '';
  });

  // Step 2: Employment History & References
  const step2: Record<string, any> = {};
  
  // Add employment history (handle multiple jobs)
  if (data.jobs && Array.isArray(data.jobs)) {
    data.jobs.forEach((job: any, index: number) => {
      STEP2_EMPLOYMENT_FIELDS.forEach(field => {
        const label = `Job ${index + 1} - ${field.label}`;
        step2[label] = job[field.key] || '';
      });
    });
  }
  
  // Add references
  STEP2_REFERENCE_FIELDS.forEach(field => {
    step2[field.label] = data[field.key] || '';
  });

  // Step 3: Document Uploads
  const step3: Record<string, any> = {};
  STEP3_FIELDS.forEach(field => {
    const file = data[field.key];
    if (file && file instanceof File) {
      step3[field.label] = file.name;
      step3[`${field.label} - Size`] = `${(file.size / 1024).toFixed(2)} KB`;
      step3[`${field.label} - Type`] = file.type;
    } else {
      step3[field.label] = 'Not provided';
    }
  });

  // Step 4: Agreement
  const step4: Record<string, any> = {};
  step4['Agreement Accepted'] = data.agreementAccepted ? 'Yes' : 'No';
  step4['Submitted At'] = data.submittedAt || new Date().toISOString();

  return { step1, step2, step3, step4 };
}

