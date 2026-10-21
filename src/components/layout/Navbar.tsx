"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { navigation, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/**
 * Navbar fija con blur.
 * El menú móvil es accesible: botón con aria-expanded/aria-controls,
 * cierre con Escape, y bloqueo del scroll del body al abrir.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  // Escape cierra el menú
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="#inicio"
          className="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-colors hover:text-accent-blue"
        >
          <span aria-hidden="true" className="text-gradient font-semibold">
            ~/yefcode
          </span>
        </Link>

        {/* Enlaces de escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 font-mono text-sm text-muted transition-colors hover:bg-surface-2/60 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2 flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-ok"
              aria-hidden="true"
            />
            <span className="font-mono text-xs text-muted">HEAD → {profile.branch}</span>
          </li>
        </ul>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={menuId}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface-2/60 text-foreground transition-colors hover:border-accent-indigo/50 md:hidden"
        >
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Panel móvil */}
      <div
        id={menuId}
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden"
      >
        <ul className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          {navigation.map((item, i) => (
            <li key={item.href} className={cn(i > 0 && "border-t border-border/60")}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 font-mono text-base text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
