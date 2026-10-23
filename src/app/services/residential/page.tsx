import type { Metadata } from "next";
import MaintenancePlans from "@/components/MaintenancePlans";

export const metadata: Metadata = {
  title: "Residential Lawn Care & Maintenance in Bend, OR | Clips Lawn Care",
  description: "Residential lawn maintenance in Central Oregon - Basic Maintenance plus a Build Your Own Premium Package with fertilization, weed control, aeration, dethatching, cleanups, irrigation, and shrub pruning add-ons.",
};

export default function ResidentialServicesPage() {
  return <MaintenancePlans audience="residential" />;
}
