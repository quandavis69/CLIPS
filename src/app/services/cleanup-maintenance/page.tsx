import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Landscape Cleanup in Central Oregon | Clips Lawn Care",
  description: "Bi-Weekly Property Cleanup from Clips Lawn Care keeps properties looking their best with recurring trimming, weeding, and debris cleanup in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/cleanup-maintenance" },
};

export default function BiWeeklyCleanupPage() {
  return (
    <ServiceDetailLayout
      path="/services/cleanup-maintenance"
      eyebrow="Recurring Service"
      title="Bi-Weekly Property Cleanup"
      intro="Keep your property looking its best with scheduled bi-weekly cleanup services throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "What's Included",
          body: [
            "Landscape trimming.",
            "General weeding.",
            "Debris cleanup.",
            "General property maintenance and cleanup.",
          ],
        },
        {
          heading: "How It Works",
          body: [
            "Bi-Weekly Property Cleanup runs every two weeks throughout your maintenance season, keeping beds, walkways, and landscaped areas consistently tidy between visits - rather than letting trimming and debris build up between less frequent cleanups.",
          ],
        },
        {
          heading: "A Separate Recurring Service",
          body: [
            "Bi-Weekly Property Cleanup is billed on its own recurring schedule, separate from your weekly maintenance package total - it's priced and scheduled independently.",
          ],
        },
      ]}
      pricingNote="Starting at $199 per visit, billed every two weeks. This is a separate recurring service and is not included in your weekly maintenance package total."
      relatedServices={[
        { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
        { title: "Landscape Projects", href: "/services/landscape" },
        { title: "Total Property Clean", href: "/total-property-clean" },
      ]}
      faqs={[
        {
          question: "What's included in Bi-Weekly Property Cleanup?",
          answer: "Landscape trimming, general weeding, debris cleanup, and general property maintenance and cleanup, performed every two weeks.",
        },
        {
          question: "How is this different from Spring & Fall Cleanups?",
          answer: "Spring & Fall Cleanups are one-time seasonal services. Bi-Weekly Property Cleanup is an ongoing recurring service performed every two weeks throughout the season.",
        },
        {
          question: "Does this replace shrub trimming as a separate service?",
          answer: "Routine trimming is included in Bi-Weekly Property Cleanup. For larger or more specialized shrub pruning projects, see our dedicated Shrub Pruning & Hedging page.",
        },
        {
          question: "How much does Bi-Weekly Property Cleanup cost?",
          answer: "Starting at $199 per visit, billed every two weeks - this is a separate recurring charge, not part of your weekly maintenance package total.",
        },
        {
          question: "Can I add this to my maintenance package?",
          answer: "Yes - Bi-Weekly Property Cleanup can be added when you build your maintenance package, and we also recommend it as a complement to routine weekly maintenance.",
        },
        {
          question: "What areas do you offer Bi-Weekly Property Cleanup in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
