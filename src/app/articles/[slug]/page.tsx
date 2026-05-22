import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import {
  getArticleBySlug,
  getAllSlugs,
} from "@/lib/articles";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
} from "@/lib/seo";
import { KEYWORD } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${slug}`,
    type: "article",
    keywords: [KEYWORD, ...article.tags, article.category],
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const paragraphs = article.content.split("\n\n").filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.excerpt,
            slug: article.slug,
            datePublished: article.date,
          }),
          breadcrumbJsonLd([
            { name: "หน้าแรก", path: "/" },
            { name: "บทความ", path: "/articles" },
            { name: article.title, path: `/articles/${slug}` },
          ]),
        ]}
      />
      <nav className="text-sm text-silver" aria-label="breadcrumb">
        <Link href="/">หน้าแรก</Link>
        <span className="mx-2">/</span>
        <Link href="/articles">บทความ</Link>
        <span className="mx-2">/</span>
        <span className="text-accent">{article.title}</span>
      </nav>
      <header className="mt-8">
        <p className="text-xs text-accent">
          {article.category} · {article.readingMinutes} นาที · โดย {KEYWORD}
        </p>
        <h1 className="mt-4 font-display text-3xl text-white md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-silver">{article.excerpt}</p>
        <time dateTime={article.date} className="mt-4 block text-sm text-silver/70">
          {new Date(article.date).toLocaleDateString("th-TH", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="prose-thai mt-12">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {article.tags.map((t) => (
          <Link
            key={t}
            href={`/articles?tag=${encodeURIComponent(t)}`}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver hover:border-accent"
          >
            #{t}
          </Link>
        ))}
      </div>
      {article.wordpressUrl && (
        <a
          href={article.wordpressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-accent hover:underline"
        >
          อ่านเวอร์ชัน WordPress →
        </a>
      )}
      <div className="mt-12 border-t border-white/10 pt-8">
        <h2 className="font-display text-lg text-white">บทความอื่นจาก {KEYWORD}</h2>
        <Link href="/articles" className="mt-2 inline-block text-accent">
          ← กลับหน้าบทความ
        </Link>
      </div>
    </article>
  );
}
