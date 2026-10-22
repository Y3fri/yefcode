"use client";

import { useSettings } from "@/components/providers/SettingsProvider";

/**
 * Enlace de salto accesible: primero en el orden de tabulación y
 * visible solo cuando recibe foco. El texto sigue el idioma activo.
 */
export function SkipLink() {
  const { t } = useSettings();

  return (
    <a
      href="#inicio"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-accent-indigo focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-white"
    >
      {t.skipLink}
    </a>
  );
}
