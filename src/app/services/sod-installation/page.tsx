import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Sod Installation in Central Oregon | Clips Lawn Care",
  description: "Complete sod installation and removal from Clips Lawn Care, from removing old grass to installing a fresh, lush lawn, in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/sod-installation" },
};

export default function SodInstallationPage() {
  return (
    <ServiceDetailLayout
      path="/services/sod-installation"
      eyebrow="Landscape Projects"
      title="Sod Installation & Removal"
      intro="Complete sod replacement services, from removing old grass to installing a fresh, lush lawn, throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Old sod removal and disposal.",
            "Ground leveling and preparation.",
            "Premium quality sod installation.",
            "Soil amendments as needed.",
          ],
        },
        {
          heading: "Why Central Oregon Properties Choose Sod",
          body: [
            "New sod gives you an instant, established lawn rather than waiting for seed to take hold - useful for replacing a patchy, dead, or weed-overrun lawn, or for new construction properties with bare dirt. Proper ground preparation and soil amendments matter especially in Central Oregon's variable native soils.",
          ],
        },
      ]}
      pricingNote="Custom quote based on lawn size, site preparation needs, sod type, and access to the property."
      relatedServices={[
        { title: "Landscape Installation", href: "/services/landscape-installation" },
        { title: "Landscape Projects", href: "/services/landscape" },
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      ]}
      faqs={[
        {
          question: "How long does sod installation take?",
          answer: "Timing depends on the size of the area and site preparation required - we'll provide a project timeline as part of your quote.",
        },
        {
          question: "Do you remove the old lawn first?",
          answer: "Yes. Old sod removal and disposal, ground leveling, and preparation are all included before new sod goes down.",
        },
        {
          question: "How soon can I walk on new sod?",
          answer: "New sod needs time to root before regular foot traffic - we'll give you specific watering and care guidance for your property after installation.",
        },
        {
          question: "Do you offer sod removal without new installation?",
          answer: "Yes - removal and ground prep can be scoped on their own if you're planning a different type of landscaping afterward.",
        },
        {
          question: "What areas do you provide sod installation in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
