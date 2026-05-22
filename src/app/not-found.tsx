import Link from "next/link";
import { KEYWORD } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl text-white">404</h1>
      <p className="mt-4 text-silver">ไม่พบหน้าที่คุณต้องการ — {KEYWORD}</p>
      <Link href="/" className="mt-8 text-accent hover:underline">
        กลับหน้าแรก
      </Link>
    </div>
  );
}
