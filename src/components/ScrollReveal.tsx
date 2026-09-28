"use client";

// ============ SCROLL REVEAL (INTERSECTION OBSERVER) ============
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If IntersectionObserver is unavailable, reveal smoothly on next frame
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      const frameId = requestAnimationFrame(() => setIsRevealed(true));
      return () => cancelAnimationFrame(frameId);
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`reveal-on-scroll ${isRevealed ? "is-revealed" : ""} ${className}`}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
