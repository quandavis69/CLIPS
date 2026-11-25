import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Landscape Cleanup in Central Oregon | Clips Lawn Care",
  description: "Landscape cleanups, restoration projects, and pine needle removal from Clips Lawn Care to reset an overgrown or neglected property in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/landscape-cleanup" },
};

export default function LandscapeCleanupPage() {
  return (
    <ServiceDetailLayout
      path="/services/landscape-cleanup"
      eyebrow="Landscape Projects"
      title="Landscape Cleanup & Restoration"
      intro="One-time cleanups and full restoration projects to reset a yard that's gotten overgrown, neglected, or storm-damaged, throughout Bend, Redmond, Sunriver, and the surrounding Central Oregon area."
      sections={[
        {
          heading: "Cleanups",
          body: [
            "Spring and fall cleanups. Leaf and debris removal. Storm debris cleanup. Yard waste hauling.",
          ],
        },
        {
          heading: "Restoration Projects",
          body: [
            "Overgrowth removal. Regrading and soil restoration. New sod, plants, or beds. Complete property makeovers for landscapes that need to be brought back to life.",
          ],
        },
        {
          heading: "Pine Needle Removal",
          body: [
            "Thorough pine needle removal to protect your lawn, clear roofs and gutters, and reduce fire hazards - a common need on tree-heavy Central Oregon properties.",
          ],
        },
      ]}
      pricingNote="Custom quote based on the scope of cleanup or restoration required, debris volume, and site conditions."
      relatedServices={[
        { title: "Spring & Fall Cleanups", href: "/services/seasonal-cleanups" },
        { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
        { title: "Gutter Cleaning", href: "/services/gutter-cleaning" },
        { title: "Total Property Clean", href: "/total-property-clean" },
      ]}
      faqs={[
        {
          question: "What's the difference between Landscape Cleanup and Spring & Fall Cleanups?",
          answer: "Spring & Fall Cleanups are our standard seasonal lawn-care cleanups. Landscape Cleanup covers larger project-based work - restoring an overgrown or storm-damaged landscape, or removing heavy pine needle buildup - scoped as its own project.",
        },
        {
          question: "Can you restore a completely neglected yard?",
          answer: "Yes - our restoration projects cover overgrowth removal, regrading, soil restoration, and new sod, plants, or beds as needed for a full property makeover.",
        },
        {
          question: "Why is pine needle removal important?",
          answer: "Built-up pine needles can smother lawns, clog gutters, and increase fire hazard risk - removal protects your lawn and property.",
        },
        {
          question: "Do you haul away yard waste and debris?",
          answer: "Yes - yard waste hauling is included as part of cleanup and restoration projects.",
        },
        {
          question: "What areas do you provide landscape cleanup in?",
          answer: "Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
