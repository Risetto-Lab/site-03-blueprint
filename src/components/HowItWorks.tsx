"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useReducedMotion } from "@/lib/useReducedMotion";
import SectionLabel from "@/components/SectionLabel";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const STEPS = [
  { n: "1", title: "Buy on Etsy", body: "Checkout takes a minute. The files are yours straight away." },
  { n: "2", title: "Download the pack", body: "Editable Word documents plus a plain-English guidance note." },
  { n: "3", title: "Fill in your job", body: "Swap the placeholders for your site, your dates, your people." },
  { n: "4", title: "Use it on site", body: "Print it or keep it on your phone. The paperwork is sorted." },
];

const SHAPE_DOC = "M55 25 H130 L160 55 V215 H55 Z";
const SHAPE_CLIP = "M45 40 H170 V215 H45 Z";
const SHAPE_HOUSE = "M35 115 L107 45 L180 115 V215 H35 Z";

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
      tl.to("#morph-shape", { morphSVG: SHAPE_CLIP, duration: 1, ease: "none" }, 0.5);
      tl.to("#morph-doc-lines", { opacity: 0, duration: 0.3 }, 0.5);
      tl.to("#morph-clip-lines", { opacity: 1, duration: 0.3 }, 1.1);
      tl.to("#morph-clip-lines", { opacity: 0, duration: 0.3 }, 2);
      tl.to("#morph-shape", { morphSVG: SHAPE_HOUSE, duration: 1, ease: "none" }, 2);
      tl.to("#morph-house-lines", { opacity: 1, duration: 0.3 }, 2.6);

      gsap.fromTo(
        ".step-row",
        { opacity: 0, x: -24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="how"
      ref={sectionRef}
      className="bg-grid-dark border-y border-ink/10 bg-ink px-6 py-20 text-bg sm:px-12 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel index="04" title="How it works" onDark />
          <h2 className="font-display mt-5 text-3xl font-bold sm:text-4xl">
            From checkout to site in four steps.
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <ol className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <li key={step.n} className="step-row flex gap-5 border border-tint/20 bg-white/5 p-5">
                <span
                  aria-hidden
                  className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-accent font-display text-base font-bold text-accent"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-bg/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mx-auto w-full max-w-sm" aria-hidden>
            <svg viewBox="0 0 215 240" className="block h-auto w-full">
              <path
                id="morph-shape"
                d={SHAPE_DOC}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <g id="morph-doc-lines" stroke="var(--tint)" strokeWidth="2" opacity="0.8">
                <path d="M75 80 H140 M75 105 H140 M75 130 H120" fill="none" />
              </g>
              <g id="morph-clip-lines" stroke="var(--tint)" strokeWidth="2" opacity="0" fill="none">
                <path d="M65 90 L75 100 L92 78 M105 90 H150 M65 140 L75 150 L92 128 M105 140 H150" />
              </g>
              <g id="morph-house-lines" stroke="var(--tint)" strokeWidth="2" opacity="0" fill="none">
                <path d="M85 215 V160 H130 V215 M65 130 H85 V150 H65 Z" />
              </g>
            </svg>
            <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-bg/50">
              Template → checklist → job done
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
