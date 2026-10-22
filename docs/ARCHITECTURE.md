# Arquitectura — YefCode

Documento de decisiones técnicas y su justificación. Cada entrada responde:
**qué se decidió, por qué, y qué alternativas se descartaron.**

---

## 1. Next.js 16 App Router + export estático

**Decisión:** usar App Router con `output: "export"` en `next.config.ts`.

**Por qué:** el portafolio no necesita servidor. No hay backend, no hay datos
dinámicos por usuario, no hay autenticación. Un sitio estático es más rápido,
más barato de hostear y más seguro (no hay proceso que atacar).

**Consecuencias:**

- La salida se genera en `/out`, que es lo que publica Netlify.
- No se puede usar `next/image` con `images.unoptimized` off; Netlify se encarga
  de la optimización en su CDN.
- Las rutas de metadatos (`sitemap.ts`, `robots.ts`) requieren
  `export const dynamic = "force-static"` para generarse.

## 2. TypeScript estricto

**Decisión:** `strict: true` **más** `noUncheckedIndexedAccess: true`.

**Por qué:** `noUncheckedIndexedAccess` obliga a comprobar que un elemento de
array existe antes de usarlo (`arr[i]` es `T | undefined`). Evita el bug clásico
del índice fuera de rango. En un sitio pequeño cuesta poco y enseña buenos hábitos.

**Regla asociada:** `any` está prohibido. Se usa `unknown` con narrowing o un
tipo propio en `src/lib/types.ts`.

## 3. Tailwind CSS v4 con tokens en CSS

**Decisión:** Tailwind v4 usando `@theme` dentro de `globals.css`, sin archivo
`tailwind.config.js`.

**Por qué:** v4 define los tokens como variables CSS nativas. Los colores,
tipografías, radios y espaciados viven en `@theme` y se exponen como utilidades
(`bg-surface`, `text-muted`, `border-border`, etc.). Añadir un token es añadir
una línea `--color-x`, sin tocar configuración JS.

**Detalle:** `@tailwindcss/turbopack` se registra como loader de CSS en
`next.config.ts` porque el proyecto usa Turbopack (el bundler por defecto en 16).

## 4. Fuentes con next/font

**Decisión:** `Geist` (sans) y `Geist_Mono` (mono) vía `next/font/google`.

**Por qué:** `next/font` sirve las fuentes desde `/next/static`, sin peticiones
a Google en producción, con `font-display` óptimo y sin `CLS`. Coincide con la
estética de referencia (fazt.dev / opencode.ai) pedida en el brief.

## 5. Server Components por defecto, cliente donde hace falta

**Decisión:** son `"use client"` solo los componentes que necesitan estado,
efectos o el contexto de ajustes:

- `Navbar` (menú móvil, listeners de teclado, bloqueo de scroll).
- `Footer`, `SkipLink` y **todas las secciones**, porque consumen el diccionario
  de idioma vía `useSettings()` (cambio es/en en el cliente).
- `Terminal` (la animación de tipeo con `useEffect`).
- `SettingsProvider` y `SettingsPanel` (estado de preferencias + localStorage).
- **Componentes de plantillas** (`TemplatesGallery`, `TemplateCard`,
  `TemplateDetail` y las demos): idioma vía `useLocalizedText()` y estado
  propio (filtros de la galería, cuenta regresiva de la invitación).

**Por qué:** el cambio de idioma debe ocurrir en el cliente sin recargar un
sitio estático. Los componentes de presentación sin texto (`Chip`, `GitLabel`,
`SectionHeading`) siguen siendo Server Components y se vuelven clientes solo al
ser importados desde uno. El contenido se sigue sirviendo como HTML
prerenderiado (SSR de los Client Components), así que el SEO no cambia.

**Alternativa descartada:** rutas por locale (`/en`). Se descartó porque
duplicaría el sitio y obligaría a lógica de redirección en un proyecto sin
backend. Framer Motion también se descartó por peso ("sin dependencias
pesadas"): las animaciones son CSS puro.

## 5.1. Preferencias de usuario sin dependencias

**Decisión:** tema, idioma, acento y animaciones viven en `SettingsProvider`,
se persisten en `localStorage` (`yefcode.settings`) y se aplican como
atributos en `<html>` (`data-theme`, `data-accent`, `data-motion`, `lang`).

**Por qué:** atributos + variables CSS = cero re-render de árbol para cambiar
colores, y el mismo valor lo leen el script inline (previo al paint, sin
flash) y el proveedor (tras hidratar). Todo con `try/catch` porque
`localStorage` puede fallar (modo privado, storage bloqueado).

**Sin dependencias:** ni next-themes, ni librerías de i18n: son ~100 líneas
propias y los diccionarios son objetos tipados.

## 6. Datos tipados centralizados

**Decisión:** proyectos, perfil, stack, redes e idiomas viven en `src/data/`,
tipados contra `src/lib/types.ts`.

**Por qué:** separar datos de presentación permite añadir un proyecto sin tocar
ningún componente, y el compilador valida que la forma de cada objeto es correcta.

**Detalle de `Project`:** campos `slug, title, year, status, summary, role,
stack, branch, image, url?, repo?`. `image` es un tipo discriminado
(`kind: "image" | "video"`), lo que permite que `ProjectCard` renderice un
`<Image>` o un `<video>` sin comprobaciones frágiles. `role`, `url` y `repo`
son opcionales: no se inventan datos que el autor no ha confirmado.

**Detalle de i18n:** `en.ts` está anotado con `Dictionary = typeof es`, así que
una clave nueva sin traducir **no compila**; `projectCopyEn` está tipado como
`Record<ProjectSlug, ProjectCopy>` por el mismo motivo.

## 7. Orden de proyectos

**Decisión:** el grid ordena por `year` descendente en tiempo de render.

**Por qué:** el orden más reciente primero es el esperado por quien visita un
portafolio. Al hacerlo en el Server Component no cuesta JS en el cliente.

## 7.1. Plantillas y demos en vivo

**Decisión:** el catálogo (`src/data/templates.ts`) y las demos
(`src/templates/<slug>/`) viven separados; un registro tipado
(`src/templates/index.ts`) une cada slug con su componente.

**Por qué:**

- Las rutas `/plantillas` y `/plantillas/[slug]` se prerenderizan con
  `generateStaticParams`, así que el sitio sigue siendo 100 % estático.
- El registro es `Record<TemplateSlug, ComponentType>`: agregar una plantilla
  al catálogo sin crear su demo **no compila**. Es la misma filosofía que
  `projectCopyEn` y `Record<ProjectSlug, …>`.
- El texto de catálogo y demos usa `LocalizedText { es, en }` con la fábrica
  `L()` (`src/lib/utils.ts`): español e inglés se escriben juntos, sin
  duplicar la estructura de los datos.
- Las demos son mini-sitios con paleta propia (justificado: representan
  páginas ajenas al portafolio). Sus únicas reglas globales son las de
  `reduced-motion` y el marco "Demo" que aportan `TemplateCard` y
  `TemplateDetail`, para que ninguna demo pueda publicarse sin etiqueta.
- Las imágenes de vista previa son SVG mockup en `public/templates/`:
  ligeras, sin fotos reales y con la etiqueta "DEMO" dibujada.

## 8. Seguridad

**Decisión:** cabeceras de seguridad centralizadas en `netlify.toml`.

- `X-Frame-Options: DENY` — implica clickjacking.
- `X-Content-Type-Options: nosniff` — implica MIME-sniffing.
- `Referrer-Policy: strict-origin-when-cross-origin` — no filtra rutas.
- `Content-Security-Policy` con `frame-ancestors 'none'` y `base-uri 'self'`.
- `Permissions-Policy` desactiva cámara, micrófono y geolocalización.

**Además:** todo enlace externo usa `target="_blank" rel="noopener noreferrer"`.
No hay secretos en el repo; solo existe `.env.example` como plantilla.

## 9. Contenido faltante (TODOs)

**Decisión:** los datos personales o de proyectos que faltan (foto, empresa y
fechas de la experiencia, descripciones y roles de algunos proyectos, enlaces
al código) se dejan como marcadores `TODO(yeferson)` **en el código**, sin
inventar nada y sin ensuciar la interfaz pública.

**Por qué:** el brief prohíbe inventar datos. Un `TODO(yeferson)` localizable
es honesto y comprobable (`rg "TODO\(yeferson\)" src/`). La sección
Experiencia, además, permanece oculta tras el flag `showExperience` hasta que
esté completa. El inventario completo está en `docs/CONTENT.md`.

## 10. Naming y convenciones

- Archivos de componentes en **PascalCase** (`ProjectCard.tsx`).
- Archivos utilitarios/datos en **camelCase** (`projects.ts`, `utils.ts`).
- Nombres de código en **inglés**; textos del sitio en **español**.
- Commits convencionales (`feat:`, `docs:`, `chore:`, ...).

## 11. Decisiones que quedaron pendientes deliberadamente

| Tema                 | Estado                                                                 |
| -------------------- | ---------------------------------------------------------------------- |
| Modo claro (light)   | Incluido como preferencia opcional; el sitio sigue naciendo oscuro.    |
| Páginas por proyecto | No incluidas: el brief pide tarjetas con enlace, no rutas.             |
| Formulario contact   | No incluido: el brief pide enlaces mailto/redes, sin backend.          |
| Analítica            | No incluida: sin dependencias externas ni cookies.                     |
| Server-side i18n     | No incluido: el sitio es estático y el cambio de idioma es en cliente. |
