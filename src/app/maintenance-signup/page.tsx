import type { Metadata } from "next";
import MaintenanceSignupForm from "@/components/MaintenanceSignupForm";

export const metadata: Metadata = {
  title: "Weekly Maintenance Sign-Up | Clips Lawn Care - Bend, OR",
  description: "Sign up for Basic or Premium weekly lawn maintenance with Clips Lawn Care in Bend, Redmond, Sunriver, Prineville, and La Pine, Oregon.",
};

export default function MaintenanceSignupPage() {
  return <MaintenanceSignupForm />;
}
