"use client";

// ============ CONTACT — CLEAN & SIMPLE ============
import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Check, Copy } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

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
      className="mx-auto max-w-5xl px-5 py-24 sm:px-8"
    >
      <ScrollReveal className="max-w-xl">
        <h2
          className="text-3xl tracking-[-0.03em] text-[#1a1a1a] sm:text-4xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Get in touch
        </h2>

        <p className="mt-4 text-base leading-relaxed text-[#737373]">
          Available for full-stack development and CRM automation projects.
        </p>

        {/* Email with copy */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[15px] text-[#1a1a1a]">
            {PERSONAL_INFO.email}
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-[#EAEAEA] bg-white px-3 py-1.5 text-[12px] text-[#737373] transition hover:border-[#D4D4D4] hover:text-[#1a1a1a]"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Links */}
        <div className="mt-10 flex items-center gap-6 border-t border-[#EAEAEA] pt-6 text-[13px] text-[#a3a3a3]">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1a1a1a]"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#1a1a1a]"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Njoh_Bless_CV.pdf"
            className="transition-colors hover:text-[#1a1a1a]"
          >
            CV (PDF)
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
