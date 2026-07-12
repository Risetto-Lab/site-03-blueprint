"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  "Construction phase plans",
  "Risk assessments",
  "Method statements",
  "Toolbox talks",
  "Site inductions",
  "Pre-start checklists",
];

function Half() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-6 px-6">
          <span className="font-mono text-sm uppercase tracking-[0.2em] text-primary">
            {item}
          </span>
          <span aria-hidden className="h-2 w-2 shrink-0 bg-accent" />
        </span>
      ))}
    </>
  );
}

export default function TemplateTicker() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !wrapRef.current) return;

    let tick: (() => void) | undefined;
    const ctx = gsap.context(() => {
      const loop = gsap.to(".ticker-track", {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      let velocity = 0;
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          velocity = self.getVelocity();
        },
      });

      tick = () => {
        velocity *= 0.92;
        const target = gsap.utils.clamp(-2, 4, 1 + velocity / 600);
        loop.timeScale(gsap.utils.interpolate(loop.timeScale(), target, 0.1));
      };
      gsap.ticker.add(tick);
    }, wrapRef);

    return () => {
      if (tick) gsap.ticker.remove(tick);
      ctx.revert();
    };
  }, [reduced]);

  return (
    <div ref={wrapRef} className="overflow-hidden border-y border-ink/10 bg-panel py-3">
      <ul className="sr-only">
        {ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div aria-hidden className="ticker-track flex w-max">
        <Half />
        <Half />
      </div>
    </div>
  );
}
