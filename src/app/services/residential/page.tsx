import type { Metadata } from "next";
import MaintenancePlans from "@/components/MaintenancePlans";

export const metadata: Metadata = {
  title: "Residential Lawn Care & Maintenance in Bend, OR | Clips Lawn Care",
  description: "Every residential service Clips Lawn Care offers in Central Oregon - mowing, fertilization, weed control, aeration, dethatching, cleanups, irrigation, shrub pruning, and landscape projects.",
};

export default function ResidentialServicesPage() {
  return <MaintenancePlans audience="residential" />;
}
