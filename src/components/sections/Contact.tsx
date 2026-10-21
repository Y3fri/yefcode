import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitLabel } from "@/components/ui/GitLabel";
import { email, socials } from "@/data/socials";
import { profile } from "@/data/profile";

/**
 * Sección de contacto.
 * Sin backend: son enlaces mailto y redes sociales directas.
 */
export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          command="git remote add contact"
          title="Contacto"
          description="¿Tienes un proyecto o una idea? Escríbeme y lo vemos."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((social) => {
            const isMail = social.href.startsWith("mailto:");

            return (
              <a
                key={social.id}
                href={social.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-indigo/50 hover:bg-surface-2/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent-blue">
                    {social.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue"
                  >
                    ↗
                  </span>
                </div>

                <span className="font-mono text-xs break-all text-faint">
                  {social.isPlaceholder ? (
                    <span className="text-warn">
                      TODO: completa en src/data/socials.ts
                    </span>
                  ) : (
                    social.href
                  )}
                </span>
              </a>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-surface p-5">
          <span className="font-mono text-sm text-muted">
            <span className="text-ok">$</span> echo $LOCATION
          </span>
          <span className="font-mono text-sm text-foreground">{profile.location}</span>
          <GitLabel text="open to work" className="ml-auto" />
        </div>

        <p className="mt-6 font-mono text-xs text-faint">
          TODO(contacto): reemplaza el correo, GitHub y LinkedIn en{" "}
          <code className="text-warn">src/data/socials.ts</code>.
        </p>

        <p className="sr-only">Correo de contacto: {email}</p>
      </div>
    </section>
  );
}
