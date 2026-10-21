import { GitLabel } from "@/components/ui/GitLabel";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Comando estilo git que hace de título, p. ej. "git log --projects". */
  command: string;
  /** Título legible en texto plano. */
  title: string;
  /** Descripción opcional bajo el título. */
  description?: string;
  id?: string;
  className?: string;
};

/**
 * Cabecera de sección con estética de terminal.
 * El título es un <h2> real para la jerarquía semántica de la página.
 */
export function SectionHeading({
  command,
  title,
  description,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", className)}>
      <p className="mb-3 flex items-center gap-2 font-mono text-sm text-muted">
        <span className="text-ok">$</span>
        <span>{command}</span>
      </p>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
      <GitLabel text="HEAD → main" className="mt-4" />
    </div>
  );
}
