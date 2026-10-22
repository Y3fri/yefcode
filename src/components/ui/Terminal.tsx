"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { TerminalLine } from "@/lib/types";

type TerminalProps = {
  lines: readonly TerminalLine[];
  /** Milisegundos por carácter al tipear. */
  typingSpeed?: number;
  className?: string;
};

/**
 * Ventana de terminal que "tipea" sus líneas de arriba hacia abajo.
 * Respeta prefers-reduced-motion y el atributo html[data-motion]:
 * en modo "reduced" imprime todo sin animación.
 */
export function Terminal({ lines, typingSpeed = 42, className }: TerminalProps) {
  const [typed, setTyped] = useState<readonly string[]>([]);
  const [done, setDone] = useState(false);

  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      (document.documentElement.dataset.motion === "reduced" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    [],
  );

  useEffect(() => {
    // El componente se remonta con `key` cuando cambian idioma o animación,
    // así que el estado de tipeo siempre parte limpio aquí.
    let charTimer: ReturnType<typeof setTimeout> | undefined;
    let lineTimer: ReturnType<typeof setTimeout> | undefined;

    // El índice de línea viaja como parámetro (no como ref mutable):
    // leer una ref dentro del updater de setState hacía que React
    // ejecutara el updater DESPUÉS de incrementar la ref, y el último
    // carácter de cada línea caía en el slot siguiente, donde era
    // sobrescrito. Con el parámetro, cada línea escribe en su slot.
    const typeLine = (lineIndex: number) => {
      const current = lines[lineIndex];
      if (!current) {
        setDone(true);
        return;
      }

      let charIndex = 0;
      const tick = () => {
        charIndex += 1;
        const partial = current.text.slice(0, charIndex);
        setTyped((prev) => {
          const next = [...prev];
          next[lineIndex] = partial;
          return next;
        });

        if (charIndex < current.text.length) {
          charTimer = setTimeout(tick, typingSpeed);
        } else {
          lineTimer = setTimeout(() => typeLine(lineIndex + 1), 380);
        }
      };
      tick();
    };

    const start = setTimeout(
      () => {
        // Respeta prefers-reduced-motion: imprime todo sin tipear.
        if (reduceMotion) {
          setTyped(lines.map((l) => l.text));
          setDone(true);
          return;
        }
        typeLine(0);
      },
      reduceMotion ? 0 : 500,
    );

    return () => {
      clearTimeout(start);
      if (charTimer) clearTimeout(charTimer);
      if (lineTimer) clearTimeout(lineTimer);
    };
  }, [lines, typingSpeed, reduceMotion]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface/80 shadow-2xl backdrop-blur",
        className,
      )}
    >
      {/* Barra superior estilo macOS */}
      <div className="flex items-center gap-2 border-b border-border bg-surface-2/70 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-faint">yefcode — zsh</span>
      </div>

      <div className="space-y-1.5 p-5 font-mono text-sm">
        {lines.map((line, i) => {
          const typedText = typed[i] ?? "";
          const isTyping = !done && i === typed.length - 1;
          const isHidden = i > typed.length - 1;

          if (isHidden) return null;

          return (
            <p
              key={`${line.text}-${i}`}
              className={cn(
                "flex flex-wrap items-baseline gap-2 break-words",
                line.tone === "ok" && "text-ok",
                line.tone === "muted" && "text-muted",
                !line.tone && "text-foreground",
              )}
            >
              {line.prompt ? (
                <span className="text-accent-blue">{line.prompt}</span>
              ) : null}
              <span>
                {typedText}
                {isTyping ? (
                  <span
                    aria-hidden="true"
                    className="animate-blink ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] bg-accent-blue"
                  />
                ) : null}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
