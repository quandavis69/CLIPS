import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Spring & Fall Cleanups in Bend, OR | Clips Lawn Care",
  description: "Spring and fall seasonal cleanups from Clips Lawn Care for properties in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
};

export default function SeasonalCleanupsPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Seasonal Cleanups"
      title="Spring & Fall Cleanups"
      intro="Reset your property for the season ahead with a thorough cleanup."
      sections={[
        {
          heading: "Spring Cleanup",
          body: [
            "Prepare your property for the growing season by removing accumulated debris, clearing eligible landscape beds, and addressing seasonal maintenance needs.",
          ],
        },
        {
          heading: "Fall Cleanup",
          body: ["Remove seasonal leaves and debris and prepare your property for winter."],
        },
        {
          heading: "How It Works",
          body: [
            "We'll provide a quote or agreed spending limit before starting. Additional work beyond the approved scope requires your approval.",
          ],
        },
      ]}
      pricingNote="Starting at $399 per cleanup. Final pricing is based on the labor required, debris volume, disposal costs, and the approved scope of work."
      relatedServices={[
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Landscape Projects", href: "/services/landscape" },
      ]}
    />
  );
}
