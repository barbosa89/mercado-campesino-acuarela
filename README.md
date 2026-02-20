# 🌍 Tour Virtual 360°

Aplicación web de tour virtual interactivo construida con Nuxt 3 y Photo Sphere Viewer.

Permite a los usuarios explorar lugares turísticos mediante fotografías panorámicas 360° con navegación entre escenas, hotspots informativos y soporte para VR.

## ✨ Características

- 📸 **Visualización 360°**: Fotos equirectangulares de alta calidad
- 🔗 **Navegación fluida**: Transiciones suaves entre escenas
- 📍 **Hotspots interactivos**: Marcadores con información adicional
- 📱 **Responsive**: Optimizado para desktop, tablet y móvil
- 🎯 **Giroscopio**: Soporte para navegación con movimiento del dispositivo
- 🎨 **Personalizable**: Fácil configuración de estilos y contenido
- ⚡ **Rendimiento**: Precarga inteligente de escenas

## 🛠️ Tecnologías

- **[Nuxt 3](https://nuxt.com/)**: Framework Vue.js de última generación
- **[Photo Sphere Viewer](https://photo-sphere-viewer.js.org/)**: Visor WebGL de panoramas
- **[Three.js](https://threejs.org/)**: Renderizado 3D
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first

## 📖 Documentación de Photo Sphere Viewer

- [Guía oficial](https://photo-sphere-viewer.js.org/guide/)
- [Virtual Tour Plugin](https://photo-sphere-viewer.js.org/plugins/virtual-tour.html)
- [Markers Plugin](https://photo-sphere-viewer.js.org/plugins/markers.html)

## 🚀 Inicio Rápido

### 1. Instalación

```bash
npm install
```

### 2. Añade tus imágenes 360°

Coloca tus fotos panorámicas equirectangulares en:

```
public/panoramas/escena-1.jpg
public/panoramas/escena-2.jpg
public/panoramas/escena-3.jpg
```

Y sus miniaturas (400x200px) en:

```
public/thumbnails/escena-1.jpg
public/thumbnails/escena-2.jpg
public/thumbnails/escena-3.jpg
```

### 3. Configura tu tour

Edita `app/composables/useTourData.ts` para definir:

- Las escenas (nodos) de tu tour
- Los enlaces entre escenas
- Los hotspots/marcadores informativos

```typescript
const nodes: TourNode[] = [
  {
    id: 'escena-1',
    name: 'Entrada Principal',
    panorama: '/panoramas/escena-1.jpg',
    thumbnail: '/thumbnails/escena-1.jpg',
    links: [
      {
        nodeId: 'escena-2',
        position: { yaw: 0.5, pitch: 0 }
      }
    ],
    markers: [...]
  },
  // ... más escenas
]
```

### 4. Ejecuta el servidor de desarrollo

```bash
npm run dev
```

Visita `http://localhost:3000` para ver tu tour.

## 📐 Posicionamiento de Links y Marcadores

### Sistema de Coordenadas

- **yaw**: Rotación horizontal (-π a π, o -180° a 180°)
  - 0: Frente
  - π/2 (90°): Derecha
  - -π/2 (-90°): Izquierda
  - π (180°): Atrás

- **pitch**: Rotación vertical (-π/2 a π/2, o -90° a 90°)
  - 0: Horizonte
  - π/2 (90°): Arriba
  - -π/2 (-90°): Abajo

### Herramienta para encontrar coordenadas

Photo Sphere Viewer incluye un modo debug. En tu navegador:

1. Abre las DevTools (F12)
2. En la consola, escribe:

```javascript
viewer.addEventListener("click", ({ data }) => {
  console.log("yaw:", data.yaw, "pitch:", data.pitch);
});
```

## 🎨 Personalización

### Estilos del Visor

Edita el componente `VirtualTour360.vue` para personalizar:

- Colores de la interfaz
- Botones de navegación
- Efectos de transición
- Estilo de marcadores

### Controles de Navegación

```vue
<VirtualTour360
  :height="'100vh'"
  :show-controls="true"
  :enable-gyroscope="true"
/>
```

## 📂 Estructura del Proyecto

```
tour360/
├── app/
│   ├── components/
│   │   └── VirtualTour360.vue      # Componente principal del visor
│   ├── composables/
│   │   └── useTourData.ts          # Datos y configuración del tour
│   ├── pages/
│   │   └── index.vue               # Página principal
│   └── layouts/
│       └── default.vue
├── public/
│   ├── panoramas/                  # Tus fotos 360° (JPG, 4K-8K+)
│   └── thumbnails/                 # Miniaturas (400x200px)
└── package.json
```

## 🎯 Casos de Uso

- Tours de propiedades inmobiliarias
- Museos virtuales
- Recorridos turísticos
- Showrooms de productos
- Campus universitarios
- Hoteles y resorts
- Galerías de arte

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge (últimas versiones)
- ✅ iOS Safari 11+
- ✅ Android Chrome
- ✅ WebGL compatible browsers
- ✅ Desktop y móvil

## ⚠️ Requisitos de las Imágenes 360°

### Formato correcto

Tus fotos deben ser **equirectangulares** (proyección 360° x 180°):

- Relación de aspecto 2:1 (ancho x alto)
- Ejemplo: 8192 x 4096 px, 4096 x 2048 px

### ¿Cómo obtener fotos 360°?

1. **Cámara 360°**: Insta360, Ricoh Theta, GoPro Max
2. **Smartphone**: Apps como Google Street View
3. **DSLR**: Panorama de múltiples fotos + stitching software

### Herramientas de conversión

Si tienes fotos en otro formato:

- [PTGui](https://www.ptgui.com/) - Stitching profesional
- [Hugin](http://hugin.sourceforge.net/) - Gratis, open source
- Online: [Panorama to Equirectangular](https://www.360toolkit.co/)

## 🔧 Troubleshooting

### Las imágenes no se muestran

- Verifica que las rutas en `useTourData.ts` coincidan con tus archivos
- Asegúrate de que las imágenes estén en formato equirectangular
- Revisa la consola del navegador para errores

### Error de SSR/Hydration

- El componente usa `<ClientOnly>` por defecto
- Photo Sphere Viewer solo funciona en el navegador

### Rendimiento lento

- Optimiza el tamaño de tus imágenes (usa compresión JPEG 85-90%)
- Considera usar imágenes progresivas
- Reduce la resolución para dispositivos móviles

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
