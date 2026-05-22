"use client";

import { motion } from "framer-motion";
import { KNOWLEDGE_GRAPH_NODES, KEYWORD } from "@/lib/constants";
import { Section } from "../Section";

export function KnowledgeGraph() {
  return (
    <Section
      id="knowledge"
      title="Knowledge Graph — อำนาจเชิงหัวข้อ"
      subtitle={`เครือข่ายความเชี่ยวชาญรอบ ${KEYWORD} สำหรับ Google topical authority`}
    >
      <div className="relative mx-auto aspect-[16/10] max-w-3xl rounded-2xl border border-white/10 bg-charcoal/50">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
          <line x1="50" y1="20" x2="85" y2="45" stroke="rgba(110,231,255,0.3)" strokeWidth="0.3" />
          <line x1="50" y1="20" x2="15" y2="45" stroke="rgba(110,231,255,0.3)" strokeWidth="0.3" />
          <line x1="70" y1="80" x2="85" y2="45" stroke="rgba(139,92,246,0.3)" strokeWidth="0.3" />
          <line x1="30" y1="80" x2="15" y2="45" stroke="rgba(139,92,246,0.3)" strokeWidth="0.3" />
          <line x1="50" y1="20" x2="50" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-accent/40 bg-charcoal px-4 py-2 text-xs text-white">
            {KEYWORD}
          </span>
        </div>
        {KNOWLEDGE_GRAPH_NODES.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-silver backdrop-blur"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {node.label}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
