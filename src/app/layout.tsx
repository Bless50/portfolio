// ============ ROOT LAYOUT ============
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Blessing | Design Engineer & Full-Stack Architect",
  description:
    "Portfolio of Blessing — engineering resilient full-stack applications, scalable cloud backends, and tactile design systems.",
  keywords: [
    "Design Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Systems Architecture",
  ],
  authors: [{ name: "Blessing" }],
  openGraph: {
    title: "Blessing | Design Engineer & Full-Stack Architect",
    description:
      "Engineering digital products with obsessive craft, systems rigor, and verified outcomes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#0b0c0e] font-sans text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
