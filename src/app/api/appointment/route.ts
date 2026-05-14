import { NextRequest, NextResponse } from "next/server";
import { handleAppointmentPost } from "@/lib/appointment-mail";

export const runtime = "nodejs";

/** Quick check: open /api/appointment in the browser — should show JSON ok:true */
export async function GET() {
  return NextResponse.json({
    ok: true,
    hint: "POST JSON { name, phone, email?, message? } to submit the appointment form.",
  });
}

export async function POST(req: NextRequest) {
  return handleAppointmentPost(req);
}
