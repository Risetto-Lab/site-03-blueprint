import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide — ProjectPack UK",
  description: "Build notes for the ProjectPack UK showcase site.",
};

const PALETTE = [
  { hex: "#EFF3F6", label: "Background — drafting paper" },
  { hex: "#16283A", label: "Ink" },
  { hex: "#1F63A8", label: "Primary — blueprint blue" },
  { hex: "#FFB800", label: "Accent — site-safety yellow" },
  { hex: "#2E7D5B", label: "Stamp — approval green" },
  { hex: "#D6E4F0", label: "Tint — grid line" },
];

const LIBRARIES = ["next", "tailwindcss", "gsap", "lenis"];

export default function GuidePage() {
  return (
    <main className="min-h-[100svh] w-full bg-bg px-6 py-28 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Site Factory — Site 03</span>
        <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          ProjectPack UK
        </h1>
        <p className="mt-4 text-lg text-ink/70">
          A landing page for a UK Etsy shop selling CDM and property
          compliance templates, styled as a technical drawing sheet.
        </p>

        <section className="mt-12">
          <h2 className="font-display text-xl font-bold text-ink">Aesthetic</h2>
          <p className="mt-2 text-ink/70">
            Technical-drawing / blueprint sheet — a drafting-paper grid
            background, mono dimension-line annotations, drawing-register
            code bars (<code className="rounded bg-panel px-1.5 py-0.5 text-sm">A-01</code>,{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">S-01</code>,{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">T-01</code>) on every
            card, and a drawing-sheet title block (Dwg no. / Title / Scale /
            Rev) closing out the hero panel.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Advanced technique</h2>
          <p className="mt-2 text-ink/70">
            Two GSAP/ScrollTrigger techniques, not one: the hero blueprint
            (a house-extension elevation) draws itself on load using{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">stroke-dasharray</code> /{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">strokeDashoffset</code>{" "}
            animated per path via <code className="rounded bg-panel px-1.5 py-0.5 text-sm">getTotalLength()</code>,
            followed by a staggered hero entrance and a scale-in stamp. The
            &ldquo;how it works&rdquo; section runs a scroll-scrubbed{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">MorphSVGPlugin</code> timeline that
            morphs a document outline into a checklist into a house shape,
            with the active step row synced to scrub progress. A third,
            smaller technique: a velocity-reactive template ticker (GSAP
            marquee loop with scroll-velocity-driven timeScale, per the
            engineering playbook&rsquo;s marquee recipe).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Palette</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {PALETTE.map((c) => (
              <div key={c.hex} className="flex items-center gap-2 bg-panel py-1.5 pl-1.5 pr-4 ring-1 ring-ink/10">
                <span
                  className="h-7 w-7 border border-ink/10"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden
                />
                <span className="font-mono text-xs font-bold text-ink/70">
                  {c.hex} <span className="font-normal text-ink/50">— {c.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Type pairing</h2>
          <p className="mt-2 text-ink/70">
            <span className="font-display font-bold">Space Grotesk</span> (500–700) for
            display, <span className="font-bold">IBM Plex Sans</span> for body, and{" "}
            <span className="font-mono">IBM Plex Mono</span> for dimension labels and
            drawing-register codes — all via{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">next/font/google</code>.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Libraries</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {LIBRARIES.map((lib) => (
              <span key={lib} className="rounded-full bg-accent/20 px-3 py-1 font-mono text-xs font-bold text-ink/70">
                {lib}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Assets</h2>
          <p className="mt-2 text-ink/70">
            Every visual on the page is CSS or inline SVG — the drafting
            grid, the house-elevation blueprint, the eleven line-art icons on
            the audience/category/tier cards, and the title-block stamp are
            all hand-built, not generated images. This kept the build fully
            clean-room: everything is original artwork built from the shop&rsquo;s
            own copy, with no employer or third-party source material.
            The &ldquo;Shop on Etsy&rdquo; and category links currently point at the
            generic <code className="rounded bg-panel px-1.5 py-0.5 text-sm">etsy.com</code> homepage —
            each is marked with a <code className="rounded bg-panel px-1.5 py-0.5 text-sm">{"// TODO"}</code> comment
            in the source and needs the real shop URL once ProjectPack UK
            launches.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">Lessons</h2>
          <p className="mt-2 text-ink/70">
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">gsap.context</code> does not clean up a{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">gsap.ticker.add</code> callback — the
            template ticker&rsquo;s velocity-decay tick had to be held in a
            variable outside the context and removed manually in the effect
            cleanup, or it would leak across remounts (engineering playbook
            §5). Also: Lenis rejects programmatic{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">scrollIntoView()</code> jumps — it lerps
            straight back to its own scroll target, so verifying
            scroll-linked animation needed real wheel events instead
            (playbook §5). And a hidden browser preview pane stops firing{" "}
            <code className="rounded bg-panel px-1.5 py-0.5 text-sm">requestAnimationFrame</code> entirely,
            freezing every GSAP tween and timing out screenshots — headless
            Chrome with <code className="rounded bg-panel px-1.5 py-0.5 text-sm">--virtual-time-budget</code> was
            used instead to verify the hero draw-in and marquee (playbook §7).
          </p>
        </section>

        <Link
          href="/"
          className="font-display mt-14 inline-block text-lg font-bold text-primary hover:underline"
        >
          ← Back to ProjectPack UK
        </Link>
      </div>
    </main>
  );
}
