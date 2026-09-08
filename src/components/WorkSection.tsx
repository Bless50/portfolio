"use client";

// ============ WORK SECTION WITH DUAL-TRACK FILTER ============
import React, { useState } from "react";
import { PROJECTS } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectTrack } from "@/types/portfolio";
import { Briefcase, Code, Sparkles } from "lucide-react";

type FilterOption = "all" | ProjectTrack;

export function WorkSection() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    return p.track === filter;
  });

  const devCount = PROJECTS.filter((p) => p.track === "developer").length;
  const vaCount = PROJECTS.filter((p) => p.track === "va").length;

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      {/* Section Header & Filter Controls */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <h2 className="text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
            Selected Architecture & Systems
          </h2>
          <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-400">
            Real-world software engineering, GoHighLevel CRM infrastructure, and AI workflow automations.
          </p>
        </div>

        {/* Track Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/[0.08] bg-[#121418] p-1 text-xs">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`tactile-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition ${
              filter === "all"
                ? "bg-white text-zinc-950 font-medium shadow-sm"
                : "text-zinc-400 font-normal hover:text-white"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            <span>All ({PROJECTS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("developer")}
            className={`tactile-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition ${
              filter === "developer"
                ? "bg-emerald-500 text-zinc-950 font-medium shadow-sm"
                : "text-zinc-400 font-normal hover:text-white"
            }`}
          >
            <Code className="h-3 w-3" />
            <span>Development ({devCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilter("va")}
            className={`tactile-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 transition ${
              filter === "va"
                ? "bg-amber-400 text-zinc-950 font-medium shadow-sm"
                : "text-zinc-400 font-normal hover:text-white"
            }`}
          >
            <Briefcase className="h-3 w-3" />
            <span>GHL & VA Systems ({vaCount})</span>
          </button>
        </div>
      </div>

      {/* Projects Grid / Stack */}
      <div className="mt-10 grid grid-cols-1 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
