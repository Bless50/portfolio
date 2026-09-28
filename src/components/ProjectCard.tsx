// ============ PROJECT CARD — LINKS TO DEDICATED PAGE ============
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/portfolio";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="project-card group flex h-full flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-white transition hover:border-[#D4D4D4]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F3F3F0]">
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.tagline}`}
          fill
          className="project-image object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text below thumbnail */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          {/* Category + year */}
          <div className="flex items-center gap-2 text-[12px] text-[#a3a3a3]">
            <span>{project.category}</span>
            <span className="text-[#D4D4D4]">/</span>
            <span className="font-mono">{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-[#1a1a1a]">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="mt-1 text-[13px] leading-relaxed text-[#737373]">
            {project.tagline}
          </p>
        </div>

        {/* View link */}
        <div className="mt-4 flex items-center gap-1 text-[12px] text-[#a3a3a3] transition-colors group-hover:text-[#1a1a1a]">
          <span>View project</span>
          <ArrowUpRight className="h-3 w-3" />
        </div>
      </div>
    </Link>
  );
}
