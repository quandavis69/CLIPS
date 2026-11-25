import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Irrigation Services in Central Oregon | Clips Lawn Care",
  description: "Irrigation Control from Clips Lawn Care covers spring startup, seasonal monitoring, and fall/winter sprinkler blowout for properties in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/services/irrigation" },
};

export default function IrrigationPage() {
  return (
    <ServiceDetailLayout
      path="/services/irrigation"
      eyebrow="Irrigation Control"
      title="Irrigation Services"
      intro="Keep your irrigation system operating properly throughout the season with ongoing monitoring and seasonal irrigation services, bundled into one weekly add-on: Irrigation Control."
      sections={[
        {
          heading: "What's Included in Irrigation Control",
          body: [
            "Spring irrigation startup. Irrigation system testing. Free irrigation inspections. Ongoing irrigation monitoring. Irrigation-related call-outs. Fall/winter sprinkler blowout.",
            "All of these were previously offered as separate services - they're now bundled into a single Irrigation Control add-on so your system is covered from spring startup through winterization.",
          ],
        },
        {
          heading: "Spring Startup",
          body: [
            "Get your irrigation system ready for the growing season. Where accessible and applicable, startup includes activating the main isolation valve and backflow device, operating and checking irrigation zones, inspecting accessible valves and wiring, making routine sprinkler-head adjustments, checking for visible leaks, and setting the irrigation controller when accessible. Parts, repairs, extensive troubleshooting, and certified backflow testing are excluded unless separately quoted.",
          ],
        },
        {
          heading: "Seasonal Monitoring & Call-Outs",
          body: [
            "Routine inspections during the growing season help identify visible leaks, poorly adjusted heads, and timer issues, with irrigation-related call-outs included as part of the add-on. Repairs, replacement parts, and specialized troubleshooting are quoted separately.",
          ],
        },
        {
          heading: "Fall/Winter Blowout",
          body: [
            "Clear water from your irrigation lines before winter to help protect your system from freeze damage.",
          ],
        },
      ]}
      pricingNote="Billed as a weekly seasonal add-on at $12 per week, covering spring startup, seasonal monitoring, call-outs, and fall/winter blowout for the maintenance season."
      relatedServices={[
        { title: "Weekly Lawn Maintenance", href: "/services/lawn-mowing" },
        { title: "Lawn Fertilization", href: "/services/lawn-fertilization" },
        { title: "Bi-Weekly Property Cleanup", href: "/services/cleanup-maintenance" },
      ]}
      faqs={[
        {
          question: "What is Irrigation Control?",
          answer: "Irrigation Control is our bundled irrigation add-on, combining spring startup, system testing, free inspections, seasonal monitoring, irrigation-related call-outs, and fall/winter blowout into a single weekly add-on.",
        },
        {
          question: "Do I need to select irrigation winterization separately?",
          answer: "No - fall/winter sprinkler blowout is included as part of Irrigation Control, so there's no separate winterization selection to make.",
        },
        {
          question: "Do I need to select spring irrigation startup separately?",
          answer: "No - spring startup is included as part of Irrigation Control, along with system testing and seasonal monitoring for the rest of the season.",
        },
        {
          question: "How much does Irrigation Control cost?",
          answer: "Irrigation Control is billed as a weekly seasonal add-on at $12 per week, added to your Premium Build-Your-Own Maintenance Package.",
        },
        {
          question: "Are irrigation repairs included?",
          answer: "Irrigation Control covers inspections, monitoring, and call-outs, but parts, repairs, and specialized troubleshooting beyond that scope are quoted separately.",
        },
        {
          question: "What areas do you provide irrigation services in?",
          answer: "We provide Irrigation Control throughout Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
        },
      ]}
    />
  );
}
