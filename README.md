# Tu Año ♡

Scrapbook digital interactivo, hecho con HTML5 + CSS3 + JavaScript vanilla (sin frameworks, sin backend).

## Cómo ejecutarlo

Opción simple: abre `index.html` directamente en el navegador (doble clic).

Opción recomendada (para que los videos/audio carguen sin problemas de CORS):
```
cd CumpleLu
python3 -m http.server 8000
```
y abre `http://localhost:8000`.

## Dónde poner tus archivos reales

- **Fotos**: reemplaza los `.svg` de ejemplo en `media/<mes>/` por tus `.jpg`/`.png`, y actualiza la ruta (`src`) en `js/script.js`.
- **Videos**: colócalos en `media/<mes>/` (formato `.mp4`) y apunta `src` (y opcionalmente `poster`) del recuerdo tipo `"video"`.
- **GIFs**: igual que las fotos, en `media/<mes>/`, tipo `"gif"`.
- **Música**: coloca tu archivo en `media/music/background.mp3`. Si el archivo no existe todavía, la página funciona igual, solo que sin sonido.

## Cómo cambiar textos

- El mensaje final está en `index.html`, dentro de `<p class="final__texto" data-editable="mensaje-final">`.
- Los textos de portada (título, introducción, botón) están en la sección `<section id="portada">` de `index.html`.
- Las frases de cada mes (`quote`, `closing`) y los textos de cada nota (`text`) están en `js/script.js`, dentro del array `months`.

## Cómo agregar o modificar recuerdos

Todo vive en el array `months` en `js/script.js`. Cada mes tiene una lista `memories`, y cada recuerdo es un objeto simple:

```js
{ type: "foto", src: "media/enero/mi-foto.jpg", caption: "un texto corto" }
{ type: "video", src: "media/enero/mi-video.mp4", poster: "media/enero/poster.jpg", caption: "..." }
{ type: "gif", src: "media/enero/mi-gif.gif", caption: "..." }
{ type: "nota", text: "un mensaje escrito" }
```

Agrega, quita o reordena objetos dentro de `memories` — el diseño se adapta automáticamente sin importar cuántos elementos tenga cada mes.

## Cómo cambiar el estilo visual de un mes

Cambia el valor de `style` en el objeto del mes correspondiente, dentro de `js/script.js`. Estilos disponibles:

`"album"` · `"collage"` · `"diario"` · `"polaroid"` · `"audiovisual"` · `"minimalista"`

## Notas técnicas

- Las imágenes usan `loading="lazy"`; los videos usan `preload="none"` y no se autoreproducen.
- Las animaciones de aparición usan `IntersectionObserver` y respetan `prefers-reduced-motion`.
- Todos los placeholders (`media/**/*.svg`) son generados y están claramente marcados como tales — reemplázalos por tus archivos reales cuando quieras.
