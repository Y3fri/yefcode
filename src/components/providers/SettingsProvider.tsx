"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLanguage, getDictionary, type Dictionary } from "@/data/i18n";
import {
  DEFAULT_SETTINGS,
  applySettingsToDom,
  getInitialSettings,
  writeStoredSettings,
} from "@/lib/settings";
import type { Settings } from "@/lib/types";

type SettingsContextValue = {
  settings: Settings;
  t: Dictionary;
  update: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

// useLayoutEffect avisa en SSR; aquí solo se usa en el cliente.
const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Proveedor de preferencias: tema, idioma, color de acento y animaciones.
 * - El script inline del layout pinta la primera carga antes del paint.
 * - Aquí se re-aplica tras hidratar (también en el remount de Strict Mode)
 *   y se persiste cada cambio en localStorage con try/catch.
 */
export function SettingsProvider({ children }: { children: ReactNode }) {
  // Primer render = defaults del servidor (evita desajuste de hidratación);
  // el valor real de storage llega en el layout effect de abajo.
  const [settings, setSettings] = useState<Settings>(() => ({
    ...DEFAULT_SETTINGS,
    language: defaultLanguage,
  }));
  const [hydrated, setHydrated] = useState(false);

  // 1) Leer storage una vez montado, sin provocar parpadeo (layout effect).
  useIsoLayoutEffect(() => {
    setSettings(getInitialSettings());
    setHydrated(true);
  }, []);

  // 2) Aplicar al DOM y persistir cuando las preferencias cambian.
  useIsoLayoutEffect(() => {
    if (!hydrated) return;
    applySettingsToDom(settings);
    writeStoredSettings(settings);
  }, [settings, hydrated]);

  // 3) Si el tema es "system", reaccionar a cambios del SO en vivo.
  useEffect(() => {
    if (settings.theme !== "system" || typeof window === "undefined") return;
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      document.documentElement.dataset.theme = query.matches ? "light" : "dark";
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, [settings.theme]);

  const update = useCallback(<K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }, []);

  const value = useMemo<SettingsContextValue>(
    () => ({
      settings,
      t: getDictionary(settings.language),
      update,
    }),
    [settings, update],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used inside <SettingsProvider>");
  }
  return context;
}
