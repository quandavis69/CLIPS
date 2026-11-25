import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Dethatching in Central Oregon | Clips Lawn Care",
  description: "One-time dethatching from Clips Lawn Care, starting at $99, removes built-up dead grass and organic material to improve lawn health in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/dethatching" },
};

export default function DethatchingPage() {
  return (
    <ServiceDetailLayout
      path="/services/dethatching"
      eyebrow="One-Time Service"
      title="Lawn Dethatching"
      intro="Remove accumulated dead grass and organic material when needed to improve lawn condition - a one-time service, billed separately from your weekly maintenance package."
      sections={[
        {
          heading: "How It Works",
          body: [
            "Dethatching requirements vary considerably by property. We'll confirm the scope and price before scheduling.",
          ],
        },
        {
          heading: "One-Time Charge, Not a Weekly Add-On",
          body: [
            "Like aeration, dethatching is billed as a single charge on the day the service is performed - it is not divided across your maintenance season or added to your weekly price.",
          ],
        },
        {
          heading: "Why Dethatching Matters in Central Oregon",
          body: [
            "A thick layer of thatch can build up on lawns over time, blocking water and nutrients from reaching the soil. Removing it helps restore a healthier lawn, especially on older or heavily established turf.",
          ],
        },
      ]}
      pricingNote="Starting at $99 per service, a one-time charge subject to confirmation based on lawn size, labor, and debris disposal."
      relatedServices={[
        { title: "Lawn Aeration", href: "/services/aeration" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      ]}
      faqs={[
        {
          question: "What is lawn dethatching?",
          answer: "Dethatching removes the built-up layer of dead grass and organic material (thatch) that can accumulate at the soil surface and block water and nutrients from reaching the roots.",
        },
        {
          question: "How do I know if my lawn needs dethatching?",
          answer: "Thinning grass, a spongy feel underfoot, or water pooling on the surface instead of soaking in can indicate a thatch buildup - we'll assess your lawn and confirm before scheduling.",
        },
        {
          question: "Is dethatching a one-time or recurring service?",
          answer: "Dethatching is a one-time charge, billed separately from your weekly maintenance package - it's performed as needed, not on a recurring weekly basis.",
        },
        {
          question: "How much does lawn dethatching cost?",
          answer: "Dethatching starts at $99 as a one-time charge, confirmed based on lawn size, labor, and debris disposal requirements.",
        },
        {
          question: "What's the difference between aeration and dethatching?",
          answer: "Aeration relieves soil compaction by removing small soil plugs, while dethatching removes a built-up layer of dead organic material at the surface - some lawns benefit from one, the other, or both.",
        },
        {
          question: "Should I schedule aeration and dethatching together?",
          answer: "It depends on your lawn's condition - we'll recommend whether one or both services make sense for your property during your quote.",
        },
      ]}
    />
  );
}
