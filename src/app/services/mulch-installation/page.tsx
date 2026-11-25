import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Mulch Installation in Central Oregon | Clips Lawn Care",
  description: "Fresh mulch bed installation from Clips Lawn Care that locks in moisture, suppresses weeds, and finishes off your landscape design in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/mulch-installation" },
};

export default function MulchInstallationPage() {
  return (
    <ServiceDetailLayout
      path="/services/mulch-installation"
      eyebrow="Landscape Projects"
      title="Mulch Installation"
      intro="Fresh mulch beds that lock in moisture, suppress weeds, and finish off your landscape design throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Various mulch types available.",
            "Weed barrier installation.",
            "Edge trimming and bed preparation.",
          ],
        },
        {
          heading: "Why Mulch Matters in Central Oregon",
          body: [
            "Mulch helps landscape beds retain moisture through our dry summers, moderates soil temperature through big seasonal swings, and suppresses weeds that would otherwise compete with your plants - all while giving beds a clean, finished look.",
          ],
        },
      ]}
      pricingNote="Custom quote based on bed size, mulch type, and site preparation needs."
      relatedServices={[
        { title: "Rock Installation", href: "/services/rock-installation" },
        { title: "Landscape Installation", href: "/services/landscape-installation" },
        { title: "Landscape Projects", href: "/services/landscape" },
      ]}
      faqs={[
        {
          question: "What types of mulch do you install?",
          answer: "Several mulch types are available depending on your landscape design and preferences - we'll go over options as part of your quote.",
        },
        {
          question: "Does mulch installation include weed barrier?",
          answer: "Yes - weed barrier installation is included along with edge trimming and bed preparation.",
        },
        {
          question: "How often should mulch be refreshed?",
          answer: "This depends on the mulch type and sun exposure, but most beds benefit from a refresh every one to two years to maintain appearance and performance.",
        },
        {
          question: "Can you install mulch in new garden beds?",
          answer: "Yes - mulch installation pairs well with new garden bed or landscape installation projects. See our Landscape Installation page for more.",
        },
        {
          question: "What areas do you install mulch in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
