import { generateSitemapXml } from "@/lib/sitemap-data";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const xml = generateSitemapXml();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
