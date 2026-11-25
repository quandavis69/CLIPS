import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Weed Control in Central Oregon | Clips Lawn Care",
  description: "Pre-emergent and seasonal weed control from Clips Lawn Care, available as a weekly seasonal add-on in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/weed-control" },
};

export default function WeedControlPage() {
  return (
    <ServiceDetailLayout
      path="/services/weed-control"
      eyebrow="Lawn Health & Weed Control"
      title="Weed Control"
      intro="Pre-emergent and seasonal weed control to keep weeds out of your lawn throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "Treatment Schedule",
          body: [
            "Spring pre-emergent application.",
            "Two summer herbicide applications.",
            "Two fall herbicide applications.",
          ],
        },
        {
          heading: "Common Weeds in Central Oregon Lawns",
          body: [
            "Central Oregon's dry summers and sandy soils create conditions where drought-tolerant weeds can out-compete thirstier turf grass if left untreated. A scheduled pre-emergent and seasonal herbicide program helps keep weed pressure down throughout the growing season.",
          ],
        },
      ]}
      pricingNote="Billed as a weekly seasonal add-on, estimated at $3-$40 per week depending on lawn size and the treatment schedule. The exact price is confirmed in your quote."
      relatedServices={[
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Shrub Pruning & Hedging", href: "/services/shrub-pruning" },
      ]}
      faqs={[
        {
          question: "What is the best way to control weeds in Central Oregon?",
          answer: "A scheduled program combining a spring pre-emergent application with summer and fall herbicide treatments is the most effective approach we offer for ongoing weed pressure.",
        },
        {
          question: "How often are weed control treatments applied?",
          answer: "Our standard schedule includes one spring pre-emergent application, two summer herbicide applications, and two fall herbicide applications each season.",
        },
        {
          question: "What types of weeds are common in Central Oregon?",
          answer: "Drought-tolerant, fast-spreading weeds tend to thrive in our dry summers and sandy soils, which is why a proactive pre-emergent and seasonal program is effective here.",
        },
        {
          question: "Does weed control come with regular lawn maintenance?",
          answer: "Weed control is an optional weekly seasonal add-on to your Premium Build-Your-Own Maintenance Package - it's not automatically included in the base $60/week service.",
        },
        {
          question: "How much does professional weed control cost?",
          answer: "As a weekly seasonal add-on, weed control is estimated at $3-$40 per week depending on lawn size and treatment schedule - the exact amount is confirmed in your quote.",
        },
        {
          question: "When should weed control treatments begin?",
          answer: "The pre-emergent application is timed for spring, before weed seeds germinate, with follow-up treatments through summer and fall.",
        },
      ]}
    />
  );
}
