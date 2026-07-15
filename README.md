# 🇭🇷 Croatia — Land of a Thousand Islands

Sitio web interactivo y premium para recorrer los lugares más importantes de Croacia.
Mapa interactivo dibujado a mano, historia de cada ciudad y navegación multilingüe
(**Español · Hrvatski · English**) que se puede cambiar en cualquier momento.

## ✨ Características

- **Mapa interactivo del Adriático** en SVG (dibujado a mano) con 12 destinos clicables.
- **Panel de detalle por ciudad** con historia narrada, datos, aspectos destacados y curiosidades.
- **Tres idiomas** intercambiables al instante (ES / HR / EN), con el idioma recordado en el navegador.
- **Escenas visuales procedurales** generadas por código para cada lugar (sin fotos de terceros),
  con estética cinematográfica coherente.
- **Diseño responsivo** y accesible (navegación por teclado, `prefers-reduced-motion`).
- 100% estático — sin dependencias de build.

## 🗺️ Destinos incluidos

Zagreb · Plitvice · Rijeka · Pula · Rovinj · Zadar · Šibenik · Split · Hvar · Makarska · Dubrovnik · Osijek

## 🚀 Cómo verlo localmente

Al ser un sitio estático, basta con servir la carpeta:

```bash
npx serve .
# o simplemente abrir index.html en el navegador
```

## 📦 Estructura

```
Croacia/
├── index.html        # estructura y mapa SVG
├── css/styles.css    # diseño premium (tema Adriático)
├── js/content.js     # todo el contenido trilingüe (ES/HR/EN)
└── js/app.js         # interacción, i18n, escenas procedurales
```

## 🌐 Deploy

Preparado para [Vercel](https://vercel.com) (sitio estático, ver `vercel.json`).

---

*Diseño premium — las imágenes son ilustrativas, generadas por código. En una próxima
iteración se pueden reemplazar por fotografías reales o imágenes generadas con IA.*
