import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://haillions.com";

// Static routes with their priorities and change frequencies
const staticRoutes = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/estimate", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/schedule", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/locations", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/warranty", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/insurance", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
];

// Service pages
const serviceRoutes = [
  { path: "/services/paintless-dent-repair", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/hail-damage", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/door-dings", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/mobile-service", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/creases", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/services/bumper-repair", priority: 0.8, changeFrequency: "weekly" as const },
];

// Location pages for Houston suburbs
const locationRoutes = [
  { path: "/locations/houston", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/locations/katy", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/sugar-land", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/the-woodlands", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/cypress", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/spring", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/pearland", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/kingwood", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/humble", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/missouri-city", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/locations/richmond", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/locations/rosenberg", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/locations/tomball", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/locations/magnolia", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/locations/conroe", priority: 0.7, changeFrequency: "monthly" as const },
];

// Blog posts (when blog is implemented)
const blogRoutes: Array<{ path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }> = [
  // Add blog posts here when implemented
  // { path: "/blog/what-is-pdr", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
