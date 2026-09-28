// ============ HERO — TEXT LEFT, PHOTO RIGHT ============
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:px-8 md:pt-28 md:pb-24">
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
        {/* ============ LEFT — HEADLINE & CTA ============ */}
        <div className="flex-1 animate-entry">
          <h1
            className="text-4xl leading-[1.1] tracking-[-0.03em] text-[#1a1a1a] sm:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Building web platforms
            <br />
            and automation systems.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#737373] animate-entry animate-entry-d1">
            Full-stack developer and CRM automation specialist, based in Yaoundé.
          </p>

          <div className="mt-8 flex items-center gap-4 animate-entry animate-entry-d2">
            <a
              href="#work"
              className="tactile-btn inline-flex items-center gap-2 rounded-md bg-[#1a1a1a] px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-[#333]"
            >
              <span>View work</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* ============ RIGHT — PROFILE PHOTO ============ */}
        <div className="animate-entry animate-entry-d2 shrink-0 self-center md:self-auto">
          <div className="relative aspect-[4/5] w-52 overflow-hidden rounded-2xl border border-[#EAEAEA] bg-[#F5F5F3] shadow-sm sm:w-60 md:w-72 lg:w-80">
            <Image
              src="/profile.jpg"
              alt="Bless Nde — portrait"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
