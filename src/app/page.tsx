import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SocialAuthority } from "@/components/home/SocialAuthority";
import { YouTubeShowcase } from "@/components/home/YouTubeShowcase";
import { InstagramCTA } from "@/components/home/InstagramCTA";
import { WordPressRefs } from "@/components/home/WordPressRefs";
import { QuoteCarousel } from "@/components/home/QuoteCarousel";
import { KnowledgeGraph } from "@/components/home/KnowledgeGraph";
import { Timeline } from "@/components/home/Timeline";
import { Section } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/articles";
import { KEYWORD, MANIFESTO } from "@/lib/constants";

export default function HomePage() {
  const featured = ARTICLES.filter((a) => a.featured).slice(0, 3);

  return (
    <>
      <Hero />

      <Section
        id="about-preview"
        title="เกี่ยวกับ ธนมน โสภณธนวัฒน์"
        subtitle="นักคิด นักเขียน และผู้สร้างคอนเทนต์ที่เชื่อมปรัชญากับโลกดิจิทัล"
      >
        <p className="max-w-3xl text-lg leading-relaxed text-silver">
          {KEYWORD} ทำงานในช่องว่างระหว่างปรัชญา เทคโนโลยี cybersecurity วัฒนธรรมดิจิทัล
          และสุขภาพจิต — สร้างเนื้อหาที่ช่วยให้ผู้คนเข้าใจอำนาจของข้อมูล ภาษา และอัลกอริทึม
        </p>
        <Link href="/about" className="mt-6 inline-block text-accent hover:underline">
          อ่านประวัติเต็ม →
        </Link>
      </Section>

      <Section
        title="บทความแนะนำ"
        subtitle={`เนื้อหา SEO จาก ${KEYWORD} — ปรัชญา เทคโนโลยี และสังคม`}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
        <Link href="/articles" className="mt-8 inline-block text-accent">
          ดูบทความทั้งหมด →
        </Link>
      </Section>

      <Section
        id="philosophy-tech"
        title="ปรัชญา & เทคโนโลยี"
        subtitle="เมื่อความคิดพบโค้ด — genealogy ของความรู้ในยุค AI"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl text-white">ปรัชญา</h3>
            <p className="mt-3 text-silver">
              จาก Nietzsche สู่โลกดิจิทัล — {KEYWORD} ตั้งคำถามกับ moral ของอัลกอริทึม
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl text-white">เทคโนโลยี & AI</h3>
            <p className="mt-3 text-silver">
              อนาคตของความรู้ไม่ได้อยู่ที่โมเดล แต่อยู่ที่ใครเป็นเจ้าของคำถาม
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="cyber"
        title="Cybersecurity Awareness"
        subtitle="ความปลอดภัยดิจิทัลคือสมาธิทางปัญญา"
      >
        <p className="max-w-3xl text-silver">
          {KEYWORD} เขียนและบรรยายเรื่องการป้องกันข้อมูลรั่วไหล StopNCII และสิทธิ์ดิจิทัล
          เพื่อให้ทุกคนมีความตระหนักรู้ในยุค deepfake
        </p>
        <Link href="/cyber-awareness" className="mt-4 inline-block text-accent">
          เรียนรู้ cyber awareness →
        </Link>
      </Section>

      <SocialAuthority />
      <YouTubeShowcase />
      <InstagramCTA />
      <WordPressRefs />
      <QuoteCarousel />

      <Section title="Personal Manifesto">
        <blockquote className="border-l-2 border-accent pl-6 font-display text-xl italic text-white md:text-2xl">
          {MANIFESTO}
        </blockquote>
      </Section>

      <KnowledgeGraph />
      <Timeline />
    </>
  );
}
