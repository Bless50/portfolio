// ============ FOOTER COMPONENT ============
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#0b0c0e] py-10 text-xs text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <span className="font-medium text-zinc-300">{PERSONAL_INFO.name}</span>
          <span className="text-zinc-500">·</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono text-zinc-400">
          <span>Full-Stack Development · GHL CRM Automation</span>
        </div>
      </div>
    </footer>
  );
}
