"use client";

// ============ PROJECT CARD (DEVELOPER & VA DUAL TRACK) ============
import React, { useState } from "react";
import { Project, QuadPillarCaseStudy } from "@/types/portfolio";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  HelpCircle,
  Layers,
  Play,
  TrendingUp,
  Wrench,
  X,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

type PillarKey = keyof QuadPillarCaseStudy;

export function ProjectCard({ project }: ProjectCardProps) {
  const [activePillar, setActivePillar] = useState<PillarKey>("problem");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const pillars: {
    key: PillarKey;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { key: "problem", label: "01 Problem", icon: HelpCircle },
    { key: "solution", label: "02 Solution", icon: Layers },
    { key: "impact", label: "03 Impact", icon: TrendingUp },
    { key: "rationale", label: "04 Rationale", icon: Cpu },
  ];

  const isVA = project.track === "va";

  return (
    <article className="interactive-card flex flex-col rounded-xl border border-white/[0.08] bg-[#121418] p-6 sm:p-8">
      {/* Card Header & Metadata */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-zinc-400">{project.year}</span>
            <span className="text-zinc-600">/</span>
            <span
              className={`text-xs font-normal ${
                isVA ? "text-amber-400" : "text-emerald-400"
              }`}
            >
              {project.category}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] text-zinc-300 uppercase tracking-wider">
              {isVA ? "VA & Automation" : "Developer"}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2">
          {isVA && project.videoUrl && (
            <button
              type="button"
              onClick={() => setShowVideoModal(true)}
              className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-300 transition hover:bg-amber-400/20"
            >
              <Play className="h-3 w-3 fill-amber-300" />
              <span>Watch Walkthrough</span>
            </button>
          )}

          {!isVA && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-normal text-zinc-300 transition hover:border-white/20 hover:text-white"
            >
              <span>Code / Demo</span>
              <ArrowUpRight className="h-3 w-3 text-zinc-400" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2.5 text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
        {project.tagline}
      </p>

      {/* Verified Metrics Strip */}
      <div className="mt-5 flex flex-wrap gap-2">
        {project.metrics.map((metric) => (
          <div
            key={metric}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-normal ${
              isVA
                ? "border-amber-500/20 bg-amber-500/10 text-amber-300"
                : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
            }`}
          >
            <CheckCircle2 className="h-3 w-3" />
            <span>{metric}</span>
          </div>
        ))}
      </div>

      {/* ============ VA-SPECIFIC LAYOUT ============ */}
      {isVA && (
        <div className="mt-7 space-y-4">
          {/* Project Brief */}
          {project.projectBrief && (
            <div className="rounded-lg border border-white/[0.06] bg-[#0b0c0e]/90 p-4 sm:p-5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90">
                Project Brief & Business Objective:
              </div>
              <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-300 sm:text-sm">
                {project.projectBrief}
              </p>
            </div>
          )}

          {/* Key Workflow Highlights */}
          {project.workflowHighlights && (
            <div className="rounded-lg border border-white/[0.06] bg-[#0e1014] p-4 sm:p-5">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                Execution & Workflow Architecture:
              </div>
              <ul className="mt-3 space-y-2 text-xs font-normal text-zinc-300 sm:text-sm">
                {project.workflowHighlights.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools Used Badges */}
          {project.toolsUsed && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400 mr-1">
                <Wrench className="h-3 w-3 text-amber-400" />
                Tools Used:
              </span>
              {project.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="rounded border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 font-mono text-[11px] text-amber-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ============ DEVELOPER-SPECIFIC LAYOUT ============ */}
      {!isVA && project.caseStudy && (
        <div className="mt-7 rounded-lg border border-white/[0.06] bg-[#0b0c0e]/90 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.06] pb-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.key;
              return (
                <button
                  key={pillar.key}
                  type="button"
                  onClick={() => setActivePillar(pillar.key)}
                  className={`tactile-btn inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs transition ${
                    isActive
                      ? "bg-white text-zinc-950 font-medium shadow-sm"
                      : "text-zinc-400 font-normal hover:bg-white/[0.05] hover:text-zinc-200"
                  }`}
                >
                  <Icon className={`h-3 w-3 ${isActive ? "text-zinc-950" : "text-zinc-400"}`} />
                  <span>{pillar.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 text-xs font-normal leading-relaxed text-zinc-300 sm:text-sm">
            {project.caseStudy[activePillar]}
          </div>

          {/* Technology Stack Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.04]">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mr-1">
              Stack:
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Video Walkthrough Modal */}
      {showVideoModal && project.videoUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-[#121418] p-4 sm:p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-white sm:text-base">
                  {project.title} — Walkthrough
                </h4>
                <p className="text-xs text-zinc-400">System demonstration & workflow breakdown</p>
              </div>
              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="tactile-btn rounded-md p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black border border-white/10">
              <iframe
                src={project.videoUrl}
                title={`${project.title} video walkthrough`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
