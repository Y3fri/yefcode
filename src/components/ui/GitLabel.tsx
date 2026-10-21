import { cn } from "@/lib/utils";

type GitLabelProps = {
  /** Comando o rama a mostrar, sin el prefijo decorativo. */
  text: string;
  /** Aplica el degradado azul/violeta al texto. */
  gradient?: boolean;
  className?: string;
};

/**
 * Etiqueta con metáfora de git/terminal.
 * Renderiza `HEAD → main`, `⎇ web`, `⎇ api`, etc.
 * Es decorativa: se oculta de lectores de pantalla con aria-hidden.
 */
export function GitLabel({ text, gradient = false, className }: GitLabelProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs",
        gradient ? "text-gradient" : "text-muted",
        className,
      )}
    >
      <span className="text-faint">⎇</span>
      <span>{text}</span>
    </span>
  );
}
