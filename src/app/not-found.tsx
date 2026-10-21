import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-32">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="mb-4 font-mono text-sm text-muted">
          <span className="text-ok">$</span> git status
        </p>
        <h1 className="text-gradient text-5xl font-semibold tracking-tight">404</h1>
        <p className="mt-4 font-mono text-sm text-foreground">
          fatal: la ruta solicitada no existe en esta rama
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Puede que el enlace esté roto o que la página se haya movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 font-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <span aria-hidden="true">$</span> git checkout main
        </Link>
      </div>
    </section>
  );
}
