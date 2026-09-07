interface QuoteRequestPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  message: string;
}

const DEFAULT_TO_NUMBER = "+15413058500";

// Texts a new quote request straight to the business phone via the Twilio
// REST API. Requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and
// TWILIO_FROM_NUMBER to be set - see .env.example. Returns false (rather
// than throwing) whenever SMS isn't configured or the send fails, so the
// caller can fall back to another delivery method.
export async function sendQuoteRequestSms(payload: QuoteRequestPayload): Promise<boolean> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const toNumber = process.env.TWILIO_TO_NUMBER || DEFAULT_TO_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    return false;
  }

  const lines: string[] = [`New quote request from ${payload.name}`];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  lines.push(`Email: ${payload.email}`);
  if (payload.service) lines.push(`Service: ${payload.service}`);
  if (payload.address) lines.push(`Address: ${payload.address}`);
  lines.push("", payload.message);
  const body = lines.join("\n").slice(0, 1500);

  const credentials = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: toNumber, From: fromNumber, Body: body }),
    });

    if (!res.ok) {
      console.error("Twilio SMS send failed:", res.status, await res.text());
    }

    return res.ok;
  } catch (error) {
    console.error("Twilio SMS send error:", error);
    return false;
  }
}
