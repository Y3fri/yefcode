# Contenido — YefCode

Inventario de todos los textos del sitio y de los datos que faltan por completar.

Los textos visibles se sirven desde `src/data/`. Los marcadores `TODO(...)` se
renderizan **a propósito en la interfaz** para que nada se invente y nada se
oculte.

---

## 1. Contenido faltante (debes completarlo)

Búscalos en el código con: `rg "TODO\(" src/`

| #   | Qué falta              | Archivo               | Línea aprox. | Valor actual                                      |
| --- | ---------------------- | --------------------- | ------------ | ------------------------------------------------- |
| 1   | **Foto personal**      | `src/data/profile.ts` | 30           | `photoSrc: undefined` + hueco visible en Sobre mí |
| 2   | **Texto "Sobre mí"**   | `src/data/profile.ts` | 27           | `TODO(texto): reemplaza este párrafo…`            |
| 3   | **Ubicación**          | `src/data/profile.ts` | 21           | `TODO: tu ciudad, país`                           |
| 4   | **Correo electrónico** | `src/data/socials.ts` | 10           | `TODO@example.com`                                |
| 5   | **GitHub**             | `src/data/socials.ts` | 13           | `https://github.com/TODO`                         |
| 6   | **LinkedIn**           | `src/data/socials.ts` | 16           | `https://www.linkedin.com/in/TODO`                |

### Cómo completar cada uno

**1. Foto personal**

- Coloca tu imagen en `public/projects/photo.jpg` (recomendado: cuadrada, ≥ 400×400 px).
- En `profile.ts`, cambia `photoSrc: undefined` por `photoSrc: "/projects/photo.jpg"`.
- Actualiza `photoAlt` con una descripción real.
- En `src/components/sections/About.tsx` sustituye el bloque de placeholder por
  un `<Image>` con `src={profile.photoSrc}`.

**2. Texto "Sobre mí"**

- Edita el array `about` en `profile.ts`. Puedes usar uno o varios párrafos.
- Elimina el aviso amarillo de `About.tsx` cuando el texto sea real.

**3. Ubicación**

- Cambia `location` en `profile.ts`.

**4–6. Contacto**

- En `socials.ts` reemplaza `email`, `githubUrl` y `linkedinUrl`.
- Cuando un valor sea real, cambia su `isPlaceholder` a `false` en el array
  `socials` (eso quita el aviso `(TODO)` del footer y del texto de contacto).

> Los marcadores `(TODO)` ámbar del footer y de la sección Contacto desaparecen
> solos en cuanto pongas `isPlaceholder: false`.

---

## 2. Contenido que ya está fijado

### Título y subtítulo (hero)

- **Título:** `Desarrollador Full Stack`
- **Subtítulo:** "Construyo aplicaciones web y APIs claras, rápidas y bien
  estructuradas. Vengo del soporte técnico y la supervisión de equipos, así
  que me importa que las cosas funcionen en producción."

Fuente: `src/data/profile.ts` → `role` y `headline`.

### Navegación

`Inicio` · `Sobre mí` · `Proyectos` · `Contacto` — anclas internas a las
secciones de la página única.

### Proyectos

Fuente: `src/data/projects.ts`. Se ordenan por año descendente.

| Proyecto              | Año  | Estado        | Rama | Enlace                                 |
| --------------------- | ---- | ------------- | ---- | -------------------------------------- |
| YEDIBOX               | 2025 | en vivo       | web  | https://yedibox.shop                   |
| Sistema POS           | 2024 | en vivo       | api  | demo en video (sin enlace)             |
| Reclaje PWA           | 2022 | en vivo       | web  | sin enlace                             |
| DEYLAX                | 2026 | en desarrollo | api  | https://deylax.com                     |
| YediCont              | 2026 | en desarrollo | web  | https://yedicont-front-rkny.vercel.app |
| Free Learning English | 2025 | en vivo       | web  | https://y3frienglish.netlify.app       |

### Medios

Descargados desde el sitio anterior a `public/projects/`:

| Archivo        | Proyecto              | Tipo   |
| -------------- | --------------------- | ------ |
| `yedi1.png`    | YEDIBOX               | imagen |
| `tienda23.mp4` | Sistema POS           | video  |
| `pwa.png`      | Reclaje PWA           | imagen |
| `deylax.png`   | DEYLAX                | imagen |
| `yedicont.png` | YediCont              | imagen |
| `english.png`  | Free Learning English | imagen |

> `tienda23.mp4` se usa también como `poster` del Sistema POS. Si prefieres una
> imagen fija, genera un fotograma y actualiza `media.poster`.

### Metadatos SEO

- **Title:** `Yeferson Guzmán — Desarrollador Full Stack`
- **Description:** el subtítulo del hero.
- **Canonical / OG URL:** `NEXT_PUBLIC_SITE_URL` (por defecto
  `https://yefcode.netlify.app`).
- **Locale:** `es_ES`.
