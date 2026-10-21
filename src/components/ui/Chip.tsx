import { cn } from "@/lib/utils";

type ChipProps = {
  children: string;
  /** Tono visual del chip. */
  variant?: "default" | "accent";
  className?: string;
};

/**
 * Chip de una sola línea para etiquetas cortas (stack tecnológico, años).
 */
export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs whitespace-nowrap transition-colors",
        variant === "accent"
          ? "border-accent-indigo/40 bg-accent-indigo/10 text-accent-blue"
          : "border-border bg-surface-2/60 text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
