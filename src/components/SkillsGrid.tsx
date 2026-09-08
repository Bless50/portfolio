// ============ SKILLS & CAPABILITIES BENTO GRID ============
import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Check } from "lucide-react";

export function SkillsGrid() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 border-t border-white/[0.06]">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-white">
          Core Capabilities & Stack
        </h2>
        <p className="mt-2 text-sm font-normal text-zinc-400 leading-relaxed">
          Disciplines honed across frontend micro-interactions, robust APIs, and cloud infrastructures.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.title}
            className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121418] p-6 sm:p-7"
          >
            <div>
              <h3 className="text-base sm:text-lg font-medium text-white">
                {category.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-normal text-zinc-400 leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs font-normal text-zinc-300"
                >
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
