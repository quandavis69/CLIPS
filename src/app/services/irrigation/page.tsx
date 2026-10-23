import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Sprinkler System Startup & Monitoring in Bend, OR | Clips Lawn Care",
  description: "Sprinkler system startup and seasonal irrigation monitoring from Clips Lawn Care for properties in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function IrrigationPage() {
  return (
    <ServiceDetailLayout
      eyebrow="Irrigation Services"
      title="Irrigation Services"
      intro="Get your irrigation system ready for the growing season and keep it running smoothly throughout."
      sections={[
        {
          heading: "Sprinkler System Startup",
          body: [
            "Get your irrigation system ready for the growing season. Where accessible and applicable, startup includes:",
            "Activating the main isolation valve and backflow device. Operating and checking irrigation zones. Inspecting accessible valves and wiring. Making routine sprinkler-head adjustments. Checking for visible leaks. Setting the irrigation controller when accessible.",
            "Parts, repairs, extensive troubleshooting, and certified backflow testing are excluded unless separately quoted.",
          ],
        },
        {
          heading: "Seasonal Irrigation Monitoring",
          body: [
            "Routine inspections during the growing season can help identify visible leaks, poorly adjusted heads, and timer issues.",
            "Repairs, replacement parts, and specialized troubleshooting are quoted separately. Backflow testing is not included.",
          ],
        },
      ]}
      pricingNote="Sprinkler System Startup starts at $70 for up to seven zones, plus $5 per additional zone. Seasonal Irrigation Monitoring is customized according to the inspection schedule and scope of service."
      relatedServices={[
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Seasonal Cleanups", href: "/services/seasonal-cleanups" },
      ]}
    />
  );
}
