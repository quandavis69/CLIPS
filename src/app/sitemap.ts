import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

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
  { path: "/services/sod-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/mulch-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/rock-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/landscape-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/landscape-cleanup", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gutter-cleaning", priority: 0.8, changeFrequency: "monthly" },
  { path: "/maintenance-signup", priority: 0.9, changeFrequency: "monthly" },
  { path: "/total-property-clean", priority: 0.9, changeFrequency: "monthly" },
  { path: "/landscaping-projects-warranty", priority: 0.8, changeFrequency: "monthly" },
  { path: "/commercial-property-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
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
  const staticEntries: MetadataRoute.Sitemap = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticEntries, ...blogEntries];
}
