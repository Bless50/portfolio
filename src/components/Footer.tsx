// ============ FOOTER — MINIMAL ============
import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EAEAEA] py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 text-[12px] text-[#a3a3a3] sm:px-8">
        <span>© {currentYear} {PERSONAL_INFO.name}</span>
        <span className="font-mono">{PERSONAL_INFO.location}</span>
      </div>
    </footer>
  );
}
