// ============ PROJECT DETAIL PAGE ============
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

// ============ STATIC PARAMS — PRE-RENDER ALL PROJECT PAGES ============
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

// ============ DYNAMIC METADATA ============
export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  // We need to resolve params synchronously for metadata in a way that works
  // Since generateStaticParams pre-generates all pages, we do a lookup
  return params.then(({ id }) => {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return { title: "Project not found" };
    return {
      title: `${project.title} — Bless Nde`,
      description: project.tagline,
    };
  });
}

// ============ PAGE COMPONENT ============
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const isVA = project.track === "va";

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1a1a1a]">
      {/* ============ TOP NAV BAR ============ */}
      <header className="sticky top-0 z-50 border-b border-[#EAEAEA] bg-[#FAFAF8]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[13px] text-[#737373] transition-colors hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to all work</span>
          </Link>

          {/* External link if available */}
          {(project.liveUrl || project.githubUrl) && (
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-[#EAEAEA] bg-white px-3 py-1.5 text-[12px] text-[#737373] transition hover:border-[#D4D4D4] hover:text-[#1a1a1a]"
            >
              <span>View live</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </header>

      {/* ============ PROJECT HERO ============ */}
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-10 sm:px-8 md:pt-20">
        <div className="max-w-3xl animate-entry">
          {/* Category + year */}
          <div className="flex items-center gap-2 text-[13px] text-[#a3a3a3]">
            <span>{project.category}</span>
            <span className="text-[#D4D4D4]">/</span>
            <span className="font-mono">{project.year}</span>
          </div>

          {/* Title */}
          <h1
            className="mt-4 text-3xl tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-base leading-relaxed text-[#737373] sm:text-lg">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* ============ PROJECT THUMBNAIL ============ */}
      <section className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#EAEAEA] bg-[#F3F3F0] animate-entry animate-entry-d1">
          <Image
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>
      </section>

      {/* ============ PROJECT DETAIL CONTENT ============ */}
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_280px]">
          {/* ============ MAIN CONTENT COLUMN ============ */}
          <div className="space-y-12 animate-entry animate-entry-d2">
            {/* Developer track — Case study sections */}
            {!isVA && project.caseStudy && (
              <>
                <DetailBlock
                  label="Problem"
                  content={project.caseStudy.problem}
                />
                <DetailBlock
                  label="Solution"
                  content={project.caseStudy.solution}
                />
                <DetailBlock
                  label="Impact"
                  content={project.caseStudy.impact}
                />
                <DetailBlock
                  label="Technical rationale"
                  content={project.caseStudy.rationale}
                />
              </>
            )}

            {/* VA track — Brief + workflow highlights */}
            {isVA && (
              <>
                {project.projectBrief && (
                  <DetailBlock
                    label="Project brief"
                    content={project.projectBrief}
                  />
                )}

                {project.workflowHighlights && (
                  <div>
                    <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
                      Workflow architecture
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {project.workflowHighlights.map((step, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-[15px] leading-[1.7] text-[#525252]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4D4D4]" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ============ SIDEBAR ============ */}
          <aside className="space-y-8 animate-entry animate-entry-d3">
            {/* Tech stack / Tools */}
            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
                {isVA ? "Tools used" : "Stack"}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {(isVA && project.toolsUsed
                  ? project.toolsUsed
                  : project.tags
                ).map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#EAEAEA] bg-[#F7F7F5] px-2.5 py-1 font-mono text-[11px] text-[#525252]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div>
                <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
                  Links
                </h3>
                <div className="mt-3 space-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[13px] text-[#737373] transition-colors hover:text-[#1a1a1a]"
                    >
                      <span>Live / Demo</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[13px] text-[#737373] transition-colors hover:text-[#1a1a1a]"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Track type */}
            <div>
              <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
                Type
              </h3>
              <p className="mt-2 text-[13px] text-[#525252]">
                {isVA ? "CRM & automation" : "Software development"}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FOOTER NAV ============ */}
      <footer className="border-t border-[#EAEAEA] py-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-[13px] text-[#737373] transition-colors hover:text-[#1a1a1a]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All projects</span>
          </Link>
          <Link
            href="/#contact"
            className="text-[13px] text-[#a3a3a3] transition-colors hover:text-[#1a1a1a]"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </div>
  );
}

// ============ DETAIL BLOCK SUB-COMPONENT ============
function DetailBlock({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  return (
    <div>
      <h3 className="text-[12px] font-medium uppercase tracking-[0.08em] text-[#a3a3a3]">
        {label}
      </h3>
      <p className="mt-3 text-[15px] leading-[1.75] text-[#525252]">
        {content}
      </p>
    </div>
  );
}
