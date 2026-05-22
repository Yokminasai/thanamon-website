"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { KEYWORD } from "@/lib/constants";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="h-px w-48 bg-gradient-to-r from-transparent via-accent to-transparent"
            animate={{ scaleX: [0.2, 1, 0.2], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <motion.h1
            className="mt-8 font-display text-2xl font-light tracking-[0.2em] text-white md:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {KEYWORD}
          </motion.h1>
          <motion.p
            className="mt-3 text-xs uppercase tracking-[0.35em] text-silver"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            initializing thought archive
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
