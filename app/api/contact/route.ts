import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
  },
});

// Google Sheets API configuration
const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const SHEET_NAME = 'Contact Submissions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, queryType, project, message } = body;

    // Email content
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Query Type: ${queryType}
      Project Type: ${project || 'Not specified'}
      
      Message:
      ${message}
      
      Submitted at: ${new Date().toISOString()}
    `;

    // Send email to sales@ducorr.com
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'sales@ducorr.com',
      subject: `New Contact Form Submission - ${queryType}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };

    await transporter.sendMail(mailOptions);

    // Log to Google Sheet
    if (GOOGLE_SHEETS_API_KEY && SPREADSHEET_ID) {
      try {
        const sheetData = [
          new Date().toISOString(),
          firstName,
          lastName,
          email,
          phone || '',
          company || '',
          queryType,
          project || '',
          message,
        ];

        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:I:append?valueInputOption=RAW&key=${GOOGLE_SHEETS_API_KEY}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              values: [sheetData],
            }),
          }
        );

        if (!response.ok) {
          console.error('Failed to log to Google Sheet:', response.statusText);
        }
      } catch (sheetError) {
        console.error('Error logging to Google Sheet:', sheetError);
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
