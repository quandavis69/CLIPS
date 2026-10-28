import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Mowing, Edging & Blowing in Bend, OR | Clips Lawn Care",
  description: "Basic Maintenance from Clips Lawn Care: weekly or bi-weekly mowing, edging, and blowing for homes and businesses in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/lawn-mowing" },
};

export default function LawnMowingPage() {
  return (
    <ServiceDetailLayout
      path="/services/lawn-mowing"
      eyebrow="Basic Maintenance"
      title="Lawn Mowing, Edging & Blowing"
      intro="Our straightforward maintenance service keeps your lawn neat, clean, and consistently maintained throughout the season."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Lawn mowing.",
            "Edging as needed to maintain clean borders.",
            "Blowing grass clippings and debris from serviced driveways, walkways, and patios.",
          ],
        },
        {
          heading: "What's Not Included",
          body: [
            "Basic Maintenance does not include fertilization, weed treatments, shrub pruning, seasonal cleanups, irrigation work, or other specialty services. Those are available as add-ons when you build your package.",
          ],
        },
      ]}
      pricingNote="Starting at $60 per visit. Final pricing depends on lawn size, property condition, accessibility, and expected service time. The starting price applies to qualifying small, efficient properties."
      relatedServices={[
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Seasonal Cleanups", href: "/services/seasonal-cleanups" },
      ]}
    />
  );
}
