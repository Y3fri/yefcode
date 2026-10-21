# YefCode — Portafolio de Yeferson Guzmán

Portafolio personal **estático** de Yeferson Guzmán, desarrollador full stack.
Muestra su perfil, sus proyectos y cómo contactarlo. No vende nada y no tiene backend.

**Stack:** Next.js 16 (App Router) · TypeScript estricto · Tailwind CSS v4 · pnpm
**Salida:** sitio 100 % estático (`output: "export"`) listo para Netlify

---

## Requisitos

- Node.js 24+
- pnpm 12+

## Arranque rápido

```bash
# 1. Instalar dependencias
pnpm install

# 2. (Opcional) variables de entorno
cp .env.example .env.local

# 3. Servidor de desarrollo
pnpm dev
```

Abre <http://localhost:3000>.

## Scripts

| Comando          | Qué hace                                           |
| ---------------- | -------------------------------------------------- |
| `pnpm dev`       | Servidor de desarrollo                             |
| `pnpm build`     | Build de producción → genera `/out`                |
| `pnpm start`     | Sirve el build de producción                       |
| `pnpm lint`      | ESLint                                             |
| `pnpm typecheck` | `tsc --noEmit` (strict + noUncheckedIndexedAccess) |
| `pnpm format`    | Prettier (incluye orden de clases Tailwind)        |

## Estructura

```
src/
├── app/          # Layout, página, 404, sitemap, robots, icono
├── components/
│   ├── layout/   # Navbar, Footer
│   ├── sections/ # Hero, About, Projects, Contact, ProjectCard
│   └── ui/       # Chip, GitLabel, SectionHeading, Terminal
├── data/         # projects.ts, profile.ts, socials.ts
└── lib/          # types.ts, utils.ts
public/projects/  # Imágenes y video de proyectos
docs/             # ARCHITECTURE.md, DESIGN.md, CONTENT.md
```

## Despliegue en Netlify

El repo ya trae `netlify.toml` con build, publicación y cabeceras de seguridad.

### Opción A — Desde la interfaz web (recomendada)

1. Sube el proyecto a GitHub.
2. En Netlify: **Add new site → Import an existing project** y elige el repo.
3. Netlify detecta `netlify.toml` automáticamente. Configuración:
   - **Build command:** `pnpm build`
   - **Publish directory:** `out`
   - **Node version:** 24 (ya definido en `netlify.toml`)
4. **Deploy site.**

### Opción B — Con Netlify CLI

```bash
# Instalar CLI una sola vez
npm install -g netlify-cli

# Login
netlify login

# Iniciar el sitio (una vez)
netlify init

# Desplegar
netlify deploy --prod
```

### Variable de entorno

Define `NEXT_PUBLIC_SITE_URL` en **Site settings → Environment variables** con tu
dominio final (p. ej. `https://tu-sitio.netlify.app`). Se usa para el canonical,
el sitemap y Open Graph. Si no existe, se usa un valor por defecto.

> Nota: al ser export estático, `NEXT_PUBLIC_*` se inyecta **en tiempo de build**.
> Si la cambias, vuelve a desplegar.

## Cómo agregar un proyecto nuevo

1. Pon su imagen en `public/projects/`.
2. Agrega el objeto en `src/data/projects.ts` (tipado con `Project`).
3. `pnpm typecheck`. La tarjeta aparece sola.

Detalles en [CLAUDE.md](./CLAUDE.md#Cómo-agregar-un-proyecto-nuevo).

## Documentación

- [CLAUDE.md](./CLAUDE.md) — reglas de trabajo y guía para agentes
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — decisiones técnicas
- [docs/DESIGN.md](./docs/DESIGN.md) — sistema de diseño y tokens
- [docs/CONTENT.md](./docs/CONTENT.md) — inventario de textos y TODOs

## Licencia

Todos los derechos reservados © Yeferson Guzmán.
