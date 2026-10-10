import { site } from "@/lib/content";

export function Logo({
  variant = "header",
}: {
  variant?: "header" | "footer";
}) {
  if (variant === "footer") {
    return (
      <img
        src="/logo.png"
        alt={site.name}
        className="h-16 w-auto max-w-[220px]"
      />
    );
  }

  return (
    <span className="flex items-center gap-3">
      <img src="/mark.png" alt="" className="h-10 w-10 rounded-full" />
      <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-ink">
        {site.name}
      </span>
    </span>
  );
}
