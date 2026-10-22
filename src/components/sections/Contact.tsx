"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitLabel } from "@/components/ui/GitLabel";
import { useSettings } from "@/components/providers/SettingsProvider";
import { copyTargetFor, socials } from "@/data/socials";
import { profile } from "@/data/profile";
import type { Social, SocialId } from "@/lib/types";

/** Iconos decorativos por canal (el nombre visible está en el diccionario). */
function SocialIcon({ id }: { id: SocialId }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    className: "h-4 w-4 shrink-0",
  } as const;

  if (id === "email") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3.5 7 8.5 6 8.5-6" />
      </svg>
    );
  }

  if (id === "whatsapp") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4.5 19.5l1.3-4.4A7.5 7.5 0 1 1 20 11.5Z" />
        <path d="M9.2 9.4c.3 2.2 3.2 5.1 5.4 5.4l1-1.2 1.7.8c-.5 1.2-1.7 1.6-2.9 1.3-2.7-.6-6-3.9-6.6-6.6-.3-1.2.1-2.4 1.3-2.9l.8 1.7-1.1 1Z" />
      </svg>
    );
  }

  if (id === "linkedin") {
    return (
      <svg {...common} fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11.1 22 14.3V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21H9V9Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.8-.02 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

/** Copia de respaldo cuando la Clipboard API no está disponible. */
function fallbackCopy(text: string): void {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(textarea);
  if (!ok) throw new Error("copy command failed");
}

type CopyFeedback = {
  id: SocialId;
  status: "copied" | "failed";
};

/**
 * Sección de contacto: solo enlaces directos (sin formulario ni backend).
 * Cada tarjeta tiene icono, valor y botón de copiar/abrir.
 */
export function Contact() {
  const { t } = useSettings();
  const [feedback, setFeedback] = useState<CopyFeedback | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopy = async (social: Social) => {
    const target = copyTargetFor(social);
    let status: CopyFeedback["status"] = "copied";
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(target);
      } else {
        fallbackCopy(target);
      }
    } catch {
      status = "failed";
    }

    setFeedback({ id: social.id, status });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFeedback(null), 2500);
  };

  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command={t.contact.command}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((social) => {
            const label = t.contact.channels[social.id];
            const current = feedback?.id === social.id ? feedback : null;

            return (
              <article
                key={social.id}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 font-mono text-sm text-muted">
                    <SocialIcon id={social.icon} />
                    {label}
                  </span>

                  {social.copyable ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(social)}
                      aria-label={t.contact.copyAria(label)}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2/60 px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent-indigo/50 hover:text-foreground"
                    >
                      <CopyIcon />
                      {current?.status === "copied" ? t.contact.copied : t.contact.copy}
                    </button>
                  ) : null}
                </div>

                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-start gap-1.5 font-mono text-xs break-all text-accent-blue transition-colors hover:text-accent-violet"
                >
                  {social.value}
                  {social.external ? (
                    <>
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only">{t.newTab}</span>
                    </>
                  ) : null}
                </a>

                <span aria-live="polite" className="sr-only">
                  {current?.status === "copied"
                    ? t.contact.copied
                    : current?.status === "failed"
                      ? t.contact.copyFailed
                      : ""}
                </span>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-5">
          <span className="font-mono text-sm text-muted">
            <span className="text-ok">$</span> {t.contact.locationCommand}
          </span>
          <span className="font-mono text-sm text-foreground">{profile.location}</span>
          <GitLabel text={t.contact.statusLabel} className="ml-auto" />
        </div>
      </div>
    </section>
  );
}
