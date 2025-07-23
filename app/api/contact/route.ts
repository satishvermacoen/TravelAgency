// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// Define the schema for input validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message } = validation.data;

    // --- TODO: Implement actual email sending logic here ---
    // Example using Resend:
    /*
    await resend.emails.send({
      from: process.env.EMAIL_SENDER!,
      to: 'your-support-email@example.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `<p>You received a new message from ${name} (${email}):</p><p>${message}</p>`,
    });
    */
    console.log("Form data is valid. In a real app, an email would be sent now.");
    console.log(validation.data);


    return NextResponse.json({ message: 'Form submitted successfully!' });

  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
