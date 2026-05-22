"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { KEYWORD, SITE_TAGLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-4xl"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">
          thinker · writer · digital creator
        </p>
        <h1 className="font-display text-4xl font-light leading-tight text-white md:text-6xl lg:text-7xl">
          {KEYWORD}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-silver md:text-xl">
          {SITE_TAGLINE}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-full border border-accent/50 bg-accent/10 px-8 py-3 text-sm text-white backdrop-blur transition hover:bg-accent/20"
          >
            เกี่ยวกับ ธนมน โสภณธนวัฒน์
          </Link>
          <Link
            href="/articles"
            className="rounded-full border border-white/20 px-8 py-3 text-sm text-silver transition hover:border-white/40 hover:text-white"
          >
            อ่านบทความ
          </Link>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-grid-fade bg-[length:48px_48px] opacity-30" aria-hidden />
    </section>
  );
}
