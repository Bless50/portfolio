// ============ ABOUT SECTION ============
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <ScrollReveal className="max-w-2xl">
        <h2
          className="text-3xl tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About
        </h2>

        <p className="mt-6 text-[15px] leading-[1.75] text-[#525252]">
          {PERSONAL_INFO.bio}
        </p>

        {/* Quick info row */}
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[#EAEAEA] pt-6 text-[13px] text-[#a3a3a3]">
          <span>{PERSONAL_INFO.location}</span>
          <span className="text-[#D4D4D4]">·</span>
          <span>GHL Certified Admin</span>
          <span className="text-[#D4D4D4]">·</span>
          <span>BTech Software Engineering</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
