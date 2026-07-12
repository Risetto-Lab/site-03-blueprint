import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const TIERS = [
  {
    code: "T-01",
    name: "Single templates",
    price: "£4.99–£14.99",
    blurb: "One document, one job. Pick exactly what you're missing.",
    items: ["Construction phase plan", "Risk assessment & method statement", "Toolbox talk sheets"],
    featured: false,
  },
  {
    code: "T-02",
    name: "Starter packs",
    price: "£19.99–£49.99",
    blurb: "The documents a whole job needs, bundled and ready to edit.",
    items: ["CPP + RAMS + induction in one pack", "Guidance notes in plain English", "Checklist so nothing gets missed"],
    featured: true,
  },
  {
    code: "T-03",
    name: "Premium toolkits",
    price: "£79–£199",
    blurb: "The full filing cabinet for a small contracting business.",
    items: ["Every core template we make", "Site safety checklist library", "Free updates when forms change"],
    featured: false,
  },
];

export default function Tiers() {
  return (
    <section id="tiers" className="border-y border-ink/10 bg-panel px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel index="02" title="Pricing" />
          <h2 className="font-display mt-5 text-3xl font-bold text-ink sm:text-4xl">
            Priced for small businesses. Not consultancy rates.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col border bg-bg ${
                  tier.featured ? "border-2 border-primary" : "border-ink/15"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-ink">
                    Most popular
                  </span>
                )}
                <div className={`flex items-center justify-between border-b px-7 py-2.5 ${tier.featured ? "border-primary/40" : "border-ink/15"}`}>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{tier.code}</span>
                  <span aria-hidden className="h-2 w-2 bg-accent" />
                </div>
                <div className="flex flex-1 flex-col p-7 pt-5">
                  <h3 className="font-display text-lg font-bold text-ink">{tier.name}</h3>
                  <p className="font-display mt-3 text-3xl font-bold text-primary">{tier.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{tier.blurb}</p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-ink/10 pt-5">
                    {tier.items.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm text-ink/80">
                        <span aria-hidden className="font-mono text-stamp">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-xs text-ink/75">
          Prices set on Etsy at launch. Digital downloads — nothing posted, nothing to wait for.
        </p>
      </div>
    </section>
  );
}
