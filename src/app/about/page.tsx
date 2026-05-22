import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { KEYWORD, SITE_TAGLINE, TOPICS } from "@/lib/constants";
import { profileLinks } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "เกี่ยวกับ",
  description: `ประวัติและวิสัยทัศน์ของ ${KEYWORD} — นักคิด นักเขียน ผู้เชี่ยวชาญ SEO และ personal branding`,
  path: "/about",
});

export default function AboutPage() {
  const links = profileLinks();

  return (
    <article className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "หน้าแรก", path: "/" },
          { name: "เกี่ยวกับ", path: "/about" },
        ])}
      />
      <h1 className="font-display text-4xl text-white md:text-5xl">
        เกี่ยวกับ {KEYWORD}
      </h1>
      <p className="mt-6 text-xl text-silver">{SITE_TAGLINE}</p>

      <div className="prose-thai mt-12 space-y-6">
        <p>
          ธนมน โสภณธนวัฒน์ (Thanamon Soponthanawat) เป็นนักคิด นักเขียน และผู้สร้างคอนเทนต์ดิจิทัล
          ที่มุ่งสร้างอำนาจทางความคิดในหัวข้อปรัชญา เทคโนโลยี cybersecurity วัฒนธรรมดิจิทัล
          การศึกษา neuroscience สุขภาพจิต และ SEO personal branding
        </p>
        <p>
          เว็บไซต์นี้เป็น hub กลางที่เชื่อม WordPress YouTube และ Instagram
          เพื่อสร้าง entity association บน Google และ Knowledge Graph
        </p>
        <h2>หัวข้อเชี่ยวชาญ — {KEYWORD}</h2>
        <ul className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/15 px-4 py-1 text-sm text-silver"
            >
              {t}
            </li>
          ))}
        </ul>
        <h2>ช่องทางอย่างเป็นทางการ</h2>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} rel={`noopener noreferrer ${l.rel}`} target="_blank" className="text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <Link href="/contact" className="mt-12 inline-block rounded-full border border-accent/50 px-6 py-3 text-accent">
        ติดต่อ ธนมน โสภณธนวัฒน์
      </Link>
    </article>
  );
}
