export default function SectionLabel({
  index,
  title,
  onDark = false,
}: {
  index: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${
        onDark ? "text-tint" : "text-primary"
      }`}
    >
      <span aria-hidden className={`h-px w-6 ${onDark ? "bg-tint/60" : "bg-primary/60"}`} />
      <span>
        {index} / {title}
      </span>
      <span aria-hidden className={`h-px w-6 ${onDark ? "bg-tint/60" : "bg-primary/60"}`} />
    </div>
  );
}
