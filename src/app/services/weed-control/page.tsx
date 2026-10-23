import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Weed Control in Bend, OR | Clips Lawn Care",
  description: "Pre-emergent and seasonal weed control from Clips Lawn Care, available as an add-on to Basic Maintenance in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
};

export default function WeedControlPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Lawn Health & Weed Control"
      title="Weed Control"
      intro="Pre-emergent and seasonal weed control to keep weeds out of your lawn."
      sections={[
        {
          heading: "Treatment Schedule",
          body: [
            "Spring pre-emergent application.",
            "Two summer herbicide applications.",
            "Two fall herbicide applications.",
          ],
        },
      ]}
      pricingNote="Custom quote based on lawn size and treatment schedule."
      relatedServices={[
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Shrub Pruning & Hedging", href: "/services/shrub-pruning" },
      ]}
    />
  );
}
