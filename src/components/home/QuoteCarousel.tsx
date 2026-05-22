"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QUOTES } from "@/lib/constants";
import { Section } from "../Section";

export function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <Section title="คำคมจาก ธนมน โสภณธนวัฒน์" subtitle="ความคิดที่ขับเคลื่อนการเขียนและงานวิจัย">
      <div className="relative min-h-[180px] rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-display text-xl italic text-white md:text-2xl">
              &ldquo;{QUOTES[index].text}&rdquo;
            </p>
            <footer className="mt-4 text-sm text-accent">— {QUOTES[index].source}</footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-2">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`คำคม ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
