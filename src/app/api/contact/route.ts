import { NextResponse } from "next/server";
import { contactNotificationEmail } from "@/lib/emails/contact-notification";
import { contactConfirmationEmail } from "@/lib/emails/contact-confirmation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.CONTACT_EMAIL_TO;
    const emailFrom = process.env.CONTACT_EMAIL_FROM || "Website <onboarding@resend.dev>";

    if (resendApiKey && emailTo) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Send notification to Blanca
      await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        subject: `New Contact: ${subject}`,
        html: contactNotificationEmail({ name, email, phone: phone || undefined, subject, message }),
        replyTo: email,
      });

      // Send confirmation to the visitor
      await resend.emails.send({
        from: emailFrom,
        to: email,
        subject: "Thank you for reaching out — Blanca De La Rosa",
        html: contactConfirmationEmail({ name }),
      });
    } else {
      // Dev mode: log to console
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        phone,
        subject,
        message,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will be in touch soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again later." },
      { status: 500 }
    );
  }
}
