// ============ EXPERIENCE, CERTIFICATIONS & EDUCATION ============
import React from "react";
import { EXPERIENCES, CERTIFICATIONS, EDUCATION_LIST } from "@/data/portfolioData";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 border-t border-white/[0.06]"
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-xl font-medium tracking-[-0.02em] text-white sm:text-2xl">
          Professional Track Record
        </h2>
        <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-400">
          Proven history delivering client automation architectures and production institutional platforms.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-5">
        {EXPERIENCES.map((exp) => (
          <div
            key={exp.period + exp.role}
            className="rounded-xl border border-white/[0.08] bg-[#121418] p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-base font-medium text-white sm:text-lg">
                  {exp.role}
                </h3>
                <div className="mt-0.5 text-xs font-normal text-emerald-400 sm:text-sm">
                  {exp.company} <span className="text-zinc-600">·</span>{" "}
                  <span className="text-zinc-400">{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs font-normal text-zinc-400">
                <Briefcase className="h-3 w-3 text-zinc-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs font-normal text-zinc-300 sm:text-sm">
              {exp.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span className="leading-relaxed text-zinc-400">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.04] pt-3">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] font-normal text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Education Sub-Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Certifications */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-6">
          <div className="flex items-center gap-2 text-amber-400">
            <Award className="h-4 w-4" />
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-200">
              Certifications
            </h3>
          </div>
          <div className="mt-4 space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-white/[0.05] bg-[#0b0c0e] p-3.5"
              >
                <div className="text-xs font-medium text-white sm:text-sm">
                  {cert.name}
                </div>
                <div className="mt-0.5 text-xs text-zinc-400">
                  Issued by {cert.issuer} · {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121418] p-6">
          <div className="flex items-center gap-2 text-emerald-400">
            <GraduationCap className="h-4 w-4" />
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-200">
              Education
            </h3>
          </div>
          <div className="mt-4 space-y-3">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg border border-white/[0.05] bg-[#0b0c0e] p-3.5"
              >
                <div className="text-xs font-medium text-white sm:text-sm">
                  {edu.degree}
                </div>
                <div className="mt-0.5 text-xs text-zinc-400">
                  {edu.institution} · {edu.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
