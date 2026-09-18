import { NextResponse } from "next/server";
import { sendQuoteRequestSms } from "@/lib/twilio";
import { sendQuoteRequestEmail } from "@/lib/email";

const MAX_TOTAL_BYTES = 4 * 1024 * 1024;

function field(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const data = await request.formData().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = field(data, "name").trim();
  const email = field(data, "email").trim();
  const message = field(data, "message").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone: field(data, "phone"),
    service: field(data, "service"),
    propertyType: field(data, "propertyType"),
    contactMethod: field(data, "contactMethod"),
    estimateType: field(data, "estimateType") === "virtual" ? "Virtual Estimate" : "In-Person Estimate",
    address: field(data, "address"),
    city: field(data, "city"),
    message,
  };

  const photoFiles = data.getAll("photos").filter((entry): entry is File => entry instanceof File && entry.size > 0);

  const totalBytes = photoFiles.reduce((sum, file) => sum + file.size, 0);
  if (totalBytes > MAX_TOTAL_BYTES) {
    return NextResponse.json({ error: "Attachments too large." }, { status: 413 });
  }

  const attachments = await Promise.all(
    photoFiles.map(async (file) => ({
      filename: file.name || "photo",
      content: Buffer.from(await file.arrayBuffer()),
      contentType: file.type || undefined,
    }))
  );

  const [smsSent, emailSent] = await Promise.all([
    sendQuoteRequestSms(payload, attachments.length > 0),
    sendQuoteRequestEmail(payload, attachments),
  ]);

  if (!smsSent && !emailSent) {
    return NextResponse.json({ error: "No delivery method is available." }, { status: 503 });
  }

  return NextResponse.json({ ok: true, sms: smsSent, email: emailSent });
}
