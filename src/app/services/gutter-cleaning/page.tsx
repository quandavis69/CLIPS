import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Gutter Cleaning in Central Oregon | Clips Lawn Care",
  description: "Gutter installation and roof & gutter cleaning from Clips Lawn Care to prevent water damage and protect your home in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/gutter-cleaning" },
};

export default function GutterCleaningPage() {
  return (
    <ServiceDetailLayout
      path="/services/gutter-cleaning"
      eyebrow="Landscape Projects"
      title="Gutter Installation & Cleaning"
      intro="New gutter installation and roof & gutter cleaning to protect your home's roofline, throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "Gutter Installation",
          body: [
            "New gutter installation built to protect your home's roofline all season long. Supports roof drainage, prevents water damage, and gives homes a clean, built-to-last finish - available for both residential and commercial properties.",
          ],
        },
        {
          heading: "Roof & Gutter Cleaning",
          body: [
            "Roof and gutter cleaning to prevent water damage and keep your home protected, extend gutter lifespan, and keep things clean and hassle-free - especially important on properties with heavy pine needle drop.",
          ],
        },
      ]}
      pricingNote="Custom quote based on gutter length, roof access, and whether the service is new installation or cleaning."
      relatedServices={[
        { title: "Landscape Cleanup & Restoration", href: "/services/landscape-cleanup" },
        { title: "Total Property Clean", href: "/total-property-clean" },
        { title: "Landscape Projects", href: "/services/landscape" },
      ]}
      faqs={[
        {
          question: "How often should gutters be cleaned in Central Oregon?",
          answer: "Properties with nearby pine trees often need more frequent gutter cleaning due to pine needle buildup - we can recommend a schedule based on your property during your quote.",
        },
        {
          question: "Do you install new gutters or only clean existing ones?",
          answer: "Both - we offer new gutter installation as well as roof and gutter cleaning for existing systems.",
        },
        {
          question: "Why is gutter cleaning important?",
          answer: "Clogged gutters can cause water to back up and damage your roofline, siding, or foundation - regular cleaning helps prevent that and extends the life of your gutters.",
        },
        {
          question: "Do you clean roofs as well as gutters?",
          answer: "Yes - roof cleaning is included alongside gutter cleaning to help keep debris from building up in both places.",
        },
        {
          question: "What areas do you provide gutter services in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
