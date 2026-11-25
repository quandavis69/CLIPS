import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Aeration in Central Oregon | Clips Lawn Care",
  description: "One-time core aeration from Clips Lawn Care, starting at $50, to relieve soil compaction and improve lawn health in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/aeration" },
};

export default function AerationPage() {
  return (
    <ServiceDetailLayout
      path="/services/aeration"
      eyebrow="One-Time Service"
      title="Lawn Aeration"
      intro="Help relieve soil compaction and improve the movement of air, water, and nutrients into the soil - a one-time service, billed separately from your weekly maintenance package."
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
        {
          heading: "One-Time Charge, Not a Weekly Add-On",
          body: [
            "Unlike fertilization or weed control, aeration is billed as a single charge on the day the service is performed - it is not divided across your maintenance season or added to your weekly price.",
          ],
        },
        {
          heading: "Why Aeration Matters in Central Oregon",
          body: [
            "Central Oregon's compacted, often clay-heavy or sandy soils can restrict water and nutrient movement to grass roots, especially on lawns that see regular foot traffic. Aeration relieves that compaction so water, air, and nutrients reach the root zone more effectively.",
          ],
        },
      ]}
      pricingNote="Starting at $50 per service, a one-time charge subject to confirmation based on lawn size and equipment time."
      relatedServices={[
        { title: "Lawn Dethatching", href: "/services/dethatching" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      ]}
      faqs={[
        {
          question: "What is lawn aeration?",
          answer: "Aeration involves pulling small plugs of soil from your lawn to relieve compaction and improve the movement of air, water, and nutrients to the root zone.",
        },
        {
          question: "When is the best time to aerate a lawn in Central Oregon?",
          answer: "Spring and fall are both effective windows for aeration here - we offer spring, fall, or both as scheduling options.",
        },
        {
          question: "How often should my lawn be aerated?",
          answer: "Once a year is typical for most residential lawns, though properties with heavy foot traffic or compacted soil may benefit from aerating both spring and fall.",
        },
        {
          question: "Does aeration help with compacted soil?",
          answer: "Yes - relieving soil compaction is the primary purpose of aeration, which helps water and nutrients reach grass roots more effectively.",
        },
        {
          question: "How much does lawn aeration cost?",
          answer: "Aeration starts at $50 as a one-time charge, confirmed based on your lawn's size and equipment time - it is billed separately from your weekly maintenance package.",
        },
        {
          question: "Should I fertilize after aeration?",
          answer: "Aeration can improve how effectively fertilizer reaches the root zone, so pairing the two is a common approach - ask us about adding fertilization to your package.",
        },
      ]}
    />
  );
}
