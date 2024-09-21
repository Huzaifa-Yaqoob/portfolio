import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
    reasonOfContacting,
  } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Use your preferred service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or App password
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // Your receiving email
      subject: `New contact message from ${firstName} ${lastName}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border-radius: 8px;">
        <h2 style="color: #333;">New Contact Message</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Reason for Contacting:</strong></p>
        <ul style="padding-left: 20px;">
          ${reasonOfContacting
            .map((reason: string) => `<li>${reason}</li>`)
            .join("")}
        </ul>
        <p><strong>Message:</strong></p>
        <p style="background-color: #fff; padding: 10px; border-radius: 4px; border: 1px solid #ddd;">
          ${message}
        </p>
      </div>
    `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
