// ============ MAIN PORTFOLIO PAGE (SERVER COMPONENT) ============
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { Experience } from "@/components/Experience";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] text-[#1a1a1a]">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <AboutSection />
        <WorkSection />
        <Experience />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
