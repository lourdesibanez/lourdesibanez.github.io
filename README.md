# lourdesibanez.github.io

Portfolio personal (ES / EN) hecho con [Astro](https://astro.build) + Tailwind CSS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

- Textos de la home: `src/i18n/ui.ts`
- Proyectos: `src/content/projects/{es,en}/<slug>.md`
- Imágenes: `public/assets/`

Se publica solo en GitHub Pages con el workflow `.github/workflows/deploy.yml` al hacer push a `main`.
