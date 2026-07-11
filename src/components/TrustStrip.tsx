import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

const POINTS = [
  {
    title: "Built from public HSE guidance",
    body: "Every template starts from published sources — L153, the HSG series and gov.uk material — rewritten into plain English.",
  },
  {
    title: "Templates, not consultancy",
    body: "We sell generic starting points you adapt to your own job. We don't provide advice tailored to your project.",
  },
  {
    title: "Yours to edit",
    body: "Standard Word formats. Change the wording, add your logo, reuse them on your next job.",
  },
];

export default function TrustStrip() {
  return (
    <section id="trust" className="px-6 py-20 sm:px-12 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionLabel index="05" title="The small print, up front" />
          <h2 className="font-display mt-5 text-3xl font-bold text-ink sm:text-4xl">
            Straight answers about what you&rsquo;re buying.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="h-full border-l-2 border-primary bg-panel p-6">
                <h3 className="font-display text-base font-bold text-ink">{point.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10 border border-ink/15 bg-panel p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/60">Disclaimer</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Our templates are generic starting points for your own project
              documentation — they are not bespoke advice, and buying one
              doesn&rsquo;t make a project compliant. Compliance with CDM 2015
              remains your responsibility. Adapt every document to your own
              job, and if you need tailored advice, engage a competent CDM
              advisor. Templates are for your own use — redistribution isn&rsquo;t
              permitted.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
