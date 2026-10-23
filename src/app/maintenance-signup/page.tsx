import type { Metadata } from "next";
import MaintenanceSignupForm from "@/components/MaintenanceSignupForm";

export const metadata: Metadata = {
  title: "Build Your Own Premium Maintenance Package | Clips Lawn Care - Bend, OR",
  description: "Start with Basic Maintenance and customize your 2027 package with lawn fertilization, weed control, aeration, cleanups, irrigation, and shrub pruning in Bend, Redmond, Sunriver, Prineville, Powell Butte, and La Pine, Oregon.",
};

export default function MaintenanceSignupPage() {
  return <MaintenanceSignupForm />;
}
