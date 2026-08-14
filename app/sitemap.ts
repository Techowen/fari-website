import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { focusAreas, posts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.9 },
    { path: "/what-we-do", priority: 0.9 },
    { path: "/get-involved", priority: 0.8 },
    { path: "/donate", priority: 0.8 },
    { path: "/news", priority: 0.7 },
    { path: "/contact", priority: 0.7 },
  ].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const areaRoutes = focusAreas.map((area) => ({
    url: `${site.url}/what-we-do/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...areaRoutes, ...postRoutes];
}
