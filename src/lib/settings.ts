/**
 * Utilidades de preferencias del usuario (tema, idioma, acento, animaciones).
 * Solo corren en el navegador; todas las lecturas/escrituras de storage
 * van con try/catch porque localStorage puede no estar disponible
 * (modo privado, cookies bloqueadas, contexto sandbox).
 */

import type { AccentColor, Language, Settings, ThemePreference } from "@/lib/types";

export const STORAGE_KEY = "yefcode.settings";

export const DEFAULT_SETTINGS: Settings = {
  theme: "dark",
  language: "es",
  accent: "blue",
  motion: "full",
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Resuelve la preferencia "system" a un tema concreto. */
export function resolveTheme(theme: ThemePreference): "dark" | "light" {
  if (theme !== "system") return theme;
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/** Valores iniciales: storage si existe, si no los defaults sensatos. */
export function getInitialSettings(): Settings {
  const stored = readStoredSettings();
  if (stored) return stored;
  return { ...DEFAULT_SETTINGS, motion: prefersReducedMotion() ? "reduced" : "full" };
}

/** Lee y sanea lo que haya en localStorage. Nunca lanza. */
export function readStoredSettings(): Settings | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const candidate = parsed as Partial<Settings>;

    const theme: ThemePreference =
      candidate.theme === "light" ||
      candidate.theme === "dark" ||
      candidate.theme === "system"
        ? candidate.theme
        : DEFAULT_SETTINGS.theme;
    const language: Language =
      candidate.language === "en" ? "en" : DEFAULT_SETTINGS.language;
    const accent: AccentColor =
      candidate.accent === "violet" ||
      candidate.accent === "green" ||
      candidate.accent === "amber" ||
      candidate.accent === "blue"
        ? candidate.accent
        : DEFAULT_SETTINGS.accent;
    const motion: Settings["motion"] =
      candidate.motion === "reduced" || candidate.motion === "full"
        ? candidate.motion
        : DEFAULT_SETTINGS.motion;

    // Solo se conserva si el objeto traía algo reconocible.
    const hadAnyKey = ["theme", "language", "accent", "motion"].some((key) =>
      Object.hasOwn(candidate, key),
    );
    if (!hadAnyKey) return null;

    return { theme, language, accent, motion };
  } catch {
    return null;
  }
}

/** Persiste las preferencias. Nunca lanza. */
export function writeStoredSettings(settings: Settings): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // Storage no disponible: el sitio sigue funcionando sin persistencia.
  }
}

/**
 * Pinta las preferencias en <html> antes del paint.
 * El script inline del layout hace lo mismo en el primer cargado;
 * este helper se encarga de los cambios posteriores y del remount de dev.
 */
export function applySettingsToDom(settings: Settings): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;

  root.dataset.theme = resolveTheme(settings.theme);
  root.dataset.accent = settings.accent;
  root.dataset.motion = settings.motion;
  root.lang = settings.language;
}
