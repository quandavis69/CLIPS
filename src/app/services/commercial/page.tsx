import type { Metadata } from "next";
import MaintenancePlans from "@/components/MaintenancePlans";

export const metadata: Metadata = {
  title: "Commercial, HOA & Property Manager Lawn Care in Bend, OR | Clips Lawn Care",
  description: "Custom lawn care and landscape maintenance contracts for businesses, HOAs, and property managers in Central Oregon, built around Basic Maintenance plus the add-on services your property needs.",
  alternates: { canonical: "/services/commercial" },
};

export default function CommercialServicesPage() {
  return <MaintenancePlans audience="commercial" />;
}
