// ============ HERO COMPONENT ============
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowDown, Award, FileText, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-16 sm:px-8 md:pt-20 md:pb-24">
      {/* Background subtle radial ambient glow */}
      <div
        className="pointer-events-none absolute -top-12 left-1/4 -z-10 h-72 w-96 rounded-full bg-emerald-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-3xl">
        {/* Eyebrow badge with GHL Certified tag */}
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300">
            <Award className="h-3.5 w-3.5" />
            <span>GoHighLevel Certified Admin</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400">
            <MapPin className="h-3 w-3 text-emerald-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>

        {/* Primary Display Headline */}
        <h1 className="text-3xl font-normal tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl leading-[1.15]">
          Building full-stack web platforms and autonomous CRM automation systems.
        </h1>

        {/* Subtext */}
        <p className="mt-5 text-base font-normal leading-relaxed text-zinc-400 sm:text-lg">
          {PERSONAL_INFO.bio}
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#work"
            className="tactile-btn inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            <span>Explore Work & Systems</span>
            <ArrowDown className="h-3 w-3" />
          </a>

          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Njoh_Bless_CV.pdf"
            className="tactile-btn inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-normal text-white transition hover:border-white/25 hover:bg-white/[0.08]"
          >
            <FileText className="h-3.5 w-3.5 text-zinc-300" />
            <span>Download CV (PDF)</span>
          </a>

          <a
            href="#contact"
            className="tactile-btn inline-flex items-center gap-2 rounded-md border border-white/10 bg-transparent px-4 py-2 text-xs font-normal text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Quick credibility stats bar */}
        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-8 sm:max-w-lg">
          <div>
            <div className="font-mono text-xl font-normal tracking-tight text-white sm:text-2xl">
              2x
            </div>
            <div className="text-xs text-zinc-400">GHL Certified</div>
          </div>
          <div>
            <div className="font-mono text-xl font-normal tracking-tight text-white sm:text-2xl">
              BTech
            </div>
            <div className="text-xs text-zinc-400">Software Engineering</div>
          </div>
          <div>
            <div className="font-mono text-xl font-normal tracking-tight text-white sm:text-2xl">
              100%
            </div>
            <div className="text-xs text-zinc-400">End-to-End Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
}
