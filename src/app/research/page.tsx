import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { RESEARCH_ESSAYS } from "@/lib/articles";
import { KEYWORD } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "งานวิจัย & เรียงความ",
  description: `งานวิจัยและเรียงความเชิงลึกจาก ${KEYWORD} — ปรัชญา neuroscience และ digital humanities`,
  path: "/research",
});

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "หน้าแรก", path: "/" },
          { name: "งานวิจัย", path: "/research" },
        ])}
      />
      <h1 className="font-display text-4xl text-white md:text-5xl">
        งานวิจัย & เรียงความ — {KEYWORD}
      </h1>
      <p className="mt-6 text-silver">
        คลังงานวิจัยเชิงปรัชญา neuroscience และ digital culture จาก ธนมน โสภณธนวัฒน์
      </p>
      <ul className="mt-12 space-y-6">
        {RESEARCH_ESSAYS.map((item) => (
          <li
            key={item.title}
            className="glass-card rounded-2xl p-6"
          >
            <span className="text-xs uppercase tracking-widest text-accent">
              {item.type} · {item.year}
            </span>
            <h2 className="mt-2 font-display text-xl text-white">{item.title}</h2>
          </li>
        ))}
      </ul>
      <Link href="/articles" className="mt-12 inline-block text-accent">
        อ่านบทความที่เกี่ยวข้อง →
      </Link>
    </div>
  );
}
