"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function BlueprintHero() {
  const svgRef = useRef<SVGSVGElement>(null);
  const reduced = useReducedMotion();

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-entrance",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );

      const strokes = gsap.utils.toArray<SVGPathElement>(".bp-draw");
      strokes.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(strokes, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: "power2.inOut",
        stagger: 0.12,
      });
      tl.fromTo(
        ".bp-label",
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1 },
        "-=0.6"
      );
      tl.fromTo(
        ".bp-stamp",
        { opacity: 0, scale: 1.7, rotate: -10 },
        { opacity: 1, scale: 1, rotate: -2, duration: 0.35, ease: "power4.in" },
        "-=0.1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={sectionRef} className="bg-grid border-b border-ink/10 px-6 pb-16 pt-28 sm:px-12 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="hero-entrance font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Sheet 01 — UK CDM &amp; property templates
          </p>
          <h1 className="hero-entrance font-display mt-5 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Get the paperwork sorted before the job starts.
          </h1>
          <p className="hero-entrance mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
            Editable, UK-specific CDM and property templates in plain
            English. We built them for small contractors, sole traders and
            refurb landlords — not consultancy budgets.
          </p>
          <div className="hero-entrance mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-7 py-3.5 font-display text-base font-bold text-white transition hover:-translate-y-0.5"
            >
              Browse the shop ↗
            </a>
            <a
              href="#categories"
              className="border-2 border-ink/20 px-7 py-3.5 font-display text-base font-bold text-ink transition hover:border-primary hover:text-primary"
            >
              See the templates
            </a>
          </div>
          <div className="hero-entrance mt-8 flex flex-wrap gap-3">
            {["Editable Word files", "Plain English", "Built from public HSE guidance"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-stamp/60 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-stamp"
                >
                  {item} ✓
                </span>
              )
            )}
          </div>
        </div>

        <div className="border-2 border-primary/30 bg-panel p-4 shadow-lg sm:p-6">
          <svg
            ref={svgRef}
            viewBox="0 0 560 420"
            className="block h-auto w-full"
            role="img"
            aria-label="A blueprint-style line drawing of a small house extension, annotated with the documents a job needs: construction phase plan, risk assessment and method statement"
          >
            <g stroke="var(--primary)" strokeWidth="2" fill="none" strokeLinecap="round">
              <path className="bp-draw" d="M40 350 L520 350" />
              <path className="bp-draw" d="M120 350 L120 190 L340 190 L340 350" />
              <path className="bp-draw" d="M100 190 L230 95 L360 190" />
              <path className="bp-draw" d="M155 350 L155 260 L205 260 L205 350" />
              <path className="bp-draw" d="M240 225 L300 225 L300 275 L240 275 Z M270 225 L270 275 M240 250 L300 250" />
              <path className="bp-draw" d="M340 250 L460 250 L460 350" />
              <path className="bp-draw" d="M340 240 L470 240" />
              <path className="bp-draw" d="M370 280 L430 280 L430 320 L370 320 Z" />
            </g>
            <g stroke="var(--ink)" strokeWidth="1" fill="none" opacity="0.7">
              <path className="bp-draw" d="M120 375 L340 375 M120 369 L120 381 M340 369 L340 381" />
              <path className="bp-draw" d="M495 95 L495 350 M489 95 L501 95 M489 350 L501 350" />
            </g>
            <g className="bp-label" fontFamily="var(--font-plex-mono)" fontSize="12" fill="var(--ink)">
              <text x="230" y="393" textAnchor="middle">6,400</text>
              <text x="513" y="225" textAnchor="middle" transform="rotate(90 513 225)">5,800</text>
            </g>
            <g className="bp-label">
              <line x1="230" y1="95" x2="170" y2="55" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
              <text x="165" y="48" textAnchor="end" fontFamily="var(--font-plex-mono)" fontSize="12" fill="var(--primary)">Construction phase plan</text>
            </g>
            <g className="bp-label">
              <line x1="400" y1="240" x2="440" y2="200" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
              <text x="445" y="195" fontFamily="var(--font-plex-mono)" fontSize="12" fill="var(--primary)">Risk assessment</text>
            </g>
            <g className="bp-label">
              <line x1="180" y1="305" x2="80" y2="280" stroke="var(--ink)" strokeWidth="1" opacity="0.6" />
              <text x="8" y="272" fontFamily="var(--font-plex-mono)" fontSize="12" fill="var(--primary)">Method statement</text>
            </g>
          </svg>
          <div className="mt-4 grid grid-cols-2 border border-ink/25 sm:grid-cols-4">
            {[
              { label: "Dwg no.", value: "PP-001" },
              { label: "Title", value: "Rear extension" },
              { label: "Scale", value: "1:50 @ A3" },
              { label: "Rev", value: "A — issued" },
            ].map((cell) => (
              <div key={cell.label} className="border-ink/25 px-3 py-1.5 [&:not(:first-child)]:border-l max-sm:[&:nth-child(3)]:border-l-0 max-sm:[&:nth-child(n+3)]:border-t">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/70">{cell.label}</p>
                <p className="font-mono text-xs text-ink">{cell.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-end">
            <span className="bp-stamp border-2 border-stamp px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-widest text-stamp [transform:rotate(-2deg)]">
              Paperwork ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
