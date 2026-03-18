import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, city, buildingType, details } = data;

    const { data: emailData, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // The default testing address from Resend.
      to: ['contact@udayiksa.com'],            // Where the emails should go
      reply_to: email,                      // The user's email for replies
      subject: `New Lead: ${name} from ${city}`,
      html: `
        <h2>New Enquiry Received!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Building Type:</strong> ${buildingType}</p>
        <p><strong>Details:</strong> ${details}</p>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Failed to send enquiry.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
