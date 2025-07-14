import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Ensure the request method is POST
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }

  try {
    const { name, email, subject, message } = await req.json();

    // --- Basic Input Validation ---
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields: name, email, and message are required.' }, { status: 400 });
    }

    // --- Nodemailer Transporter Setup ---
    // This uses the same environment variables as the 'getoffer' API.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === '465', // true for port 465, false for others
      auth: {
        user: process.env.EMAIL_USER, // Your sending email address
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    });

    // --- Email Content ---
    const mailOptions = {
      from: `"Travel Agency Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL, // The email address receiving the form submissions
      replyTo: email, // Set the 'reply-to' field to the user's email for easy replies
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0056b3;">Contact Form Inquiry</h2>
          <p>You have received a new message from your website's contact form.</p>
          <hr>
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📝 Subject:</strong> ${subject || 'N/A'}</p>
          <h3>Message:</h3>
          <p style="background-color: #f4f4f4; border-left: 4px solid #0056b3; padding: 15px; white-space: pre-wrap; font-size: 1.1em;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #777;">To reply, simply respond to this email.</p>
        </div>
      `,
    };

    // --- Send the Email ---
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ message: 'An error occurred while sending the message.' }, { status: 500 });
  }
}
