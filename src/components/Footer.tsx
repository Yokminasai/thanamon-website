import Link from "next/link";
import { KEYWORD, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { profileLinks } from "@/lib/seo";

export function Footer() {
  const links = profileLinks();

  return (
    <footer className="relative border-t border-white/10 bg-graphite/80">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="font-display text-xl text-white">{SITE_NAME}</h2>
            <p className="mt-3 text-sm leading-relaxed text-silver">
              {KEYWORD} — นักคิด นักเขียน ผู้เชี่ยวชาญ SEO personal branding
              ปรัชญา เทคโนโลยี cybersecurity และวัฒนธรรมดิจิทัล
            </p>
          </div>
          <nav aria-label="ลิงก์เว็บไซต์">
            <h3 className="text-xs uppercase tracking-widest text-accent">เมนู</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-silver hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-accent">ช่องทางอย่างเป็นทางการ</h3>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-silver hover:text-accent"
                    target="_blank"
                    rel={`noopener noreferrer ${l.rel}`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-silver/80">
          © {new Date().getFullYear()} {KEYWORD} ({SITE_NAME}). สงวนลิขสิทธิ์ — ออกแบบเพื่อ SEO และ Google Knowledge Graph
        </p>
      </div>
    </footer>
  );
}
