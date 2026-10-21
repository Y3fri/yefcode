# CLAUDE.md

Guía para trabajar en este repositorio de forma consistente y segura.

## Qué es esto

Portafolio personal estático de **Yeferson Guzmán** (desarrollador full stack).
Muestra su perfil, proyectos y contacto. **No vende nada** ni tiene backend.

- **Stack:** Next.js 16 (App Router) · TypeScript estricto · Tailwind CSS v4 · pnpm
- **Salida:** sitio 100 % estático (`output: "export"`) desplegado en Netlify
- **Idioma:** el sitio y sus textos están en español (`lang="es"`); el código, los nombres de archivos y los commits en inglés.

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
│   └── CONTENT.md            # Inventario de textos y TODOs
├── public/
│   └── projects/             # Imágenes y video de los proyectos
└── src/
    ├── app/
    │   ├── layout.tsx        # Html, fuentes, metadata, Navbar/Footer
    │   ├── page.tsx          # Página única (Inicio/Sobre mí/Proyectos/Contacto)
    │   ├── not-found.tsx     # 404
    │   ├── sitemap.ts        # Sitemap estático
    │   ├── robots.ts         # Robots.txt
    │   ├── icon.svg          # Favicon
    │   └── globals.css       # Tokens de Tailwind v4 + estilos base
    ├── components/
    │   ├── layout/           # Navbar, Footer
    │   ├── sections/         # Hero, About, Projects, Contact, ProjectCard
    │   └── ui/               # Chip, GitLabel, SectionHeading, Terminal
    ├── data/                 # projects.ts, profile.ts, socials.ts
    └── lib/
        ├── types.ts          # Tipos del dominio
        └── utils.ts          # cn(), getSiteUrl()
```

## Reglas

### TypeScript

- **Estricto.** `noUncheckedIndexedAccess` activo. **Prohibido `any`**; usa `unknown` + narrowing o tipos propios.
- Componentes pequeños, **una responsabilidad** cada uno.
- Los tipos del dominio viven en `src/lib/types.ts`.

### Datos y textos

- **Todo dato o texto editable va en `src/data/`**, nunca dentro de un componente.
- No inventes datos personales (correo, redes, bio). Si falta, marca un `TODO` visible y avísalo.

### React

- **Server Components por defecto.** Añade `"use client"` solo cuando haga falta (estado, efectos, listeners). Ejemplos actuales: `Navbar` y `Terminal`.
- No pases datos del servidor al cliente si no hace falta.

### Accesibilidad

- Semántica correcta (`header/nav/main/footer`, `h1→h2→h3` sin saltos).
- Navegación completa por teclado; **foco visible** siempre.
- Contraste **AA** mínimo. `alt` descriptivo en toda imagen. Etiquetas `sr-only` cuando el texto visible no basta.

### Rendimiento

- Usa `next/image` con `fill`/`sizes` y lazy loading. Fuentes con `next/font`.
- **Sin dependencias pesadas.** Meta: Lighthouse 95+.
- Respeta `prefers-reduced-motion`.

### SEO

- `metadata` y Open Graph en `src/app/layout.tsx`.
- `sitemap.ts` y `robots.ts` activos. `lang="es"`.

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
  id: "mi-proyecto",                    // único, en kebab-case
  name: "Mi Proyecto",
  year: 2026,
  description: "Una frase clara de qué hace.",
  stack: ["React", "FastAPI"],
  branch: "web",                        // "web" | "api"
  status: "live",                       // "live" | "development"
  media: {
    kind: "image",                      // "image" | "video"
    src: "/projects/mi-proyecto.png",
    alt: "Descripción accesible de la captura.",
  },
  link: { label: "example.com", href: "https://example.com" },
},
```

3. Guarda y ejecuta `pnpm typecheck`. La tarjeta se renderiza sola en la sección Proyectos (ordenada por año descendente).

No hace falta tocar ningún componente. Para un proyecto **sin enlace** (solo demo en video), omite `link` y usa `media.kind: "video"`.

## Pendientes abiertos (TODOs)

Hay datos personales a completar, marcados con `TODO(...)` en el código y listados en `docs/CONTENT.md`. Búscalos con:

```
rg "TODO\(" src/
```
