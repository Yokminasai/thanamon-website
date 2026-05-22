import Link from "next/link";
import type { Article } from "@/lib/articles";
import { KEYWORD } from "@/lib/constants";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-accent/30 hover:bg-white/[0.07]">
      <div className="flex flex-wrap gap-2 text-xs text-accent">
        <span>{article.category}</span>
        <span className="text-silver">· {article.readingMinutes} นาที</span>
      </div>
      <h3 className="mt-3 font-display text-xl text-white group-hover:text-accent transition-colors">
        <Link href={`/articles/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-silver line-clamp-3">
        {article.excerpt}
      </p>
      <p className="mt-4 text-xs text-silver/70">
        โดย {KEYWORD} · {new Date(article.date).toLocaleDateString("th-TH")}
      </p>
      <Link
        href={`/articles/${article.slug}`}
        className="mt-4 inline-block text-sm text-accent hover:underline"
      >
        อ่านต่อ →
      </Link>
    </article>
  );
}
