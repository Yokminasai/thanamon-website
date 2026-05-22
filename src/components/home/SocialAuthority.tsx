import { FEATURED_ON, KEYWORD, SOCIAL } from "@/lib/constants";
import { Section } from "../Section";

export function SocialAuthority() {
  return (
    <Section
      id="social-authority"
      title="อำนาจทางดิจิทัล — Social Authority"
      subtitle={`เชื่อมโยง entity ${KEYWORD} กับแพลตฟอร์มอย่างเป็นทางการ เพื่อ E-E-A-T และ Google Knowledge Graph`}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_ON.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="me noopener noreferrer"
            className="glass-card block rounded-2xl p-6 transition hover:border-accent/40"
          >
            <h3 className="font-display text-lg text-white">{item.name}</h3>
            <p className="mt-2 text-sm text-silver">{item.description}</p>
            <span className="mt-4 inline-block text-xs text-accent">เยี่ยมชม →</span>
          </a>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <h3 className="text-sm uppercase tracking-widest text-accent">Featured On</h3>
        <ul className="mt-4 flex flex-wrap gap-4">
          <li>
            <a href={SOCIAL.wordpress} rel="me" className="text-silver hover:text-white">
              WordPress Blog
            </a>
          </li>
          <li>
            <a href={SOCIAL.youtube} rel="me" className="text-silver hover:text-white">
              YouTube @thanamon.soponthanawat
            </a>
          </li>
          <li>
            <a href={SOCIAL.instagram} rel="me" className="text-silver hover:text-white">
              Instagram @thanamon.soponthanawat
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
