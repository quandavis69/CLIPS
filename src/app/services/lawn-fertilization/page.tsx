import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Fertilization in Bend, OR | Clips Lawn Care",
  description: "Scheduled spring, midseason, and fall lawn fertilization from Clips Lawn Care, available as an add-on to Basic Maintenance in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/lawn-fertilization" },
};

export default function LawnFertilizationPage() {
  return (
    <ServiceDetailLayout
      path="/services/lawn-fertilization"
      eyebrow="Lawn Health & Weed Control"
      title="Lawn Fertilization"
      intro="Help support healthy lawn growth with scheduled fertilizer applications throughout the growing season."
      sections={[
        {
          heading: "Recommended Schedule",
          body: ["Spring application.", "Midseason application.", "Fall application."],
        },
        {
          heading: "How It Works",
          body: [
            "Lawn Fertilization is offered as an add-on to Basic Maintenance. Build your package on our sign-up form and we'll confirm a schedule and price for your property.",
          ],
        },
      ]}
      pricingNote="Custom quote based on lawn size, product requirements, and application schedule."
      relatedServices={[
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Aeration", href: "/services/aeration" },
      ]}
    />
  );
}
