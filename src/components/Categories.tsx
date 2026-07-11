"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { code: "S-01", name: "CDM starter packs", note: "The bundle most jobs start with" },
  { code: "S-02", name: "Construction phase plans", note: "The document every notifiable job needs" },
  { code: "S-03", name: "Site safety checklists", note: "Daily, weekly and pre-start checks" },
  { code: "S-04", name: "Small contractor toolkits", note: "RAMS, inductions and toolbox talks" },
  { code: "S-05", name: "Property refurb templates", note: "CDM-lite packs for refurbishment work" },
  { code: "S-06", name: "Landlord & HMO docs", note: "Keeping rented property paperwork straight" },
  { code: "S-07", name: "New releases", note: "The latest templates as we build them" },
];

export default function Categories() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !gridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="categories" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel index="03" title="Shop sections" />
          <h2 className="font-display mt-5 text-3xl font-bold text-ink sm:text-4xl">
            Seven sections. Find the document, not the jargon.
          </h2>
        </div>
        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.code}
              href="https://www.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="category-card group border border-ink/15 bg-panel transition hover:border-primary"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{cat.code}</span>
                <span className="font-mono text-[11px] text-ink/50 transition group-hover:text-primary">↗</span>
              </div>
              <div className="px-5 py-4">
                <h3 className="font-display text-base font-bold text-ink group-hover:text-primary">
                  {cat.name}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{cat.note}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
