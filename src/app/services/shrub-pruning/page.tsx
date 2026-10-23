import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Shrub Pruning & Hedging in Bend, OR | Clips Lawn Care",
  description: "Scheduled shrub and hedge trimming from Clips Lawn Care, available as an add-on to Basic Maintenance in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function ShrubPruningPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Landscape Care"
      title="Shrub Pruning & Hedging"
      intro="Keep shrubs and hedges neat with scheduled trimming and pruning."
      sections={[
        {
          heading: "How It Works",
          body: [
            "This service is not unlimited. Your quote will specify the included plants, service frequency, and scope of work.",
          ],
        },
      ]}
      pricingNote="Custom quote based on the number, size, condition, and accessibility of plants, as well as the required frequency."
      relatedServices={[
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Landscape Projects", href: "/services/landscape" },
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
      ]}
    />
  );
}
