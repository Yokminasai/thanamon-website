"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {
  categories: string[];
  tags: string[];
  initial: { q?: string; category?: string; tag?: string };
};

export function ArticleSearch({ categories, tags, initial }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(initial.q ?? "");

  function update(params: Record<string, string | undefined>) {
    const next = new URLSearchParams(searchParams.toString());
    Object.entries(params).forEach(([k, v]) => {
      if (v) next.set(k, v);
      else next.delete(k);
    });
    router.push(`/articles?${next.toString()}`);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    update({ q: q || undefined });
  }

  return (
    <div className="mt-10 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <form onSubmit={onSubmit} className="flex gap-2">
        <label htmlFor="search" className="sr-only">
          ค้นหาบทความ
        </label>
        <input
          id="search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="ค้นหาบทความ..."
          className="flex-1 rounded-lg border border-white/10 bg-charcoal px-4 py-2 text-white placeholder:text-silver/50"
        />
        <button
          type="submit"
          className="rounded-lg bg-accent/20 px-4 py-2 text-sm text-accent hover:bg-accent/30"
        >
          ค้นหา
        </button>
      </form>
      <div>
        <p className="text-xs uppercase tracking-widest text-silver">หมวดหมู่</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => update({ category: undefined })}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-silver hover:border-accent"
          >
            ทั้งหมด
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => update({ category: c })}
              className={`rounded-full border px-3 py-1 text-xs ${
                initial.category === c
                  ? "border-accent text-accent"
                  : "border-white/10 text-silver"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-silver">แท็ก</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.slice(0, 12).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => update({ tag: t })}
              className={`rounded-full border px-3 py-1 text-xs ${
                initial.tag === t
                  ? "border-glow text-glow"
                  : "border-white/10 text-silver"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
