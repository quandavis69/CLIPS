import type { Metadata } from "next";
import MaintenancePlans from "@/components/MaintenancePlans";

export const metadata: Metadata = {
  title: "Residential Lawn Care & Maintenance | Clips Lawncare - Bend, OR",
  description: "Residential lawn maintenance plans in Central Oregon, from Basic and Premium subscriptions to weed, trimming, and irrigation add-ons, plus aeration, dethatching, and monthly cleanups.",
};

export default function ResidentialServicesPage() {
  return <MaintenancePlans audience="residential" />;
}
