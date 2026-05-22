import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/articles",
    "/research",
    "/cyber-awareness",
    "/contact",
  ];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const articles = getAllSlugs().map((slug) => ({
    url: absoluteUrl(`/articles/${slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...articles];
}
