import { NextRequest, NextResponse } from 'next/server';

// Make.com webhook URL - should be set in environment variables
const MAKE_WEBHOOK_URL = process.env.MAKE_JOB_APPLICATION_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    // Check if webhook URL is configured
    if (!MAKE_WEBHOOK_URL) {
      console.error('MAKE_JOB_APPLICATION_WEBHOOK_URL is not configured');
      return NextResponse.json(
        { error: 'Webhook URL not configured' },
        { status: 500 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    
    // Extract form fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const linkedin = formData.get('linkedin') as string || '';
    const portfolio = formData.get('portfolio') as string || '';
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobDepartment = formData.get('jobDepartment') as string;
    const jobLocation = formData.get('jobLocation') as string;
    const jobType = formData.get('jobType') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !coverLetter || !jobTitle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert resume file to base64 if present
    let resumeBase64 = '';
    let resumeFileName = '';
    if (resumeFile && resumeFile.size > 0) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      resumeBase64 = buffer.toString('base64');
      resumeFileName = resumeFile.name;
    }

    // Prepare data for Make.com webhook
    // Make.com expects JSON format, so we'll send all data including base64 resume
    const webhookData = {
      firstName,
      lastName,
      email,
      phone,
      linkedin: linkedin || null,
      portfolio: portfolio || null,
      coverLetter,
      jobTitle,
      jobDepartment,
      jobLocation,
      jobType,
      resume: resumeBase64 ? {
        filename: resumeFileName,
        content: resumeBase64,
        contentType: resumeFile?.type || 'application/pdf',
      } : null,
      submittedAt: new Date().toISOString(),
    };

    // Send to Make.com webhook
    const makeResponse = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!makeResponse.ok) {
      const errorText = await makeResponse.text();
      console.error('Make.com webhook error:', {
        status: makeResponse.status,
        statusText: makeResponse.statusText,
        error: errorText,
      });
      
      return NextResponse.json(
        { 
          error: 'Failed to submit application to Make.com',
          details: errorText 
        },
        { status: makeResponse.status }
      );
    }

    // Log success
    console.log('Job application submitted successfully:', {
      email,
      jobTitle,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true,
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Job application API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

