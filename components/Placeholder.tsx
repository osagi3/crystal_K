type MediaProps = {
  label: string;
  className?: string;
  seed?: number;
};

const palettes = [
  ["#c9b496", "#8d5a3c", "#2c241c", "#f3eee4"],
  ["#b7c4b2", "#3f5348", "#1e2420", "#efe8d8"],
  ["#d7c3a4", "#9a4a2c", "#241c16", "#f6f0e4"],
  ["#c2b8a4", "#5c5348", "#1b1712", "#eee6d6"],
];

function Composition({ seed }: { seed: number }) {
  const i = seed % palettes.length;
  const [a, b, c, d] = palettes[i];

  if (i === 0) {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
        <rect width="400" height="520" fill={a} />
        <rect x="48" y="72" width="304" height="376" fill={c} opacity="0.9" />
        <rect x="72" y="108" width="110" height="220" fill={b} />
        <rect x="198" y="248" width="130" height="160" fill={d} opacity="0.55" />
        <circle cx="300" cy="140" r="42" fill={b} opacity="0.85" />
        <line x1="48" y1="420" x2="352" y2="420" stroke={d} strokeWidth="1" />
      </svg>
    );
  }

  if (i === 1) {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
        <rect width="400" height="520" fill={a} />
        <polygon points="0,520 400,320 400,520" fill={c} />
        <rect x="40" y="60" width="220" height="280" fill={d} opacity="0.35" />
        <rect x="180" y="160" width="180" height="240" fill={b} opacity="0.8" />
        <circle cx="80" cy="120" r="28" fill={c} />
      </svg>
    );
  }

  if (i === 2) {
    return (
      <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
        <rect width="400" height="520" fill={a} />
        <rect x="0" y="0" width="400" height="210" fill={c} />
        <rect x="56" y="170" width="288" height="280" fill={d} />
        <rect x="88" y="210" width="90" height="160" fill={b} />
        <rect x="198" y="250" width="110" height="120" fill={c} opacity="0.7" />
        <line x1="56" y1="170" x2="344" y2="170" stroke={b} strokeWidth="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 520" className="h-full w-full" aria-hidden>
      <rect width="400" height="520" fill={a} />
      <circle cx="200" cy="200" r="150" fill={b} opacity="0.25" />
      <rect x="90" y="90" width="220" height="340" fill="none" stroke={c} strokeWidth="1.5" />
      <rect x="120" y="140" width="160" height="240" fill={c} opacity="0.88" />
      <rect x="140" y="170" width="50" height="90" fill={d} opacity="0.5" />
    </svg>
  );
}

export function MediaPlaceholder({ label, className = "", seed = 0 }: MediaProps) {
  return (
    <figure
      className={`relative overflow-hidden bg-stone ${className}`}
      aria-label={`Placeholder image: ${label}`}
    >
      <Composition seed={seed} />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-soil/70 to-transparent px-4 py-3">
        <span className="text-[10px] uppercase tracking-[0.22em] text-paper">
          Placeholder · {label}
        </span>
      </figcaption>
    </figure>
  );
}

export function MarkPlaceholder({
  letters,
  name,
}: {
  letters: string;
  name: string;
}) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-paper-deep text-[10px] font-medium tracking-[0.18em] text-ink"
      title={`${name} logo placeholder`}
      aria-hidden
    >
      {letters}
    </div>
  );
}
