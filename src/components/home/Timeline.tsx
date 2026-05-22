import { TIMELINE } from "@/lib/articles";
import { Section } from "../Section";

export function Timeline() {
  return (
    <Section
      title="Timeline — โครงการและผลงาน"
      subtitle="เส้นทางของ ธนมน โสภณธนวัฒน์ ในฐานะนักคิดและผู้สร้างคอนเทนต์"
    >
      <ol className="relative border-l border-white/10 pl-8">
        {TIMELINE.map((item) => (
          <li key={item.year + item.title} className="mb-10 last:mb-0">
            <span className="absolute -left-1.5 flex h-3 w-3 rounded-full bg-accent" />
            <time className="text-xs uppercase tracking-widest text-accent">{item.year}</time>
            <h3 className="mt-1 font-display text-lg text-white">{item.title}</h3>
            <p className="text-sm text-silver">{item.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
