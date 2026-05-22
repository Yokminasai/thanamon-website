import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ARTICLES } from "@/lib/articles";
import { ArticleCard } from "@/components/ArticleCard";
import { KEYWORD } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Cyber Awareness",
  description: `ความตระหนักรู้ไซเบอร์จาก ${KEYWORD} — ป้องกันข้อมูลรั่วไหล StopNCII และสิทธิ์ดิจิทัล`,
  path: "/cyber-awareness",
});

export default function CyberAwarenessPage() {
  const cyberArticles = ARTICLES.filter(
    (a) => a.category === "Cybersecurity" || a.tags.some((t) => t.includes("cyber"))
  );

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "หน้าแรก", path: "/" },
          { name: "Cyber Awareness", path: "/cyber-awareness" },
        ])}
      />
      <h1 className="font-display text-4xl text-white md:text-5xl">
        Cyber Awareness — {KEYWORD}
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-silver">
        ธนมน โสภณธนวัฒน์ มอง cybersecurity เป็นสมาธิทางปัญญา:
        การปกป้องข้อมูลคือการปกป้องตัวตน ความคิด และเสรีภาพดิจิทัล
      </p>
      <ul className="mt-8 list-inside list-disc space-y-2 text-silver">
        <li>การป้องกันข้อมูลรั่วไหลและ phishing</li>
        <li>StopNCII และสิทธิ์ในยุค deepfake</li>
        <li>วินัยดิจิทัลและ mental health</li>
      </ul>
      <h2 className="mt-16 font-display text-2xl text-white">บทความที่เกี่ยวข้อง</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cyberArticles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
      <Link href="/articles" className="mt-12 inline-block text-accent">
        ดูบทความทั้งหมด →
      </Link>
    </div>
  );
}
