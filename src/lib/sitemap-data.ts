import { getAllSlugs } from "@/lib/articles";
import { absoluteUrl } from "@/lib/seo";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export function getSitemapEntries(): SitemapEntry[] {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/articles", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/research", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/cyber-awareness", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const pages: SitemapEntry[] = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articles: SitemapEntry[] = getAllSlugs().map((slug) => ({
    url: absoluteUrl(`/articles/${slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...articles];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateSitemapXml(): string {
  const entries = getSitemapEntries();
  const urlNodes = entries
    .map((entry) => {
      const parts = [
        "  <url>",
        `    <loc>${escapeXml(entry.url)}</loc>`,
        `    <lastmod>${entry.lastModified.toISOString()}</lastmod>`,
      ];
      if (entry.changeFrequency) {
        parts.push(`    <changefreq>${entry.changeFrequency}</changefreq>`);
      }
      if (entry.priority !== undefined) {
        parts.push(`    <priority>${entry.priority}</priority>`);
      }
      parts.push("  </url>");
      return parts.join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlNodes}\n</urlset>\n`;
}
