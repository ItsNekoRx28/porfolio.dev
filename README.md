# Portfolio de Nicola Carambia

Portfolio personal en español e inglés: https://porfolio.nekaso.es/ (español) y https://porfolio.nekaso.es/en/ (inglés).

Hecho con Astro y Tailwind CSS, a partir de la plantilla [porfolio.dev](https://github.com/midudev/porfolio.dev) de midudev (licencia CC BY-NC 4.0).

## Cómo editar los textos

- **Contenido del CV** (experiencia, proyectos, formación, idiomas, voluntariado, sobre mí): `src/i18n/content.ts`. Cada texto está dos veces, en `es` y en `en`.
- **Textos de la interfaz** (menú, botones, títulos de sección): `src/i18n/ui.ts`.
- **CV en PDF:** pon los archivos en `public/cv/Nicola_Carambia_CV_ES.pdf` y `public/cv/Nicola_Carambia_CV_EN.pdf`. El botón "Descargar CV" aparece solo cuando el PDF existe.

## Comandos

```bash
pnpm install
pnpm dev      # http://localhost:4321 y http://localhost:4321/en/
pnpm build
```
