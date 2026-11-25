import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Fertilization in Central Oregon | Clips Lawn Care",
  description: "Scheduled spring, midseason, and fall lawn fertilization from Clips Lawn Care, available as a weekly seasonal add-on in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/lawn-fertilization" },
};

export default function LawnFertilizationPage() {
  return (
    <ServiceDetailLayout
      path="/services/lawn-fertilization"
      eyebrow="Lawn Health & Weed Control"
      title="Lawn Fertilization"
      intro="Help support healthy lawn growth with scheduled fertilizer applications throughout the growing season in Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "Recommended Schedule",
          body: ["Spring application.", "Midseason application.", "Fall application."],
        },
        {
          heading: "How It Works",
          body: [
            "Lawn Fertilization is offered as a weekly seasonal add-on to your Premium Build-Your-Own Maintenance Package. Build your package on our sign-up form and we'll confirm a schedule and price for your property.",
          ],
        },
        {
          heading: "Why Central Oregon Lawns Benefit from Fertilization",
          body: [
            "Central Oregon's volcanic, often sandy and nutrient-poor soils, combined with a short growing season and big temperature swings, make it harder for lawns to stay thick and green without help. A scheduled fertilization program replaces nutrients lost over the winter, supports root development before summer heat, and helps turf recover going into fall.",
          ],
        },
      ]}
      pricingNote="Billed as a weekly seasonal add-on, estimated at $2-$9 per week depending on lawn size and the treatment plan. The exact price is confirmed in your quote."
      relatedServices={[
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Lawn Aeration", href: "/services/aeration" },
      ]}
      faqs={[
        {
          question: "How often should I fertilize my lawn in Central Oregon?",
          answer: "We recommend a seasonal program with spring, midseason, and fall applications to match Central Oregon's growing season and soil conditions.",
        },
        {
          question: "When is the best time to fertilize lawns in Central Oregon?",
          answer: "Spring (as growth resumes), midseason (through summer heat), and fall (before dormancy) are the three key application windows we schedule for.",
        },
        {
          question: "How much does lawn fertilization cost?",
          answer: "As a weekly seasonal add-on to your maintenance package, fertilization is estimated at $2-$9 per week depending on lawn size and product requirements - the exact amount is confirmed in your quote.",
        },
        {
          question: "What type of fertilizer is best for Central Oregon lawns?",
          answer: "Product selection depends on your lawn's specific soil and grass type. We'll recommend an appropriate product and schedule as part of your quote.",
        },
        {
          question: "Can fertilization help improve thin or unhealthy grass?",
          answer: "A consistent fertilization schedule supports healthier, thicker turf over time, though results depend on your lawn's starting condition, watering, and other factors.",
        },
        {
          question: "Does Clips Lawn Care offer recurring fertilization?",
          answer: "Yes. Fertilization is available as a recurring weekly seasonal add-on when you build your maintenance package - it's not a one-time service.",
        },
      ]}
    />
  );
}
