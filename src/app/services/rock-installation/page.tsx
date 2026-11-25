import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Rock Installation in Central Oregon | Clips Lawn Care",
  description: "Decorative rock bed and border installation from Clips Lawn Care, built to hold up to Central Oregon's wind and weather, in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/rock-installation" },
};

export default function RockInstallationPage() {
  return (
    <ServiceDetailLayout
      path="/services/rock-installation"
      eyebrow="Landscape Projects"
      title="Rock Installation"
      intro="Decorative rock beds and borders that hold up to Central Oregon's wind and weather, installed throughout Bend, Redmond, Sunriver, and the surrounding area."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Decorative river rock.",
            "Lava rock and specialty stones.",
            "Proper base and weed barrier preparation.",
          ],
        },
        {
          heading: "Why Rock Landscaping Works in Central Oregon",
          body: [
            "Rock beds are a low-maintenance, drought-tolerant option well suited to our high desert climate - they hold up to wind and temperature swings better than some organic mulches, while still giving beds a clean, defined look. Proper base and weed barrier preparation is key to keeping rock beds looking good long-term.",
          ],
        },
      ]}
      pricingNote="Custom quote based on bed size, rock type, and site preparation needs."
      relatedServices={[
        { title: "Mulch Installation", href: "/services/mulch-installation" },
        { title: "Landscape Installation", href: "/services/landscape-installation" },
        { title: "Landscape Projects", href: "/services/landscape" },
      ]}
      faqs={[
        {
          question: "What types of rock do you install?",
          answer: "We offer decorative river rock, lava rock, and other specialty stones depending on your landscape design.",
        },
        {
          question: "Does rock installation include weed barrier?",
          answer: "Yes - proper base and weed barrier preparation is part of every rock installation to help keep beds looking clean long-term.",
        },
        {
          question: "Is rock landscaping low-maintenance?",
          answer: "Rock beds are generally lower-maintenance than mulch or planted beds, making them a popular choice for drought-tolerant, low-upkeep landscaping in Central Oregon.",
        },
        {
          question: "Can rock and mulch be combined in the same landscape?",
          answer: "Yes - many properties use a mix of rock and mulch beds depending on the area and plantings. We'll help plan what fits your property.",
        },
        {
          question: "What areas do you install rock landscaping in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
