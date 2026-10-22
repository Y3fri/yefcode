# CLAUDE.md

Guía para trabajar en este repositorio de forma consistente y segura.

## Qué es esto

Portafolio personal estático de **Yeferson Guzmán** (desarrollador full stack).
Muestra su perfil, servicios, stack, proyectos y contacto. **No vende nada** ni tiene backend.

- **Stack:** Next.js 16 (App Router) · TypeScript estricto · Tailwind CSS v4 · pnpm
- **Salida:** sitio 100 % estático (`output: "export"`) desplegado en Netlify
- **Idioma:** el español es el predeterminado (`lang="es"`); el sitio ofrece inglés
  opcional desde el panel de ajustes. Código, nombres de archivos y commits en inglés.

## Regla de oro del contenido

> **Todo texto vive en `src/data`; no se inventan datos; los pendientes llevan `TODO(yeferson)`.**

- Textos traducibles → `src/data/i18n/` (es.ts es la fuente, en.ts debe cubrirlo todo).
- Datos personales y hechos → `src/data/profile.ts` y `src/data/socials.ts`.
- Proyectos → `src/data/projects.ts`; stack → `src/data/stack.ts`.
- **Nunca** dentro de un componente.
- No se inventan datos: ni años de experiencia, ni empresas, ni títulos, ni
  métricas, ni clientes. Si falta algo, déjalo marcado como `TODO(yeferson):`
  en el código y anótalo en `docs/CONTENT.md`.

## Comandos

| Comando          | Qué hace                                             |
| ---------------- | ---------------------------------------------------- |
| `pnpm dev`       | Servidor de desarrollo (http://localhost:3000)       |
| `pnpm build`     | Build de producción con export estático a `/out`     |
| `pnpm lint`      | ESLint sobre todo el repo                            |
| `pnpm typecheck` | `tsc --noEmit` con strict + noUncheckedIndexedAccess |
| `pnpm format`    | Prettier (ordena clases Tailwind incluidas)          |
| `pnpm start`     | Sirve el build de producción                         |

> La **Definition of Done** es: `pnpm lint`, `pnpm typecheck` y `pnpm build` en verde antes de decir "listo".

## Mapa de carpetas

```
├── netlify.toml              # Despliegue + cabeceras de seguridad
├── docs/                     # Documentación de diseño y arquitectura
│   ├── ARCHITECTURE.md       # Decisiones técnicas y su porqué
│   ├── DESIGN.md             # Paleta, tokens, espaciado, componentes
│   └── CONTENT.md            # Regla de contenido, inventario y TODOs
├── public/
│   └── projects/             # Imágenes y video de los proyectos
└── src/
    ├── app/
    │   ├── layout.tsx        # Html, script anti-flash, metadata, JSON-LD
    │   ├── page.tsx          # Página única (todas las secciones)
    │   ├── not-found.tsx     # 404
    │   ├── sitemap.ts        # Sitemap estático
    │   ├── robots.ts         # Robots.txt
    │   ├── icon.svg          # Favicon
    │   └── globals.css       # Tokens, tema claro, acentos, motion
    ├── components/
    │   ├── layout/           # Navbar, Footer, SkipLink
    │   ├── providers/        # SettingsProvider (contexto de ajustes + i18n)
    │   ├── sections/         # Hero, About, Services, Stack, Projects,
    │   │                     # Experience, Contact, ProjectCard
    │   └── ui/               # Chip, GitLabel, SectionHeading, Terminal,
    │                         # SettingsPanel
    ├── data/
    │   ├── i18n/             # es.ts (fuente), en.ts, index.ts
    │   ├── profile.ts        # Datos personales, experiencia, navegación
    │   ├── projects.ts       # Proyectos (slug, title, year, status, …)
    │   ├── socials.ts        # Correo, WhatsApp, LinkedIn, GitHub
    │   └── stack.ts          # Stack agrupado por capa
    └── lib/
        ├── types.ts          # Tipos del dominio
        ├── settings.ts       # Persistencia de preferencias (localStorage)
        └── utils.ts          # cn(), getSiteUrl(), getUrlLabel()
```

## Reglas

### TypeScript

- **Estricto.** `noUncheckedIndexedAccess` activo. **Prohibido `any`**; usa `unknown` + narrowing o tipos propios.
- Componentes pequeños, **una responsabilidad** cada uno.
- Los tipos del dominio viven en `src/lib/types.ts`.

### Datos y textos

- **Todo dato o texto editable va en `src/data/`**, nunca dentro de un componente.
- No inventes datos personales (correo, redes, bio, empresas, fechas, métricas).
  Si falta, marca un `TODO(yeferson)` visible en el código y avísalo.
- El español es la fuente (`src/data/i18n/es.ts` y campos en español de
  `projects.ts`); `en.ts` está tipado para obligar a traducir toda clave nueva.

### React

- **Server Components por defecto.** Añade `"use client"` solo cuando haga falta.
  Hoy lo son: `Navbar`, `Footer`, `SkipLink`, `SettingsProvider`, `SettingsPanel`,
  `Terminal` y **las secciones que consumen el diccionario de idioma** (`useSettings`).
- No pases datos del servidor al cliente si no hace falta.
- El contenido se sigue sirviendo como HTML prerenderiado: el cambio de idioma
  ocurre en el cliente tras la hidratación.

### Preferencias (panel de configuración)

- Botón en la navbar → `SettingsPanel`: tema (oscuro/claro/sistema), idioma
  (es/en), color de acento (4 paletas) y animaciones (activadas/reducidas).
- Se guardan en `localStorage` bajo `yefcode.settings`, siempre con `try/catch`
  (`src/lib/settings.ts`).
- El script inline del `layout.tsx` aplica lo guardado **antes del primer
  paint** (sin flash de tema incorrecto); `SettingsProvider` lo re-aplica y
  persiste cambios después de la hidratación.
- Accesibilidad del panel: `aria-expanded`/`aria-haspopup` en el botón,
  `role="dialog"` + `aria-modal`, foco inicial en el panel, trampa de foco con
  Tab y cierre con Escape (devolviendo el foco al botón).
- El color de acento y el tema se definen **solo** con variables CSS en
  `globals.css` (`[data-accent=…]`, `[data-theme=light]`). No añadas colores
  hardcodeados a componentes.

### Accesibilidad

- Semántica correcta (`header/nav/main/footer`, `h1→h2→h3` sin saltos).
- Navegación completa por teclado; **foco visible** siempre.
- Contraste **AA** mínimo (verificado en ambos temas). `alt` descriptivo en toda
  imagen. Etiquetas `sr-only` cuando el texto visible no basta.

### Rendimiento

- Usa `next/image` con `fill`/`sizes` y lazy loading. Fuentes con `next/font`.
- **Sin dependencias pesadas.** Meta: Lighthouse 95+. No se han añadido
  dependencias para i18n ni ajustes: son archivos propios.
- Respeta `prefers-reduced-motion` y la preferencia `html[data-motion]`.

### SEO

- `metadata` y Open Graph en `src/app/layout.tsx` (título y descripción en español).
- JSON-LD tipo `Person` en `layout.tsx` (sin teléfono).
- `sitemap.ts` y `robots.ts` activos. `lang="es"` por defecto.

### Seguridad

- **Nunca** subas secretos al repo. Solo variables `NEXT_PUBLIC_*` (públicas por definición).
- Todo enlace externo lleva `target="_blank" rel="noopener noreferrer"`.
- Cabeceras de seguridad en `netlify.toml`.

### Estilo

- Tailwind con los **tokens de `globals.css`** (`--color-*`, `--font-*`). No uses colores hardcodeados salvo necesidad real.
- Nombres de archivos, funciones y variables **en inglés**; textos del sitio en español.
- Sin CSS suelto salvo justificación.

### Git

- Commits convencionales (`feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`, `test:`).
- Cambios pequeños y enfocados. Un commit = una idea.

### Disciplina

- **No instales dependencias sin justificarlo.**
- **No crees archivos innecesarios.**
- **No toques lo que no se pidió.**

## Cómo agregar un proyecto nuevo

1. Añade la imagen del proyecto en `public/projects/` (p. ej. `mi-proyecto.png`).
2. Abre `src/data/projects.ts` y agrega un objeto al array `projects`:

```ts
{
  slug: "mi-proyecto",                 // único, en kebab-case
  title: "Mi Proyecto",
  year: 2026,
  status: "live",                      // "live" = en producción | "development"
  summary: "Una o dos frases claras de qué hace.",
  role: "Mi rol en el proyecto",       // opcional si aún no está confirmado
  stack: ["React", "FastAPI"],
  branch: "web",                       // "web" | "api"
  image: {
    kind: "image",                     // "image" | "video"
    src: "/projects/mi-proyecto.png",
    alt: "Descripción accesible de la captura.",
  },
  url: "https://example.com",          // opcional
  // repo: "https://github.com/…",     // solo si se confirma publicar el código
},
```

3. Añade la traducción al inglés en `src/data/i18n/en.ts` (`projectCopyEn`):
   el mapa está tipado por `slug`, así que **no compila si falta**.
4. Guarda y ejecuta `pnpm typecheck`. La tarjeta se renderiza sola en la
   sección Proyectos (ordenada por año descendente).

No hace falta tocar ningún componente. Los campos opcionales ausentes se omiten
(`role`, `url`, `repo`).

## Pendientes abiertos (TODOs)

Los datos por confirmar se marcan con `TODO(yeferson)` en el código y se listan
en `docs/CONTENT.md`. Búscalos con:

```
rg "TODO\(yeferson\)" src/
```
