# Cómo Agregar Imágenes a tu Portfolio

## 📁 Estructura de Carpetas

Crea la siguiente estructura en tu proyecto:

```
public/
└── images/
    ├── story-beats-1.jpg
    ├── story-beats-2.jpg
    ├── acorn-carver-1.jpg
    ├── acorn-carver-2.jpg
    ├── two-types-1.jpg
    ├── love-potion-1.jpg
    ├── action-sample-1.jpg
    ├── 3k9-1.jpg
    ├── gesture-1.jpg
    ├── vis-dev-1.jpg
    ├── work-story-1.jpg
    ├── work-visdev-1.jpg
    ├── sketch-1.jpg
    └── photo-1.jpg
```

## 🖼️ Formatos Soportados

- **JPG/JPEG**: Para fotografías y arte digital
- **PNG**: Para imágenes con transparencia
- **WebP**: Para mejor compresión (recomendado)
- **SVG**: Para iconos y gráficos vectoriales

## 📏 Tamaños Recomendados

### Galería Principal
- **Ancho**: 800px - 1200px
- **Alto**: 600px - 900px
- **Formato**: JPG o WebP
- **Calidad**: 80-85%

### Thumbnails
- **Ancho**: 400px - 600px
- **Alto**: 300px - 450px
- **Formato**: JPG
- **Calidad**: 75-80%

## 🔧 Cómo Actualizar las Imágenes

### 1. Coloca tus imágenes en `public/images/`

### 2. Actualiza los arrays de imágenes en cada página:

```typescript
// En src/app/page.tsx
const storyBeatsImages = [
  { src: '/images/tu-imagen-1.jpg', alt: 'Descripción de la imagen', title: 'Título opcional' },
  { src: '/images/tu-imagen-2.jpg', alt: 'Otra descripción', title: 'Otro título' },
];
```

### 3. Ejemplos de actualización:

```typescript
// Para Story Beats
const storyBeatsImages = [
  { src: '/images/mi-story-beat-1.jpg', alt: 'Story beat personal', title: 'Mi Story Beat 1' },
  { src: '/images/mi-story-beat-2.jpg', alt: 'Otro story beat', title: 'Mi Story Beat 2' },
];

// Para The Acorn Carver
const acornCarverImages = [
  { src: '/images/acorn-carver-mi-version-1.jpg', alt: 'Mi versión del acorn carver', title: 'Acorn Carver - Mi versión 1' },
  { src: '/images/acorn-carver-mi-version-2.jpg', alt: 'Otra versión', title: 'Acorn Carver - Mi versión 2' },
];
```

## 🎨 Optimización de Imágenes

### Antes de subir:
1. **Comprime las imágenes** usando herramientas como:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Convierte a WebP** para mejor rendimiento:
   - Usa [Convertio](https://convertio.co/jpg-webp/)
   - O herramientas de línea de comandos

3. **Mantén proporciones**:
   - Usa aspect ratios consistentes
   - 4:3 o 16:9 para storyboards
   - 1:1 para thumbnails

## 📱 Responsive Images

El sitio automáticamente:
- Optimiza imágenes para diferentes dispositivos
- Carga lazy loading
- Muestra placeholders mientras cargan

## 🚀 Después de Agregar Imágenes

1. **Reinicia el servidor de desarrollo**:
```bash
npm run dev
```

2. **Verifica que las imágenes se muestren** en:
   - http://localhost:3000
   - http://localhost:3000/vis-dev
   - http://localhost:3000/work-story
   - etc.

3. **Prueba el modal** haciendo clic en las imágenes

## 💡 Consejos

- **Nombres descriptivos**: Usa nombres que describan el contenido
- **Organización**: Agrupa imágenes por proyecto
- **Backup**: Mantén copias de tus imágenes originales
- **Metadatos**: Incluye información relevante en el `alt` y `title`

## 🔄 Actualización Continua

Para agregar nuevas imágenes:
1. Coloca la imagen en `public/images/`
2. Actualiza el array correspondiente en el archivo de la página
3. El sitio se actualizará automáticamente

¡Tu portfolio estará listo para mostrar tu trabajo profesional! 