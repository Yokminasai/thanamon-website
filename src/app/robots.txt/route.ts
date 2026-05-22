import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";
export const revalidate = 86400;

export function GET() {
  const base = SITE_URL.replace(/\/$/, "");
  const body = `User-agent: *
Allow: /

Host: ${base}
Sitemap: ${base}/sitemap.xml
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
