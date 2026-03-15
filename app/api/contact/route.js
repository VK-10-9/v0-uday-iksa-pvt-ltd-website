import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, city, buildingType, details } = data;

    // Send the email using Resend REST API to avoid npm install issues
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>', // The default testing address from Resend.
        to: ['info@udayiksa.com'],            // Where the emails should go
        subject: `New Lead: ${name} from ${city}`,
        html: `
          <h2>New Enquiry Received!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Building Type:</strong> ${buildingType}</p>
          <p><strong>Details:</strong> ${details}</p>
        `
      })
    });

    const emailData = await res.json();

    if (!res.ok || emailData.error) {
      console.error('Error sending email:', emailData.error || emailData);
      return NextResponse.json({ error: 'Failed to send enquiry.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
