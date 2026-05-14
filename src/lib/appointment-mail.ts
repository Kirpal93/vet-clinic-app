import dns from "node:dns";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

/** Prefer IPv4 when resolving hostnames (often fixes api.resend.com on Windows / broken IPv6 routes). */
if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("ipv4first");
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function oneLine(text: string, max = 500) {
  return String(text).replace(/\r|\n/g, " ").slice(0, max);
}

const DEFAULT_RESEND_FROM = "PawCare Appointments <onboarding@resend.dev>";

function formatResendError(error: unknown): string {
  if (error == null) return "Resend returned an unknown error.";
  if (typeof error === "string") return enrichResendMessage(error);
  if (typeof error === "object" && "message" in error) {
    const m = (error as { message: unknown }).message;
    if (typeof m === "string") return enrichResendMessage(m);
    if (Array.isArray(m)) return enrichResendMessage(m.map(String).join("; "));
  }
  try {
    return enrichResendMessage(JSON.stringify(error));
  } catch {
    return "Resend rejected the send.";
  }
}

/** Resend’s Node client reports this when api.resend.com is unreachable from the server (DNS/VPN/firewall/IPv6). */
function enrichResendMessage(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("could not be resolved") || lower.includes("unable to fetch data")) {
    return `${message} Your PC cannot reach api.resend.com from Node (firewall/VPN/DNS). Try: turn off VPN; allow Node.js in Windows Firewall; try a phone hotspot; run \`npm run check:resend\`; deploy to Vercel (email usually works there). For local UI-only testing, set RESEND_DEV_MOCK=1 in .env.local (development only).`;
  }
  return message;
}

export async function handleAppointmentPost(req: NextRequest): Promise<NextResponse> {
  const devMock =
    process.env.NODE_ENV === "development" &&
    (process.env.RESEND_DEV_MOCK === "1" || process.env.RESEND_DEV_MOCK === "true");

  try {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, phone, email, message } = body as Record<string, unknown>;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
    }

    if (devMock) {
      console.info("[RESEND_DEV_MOCK] Appointment (email not sent):", {
        name: String(name),
        phone: String(phone),
        email: email ? String(email) : "",
        message: message ? String(message) : "",
      });
      return NextResponse.json({ success: true, id: "dev-mock", devMock: true });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Email is not configured: add RESEND_API_KEY to .env.local (local) or Vercel Environment Variables (production).",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM?.trim() || DEFAULT_RESEND_FROM;
    const toEmail = process.env.CLINIC_EMAIL?.trim();
    if (!toEmail) {
      return NextResponse.json(
        { error: "Set CLINIC_EMAIL in .env.local or Vercel to the inbox that should receive appointment requests." },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safePhone = escapeHtml(String(phone));
    const safeEmail = email ? escapeHtml(String(email)) : "";
    const safeMessage = message ? escapeHtml(String(message)) : "";

    const textBody = [
      "New appointment request — PawCare Vet Clinic",
      "",
      `Name: ${oneLine(String(name))}`,
      `Phone: ${oneLine(String(phone))}`,
      email ? `Email: ${oneLine(String(email))}` : null,
      message ? `Message: ${oneLine(String(message), 2000)}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const { data, error } = await resend.emails.send({
      from,
      to: [toEmail],
      replyTo: email ? String(email).trim() : undefined,
      subject: `New appointment request from ${oneLine(String(name), 120)}`,
      text: textBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 32px; border-radius: 12px;">
          <div style="background: #1e40af; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New appointment request</h1>
            <p style="color: #bfdbfe; margin: 8px 0 0;">PawCare Vet Clinic</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af; width: 30%;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${safePhone}</td>
              </tr>
              ${safeEmail ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #1e40af;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #374151;">${safeEmail}</td>
              </tr>` : ""}
              ${safeMessage ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #1e40af; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #374151;">${safeMessage}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #eff6ff; border-radius: 8px; border-left: 4px solid #1e40af;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>Next step:</strong> Call the patient back to confirm the appointment.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      const messageText = formatResendError(error);
      const networkBlocked =
        messageText.toLowerCase().includes("could not be resolved") ||
        messageText.toLowerCase().includes("unable to fetch") ||
        messageText.toLowerCase().includes("fetch failed");

      if (process.env.NODE_ENV === "development" && networkBlocked) {
        console.warn(
          "[dev] Cannot reach api.resend.com (firewall/VPN/SSL inspection). Appointment logged below — no email sent."
        );
        console.warn("[dev] Appointment:", {
          name: String(name),
          phone: String(phone),
          email: email ? String(email) : "",
          message: message ? String(message) : "",
        });
        return NextResponse.json({ success: true, id: "dev-network-fallback", devMock: true });
      }

      console.error("Resend error:", error);
      return NextResponse.json({ error: messageText }, { status: 502 });
    }

    return NextResponse.json({ success: true, id: data?.id ?? null });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Could not process the request." }, { status: 500 });
  }
}
