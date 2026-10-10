export function Eyebrow({
  n,
  children,
  light = false,
}: {
  n?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] ${
        light ? "text-paper/70" : "text-muted"
      }`}
    >
      {n ? (
        <span className={light ? "text-terracotta-soft" : "text-terracotta"}>
          {n}
        </span>
      ) : null}
      {children}
    </p>
  );
}

export const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-[12px] uppercase tracking-[0.18em] text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta hover:shadow-[0_12px_28px_-14px_rgba(154,74,44,0.85)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-3 text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const btnLight =
  "inline-flex items-center justify-center rounded-full bg-paper px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-soil transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-soft hover:text-paper hover:shadow-[0_12px_28px_-14px_rgba(197,106,69,0.7)] disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
