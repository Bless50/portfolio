"use client";

// ============ CONTACT SECTION ============
import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Check, Copy, FileText, Mail, MessageSquare, Phone } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 border-t border-white/[0.06]"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121418] p-8 sm:p-12">
        {/* Ambient subtle glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 -z-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[90px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-normal text-emerald-400">
            <MessageSquare className="h-3 w-3" />
            <span>{PERSONAL_INFO.availabilityStatus}</span>
          </div>

          <h2 className="mt-4 text-2xl font-normal tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
            Let&apos;s build or automate your next system.
          </h2>

          <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400 sm:text-base">
            Whether you need custom web application development, GHL CRM architecture, or automated customer onboarding pipelines, I&apos;m ready to discuss your goals.
          </p>

          {/* Contact Actions Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-[#0b0c0e] px-4 py-2.5 font-mono text-xs font-normal text-zinc-200 sm:text-sm">
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>{PERSONAL_INFO.email}</span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="tactile-btn inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-zinc-700" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/237677653097`}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-normal text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Njoh_Bless_CV.pdf"
              className="tactile-btn inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-normal text-zinc-200 transition hover:border-white/20 hover:text-white"
            >
              <FileText className="h-3.5 w-3.5 text-zinc-400" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Presence Links */}
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/[0.06] pt-6 font-mono text-xs text-zinc-400">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400 font-sans">{PERSONAL_INFO.phone}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400 font-sans">Yaoundé, Cameroon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
