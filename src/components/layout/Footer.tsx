import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { GitLabel } from "@/components/ui/GitLabel";

/**
 * Footer con la metáfora de git: rama actual y enlaces externos.
 * Los enlaces marcados como placeholder se muestran pero con aviso.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background-soft/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-sm text-foreground">
              <span className="text-gradient font-semibold">~/yefcode</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Portafolio de {profile.fullName} — {profile.role}.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <GitLabel text={`branch: ${profile.branch}`} />
              {profile.subBranches.map((b) => (
                <GitLabel key={b} text={b} />
              ))}
            </div>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {socials.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="font-mono text-sm text-muted transition-colors hover:text-accent-blue"
                  >
                    {social.label}
                    <span aria-hidden="true" className="ml-1">
                      ↗
                    </span>
                    {social.isPlaceholder ? (
                      <span className="ml-1 text-warn">(TODO)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.fullName}. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs">next.js · typescript · tailwind</p>
        </div>
      </div>
    </footer>
  );
}
