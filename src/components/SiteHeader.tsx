import Link from "next/link";

const NAV = [
  { href: "#for", label: "Who it's for" },
  { href: "#tiers", label: "Pricing" },
  { href: "#categories", label: "Templates" },
  { href: "#how", label: "How it works" },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-12">
        <Link href="/" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center border-2 border-primary font-display text-sm font-bold text-primary"
          >
            PP
          </span>
          <span className="font-display text-base font-bold leading-tight text-ink">
            ProjectPack
            <span className="font-mono text-xs font-normal tracking-widest text-primary"> UK</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://www.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent px-5 py-2 font-display text-sm font-bold text-ink transition hover:-translate-y-0.5"
        >
          Shop on Etsy ↗
        </a>
      </div>
    </header>
  );
}
