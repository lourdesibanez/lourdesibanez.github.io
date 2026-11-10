# Lineamientos del portfolio

Portfolio personal de Lourdes Ibañez, bilingüe (ES / EN), hecho con **Astro 5 + Tailwind CSS 4** y publicado en GitHub Pages (`https://lourdesibanez.github.io`).

## Comandos

```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ para revisarlo
```

**No correr `npm run build` mientras `npm run dev` está corriendo.** Los dos comparten la carpeta `.astro/`, el build la pisa y el servidor de desarrollo pierde los proyectos (todas las páginas de proyecto dan 404). Si pasa: frenar el dev server, borrar `.astro/` y `node_modules/.astro/` y volver a levantarlo.

## Estructura

| Qué | Dónde |
|---|---|
| Textos de la home (ES y EN) | `src/i18n/ui.ts` |
| Rutas y selector de idioma | `src/i18n/ui.ts` (`routes`, `alternatePath`) |
| Proyectos | `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` |
| Esquema de los proyectos | `src/content.config.ts` |
| Home | `src/views/Home.astro` |
| Página de proyecto | `src/views/ProjectDetail.astro` |
| Componentes (nav, credencial, tarjetas…) | `src/components/` |
| Estilos globales, paleta y animaciones | `src/styles/global.css` |
| Imágenes | `public/assets/<proyecto>/` |
| Redirecciones de URLs viejas (`proyecto-*.html`) | `public/*.html` |

Rutas: el español va en la raíz (`/`, `/proyectos/<slug>/`) y el inglés bajo `/en/` (`/en/`, `/en/projects/<slug>/`). El slug de un proyecto es el mismo en los dos idiomas.

## Idiomas

- **Todo cambio de texto se hace en los dos idiomas.** Si se agrega o modifica algo en `es`, va también en `en`, y al revés.
- El español es **rioplatense con voseo** ("tocá", "escribime", "hablemos"). No usar tuteo.
- El inglés debe ser una traducción natural, no literal. Los nombres propios argentinos (AFIP, Libro Sueldo Digital…) se mantienen y se aclaran la primera vez entre paréntesis.
- Las etiquetas de los gráficos están en español; en la versión en inglés va una nota que lo aclara.

## Contenido: no inventar datos

- No agregar fechas, cargos, niveles de idioma, métricas ni logros que Lourdes no haya dado. Si falta un dato, preguntarle o dejarlo afuera.
- Los números de los casos de estudio tienen que salir de sus fuentes (informe, notebook, gráficos). Por ejemplo, en `riesgo-crediticio` las reglas de negocio salen de los nodos del árbol (`public/assets/riesgo-crediticio/arbol.png`).
- Antes de afirmar algo, verificar que coincida con las imágenes o documentos del proyecto.

## Agregar un proyecto nuevo

1. Crear `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` con el mismo slug.
2. Completar el frontmatter según `src/content.config.ts`:
   - `title`, `kicker`, `summary`, `cardSummary`, `order` (menor = aparece primero), `categories` (`diseno`, `backend`, `analisis`, `ia`), `tags`.
   - `cover` y `hero` con `fit`: `logo` (logo sobre fondo blanco), `phone` (capturas de celular) o `cover` (imagen a sangre).
   - Opcionales: `stats` (cifras destacadas), `facts` (ficha lateral), `links` (`kind`: `figma`, `github`, `play`, `demo`, `external`), `gallery`.
3. Cuerpo en Markdown con secciones `##`. Para gráficos con epígrafe usar:
   ```html
   <figure class="chart">
     <a href="/assets/x/grafico.png" target="_blank" rel="noopener"><img src="/assets/x/grafico.png" alt="Descripción del gráfico" loading="lazy"></a>
     <figcaption>Epígrafe corto.</figcaption>
   </figure>
   ```
   Para reglas o puntos destacados en tarjetas: `<div class="rules"><div class="rule"><b>Título</b>Texto</div></div>`.
4. Imágenes en `public/assets/<slug>/`, preferentemente `.webp` (o `.png` para gráficos). Rutas con `/assets/...` y espacios codificados como `%20`.
5. Si el proyecto suma una categoría nueva, agregarla al enum en `src/content.config.ts` y al filtro en `projects.filters` de `src/i18n/ui.ts` (ES y EN).

## Diseño

La identidad visual es propia (paleta violeta de su sitio anterior + estética de "mesa de trabajo de Figma"). Se tomó como inspiración la estructura de otro portfolio, pero **no hay que copiar su diseño, textos ni ilustraciones**.

**Paleta** (tokens en `src/styles/global.css`):

| Token | Color | Uso |
|---|---|---|
| `ink` | `#1a1f2b` | carbón: fondos oscuros, texto |
| `carbon` | `#3b4252` | carbón secundario |
| `paper` | `#f6f1f5` | fondos claros |
| `malva` | `#b48ead` | acento principal |
| `malva-ink` | `#8a6584` | acento sobre fondos claros |
| `blush` | `#e5d7e9` | lila suave: resaltados |
| `sage` | `#8fb08a` | verde: estado "online", "aprobado" |

**Tipografías:** Big Shoulders Display (títulos, en mayúsculas), Inter (texto), IBM Plex Mono (etiquetas y datos).

**Patrones que se mantienen:**
- Secciones como paneles redondeados que alternan claro y oscuro, con fondo de puntos y marcas `+` en las esquinas (`Panel.astro`).
- Encabezados de sección con número y ruta tipo `~/lourdes/<seccion>` (`SectionHead.astro`). La palabra destacada del título va entre `<em>`.
- Animaciones: escritura en el título del hero, credencial colgante (arrastrable, se da vuelta), cinta de tecnologías, tarjetas con spotlight, revelado al hacer scroll. Todas respetan `prefers-reduced-motion`.
- Usar los tokens de la paleta; no agregar colores sueltos.
- Todo tiene que verse bien en celular (probar a 390 px de ancho).

## Gráficos de datos (Colab / matplotlib)

Para que combinen con la web:
- Barras o series principales: `#b48ead`; segunda serie: `#8a6584`.
- Categorías Aprobado / Rechazado (o sí / no): `#8fb08a` / `#8a6584`.
- Textos, títulos y medias: `#1a1f2b`; medianas: `#8fb08a`.
- Fondo blanco, sin bordes superior y derecho (`ax.spines[['top','right']].set_visible(False)`).
- Exportar con `plt.savefig('nombre.png', dpi=200, bbox_inches='tight', facecolor='white')`.

## Foto

La credencial del hero muestra "LI" hasta que haya foto. Para ponerla: copiar el archivo a `public/assets/` y en `src/views/Home.astro` cambiar `const photo = undefined` por la ruta (por ejemplo `'/assets/lourdes.webp'`). La foto **no** lleva ubicación.

## Verificar antes de dar algo por terminado

- `npm run build` sin errores (con el dev server frenado, ver arriba).
- Revisar la página cambiada en ES y en EN, en escritorio y en celular.
- Comprobar que los links internos y las imágenes nuevas existan.

## Publicación y git

- Al hacer push a `main`, el workflow `.github/workflows/deploy.yml` compila y publica en GitHub Pages. En la configuración del repo, *Settings → Pages → Source* tiene que estar en **GitHub Actions**.
- Hacer commit solo cuando Lourdes lo pida.
- **No agregar la línea `Co-Authored-By` de Claude en los commits.**
- No commitear `node_modules/`, `dist/` ni `.astro/` (ya están en `.gitignore`).
