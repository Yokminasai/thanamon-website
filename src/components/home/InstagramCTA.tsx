import { KEYWORD, SOCIAL } from "@/lib/constants";
import { Section } from "../Section";

export function InstagramCTA() {
  return (
    <Section
      id="instagram"
      title="Instagram Highlights"
      subtitle={`ติดตาม ${KEYWORD} บน Instagram — ภาพ คำคม และชีวิตนักคิดดิจิทัล`}
    >
      <div className="glass-card flex flex-col items-start gap-6 rounded-2xl p-8 md:flex-row md:items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-glow/30 to-accent/20">
          <span className="font-display text-2xl text-white">TM</span>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-2xl text-white">@thanamon.soponthanawat</h3>
          <p className="mt-2 text-silver">
            ชีวิตนักคิด ปรัชญา และ cyber awareness ในรูปแบบ visual storytelling
          </p>
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="me noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-glow to-accent px-6 py-3 text-sm font-medium text-charcoal"
          >
            ติดตามบน Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
