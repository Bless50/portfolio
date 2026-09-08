"use client";

// ============ NAVBAR COMPONENT ============
import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Selected Systems", href: "#work" },
    { label: "Experience & Education", href: "#experience" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#0b0c0e]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand identity & live availability */}
        <a
          href="#"
          className="group flex items-center gap-3 text-sm font-medium tracking-tight text-white focus:outline-none"
        >
          <span className="font-medium text-zinc-100 transition-colors group-hover:text-emerald-400">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-normal text-emerald-400 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-normal text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick CTA Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Njoh_Bless_CV.pdf"
            className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-normal text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            <FileText className="h-3 w-3 text-zinc-400" />
            <span>CV</span>
          </a>

          <a
            href="#contact"
            className="tactile-btn inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-normal text-white transition hover:border-white/25 hover:bg-white/[0.1]"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-3 w-3 text-zinc-400" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="tactile-btn inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-white/[0.06] hover:text-white md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#0e1014] px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-normal text-zinc-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Njoh_Bless_CV.pdf"
                className="tactile-btn flex w-full items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] py-2 text-xs font-normal text-zinc-200"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Download CV (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="tactile-btn flex w-full items-center justify-center gap-1.5 rounded-md border border-white/10 bg-white/10 py-2 text-xs font-medium text-white"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
