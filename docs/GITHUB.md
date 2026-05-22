# อัปโหลดโปรเจกต์ขึ้น GitHub

โปรเจกต์มี `git init` และ commit แรกแล้ว — เหลือแค่เชื่อม GitHub

## วิธีที่ 1: อัตโนมัติด้วย GitHub CLI (แนะนำ)

### ติดตั้ง `gh` (ครั้งเดียว)

**Windows (winget):**
```powershell
winget install --id GitHub.cli
```

หรือดาวน์โหลดจาก https://cli.github.com/

### Login + สร้าง repo + push

```powershell
cd d:\Thanamon-Website
gh auth login
gh repo create thanamon-website --public --source=. --remote=origin --push
```

- เปลี่ยน `thanamon-website` เป็นชื่อ repo ที่ต้องการ
- ใช้ `--private` แทน `--public` ถ้าไม่ต้องการเปิดเผย

---

## วิธีที่ 2: ผ่านเว็บ GitHub (ไม่ต้องติดตั้ง gh)

1. ไป https://github.com/new
2. ตั้งชื่อ repo เช่น `thanamon-website` — **ไม่**ติ๊ก "Add a README"
3. สร้าง repo แล้วคัดลอก URL (เช่น `https://github.com/YOUR_USER/thanamon-website.git`)
4. ใน PowerShell:

```powershell
cd d:\Thanamon-Website
git branch -M main
git remote add origin https://github.com/YOUR_USER/thanamon-website.git
git push -u origin main
```

Windows อาจถาม login ผ่าน browser (Git Credential Manager)

---

## หลังขึ้น GitHub แล้ว → Vercel อัตโนมัติ

1. https://vercel.com/new
2. **Import Git Repository** → เลือก repo ที่เพิ่ง push
3. Deploy — ทุกครั้งที่ `git push` Vercel จะ build ใหม่เอง

---

## สรุป

| ขั้นตอน | ทำอัตโนมัติได้? |
|---------|------------------|
| `git init` + commit | ✅ ทำในเครื่องแล้ว |
| สร้าง repo บน GitHub | ต้องมี `gh` หรือกดสร้างบนเว็บ |
| `git push` | ✅ หลัง login ครั้งแรก |
| Vercel import จาก GitHub | ✅ หลังเชื่อม repo ใน Vercel |
