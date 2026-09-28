// ============ WORK SECTION — CLEAN GRID ============
import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      {/* Section header */}
      <ScrollReveal className="mb-12">
        <h2
          className="text-3xl tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Work
        </h2>
      </ScrollReveal>

      {/* Two-column project grid with scroll reveals */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <ScrollReveal
            key={project.id}
            delayMs={(idx % 2) * 120}
            threshold={0.08}
          >
            <ProjectCard project={project} index={idx} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
