"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useSettings } from "@/components/providers/SettingsProvider";
import { cn } from "@/lib/utils";
import type { AccentColor, Language, Settings, ThemePreference } from "@/lib/types";

const THEMES: readonly ThemePreference[] = ["dark", "light", "system"];
const LANGUAGES: readonly Language[] = ["es", "en"];
const ACCENTS: readonly AccentColor[] = ["blue", "violet", "green", "amber"];
const MOTIONS: readonly Settings["motion"][] = ["full", "reduced"];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

type OptionGroupProps<K extends string> = {
  legend: string;
  name: string;
  options: readonly K[];
  value: K;
  label: (key: K) => string;
  onChange: (key: K) => void;
  /** Renderiza un swatch de color antes de la etiqueta. */
  swatch?: boolean;
  columns?: 2 | 3;
};

/**
 * Grupo de opciones como radiogroup accesible:
 * el input es sr-only, el foco visible se pinta en el span y las
 * flechas del teclado cambian de opción de forma nativa.
 */
function OptionGroup<K extends string>({
  legend,
  name,
  options,
  value,
  label,
  onChange,
  swatch = false,
  columns = 3,
}: OptionGroupProps<K>) {
  return (
    <fieldset className="mb-4 last:mb-0">
      <legend className="mb-2 font-mono text-xs text-muted">{legend}</legend>
      <div
        className={cn(
          "grid gap-1.5 rounded-lg border border-border bg-surface-2/60 p-1.5",
          columns === 3 ? "grid-cols-3" : "grid-cols-2",
        )}
      >
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span className="flex items-center justify-center gap-2 rounded-md px-2 py-1.5 text-center font-mono text-xs whitespace-nowrap text-muted transition-colors peer-checked:bg-accent-indigo peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-blue hover:text-foreground">
              {swatch ? (
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-black/20"
                  style={{ backgroundColor: `var(--swatch-${option})` }}
                />
              ) : null}
              {label(option)}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * Botón de configuración + panel de preferencias.
 * Accesible: aria-expanded en el botón, role="dialog" con aria-modal,
 * foco inicial en el panel, trampa de foco con Tab, Escape para cerrar
 * y foco de vuelta al botón. Las preferencias se guardan en localStorage.
 */
export function SettingsPanel() {
  const { settings, t, update } = useSettings();
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const panelId = useId();
  const titleId = useId();

  // Escape cierra y devuelve el foco al botón.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Node && !wrapperRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  // Al abrir: foco dentro del panel. Al cerrar: limpieza.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // Trampa de foco: Tab cicla solo dentro del panel.
  const trapFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !panelRef.current) return;
    const nodes = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );
    if (nodes.length === 0) return;

    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!first || !last) return;

    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === panelRef.current)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={panelId}
        aria-label={open ? t.settings.closeLabel : t.settings.openLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-2/60 text-foreground transition-colors hover:border-accent-indigo/50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M4 6h10M18 6h2M4 12h2M10 12h10M4 18h10M18 18h2" />
          <circle cx="16" cy="6" r="2" />
          <circle cx="8" cy="12" r="2" />
          <circle cx="16" cy="18" r="2" />
        </svg>
      </button>

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        hidden={!open}
        onKeyDown={trapFocus}
        className="absolute top-full right-0 z-50 mt-2 w-72 max-w-[calc(100vw-2.5rem)] rounded-2xl border border-border bg-surface p-5 shadow-2xl outline-none"
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 id={titleId} className="font-mono text-sm text-foreground">
            <span className="text-ok">$</span> {t.settings.panelLabel}
          </h2>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label={t.settings.closeLabel}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-2/60 text-muted transition-colors hover:text-foreground"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <OptionGroup
          legend={t.settings.theme.legend}
          name="yefcode-theme"
          options={THEMES}
          value={settings.theme}
          label={(key) => t.settings.theme[key]}
          onChange={(key) => update("theme", key)}
        />

        <OptionGroup
          legend={t.settings.language.legend}
          name="yefcode-language"
          options={LANGUAGES}
          value={settings.language}
          label={(key) => t.settings.language[key]}
          onChange={(key) => update("language", key)}
          columns={2}
        />

        <OptionGroup
          legend={t.settings.accent.legend}
          name="yefcode-accent"
          options={ACCENTS}
          value={settings.accent}
          label={(key) => t.settings.accent[key]}
          onChange={(key) => update("accent", key)}
          swatch
          columns={2}
        />

        <OptionGroup
          legend={t.settings.motion.legend}
          name="yefcode-motion"
          options={MOTIONS}
          value={settings.motion}
          label={(key) => t.settings.motion[key]}
          onChange={(key) => update("motion", key)}
          columns={2}
        />

        <p className="mt-4 border-t border-border/60 pt-3 font-mono text-[11px] leading-relaxed text-faint">
          {t.settings.hint}
        </p>
      </div>
    </div>
  );
}
