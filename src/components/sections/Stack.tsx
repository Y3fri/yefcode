"use client";

import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSettings } from "@/components/providers/SettingsProvider";
import { stackGroups } from "@/data/stack";

/**
 * Sección "Stack": tecnologías agrupadas por capa, como chips.
 * Los nombres de tecnologías son datos (src/data/stack.ts) y no se traducen.
 */
export function Stack() {
  const { t } = useSettings();

  return (
    <section id="stack" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.stack.command}
          title={t.stack.title}
          description={t.stack.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 font-mono text-sm text-muted">
                <span className="text-ok">$</span> {t.stack.groups[group.id]}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Chip variant="accent">{item}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
