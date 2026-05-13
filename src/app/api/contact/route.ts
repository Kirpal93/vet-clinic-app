import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "PawCare Appointment <appointments@pawcarevetclinic.com>",
      to: [process.env.CLINIC_EMAIL ?? "info@pawcarevetclinic.com"],
      replyTo: email || undefined,
      subject: `New Appointment Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #1e40af; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🐾 New Appointment Request</h1>
            <p style="color: #bfdbfe; margin: 8px 0 0;">PawCare Vet Clinic</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af; width: 30%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${phone}</td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${email}</td>
              </tr>` : ""}
              ${message ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1e40af; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #374151;">${message}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #1e40af;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Action required:</strong> Please call the patient back to confirm their appointment.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
