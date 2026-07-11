import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { HardHatIcon, TrowelIcon, KeysIcon } from "@/components/BlueprintIcons";

const AUDIENCES = [
  {
    code: "A-01",
    title: "Small contractors",
    icon: HardHatIcon,
    body: "You run jobs, not paperwork. Get a construction phase plan and RAMS pack you can fill in the night before the job starts.",
  },
  {
    code: "A-02",
    title: "Sole-trader builders",
    icon: TrowelIcon,
    body: "One-person outfit, same legal duties. Our templates cover the documents clients and principal contractors keep asking for.",
  },
  {
    code: "A-03",
    title: "Landlords & refurb investors",
    icon: KeysIcon,
    body: "Refurbishing a property counts as construction work. Start with the pre-start pack so the project begins on paper, not on site.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="for" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel index="01" title="Who it's for" />
          <h2 className="font-display mt-5 text-3xl font-bold text-ink sm:text-4xl">
            Built for the jobs that don&rsquo;t have a compliance department.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.code} delay={i * 0.08}>
              <div className="flex h-full flex-col border border-ink/15 bg-panel">
                <div className="flex items-center justify-between border-b border-ink/15 px-5 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{a.code}</span>
                  <span aria-hidden className="h-2 w-2 bg-accent" />
                </div>
                <div className="flex-1 px-5 py-5">
                  <a.icon className="h-10 w-10 text-primary" />
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">{a.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
