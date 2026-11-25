import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Lawn Mowing in Central Oregon | Clips Lawn Care",
  description: "Weekly lawn mowing, edging, and blowing from Clips Lawn Care, the included base of our Build-Your-Own Maintenance Package for homes and businesses in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/lawn-mowing" },
};

export default function LawnMowingPage() {
  return (
    <ServiceDetailLayout
      path="/services/lawn-mowing"
      eyebrow="Weekly Lawn Maintenance"
      title="Lawn Mowing, Edging & Blowing"
      intro="Our straightforward weekly maintenance service keeps your lawn neat, clean, and consistently maintained throughout the season across Central Oregon."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Lawn mowing.",
            "Edging as needed to maintain clean borders.",
            "Blowing grass clippings and debris from serviced driveways, walkways, and patios.",
          ],
        },
        {
          heading: "What's Not Included",
          body: [
            "This weekly service does not include fertilization, weed treatments, shrub pruning, cleanups, irrigation work, or other specialty services. Those are available as add-ons when you build your Premium Build-Your-Own Maintenance Package.",
          ],
        },
        {
          heading: "Why Central Oregon Homeowners Need Routine Mowing",
          body: [
            "Central Oregon's high desert climate means grass growth can swing quickly between a wet spring and a hot, dry summer. Consistent weekly mowing keeps turf at a healthy height, reduces stress during heat spikes, and keeps your property looking tidy whether you're in Bend, Redmond, Sunriver, or the surrounding area.",
          ],
        },
      ]}
      pricingNote="Starting at $60 per week as the base of your Premium Build-Your-Own Maintenance Package. Final pricing depends on lawn size, property condition, accessibility, and expected service time. The starting price applies to qualifying small, efficient properties."
      relatedServices={[
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Lawn Aeration", href: "/services/aeration" },
        { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
      ]}
      faqs={[
        {
          question: "How often do you mow lawns in Central Oregon?",
          answer: "Weekly mowing is standard during the active growing season. Some properties are well suited to a bi-weekly schedule instead - we'll recommend what fits your lawn during your quote.",
        },
        {
          question: "Is mowing included in the Premium Build-Your-Own Maintenance Package?",
          answer: "Yes. Weekly mowing, edging, and blowing are included in the $60/week base of the package. You then add any combination of fertilization, weed control, and other services on top of it.",
        },
        {
          question: "Do you adjust mowing height for the season?",
          answer: "Mowing height is adjusted as appropriate for the season and grass type to support a healthier lawn through Central Oregon's hot summers and cooler shoulder seasons.",
        },
        {
          question: "What happens to the grass clippings?",
          answer: "Clippings and debris are blown off driveways, walkways, and patios as part of every visit, keeping hard surfaces clean.",
        },
        {
          question: "Do you mow commercial and HOA properties too?",
          answer: "Yes. Weekly mowing is also available as part of a custom commercial or HOA maintenance contract - see our Commercial Services page for details.",
        },
        {
          question: "What areas do you serve for lawn mowing?",
          answer: "We provide weekly mowing throughout Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
