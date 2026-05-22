import { buildMetadata, breadcrumbJsonLd, profileLinks } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { KEYWORD } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "ติดต่อ",
  description: `ติดต่อ ${KEYWORD} — ความร่วมมือ สื่อ และงานวิจัย`,
  path: "/contact",
});

export default function ContactPage() {
  const links = profileLinks();

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "หน้าแรก", path: "/" },
          { name: "ติดต่อ", path: "/contact" },
        ])}
      />
      <h1 className="font-display text-4xl text-white md:text-5xl">
        ติดต่อ {KEYWORD}
      </h1>
      <p className="mt-6 text-silver">
        สำหรับความร่วมมือ สัมภาษณ์ งานวิจัย หรือ SEO personal branding
        ติดต่อผ่านช่องทางอย่างเป็นทางการด้านล่าง
      </p>
      <ul className="mt-12 space-y-4">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              target="_blank"
              rel={`noopener noreferrer ${l.rel}`}
              className="glass-card block rounded-xl px-6 py-4 text-lg text-white hover:border-accent/40"
            >
              {l.label} →
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-silver/80">
        Entity: ธนมน โสภณธนวัฒน์ · Thanamon Soponthanawat
      </p>
    </div>
  );
}
