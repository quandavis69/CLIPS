import { NextResponse } from "next/server";
import { sendQuoteRequestSms } from "@/lib/twilio";
import { sendQuoteRequestEmail } from "@/lib/email";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (
    !data ||
    typeof data.name !== "string" ||
    !data.name.trim() ||
    typeof data.email !== "string" ||
    !data.email.trim() ||
    typeof data.message !== "string" ||
    !data.message.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    name: data.name,
    email: data.email,
    phone: typeof data.phone === "string" ? data.phone : "",
    service: typeof data.service === "string" ? data.service : "",
    address: typeof data.address === "string" ? data.address : "",
    message: data.message,
  };

  const [smsSent, emailSent] = await Promise.all([
    sendQuoteRequestSms(payload),
    sendQuoteRequestEmail(payload),
  ]);

  if (!smsSent && !emailSent) {
    return NextResponse.json({ error: "No delivery method is available." }, { status: 503 });
  }

  return NextResponse.json({ ok: true, sms: smsSent, email: emailSent });
}
