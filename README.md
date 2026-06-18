# Portafolio Profesional de Apps iOS — GitHub Pages

Un sitio web completo, moderno y escalable para mostrar tus aplicaciones iOS. Incluye:

- 🏠 **Página principal** con portafolio de apps
- 📄 **Página individual por app** con carrusel de screenshots
- 🔐 **Política de privacidad** lista para App Store
- 🎨 **Diseño moderno** sin frameworks pesados
- 📱 **100% responsive** y accesible
- ⚡ **Sistema dinámico** — agregar apps sin crear HTML

## Características Principales

- ✨ Diseño limpio inspirado en iOS
- 📸 Carrusel de capturas de pantalla con navegación completa
- 📋 Características, especificaciones y tecnologías por app
- 🔗 Enlaces directos al App Store
- 📄 Política de privacidad completa y personalizable
- 🌗 Dark mode automático
- ♿ Accesible (teclado, screen readers)
- 🎯 Variables CSS centralizadas para fácil personalización
- 📊 Sin dependencias externas, solo HTML/CSS/JS puro

## Estructura de Archivos

```
├── index.html              # Portafolio principal
├── app-detail.html         # Página dinámica de detalles (parámetro: ?id=)
├── privacy-policy.html     # Política de privacidad
├── styles.css              # Todos los estilos (CSS centralizado)
├── data.js                 # ⭐ Definición de apps (editá aquí)
├── script.js               # JS para portafolio principal
├── app-detail.js           # JS para página de detalles
├── README.md               # Este archivo
└── .gitignore              # Ignorar archivos locales
```

## Configuración Rápida

### 1. Crear Repositorio en GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/tu-usuario/mi-portafolio-ios.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages

1. Ve a tu repositorio → **Settings** → **Pages**
2. Bajo "Build and deployment":
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Guarda los cambios

**Tu sitio estará en:** `https://tu-usuario.github.io/mi-portafolio-ios`

---

## Cómo Agregar Apps

**Todo se define en `data.js`** — No necesitas crear HTML nuevo.

### Estructura de una App

```javascript
{
    id: 'recarga-ev',                        // URL-friendly ID
    name: 'Recarga EV',                      // Nombre visible
    icon: '⚡',                              // Emoji o símbolo
    category: 'Utilidad',                    // Categoría
    description: 'Rastrea sesiones...',      // Descripción corta
    tags: ['SwiftUI', 'SwiftData'],          // Tags de features
    
    // Detalles de página individual
    fullDescription: 'Descripción larga...',
    features: [                              // Características principales
        {
            title: 'Feature 1',
            description: 'Descripción...'
        }
    ],
    screenshots: [                           // Carrusel de imágenes
        {
            url: 'https://via.placeholder.com/540x1170',
            caption: 'Screenshot caption'
        }
    ],
    appStoreUrl: 'https://apps.apple.com/...',
    version: '1.0',
    requirements: 'iOS 17.0 o posterior',
    releaseDate: 'Enero 2024',
    price: 'Gratis',
    technologies: ['SwiftUI', 'SwiftData', 'CloudKit']
}
```

### Ejemplo: Agregar una Segunda App

En `data.js`, descomenta y personaliza:

```javascript
const apps = [
    // App 1 (ya existe)
    {
        id: 'recarga-ev',
        // ...
    },
    // App 2 (nueva)
    {
        id: 'mi-nueva-app',
        name: 'Mi Nueva App',
        icon: '🎯',
        category: 'Productividad',
        description: 'Tu descripción aquí...',
        // ... resto de propiedades
    }
];
```

**Automáticamente:**
- Aparecerá en el portafolio (`index.html`)
- Tendrá su página de detalles (`app-detail.html?id=mi-nueva-app`)
- Se linkearán las apps relacionadas

---

## Personalización

### 1. Cambiar Colores

**En `styles.css` (líneas 5-26):**

```css
:root {
    --color-primary: #007aff;    /* Azul iOS → tu color */
    --color-accent: #00d084;     /* Verde → tu color */
    --color-text: #1a1a1a;
    /* ... resto de variables ... */
}
```

**Paletas rápidas:**
- Startup: Primary: `#6c5ce7`, Accent: `#00b894`
- Profesional: Primary: `#0066cc`, Accent: `#ff6b6b`
- Minimalista: Primary: `#000000`, Accent: `#ffffff`

### 2. Actualizar Información Personal

**En `index.html`:**
- Línea 17: Logo (`.logo`)
- Línea 34-35: Hero title y descripción
- Línea 78-88: Sección "Acerca de"
- Línea 110-115: Email y redes sociales

**En `privacy-policy.html`:**
- Línea 143: Tu email
- Línea 144-145: Tu dirección

### 3. Cambiar Tipografía

El sitio usa system fonts de Apple (óptimo para velocidad). Para cambiar:

```css
--font-system: 'Tu Font', -apple-system, ...;
```

### 4. Screenshots Reales

En lugar de placeholders, usa URLs reales:

```javascript
screenshots: [
    {
        url: 'https://tu-dominio.com/screenshot1.png',
        caption: 'Pantalla principal'
    }
]
```

**Servicios para alojar imágenes:**
- GitHub (en carpeta `assets/`)
- Imgbb (gratuito, sin registro)
- Cloudinary (free tier generoso)

---

## Funcionalidades Detalladas

### Portafolio Principal (`index.html`)

- Grid responsivo de apps
- Animaciones sutiles al entrar en viewport
- Navegación suave
- Links a páginas individuales
- Sección "Acerca de" con tech stack

### Página de Detalle (`app-detail.html`)

**Se carga dinámicamente según el ID:**
```
app-detail.html?id=recarga-ev
```

Incluye:
- ✓ Información de la app
- ✓ **Carrusel de screenshots** (swipe, botones, teclado)
- ✓ Descripción detallada
- ✓ Características principales
- ✓ Especificaciones técnicas
- ✓ Stack tecnológico
- ✓ Apps relacionadas
- ✓ Botón directo a App Store

### Carrusel de Screenshots

**Controles:**
- Botones ← / → (prev/next)
- Indicadores clickeables
- Navegación por teclado (← →)
- Smooth transitions

### Política de Privacidad (`privacy-policy.html`)

Página completa lista para App Store que incluye:
- Información que recopilamos
- Cómo usamos los datos
- Seguridad
- Derechos del usuario
- Cumplimiento GDPR/CCPA
- Resumen rápido visual

**Personalizar:**
- Línea 169-171: Email de contacto
- Línea 172-173: Dirección física
- Sección relevante para cada dato recopilado

---

## SEO y Metadatos

Cada página tiene metadatos automáticos:

```html
<title>App Name - Aplicación iOS</title>
<meta name="description" content="Descripción de data.js">
```

**Para mejorar SEO:**

1. Agrega `sitemap.xml` (opcional para GitHub Pages)
2. Verifica en Google Search Console
3. Asegúrate de que los enlaces al App Store sean directos

---

## Dark Mode

Automáticamente soporta dark mode:
- Se activa si el sistema lo tiene habilitado
- Los colores se adaptan automáticamente
- Respeta `prefers-color-scheme`

Forzar dark mode en desarrollo:
```css
html {
    color-scheme: dark;
}
```

---

## Accesibilidad

✓ Contraste suficiente en todos los textos  
✓ Navegación por teclado (Tab, Enter, Arrow keys)  
✓ Labels semánticos (`<button>`, `<nav>`, `<main>`)  
✓ Respeta `prefers-reduced-motion`  
✓ Imágenes alt text en carruseles  

---

## Performance

- 📦 **0 dependencias externas**
- ⚡ **Carga instantánea** (solo HTML/CSS/JS)
- 🖼️ **Optimizar imágenes** para screenshots
- 📱 **Mobile-first** design

**Optimizaciones incluidas:**
- CSS minificable (pero legible)
- JavaScript puro sin librerías
- Transiciones GPU-optimizadas
- Lazy loading (navegador nativo)

---

## Troubleshooting

### Las apps no aparecen en index.html

✓ Asegúrate que `data.js` esté cargado antes de `script.js`  
✓ Abre la consola (F12) y busca errores  
✓ Verifica que `data.js` tenga sintaxis válida  

### Carrusel no funciona

✓ Verifica que `app-detail.js` esté cargado  
✓ Comprueba que la app tenga `screenshots: []` en `data.js`  
✓ Asegúrate que las URLs de imágenes sean válidas  

### Política de privacidad no se ve bien

✓ Personaliza los emails y direcciones  
✓ Ajusta secciones que no apliquen a tu app  
✓ Usa como template base, no como verdad absoluta  

---

## Próximos Pasos

### Básicos
- [ ] Agregar tu primera app en `data.js`
- [ ] Actualizar email de contacto
- [ ] Cambiar paleta de colores
- [ ] Desplegar en GitHub Pages

### Intermedios
- [ ] Agregar más apps
- [ ] Personalizar política de privacidad
- [ ] Agregar favicon
- [ ] Optimizar imágenes de screenshots

### Avanzados
- [ ] Formulario de contacto (Formspree.io)
- [ ] Google Analytics (opcional)
- [ ] Dominio personalizado
- [ ] Localización a otros idiomas

---

## Ejemplos de URLs

Una vez desplegado:

```
Home:              https://tu-usuario.github.io/mi-portafolio/
App detail:        https://tu-usuario.github.io/mi-portafolio/app-detail.html?id=recarga-ev
Privacy policy:    https://tu-usuario.github.io/mi-portafolio/privacy-policy.html
```

---

## Licencia

Libre para usar y modificar. Hecho con cuidado para desarrolladores independientes.

## Créditos

Diseño minimalista inspirado en iOS. Sin frameworks, sin dependencias, sin complicaciones.

---

¿Preguntas? Revisa los comentarios en el código. Cada sección está documentada.

**¡Bienvenido a tu nuevo portafolio profesional! 🚀**
