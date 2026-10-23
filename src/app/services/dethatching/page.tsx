import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Dethatching in Bend, OR | Clips Lawn Care",
  description: "Dethatching from Clips Lawn Care removes built-up dead grass and organic material to improve lawn health in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function DethatchingPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Seasonal Lawn Treatments"
      title="Dethatching"
      intro="Remove accumulated dead grass and organic material when needed to improve lawn condition."
      sections={[
        {
          heading: "How It Works",
          body: [
            "Dethatching requirements vary considerably by property. We'll confirm the scope and price before scheduling.",
          ],
        },
      ]}
      pricingNote="Preliminary starting price: $249 per service, subject to confirmation based on lawn size, labor, and debris disposal."
      relatedServices={[
        { title: "Aeration", href: "/services/aeration" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
      ]}
    />
  );
}
