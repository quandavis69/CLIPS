import type { MetadataRoute } from "next";

const BASE_URL = "https://clipslawncare.com";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/residential", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/commercial", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/landscape", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/lawn-mowing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/lawn-fertilization", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/weed-control", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/aeration", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/dethatching", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/seasonal-cleanups", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/cleanup-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/irrigation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/shrub-pruning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/maintenance-signup", priority: 0.9, changeFrequency: "monthly" },
  { path: "/total-property-clean", priority: 0.9, changeFrequency: "monthly" },
  { path: "/landscaping-projects-warranty", priority: 0.8, changeFrequency: "monthly" },
  { path: "/commercial-property-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.7, changeFrequency: "weekly" },
  { path: "/service-area", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
