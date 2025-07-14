import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { name, email, phone, destination } = await req.json();

    // --- Basic Input Validation ---
    if (!name || !email || !phone || !destination) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // --- Nodemailer Transporter Setup ---
    // IMPORTANT: Use environment variables for security.
    // Do NOT hardcode your email credentials in the code.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === '465', // true for port 465, false for others
      auth: {
        user: process.env.EMAIL_USER, // Your sending email address
        pass: process.env.EMAIL_PASS, // Your email password or an app-specific password
      },
    });

    // --- Email Content ---
    const mailOptions = {
      from: `"Travel Agency" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive notifications
      subject: '🎉 New Travel Offer Request!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">New Offer Request Details</h2>
          <p>You have received a new request for a personalized travel offer.</p>
          <hr>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📞 Phone:</strong> ${phone}</p>
          <p><strong>✈️ Dream Destination:</strong> ${destination}</p>
          <hr>
          <p style="font-size: 0.9em; color: #777;">This email was sent from your website's contact form.</p>
        </div>
      `,
    };

    // --- Send the Email ---
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Offer request sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ message: 'An error occurred while sending the email.' }, { status: 500 });
  }
}
