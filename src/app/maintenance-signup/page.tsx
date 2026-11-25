import type { Metadata } from "next";
import MaintenanceSignupForm from "@/components/MaintenanceSignupForm";

export const metadata: Metadata = {
  title: "Build Your Own Premium Maintenance Package | Clips Lawn Care - Bend, OR",
  description: "Start with weekly lawn maintenance at $60/week and customize your package with Irrigation Control, fertilization, weed control, aeration, dethatching, and Bi-Weekly Property Cleanup in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
  alternates: { canonical: "/maintenance-signup" },
};

export default function MaintenanceSignupPage() {
  return <MaintenanceSignupForm />;
}
