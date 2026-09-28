// ============ ROOT LAYOUT ============
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bless Nde — Developer & Automation Specialist",
  description:
    "Full-stack developer and CRM automation specialist building web platforms, AI agents, and business workflow systems.",
  keywords: [
    "Full-Stack Developer",
    "CRM Automation",
    "GoHighLevel",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bless Nde" }],
  openGraph: {
    title: "Bless Nde — Developer & Automation Specialist",
    description:
      "Building web platforms, AI agents, and business workflow systems.",
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
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#FAFAF8] font-sans text-[#1a1a1a] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
