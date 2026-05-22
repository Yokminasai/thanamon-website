import { Suspense } from "react";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleSearch } from "@/components/ArticleSearch";
import { filterArticles, getCategories, getAllTags } from "@/lib/articles";
import { KEYWORD } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "บทความ",
  description: `บทความและความคิดจาก ${KEYWORD} — ปรัชญา เทคโนโลยี cybersecurity และสังคม`,
  path: "/articles",
});

type Props = {
  searchParams: Promise<{ q?: string; category?: string; tag?: string }>;
};

export default async function ArticlesPage({ searchParams }: Props) {
  const params = await searchParams;
  const articles = filterArticles(params);
  const categories = getCategories();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-32 md:px-6">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "หน้าแรก", path: "/" },
          { name: "บทความ", path: "/articles" },
        ])}
      />
      <h1 className="font-display text-4xl text-white md:text-5xl">
        บทความ — {KEYWORD}
      </h1>
      <p className="mt-4 max-w-2xl text-silver">
        คลังความคิด SEO-optimized ในหัวข้อปรัชญา เทคโนโลยี cyber awareness และสังคม
      </p>

      <Suspense fallback={<div className="mt-10 h-32 animate-pulse rounded-2xl bg-white/5" />}>
        <ArticleSearch categories={categories} tags={tags} initial={params} />
      </Suspense>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.length > 0 ? (
          articles.map((a) => <ArticleCard key={a.slug} article={a} />)
        ) : (
          <p className="text-silver col-span-full">ไม่พบบทความที่ตรงกับการค้นหา</p>
        )}
      </div>
    </div>
  );
}
