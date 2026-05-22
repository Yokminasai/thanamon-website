import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /** ป้องกัน /sitemap.xml → /sitemap.xml/ ที่ทำให้ Google Search Console fetch ล้มเหลว */
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "thanamonofficial.wordpress.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

export default nextConfig;
