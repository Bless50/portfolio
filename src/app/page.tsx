// ============ MAIN PORTFOLIO PAGE (SERVER COMPONENT) ============
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/WorkSection";
import { Experience } from "@/components/Experience";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0c0e] text-[#f3f4f6]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <Experience />
        <SkillsGrid />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
