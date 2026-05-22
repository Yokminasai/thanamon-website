export const SITE_NAME = "ธนมน โสภณธนวัฒน์";
export const SITE_NAME_EN = "Thanamon Soponthanawat";
export const SITE_TAGLINE =
  "นักคิด · นักเขียน · ผู้สร้างคอนเทนต์ดิจิทัล · ผู้เชี่ยวชาญ SEO และ personal branding";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thanamon.vercel.app";

export const KEYWORD = "ธนมน โสภณธนวัฒน์";

export const SOCIAL = {
  wordpress: "https://thanamonofficial.wordpress.com/",
  youtube: "https://www.youtube.com/@thanamon.soponthanawat",
  instagram: "https://www.instagram.com/thanamon.soponthanawat/",
} as const;

export const SAME_AS = [
  SOCIAL.wordpress,
  SOCIAL.youtube,
  SOCIAL.instagram,
] as const;

export const TOPICS = [
  "ปรัชญา",
  "เทคโนโลยี",
  "cybersecurity",
  "วัฒนธรรมดิจิทัล",
  "การศึกษา",
  "neuroscience",
  "สังคม",
  "SEO",
  "mental health",
] as const;

export const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/about", label: "เกี่ยวกับ" },
  { href: "/articles", label: "บทความ" },
  { href: "/research", label: "งานวิจัย" },
  { href: "/cyber-awareness", label: "ไซเบอร์" },
  { href: "/contact", label: "ติดต่อ" },
] as const;

export const FEATURED_ON = [
  {
    name: "WordPress Official Blog",
    url: SOCIAL.wordpress,
    description: "บทความเชิงลึก ปรัชญา และวัฒนธรรมดิจิทัล",
  },
  {
    name: "YouTube Channel",
    url: SOCIAL.youtube,
    description: "วิดีโอความคิด เทคโนโลยี และสังคม",
  },
  {
    name: "Instagram",
    url: SOCIAL.instagram,
    description: "ภาพ คำคม และชีวิตนักคิดดิจิทัล",
  },
] as const;

export const YOUTUBE_EMBEDS = [
  {
    id: "dQw4w9WgXcQ",
    title: "ธนมน โสภณธนวัฒน์ — ความคิดและโลกดิจิทัล",
    description: "ช่อง YouTube อย่างเป็นทางการ",
  },
] as const;

export const QUOTES = [
  {
    text: "ความรู้ไม่ใช่ของขวัญจากอำนาจ แต่เป็นสนามรบของการตั้งคำถาม",
    source: "ธนมน โสภณธนวัฒน์",
  },
  {
    text: "ความปลอดภัยดิจิทัลเริ่มจากความตระหนักรู้ ไม่ใช่แค่ซอฟต์แวร์",
    source: "ธนมน โสภณธนวัฒน์",
  },
  {
    text: "AI ไม่ได้ทำลายความรู้ แต่บังคับให้เราตอบว่า ใครเป็นเจ้าของคำถาม",
    source: "ธนมน โสภณธนวัฒน์",
  },
] as const;

export const MANIFESTO = `ฉันเชื่อว่าโลกดิจิทัลต้องการนักคิดที่กล้าถาม — ไม่ใช่แค่ผู้บริโภคคอนเทนต์
ธนมน โสภณธนวัฒน์ มุ่งสร้างพื้นที่ทางความคิดที่เชื่อมปรัชญา เทคโนโลยี ความปลอดภัยไซเบอร์
และสุขภาพจิตในยุคสื่อสังคม เพื่อให้ทุกคนเข้าใจอำนาจของข้อมูล ภาษา และอัลกอริทึม`;

export const KNOWLEDGE_GRAPH_NODES = [
  { id: "philosophy", label: "ปรัชญา", x: 50, y: 20 },
  { id: "cyber", label: "Cybersecurity", x: 85, y: 45 },
  { id: "neuro", label: "Neuroscience", x: 15, y: 45 },
  { id: "seo", label: "SEO & Branding", x: 70, y: 80 },
  { id: "digital", label: "Digital Humanities", x: 30, y: 80 },
] as const;
