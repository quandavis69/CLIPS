import nodemailer from "nodemailer";

interface QuoteRequestPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertyType: string;
  contactMethod: string;
  estimateType: string;
  address: string;
  city: string;
  message: string;
}

interface EmailAttachment {
  filename: string;
  content: Buffer;
  contentType?: string;
}

const DEFAULT_TO_EMAIL = "clipslawncarebend@gmail.com";

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
export async function sendQuoteRequestEmail(payload: QuoteRequestPayload, attachments: EmailAttachment[] = []): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    return false;
  }

  const to = DEFAULT_TO_EMAIL;

  const lines: string[] = [`New quote request from ${payload.name}`];
  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  lines.push(`Email: ${payload.email}`);
  if (payload.service) lines.push(`Service: ${payload.service}`);
  if (payload.propertyType) lines.push(`Property Type: ${payload.propertyType}`);
  if (payload.contactMethod) lines.push(`Preferred Contact Method: ${payload.contactMethod}`);
  lines.push(`Estimate Type: ${payload.estimateType}`);
  if (payload.address) lines.push(`Address: ${payload.address}`);
  if (payload.city) lines.push(`City: ${payload.city}`);
  lines.push("", payload.message);
  if (attachments.length > 0) {
    lines.push("", `(${attachments.length} photo${attachments.length > 1 ? "s" : ""} attached)`);
  }

  try {
    await transporter.sendMail({
      from: `"Clips Lawncare Website" <${process.env.GMAIL_USER}>`,
      to,
      replyTo: payload.email,
      subject: `${payload.estimateType} Request - ${payload.service || "General Inquiry"}`,
      text: lines.join("\n"),
      attachments,
    });
    return true;
  } catch (error) {
    console.error("Quote request email send error:", error);
    return false;
  }
}

interface CareerApplicationPayload {
  name: string;
  email: string;
  phone: string;
  city: string;
  position: string;
  experience: string;
  yearsExperience: string;
  equipment: string;
  licenses: string;
  skills: string;
  startDate: string;
  availability: string;
  whyWorkHere: string;
  relevantSkills: string;
  additionalInfo: string;
}

// Emails a new job application (with resume attached) directly from the
// server via the same Gmail SMTP setup as quote requests. Returns false
// (rather than throwing) whenever email isn't configured or the send fails.
export async function sendCareerApplicationEmail(payload: CareerApplicationPayload, resume: EmailAttachment): Promise<boolean> {
  const transporter = getTransporter();
  if (!transporter) {
    return false;
  }

  const lines: string[] = [
    `New job application from ${payload.name}`,
    `Position: ${payload.position}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `City: ${payload.city}`,
  ];
  if (payload.yearsExperience) lines.push(`Years of experience: ${payload.yearsExperience}`);
  if (payload.equipment) lines.push(`Equipment experience: ${payload.equipment}`);
  if (payload.licenses) lines.push(`Licenses/certifications: ${payload.licenses}`);
  if (payload.skills) lines.push(`Relevant skills: ${payload.skills}`);
  if (payload.startDate) lines.push(`Earliest start date: ${payload.startDate}`);
  if (payload.availability) lines.push(`Availability: ${payload.availability}`);
  if (payload.experience) lines.push("", "Relevant work experience:", payload.experience);
  lines.push("", "Why they want to work here:", payload.whyWorkHere);
  lines.push("", "Relevant skills/experience for the role:", payload.relevantSkills);
  if (payload.additionalInfo) lines.push("", "Additional information:", payload.additionalInfo);
  lines.push("", "(Resume attached)");

  try {
    await transporter.sendMail({
      from: `"Clips Lawn Care Careers" <${process.env.GMAIL_USER}>`,
      to: DEFAULT_TO_EMAIL,
      replyTo: payload.email,
      subject: `Job Application - ${payload.position} - ${payload.name}`,
      text: lines.join("\n"),
      attachments: [resume],
    });
    return true;
  } catch (error) {
    console.error("Career application email send error:", error);
    return false;
  }
}
