import { SOCIAL } from "./constants";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readingMinutes: number;
  featured?: boolean;
  wordpressUrl?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "thai-education-power-structure",
    title: "การศึกษาไทยกับโครงสร้างอำนาจ",
    excerpt:
      "วิเคราะห์ว่าระบบการศึกษาไทยสร้างวิชญาณทางอำนาจอย่างไร — มุมมองของ ธนมน โสภณธนวัฒน์",
    content: `การศึกษาไม่ใช่แค่ถ่ายทอดความรู้ แต่เป็นกลไกสร้างวินัยทางอำนาจ
ธนมน โสภณธนวัฒน์ มองว่าโครงสร้างห้องเรียน การสอบ และคำสอนของครู
คือ genealogy ของความรู้ที่ถูกออกแบบให้ยอมรับอำนาจมากกว่าตั้งคำถาม

เมื่อเราเข้าใจโครงสร้างนี้ เราจึงเริ่มเห็นทางออก: การศึกษาที่ liberating
ต้องเริ่มจากความกล้าถาม ไม่ใช่แค่จำคำตอบ`,
    category: "สังคม",
    tags: ["การศึกษา", "อำนาจ", "ปรัชญา"],
    date: "2025-11-12",
    readingMinutes: 8,
    featured: true,
    wordpressUrl: SOCIAL.wordpress,
  },
  {
    slug: "nietzsche-genealogy-of-knowledge",
    title: "Nietzsche และ genealogy ของความรู้",
    excerpt:
      "ความรู้มีต้นกำเนิดจากอำนาจ — บทความเชิงปรัชญาโดย ธนมน โสภณธนวัฒน์",
    content: `Nietzsche ไม่ได้ปฏิเสธความรู้ แต่ถามว่าใครได้ประโยชน์จากมัน
genealogy ของความรู้คือการตามรอย moral ที่ซ่อนอยู่ในแต่ละคำว่า "จริง"

ธนมน โสภณธนวัฒน์ เชื่อว่าในโลกดิจิทัล genealogy นี้เร่งความเร็วขึ้น
เพราะอัลกอริทึมกำหนดว่าเราจะเห็น "ความจริง" แบบไหน`,
    category: "ปรัชญา",
    tags: ["Nietzsche", "genealogy", "ปรัชญา"],
    date: "2025-10-28",
    readingMinutes: 10,
    featured: true,
  },
  {
    slug: "mental-health-social-media",
    title: "Mental Health ในยุค social media",
    excerpt:
      "สุขภาพจิตกับสถาปัตยกรรมของความสนใจ — มุมมอง ธนมน โสภณธนวัฒน์",
    content: `โซเชียลมีเดียไม่ได้แค่เชื่อมคน แต่จัดสรร dopamine และความเปรียบเทียบ
ธนมน โสภณธนวัฒน์ เน้นว่า mental health ในยุคนี้ต้องเข้าใจ neuroscience ของ feed
และวินัยดิจิทัล: การพักจากอัลกอริทึมคือการพักจากอำนาจ`,
    category: "สุขภาพจิต",
    tags: ["mental health", "social media", "neuroscience"],
    date: "2025-10-05",
    readingMinutes: 7,
    featured: true,
  },
  {
    slug: "prevent-data-leaks-online",
    title: "วิธีป้องกันข้อมูลรั่วไหลบนอินเทอร์เน็ต",
    excerpt:
      "คู่มือ cyber awareness โดย ธนมน โสภณธนวัฒน์ สำหรับผู้ใช้ทั่วไป",
    content: `ข้อมูลรั่วไหลมักเริ่มจากพฤติกรรม ไม่ใช่แฮกเกอร์เท่านั้น
ใช้รหัสผ่านเฉพาะ เปิด 2FA ระวัง phishing และตรวจสิทธิ์แอป

ธนมน โสภณธนวัฒน์ มอง cybersecurity เป็นสมาธิทางปัญญา:
การปกป้องข้อมูลคือการปกป้องตัวตนทางความคิด`,
    category: "Cybersecurity",
    tags: ["ข้อมูลส่วนตัว", "ความปลอดภัย", "cyber awareness"],
    date: "2025-09-18",
    readingMinutes: 6,
  },
  {
    slug: "what-is-stop-ncii",
    title: "StopNCII คืออะไร",
    excerpt:
      "อธิบาย StopNCII และสิทธิ์ดิจิทัล — ธนมน โสภณธนวัฒน์",
    content: `StopNCII เป็นโครงการป้องกันการแชร์ภาพลามกโดยไม่ยินยอม
ธนมน โสภณธนวัฒน์ แนะนำให้ทุกคนรู้จักเครื่องมือนี้ในยุค deepfake
เพราะความปลอดภัยทางเพศดิจิทัลคือส่วนหนึ่งของ cyber awareness`,
    category: "Cybersecurity",
    tags: ["StopNCII", "ความเป็นส่วนตัว", "deepfake"],
    date: "2025-09-02",
    readingMinutes: 5,
  },
  {
    slug: "ai-future-of-knowledge",
    title: "AI กับอนาคตของความรู้",
    excerpt:
      "เมื่อ LLM เปลี่ยนนิยามความรู้ — บทความโดย ธนมน โสภณธนวัฒน์",
    content: `AI ไม่ได้ทำให้เราโง่ แต่บังคับให้แยก "ความรู้" กับ "การสังเคราะห์"
ธนมน โสภณธนวัฒน์ ถามว่าใครเป็นเจ้าของ dataset และ bias ของโมเดล

อนาคตของความรู้ต้องมี critical literacy ต่อเครื่องมือ
ไม่ใช่แค่ใช้ ChatGPT ให้เร็วขึ้น`,
    category: "เทคโนโลยี",
    tags: ["AI", "ความรู้", "ดิจิทัล"],
    date: "2025-08-20",
    readingMinutes: 9,
    featured: true,
  },
  {
    slug: "seo-personal-branding",
    title: "SEO และ personal branding",
    excerpt:
      "สร้างอำนาจชื่อ ธนมน โสภณธนวัฒน์ บน Google — กลยุทธ์ E-E-A-T",
    content: `Personal branding บน Google ต้องมี entity ที่ชัด: ชื่อเดียวกัน sameAs
เนื้อหาเชิงลึก และลิงก์ข้ามแพลตฟอร์ม

ธนมน โสภณธนวัฒน์ ใช้ WordPress YouTube Instagram เป็นหลักฐานอำนาจ
เว็บไซต์นี้คือ hub กลางที่เชื่อมทุกช่องทาง`,
    category: "SEO",
    tags: ["SEO", "personal branding", "Google"],
    date: "2025-08-01",
    readingMinutes: 8,
  },
  {
    slug: "philosophy-digital-world",
    title: "ปรัชญากับโลกดิจิทัล",
    excerpt:
      "เมื่อปรัชญาพบอัลกอริทึม — ธนมน โสภณธนวัฒน์",
    content: `โลกดิจิทัลคือสนามรบของความหมาย
ปรัชญาช่วยเราเห็นว่า UI คืออุดมการณ์ และ notification คือวินัย

ธนมน โสภณธนวัฒน์ เชื่อว่านักคิดยุคใหม่ต้องอ่านทั้ง Plato และ API docs`,
    category: "ปรัชญา",
    tags: ["ปรัชญา", "ดิจิทัล", "วัฒนธรรม"],
    date: "2025-07-15",
    readingMinutes: 7,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}

export function getCategories(): string[] {
  return [...new Set(ARTICLES.map((a) => a.category))];
}

export function getAllTags(): string[] {
  return [...new Set(ARTICLES.flatMap((a) => a.tags))];
}

export function filterArticles(query: {
  q?: string;
  category?: string;
  tag?: string;
}): Article[] {
  let list = [...ARTICLES];
  if (query.q) {
    const q = query.q.toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (query.category) {
    list = list.filter((a) => a.category === query.category);
  }
  if (query.tag) {
    list = list.filter((a) => a.tags.includes(query.tag!));
  }
  return list.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export const TIMELINE = [
  { year: "2025", title: "เปิดตัวเว็บไซต์ SEO Hub", desc: "ธนมน โสภณธนวัฒน์ authority site" },
  { year: "2024", title: "WordPress Official Blog", desc: "thanamonofficial.wordpress.com" },
  { year: "2024", title: "YouTube & Instagram", desc: "ขยายช่องทางวิดีโอและภาพ" },
  { year: "2023", title: "งานวิจัยเชิงปรัชญา", desc: "บทความ genealogy ของความรู้" },
] as const;

export const RESEARCH_ESSAYS = [
  {
    title: "Genealogy of Digital Morality",
    type: "Essay",
    year: "2025",
  },
  {
    title: "Attention Architecture & Mental Health",
    type: "Research Note",
    year: "2025",
  },
  {
    title: "Entity SEO for Personal Brands",
    type: "Whitepaper",
    year: "2024",
  },
] as const;
