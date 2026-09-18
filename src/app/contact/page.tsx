import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Clips Lawn Care - Bend, OR",
  description: "Request a free in-person or virtual lawn care and landscaping quote from Clips Lawn Care, serving Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function ContactPage() {
  return <ContactForm />;
}
