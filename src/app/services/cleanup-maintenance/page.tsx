import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Cleanup Maintenance in Bend, OR | Clips Lawn Care",
  description: "Recurring cleanup maintenance from Clips Lawn Care, keeping properties tidy year-round in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/cleanup-maintenance" },
};

export default function CleanupMaintenancePage() {
  return (
    <ServiceDetailLayout
      path="/services/cleanup-maintenance"
      eyebrow="Recurring Service"
      title="Cleanup Maintenance"
      intro="Ongoing property cleanups to keep your property tidy throughout the year, with extra visits during the heaviest leaf-drop months."
      sections={[
        {
          heading: "How It Works",
          body: [
            "Cleanup Maintenance runs once a month for most of the year, then transitions to twice a month from October through November to keep up with fall leaf drop.",
          ],
        },
      ]}
      pricingNote="Starting at $250 per visit, ranging up to $449 depending on property size and scope."
      relatedServices={[
        { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Landscape Projects", href: "/services/landscape" },
        { title: "Total Property Clean", href: "/total-property-clean" },
      ]}
    />
  );
}
