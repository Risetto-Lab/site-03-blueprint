/* Blueprint-style line icons, stroke-only, drawn on a 48x48 grid. */

function Base({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className ?? "h-10 w-10"}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function HardHatIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M8 32 C8 21 15 14 24 14 C33 14 40 21 40 32" />
      <path d="M6 32 H42 M6 36 H42" />
      <path d="M20 14 V24 M28 14 V24" />
    </Base>
  );
}

export function TrowelIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M8 8 L28 20 L20 28 Z" />
      <path d="M24 24 L36 36" />
      <path d="M34 34 L40 40" strokeWidth="3.5" />
    </Base>
  );
}

export function KeysIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <circle cx="17" cy="17" r="8" />
      <path d="M23 23 L38 38 M32 32 L37 27 M36 36 L41 31" />
    </Base>
  );
}

export function SheetIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M14 6 H28 L34 12 V42 H14 Z M28 6 V12 H34" />
      <path d="M19 20 H29 M19 26 H29 M19 32 H25" />
    </Base>
  );
}

export function ChecklistIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="10" y="8" width="28" height="34" />
      <path d="M15 18 L18 21 L23 15 M27 18 H33 M15 30 L18 33 L23 27 M27 30 H33" />
    </Base>
  );
}

export function ToolboxIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="8" y="18" width="32" height="20" />
      <path d="M18 18 V13 H30 V18 M8 27 H40 M21 27 V31 H27 V27" />
    </Base>
  );
}

export function HouseIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M8 24 L24 10 L40 24 M12 21 V40 H36 V21" />
      <path d="M20 40 V30 H28 V40" />
    </Base>
  );
}

export function KeyDocIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="8" y="10" width="24" height="30" />
      <path d="M13 18 H27 M13 24 H27" />
      <circle cx="36" cy="32" r="5" />
      <path d="M36 37 V44 M36 41 H40" />
    </Base>
  );
}

export function StarSheetIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M14 6 H28 L34 12 V42 H14 Z M28 6 V12 H34" />
      <path d="M24 19 L26 24 L31 24.5 L27.5 28 L28.5 33 L24 30.5 L19.5 33 L20.5 28 L17 24.5 L22 24 Z" />
    </Base>
  );
}

export function PlanIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <rect x="8" y="8" width="32" height="32" />
      <path d="M8 22 H22 V40 M22 22 V8 M30 8 V16 M40 30 H32" />
    </Base>
  );
}

export function SpeechIcon({ className }: { className?: string }) {
  return (
    <Base className={className}>
      <path d="M8 10 H40 V32 H22 L14 40 V32 H8 Z" />
      <path d="M15 19 H33 M15 25 H27" />
    </Base>
  );
}
