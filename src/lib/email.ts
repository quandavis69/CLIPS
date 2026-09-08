import nodemailer from "nodemailer";

interface QuoteRequestPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

const DEFAULT_TO_EMAIL = "michaelclipslawncare@gmail.com";

let cachedTransporter: ReturnType<typeof nodemailer.createTransport> | null = null;

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }

  return cachedTransporter;
}

// Emails a new quote request directly from the server via Gmail SMTP, so
// delivery doesn't depend on the visitor having an email client configured.
// Requires GMAIL_USER and GMAIL_APP_PASSWORD - see .env.example. Returns
// false (rather than throwing) whenever email isn't configured or the send
// fails, so the caller can fall back to another delivery method.
export async function sendQuoteRequestEmail(payload: QuoteRequestPayload): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    return false;
  }

  const to = process.env.QUOTE_REQUEST_TO_EMAIL || DEFAULT_TO_EMAIL;

  const lines: string[] = [`New quote request from ${payload.name}`];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  lines.push(`Email: ${payload.email}`);
  if (payload.service) lines.push(`Service: ${payload.service}`);
  if (payload.address) lines.push(`Address: ${payload.address}`);
  lines.push("", payload.message);

  try {
    await transporter.sendMail({
      from: `"Clips Lawncare Website" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: payload.email,
      subject: `Quote Request - ${payload.service || "General Inquiry"}`,
      text: lines.join("\n"),
    });
    return true;
  } catch (error) {
    console.error("Quote request email send error:", error);
    return false;
  }
}
