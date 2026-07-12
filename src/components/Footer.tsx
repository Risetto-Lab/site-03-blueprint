import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-grid-dark bg-ink px-6 py-14 text-bg sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <span className="font-display text-lg font-bold">
            ProjectPack <span className="font-mono text-sm font-normal tracking-widest text-accent">UK</span>
          </span>
          <p className="mt-2 max-w-sm text-sm text-bg/60">
            Get the paperwork sorted before the job starts. Editable CDM and
            property templates for small UK businesses.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:items-end">
          {/* TODO: replace with real Etsy shop URL at launch. */}
          <a
            href="https://www.etsy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-6 py-3 font-display text-sm font-bold text-ink transition hover:-translate-y-0.5"
          >
            Shop on Etsy ↗
          </a>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-5 text-sm text-bg/70">
            <a href="#for" className="hover:text-accent">Who it&rsquo;s for</a>
            <a href="#tiers" className="hover:text-accent">Pricing</a>
            <a href="#categories" className="hover:text-accent">Templates</a>
            <Link href="/guide" className="hover:text-accent">Guide</Link>
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center font-mono text-[11px] leading-relaxed text-bg/60">
        Templates are generic starting points, not bespoke advice. Compliance
        with CDM 2015 is the buyer&rsquo;s responsibility. © {new Date().getFullYear()} ProjectPack UK.
      </p>
    </footer>
  );
}
