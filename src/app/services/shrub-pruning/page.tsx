import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Shrub Pruning & Hedging in Central Oregon | Clips Lawn Care",
  description: "Scheduled shrub and hedge trimming from Clips Lawn Care for larger or specialized pruning projects in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/shrub-pruning" },
};

export default function ShrubPruningPage() {
  return (
    <ServiceDetailLayout
      path="/services/shrub-pruning"
      eyebrow="Landscape Care"
      title="Shrub Pruning & Hedging"
      intro="Keep shrubs and hedges neat with scheduled trimming and pruning throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "How It Works",
          body: [
            "This service is not unlimited. Your quote will specify the included plants, service frequency, and scope of work.",
          ],
        },
        {
          heading: "Routine Trimming vs. Larger Pruning Projects",
          body: [
            "Routine landscape trimming is included in our Bi-Weekly Property Cleanup service. This page covers larger or more specialized shrub pruning and hedging projects - such as overgrown or mature shrubs - that fall outside routine trimming and are quoted separately.",
          ],
        },
      ]}
      pricingNote="Custom quote based on the number, size, condition, and accessibility of plants, as well as the required frequency."
      relatedServices={[
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Landscape Projects", href: "/services/landscape" },
        { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
      ]}
      faqs={[
        {
          question: "Is shrub trimming included in my maintenance package?",
          answer: "Routine trimming is included in our Bi-Weekly Property Cleanup service. This dedicated Shrub Pruning & Hedging service covers larger or more specialized pruning projects quoted separately.",
        },
        {
          question: "How often should shrubs and hedges be pruned?",
          answer: "Frequency depends on the plant type and your preferences - your quote will specify the recommended service frequency for your property.",
        },
        {
          question: "How much does shrub pruning cost?",
          answer: "Pricing is a custom quote based on the number, size, condition, and accessibility of plants, as well as the required frequency - there's no flat rate since every property differs.",
        },
        {
          question: "Do you handle overgrown or neglected shrubs?",
          answer: "Yes - this service is well suited to larger or more involved pruning projects beyond routine trimming. We'll assess the scope and quote accordingly.",
        },
        {
          question: "Is this a recurring or one-time service?",
          answer: "It can be either - your quote will specify whether the agreed scope is a one-time project or a recurring service frequency.",
        },
      ]}
    />
  );
}
