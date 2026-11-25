import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Spring & Fall Cleanups in Central Oregon | Clips Lawn Care",
  description: "One-time spring and fall seasonal cleanups from Clips Lawn Care for properties in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/seasonal-cleanups" },
};

export default function SeasonalCleanupsPage() {
  return (
    <ServiceDetailLayout
      path="/services/seasonal-cleanups"
      eyebrow="One-Time Service"
      title="Spring & Fall Cleanups"
      intro="Reset your property for the season ahead with a thorough, one-time cleanup, available throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
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
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
        { title: "Weed Control", href: "/services/weed-control" },
        { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
        { title: "Total Property Clean", href: "/total-property-clean" },
      ]}
      faqs={[
        {
          question: "How often should I clean up my landscape?",
          answer: "Most Central Oregon properties benefit from at least two cleanups per year - once in spring to prepare for the growing season, and once in fall before winter.",
        },
        {
          question: "What's the difference between Spring & Fall Cleanups and Bi-Weekly Property Cleanup?",
          answer: "Spring & Fall Cleanups are one-time seasonal services. Bi-Weekly Property Cleanup is an ongoing recurring service performed every two weeks throughout the season.",
        },
        {
          question: "How much does a seasonal cleanup cost?",
          answer: "Starting at $399 per cleanup, with final pricing based on labor, debris volume, disposal costs, and the approved scope of work.",
        },
        {
          question: "What's included in a fall cleanup?",
          answer: "Removal of seasonal leaves and debris to prepare your property for winter, within the approved scope of work.",
        },
        {
          question: "Can I schedule just one cleanup instead of both?",
          answer: "Yes - spring and fall cleanups can be scheduled independently based on what your property needs.",
        },
        {
          question: "Do you offer recurring cleanup service instead?",
          answer: "Yes - if you'd prefer ongoing cleanup rather than two seasonal visits, see our Bi-Weekly Property Cleanup service.",
        },
      ]}
    />
  );
}
