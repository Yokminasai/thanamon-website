import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ParticleBackground } from "@/components/ParticleBackground";
import { GradientOrbs } from "@/components/GradientOrbs";
import { CustomCursor } from "@/components/CustomCursor";
import { buildMetadata, personJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-thai",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({});

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoThai.variable} ${spaceGrotesk.variable}`}>
      <head>
        <JsonLd data={[personJsonLd(), websiteJsonLd()]} />
        <link rel="me" href="https://thanamonofficial.wordpress.com/" />
        <link rel="me" href="https://www.youtube.com/@thanamon.soponthanawat" />
        <link rel="me" href="https://www.instagram.com/thanamon.soponthanawat/" />
      </head>
      <body className="font-sans">
        <LoadingScreen />
        <ParticleBackground />
        <GradientOrbs />
        <CustomCursor />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
