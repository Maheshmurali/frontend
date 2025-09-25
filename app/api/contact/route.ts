import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  organization: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().min(10),
  serviceType: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate using Zod
    const parsed = contactSchema.parse(body);

    // Configure SMTP
    const transporter = nodemailer.createTransport({
      host: "smpt.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.MAIL_USER}>`,
      to: "mahesh@shenzor.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${parsed.name}</p>
        <p><strong>Organization:</strong> ${parsed.organization || "N/A"}</p>
        <p><strong>Location:</strong> ${parsed.location || "N/A"}</p>
        <p><strong>Phone:</strong> ${parsed.phone}</p>
        <p><strong>Service Type:</strong> ${parsed.serviceType}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: (error as Error).message }),
      { status: 500 }
    );
  }
}
