import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Weed Control in Bend, OR | Clips Lawn Care",
  description: "Lawn and landscape bed weed control from Clips Lawn Care, available as an add-on to Basic Maintenance in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function WeedControlPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Lawn Health & Weed Control"
      title="Weed Control"
      intro="Keep weeds out of your lawn and landscape beds with scheduled treatments as needed."
      sections={[
        {
          heading: "Landscape Bed Weed Control",
          body: [
            "Target weeds in eligible landscape beds with scheduled treatments as needed.",
            "Extensive hand weeding, heavily overgrown areas, and major weed-removal projects are quoted separately. Applications are only offered when performed by appropriately licensed personnel.",
          ],
        },
      ]}
      pricingNote="Custom quote based on the size and condition of the beds, treatment requirements, and materials."
      relatedServices={[
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Shrub Pruning & Hedging", href: "/services/shrub-pruning" },
      ]}
    />
  );
}
