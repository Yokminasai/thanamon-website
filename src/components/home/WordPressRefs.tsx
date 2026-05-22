import { ARTICLES } from "@/lib/articles";
import { KEYWORD, SOCIAL } from "@/lib/constants";
import { Section } from "../Section";

export function WordPressRefs() {
  const withWp = ARTICLES.filter((a) => a.wordpressUrl).slice(0, 4);

  return (
    <Section
      id="wordpress"
      title="บทความจาก WordPress"
      subtitle={`อ้างอิงบทความเชิงลึกบน ${KEYWORD} Official Blog — สร้าง backlink ecosystem`}
    >
      <ul className="space-y-4">
        {withWp.map((a) => (
          <li
            key={a.slug}
            className="flex flex-col gap-2 rounded-xl border border-white/10 p-5 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="text-white">{a.title}</h3>
              <p className="text-sm text-silver">{a.excerpt}</p>
            </div>
            <a
              href={SOCIAL.wordpress}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm text-accent hover:underline"
            >
              อ่านบน WordPress →
            </a>
          </li>
        ))}
      </ul>
      <a
        href={SOCIAL.wordpress}
        rel="me"
        target="_blank"
        className="mt-6 inline-block text-accent"
      >
        thanamonofficial.wordpress.com
      </a>
    </Section>
  );
}
