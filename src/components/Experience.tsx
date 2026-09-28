// ============ EXPERIENCE — SIMPLE LIST ============
import React from "react";
import { EXPERIENCES, EDUCATION_LIST } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-5 py-20 sm:px-8"
    >
      {/* Section header */}
      <ScrollReveal className="mb-12">
        <h2
          className="text-3xl tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Experience
        </h2>
      </ScrollReveal>

      {/* Experience items — simple rows */}
      <div className="space-y-0">
        {EXPERIENCES.map((exp, idx) => (
          <ScrollReveal key={exp.period + exp.role} delayMs={(idx % 3) * 60}>
            <div className="flex flex-col justify-between gap-1 border-t border-[#EAEAEA] py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <div className="flex-1">
                <h3 className="text-[15px] font-medium text-[#1a1a1a]">
                  {exp.role}
                </h3>
                <p className="mt-0.5 text-[13px] text-[#737373]">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="shrink-0 font-mono text-[12px] text-[#a3a3a3]">
                {exp.period}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Education — same clean style */}
      <div className="mt-16">
        <ScrollReveal className="mb-6">
          <h3
            className="text-2xl tracking-[-0.02em] text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Education
          </h3>
        </ScrollReveal>

        <div className="space-y-0">
          {EDUCATION_LIST.map((edu, idx) => (
            <ScrollReveal key={edu.degree} delayMs={idx * 60}>
              <div className="flex flex-col justify-between gap-1 border-t border-[#EAEAEA] py-5 sm:flex-row sm:items-baseline sm:gap-8">
                <div className="flex-1">
                  <h4 className="text-[15px] font-medium text-[#1a1a1a]">
                    {edu.degree}
                  </h4>
                  <p className="mt-0.5 text-[13px] text-[#737373]">
                    {edu.institution}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[12px] text-[#a3a3a3]">
                  {edu.status}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
