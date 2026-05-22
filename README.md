# ธนมน โสภณธนวัฒน์ — Personal Brand SEO Website

เว็บไซต์ personal brand ภาษาไทย สำหรับ SEO keyword **ธนมน โสภณธนวัฒน์** — Next.js 15 App Router, Tailwind CSS, Framer Motion, พร้อม deploy บน Vercel

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Static generation + JSON-LD SEO

## Local Development

```bash
npm install
cp .env.example .env.local
# แก้ NEXT_PUBLIC_SITE_URL เป็น URL จริง เช่น https://your-domain.vercel.app
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical URL สำหรับ sitemap, OG, JSON-LD |

## Deploy to Vercel (Production)

### 1. Push โค้ดขึ้น GitHub/GitLab/Bitbucket

```bash
git init
git add .
git commit -m "Initial Thanamon SEO site"
git remote add origin <your-repo-url>
git push -u origin main
```

### 2. Import บน Vercel Dashboard

1. ไปที่ [vercel.com/new](https://vercel.com/new)
2. Import repository นี้
3. Framework Preset: **Next.js** (ตรวจจับอัตโนมัติ)
4. Root Directory: `.` (default)
5. Build Command: `npm run build` (default)
6. Output: Next.js default (ไม่ต้องตั้งเอง)

### 3. Environment Variables บน Vercel

ใน **Project → Settings → Environment Variables**:

- `NEXT_PUBLIC_SITE_URL` = `https://your-production-domain.com` (Production)
- ใส่ค่าเดียวกันใน Preview ถ้าต้องการ canonical ถูกต้องบน preview

### 4. Recommended Vercel Settings

| Setting | Value |
|---------|--------|
| Region | Singapore (`sin1`) — ตั้งใน `vercel.json` แล้ว |
| Node.js Version | 20.x |
| Install Command | `npm install` |
| Build Command | `npm run build` |

### 5. Deploy via CLI (ทางเลือก)

```bash
npm i -g vercel
vercel login
vercel link
vercel env pull .env.local
vercel --prod
```

### 6. ไม่มีโดเมนซื้อเอง — ใช้ URL ฟรีจาก Vercel ก่อน

Vercel ให้ subdomain ฟรีอัตโนมัติ เช่น `https://thanamon-website.vercel.app` (ชื่อขึ้นกับชื่อโปรเจกต์)

1. Deploy ครั้งแรก (ยังไม่ต้องใส่ env ก็ได้)
2. คัดลอก URL จากหน้า **Deployments** (ปุ่ม Visit)
3. ไป **Settings → Environment Variables** → ใส่  
   `NEXT_PUBLIC_SITE_URL` = URL นั้น (Production + Preview)
4. **Redeploy** อีกครั้ง — canonical, sitemap, JSON-LD จะชี้ URL ถูกต้อง

ใช้ URL นี้ลง Google Search Console และแชร์ลิงก์ได้เลย ไม่ต้องซื้อโดเมนก่อน

### 7. อยากใช้โดเมน `.dev` (เช่น `thanamon.dev`)

`.dev` เป็นนามสกุลจริง (Google Registry) — **ต้องซื้อ/จดทะเบียน** จากผู้ให้บริการ เช่น Cloudflare, Namecheap, Google Domains — โดยประมาณ $12–20 USD/ปี

**ขั้นตอนสั้นๆ**

1. ค้นหาชื่อว่าง เช่น `thanamon.dev`, `thanamonsoponthanawat.dev`
2. ซื้อโดเมน → ไป Vercel → Project → **Domains** → Add `thanamon.dev`
3. ตั้ง DNS ตามที่ Vercel บอก (มักเป็น A/CNAME หรือ nameserver ไป Vercel)
4. เปลี่ยน `NEXT_PUBLIC_SITE_URL` เป็น `https://thanamon.dev` แล้ว redeploy

หมายเหตุ: โดเมน `.dev` บังคับ HTTPS — Vercel จัดการให้อัตโนมัติเมื่อผูกโดเมนแล้ว

| ทางเลือก | ราคา | เหมาะกับ |
|----------|------|----------|
| `*.vercel.app` | ฟรี | เริ่มต้น, SEO ทดสอบ, ยังไม่ซื้อโดเมน |
| `*.dev` ที่ซื้อเอง | ~$12–20/ปี | แบรนด์สั้น จำง่าย ดูมืออาชีพ |

## Vercel Plugin ใน Cursor

Plugin Vercel ให้:

- **Skills** — คำแนะนำ Next.js, deploy, env vars, SEO (โหลดอัตโนมัติเมื่อเกี่ยวข้อง)
- **Commands** — `/deploy`, `/env`, `/bootstrap`, `/status`
- **MCP** — `plugin-vercel-vercel` (ต้อง `mcp_auth` ใน Cursor เพื่อ deploy/status จากแชท)

หลัง authenticate MCP สามารถใช้คำสั่ง deploy และดูสถานะ deployment ได้จาก agent

## SEO Checklist

- [x] JSON-LD: Person, WebSite, Article, BreadcrumbList
- [x] `rel="me"` ลิงก์ WordPress, YouTube, Instagram
- [x] `sameAs` ใน Person schema
- [x] `sitemap.xml` + `robots.txt` (App Router)
- [x] Canonical URLs + Open Graph + Twitter cards
- [x] Thai `lang="th"` + topical content

## แก้ YouTube Embed

แก้ video ID ใน `src/lib/constants.ts` → `YOUTUBE_EMBEDS` ให้ตรงกับวิดีโอจริงจากช่อง [@thanamon.soponthanawat](https://www.youtube.com/@thanamon.soponthanawat)

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint |

## License

Private — © ธนมน โสภณธนวัฒน์
