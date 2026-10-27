import { NextResponse } from "next/server";
import { sendCareerApplicationEmail } from "@/lib/email";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_RESUME_EXTENSIONS = [".pdf", ".doc", ".docx"];

const VALID_POSITIONS = [
  "Lawn Care Field Technician - Entry Level ($20/hour starting)",
  "Experienced Landscaping Field Technician ($23/hour starting)",
  "Licensed Landscaping Professional ($30/hour starting)",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /\d{7,}/;

function field(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  const data = await request.formData().catch(() => null);

  if (!data) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field - real applicants never fill this in since it's hidden offscreen.
  if (field(data, "website").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = field(data, "name").trim();
  const email = field(data, "email").trim();
  const phone = field(data, "phone").trim();
  const city = field(data, "city").trim();
  const position = field(data, "position").trim();
  const whyWorkHere = field(data, "whyWorkHere").trim();
  const relevantSkills = field(data, "relevantSkills").trim();
  const acknowledged = field(data, "acknowledged") === "true";

  if (!name || !email || !phone || !city || !position || !whyWorkHere || !relevantSkills) {
    return NextResponse.json({ error: "Please fill out all required fields." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (!VALID_POSITIONS.includes(position)) {
    return NextResponse.json({ error: "Please select a valid position." }, { status: 400 });
  }
  if (!acknowledged) {
    return NextResponse.json({ error: "Please confirm the acknowledgment checkbox before submitting." }, { status: 400 });
  }

  const resume = data.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "A resume is required to submit an application." }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume file must be under 5MB." }, { status: 413 });
  }
  const lowerName = resume.name.toLowerCase();
  const hasValidExtension = ALLOWED_RESUME_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
  const hasValidType = ALLOWED_RESUME_TYPES.includes(resume.type);
  if (!hasValidExtension && !hasValidType) {
    return NextResponse.json({ error: "Resume must be a PDF or Word document (.pdf, .doc, or .docx)." }, { status: 400 });
  }

  const payload = {
    name,
    email,
    phone,
    city,
    position,
    experience: field(data, "experience"),
    yearsExperience: field(data, "yearsExperience"),
    equipment: field(data, "equipment"),
    licenses: field(data, "licenses"),
    skills: field(data, "skills"),
    startDate: field(data, "startDate"),
    availability: field(data, "availability"),
    whyWorkHere,
    relevantSkills,
    additionalInfo: field(data, "additionalInfo"),
  };

  const resumeAttachment = {
    filename: resume.name || "resume",
    content: Buffer.from(await resume.arrayBuffer()),
    contentType: resume.type || undefined,
  };

  const sent = await sendCareerApplicationEmail(payload, resumeAttachment);

  if (!sent) {
    return NextResponse.json(
      {
        error:
          "We couldn't deliver your application right now. Please email your resume directly to clipslawncarebend@gmail.com so it isn't lost.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({ ok: true });
}
