import type { Metadata } from "next";
import MaintenancePlans from "@/components/MaintenancePlans";

export const metadata: Metadata = {
  title: "Commercial Property Maintenance | Clips Lawncare - Bend, OR",
  description: "Commercial property maintenance plans in Central Oregon, from Basic and Premium subscriptions to weed, trimming, and irrigation add-ons, plus aeration, dethatching, and monthly cleanups.",
};

export default function CommercialServicesPage() {
  return <MaintenancePlans audience="commercial" />;
}
