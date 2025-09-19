import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Recipient (configurable via env; defaults to sales inbox)
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'sales@ducorr.com';

// Generic SMTP configuration (required)
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_SECURE = (process.env.SMTP_SECURE || '').toLowerCase() === 'true';
// Preferred verified sender (must be verified in your SMTP provider e.g., Brevo)
const SMTP_FROM = process.env.SMTP_FROM; // e.g., no-reply@yourdomain.com

function mask(value?: string) {
  if (!value) return undefined;
  if (value.includes('@')) {
    const [local, domain] = value.split('@');
    const shown = local.length <= 2 ? local : `${local.slice(0, 2)}***${local.slice(-1)}`;
    return `${shown}@${domain}`;
  }
  return `${value.slice(0, 2)}***`;
}

function buildTransporter() {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP configuration missing. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE');
    return null as unknown as nodemailer.Transporter;
  }

  // Log non-sensitive SMTP config for verification
  console.log('SMTP configuration loaded:', {
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    user: mask(SMTP_USER),
    from: SMTP_FROM ? SMTP_FROM : mask(SMTP_USER),
    to: CONTACT_TO_EMAIL,
  });

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, queryType, project, message, preferredDate, preferredTime, mode, location, attendees } = body;

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

    try {
      const transporter = buildTransporter();
      if (transporter) {
        const fromAddress = SMTP_FROM || SMTP_USER || 'no-reply@ducorr.com';
        const mailOptions = {
          from: fromAddress,
          to: CONTACT_TO_EMAIL,
          replyTo: email || undefined,
          subject: `New Contact Form Submission - ${queryType}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>'),
        } as const;

        console.log('Attempting to send email:', {
          from: fromAddress,
          to: CONTACT_TO_EMAIL,
          replyTo: email || null,
          subject: mailOptions.subject,
        });

        const info = await transporter.sendMail(mailOptions);
        console.log('SMTP send result:', {
          messageId: info.messageId,
          accepted: info.accepted,
          rejected: info.rejected,
          response: info.response,
        });
      }
    } catch (mailError) {
      console.error('SMTP email send error:', mailError);
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
