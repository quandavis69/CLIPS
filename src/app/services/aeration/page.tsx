import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Aeration in Bend, OR | Clips Lawn Care",
  description: "Spring and fall core aeration from Clips Lawn Care to relieve soil compaction and improve lawn health in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/aeration" },
};

export default function AerationPage() {
  return (
    <ServiceDetailLayout
      path="/services/aeration"
      eyebrow="Seasonal Lawn Treatments"
      title="Core Aeration"
      intro="Help relieve soil compaction and improve the movement of air, water, and nutrients into the soil."
      sections={[
        {
          heading: "Scheduling Options",
          body: ["Spring aeration.", "Fall aeration.", "Both spring and fall."],
        },
        {
          heading: "What to Expect",
          body: [
            "Soil plugs are generally left on the lawn to break down naturally. Plug removal or additional cleanup is quoted separately.",
          ],
        },
      ]}
      pricingNote="Preliminary starting price: $199 per service, subject to confirmation based on lawn size and equipment time."
      relatedServices={[
        { title: "Dethatching", href: "/services/dethatching" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Basic Maintenance (Mowing, Edging & Blowing)", href: "/services/lawn-mowing" },
      ]}
    />
  );
}
