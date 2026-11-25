import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Landscape Installation in Central Oregon | Clips Lawn Care",
  description: "Garden bed design and planting from Clips Lawn Care, selected and installed for Central Oregon's high desert climate, in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/landscape-installation" },
};

export default function LandscapeInstallationPage() {
  return (
    <ServiceDetailLayout
      path="/services/landscape-installation"
      eyebrow="Landscape Projects"
      title="Landscape Installation"
      intro="New garden beds and planting designed and installed to fit your property, throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "Garden Beds",
          body: [
            "Design consultation. Bed excavation and edging. Soil preparation. Plant placement.",
          ],
        },
        {
          heading: "Planting",
          body: [
            "Native and drought-tolerant plants. Ornamental trees and shrubs. Soil preparation and amendments. Seasonal planting recommendations.",
          ],
        },
        {
          heading: "Built for Central Oregon's Climate",
          body: [
            "Trees, shrubs, and perennials are selected and installed with Central Oregon's high desert climate in mind - cold winters, dry summers, and wide temperature swings all factor into what will actually thrive on your property.",
          ],
        },
      ]}
      pricingNote="Custom quote based on project scope, plant selections, bed size, and site preparation needs."
      relatedServices={[
        { title: "Mulch Installation", href: "/services/mulch-installation" },
        { title: "Rock Installation", href: "/services/rock-installation" },
        { title: "Sod Installation", href: "/services/sod-installation" },
        { title: "Landscape Projects", href: "/services/landscape" },
      ]}
      faqs={[
        {
          question: "Do you design the landscape, or just install it?",
          answer: "Both - a design consultation is included so beds and plantings are planned around your property before installation begins.",
        },
        {
          question: "What plants do well in Central Oregon?",
          answer: "Native and drought-tolerant plants tend to perform best given our cold winters and dry summers - we'll recommend species suited to your property's sun exposure and soil.",
        },
        {
          question: "Do you prepare the soil before planting?",
          answer: "Yes - soil preparation and amendments are part of every garden bed and planting project to give new plants the best start.",
        },
        {
          question: "Can you install new garden beds around an existing lawn?",
          answer: "Yes - bed excavation and edging are scoped around your existing landscape as part of the project.",
        },
        {
          question: "What areas do you provide landscape installation in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
