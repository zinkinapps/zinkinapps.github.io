# Guía Rápida: Configurar tu Primera App

## Paso 1: Obtener URL del App Store

Cuando publiques tu app en el App Store:

1. Busca tu app en **https://apps.apple.com**
2. Copia la URL completa desde la barra de direcciones
3. Pégala en `data.js` en el campo `appStoreUrl`

**Ejemplo:**
```javascript
appStoreUrl: 'https://apps.apple.com/es/app/recarga-ev/id1234567890'
```

## Paso 2: Preparar Screenshots

### Opciones de Imágenes

**A) Alojar en tu repositorio (simple):**
```
/assets/screenshots/
├── recarga-ev-1.png
├── recarga-ev-2.png
└── recarga-ev-3.png
```

En `data.js`:
```javascript
screenshots: [
    {
        url: 'assets/screenshots/recarga-ev-1.png',
        caption: 'Pantalla principal'
    }
]
```

**B) Alojar en servicio externo (mejor):**

Servicios gratuitos:
- **Imgbb**: https://imgbb.com (no requiere registro)
- **Cloudinary**: https://cloudinary.com (free tier)
- **GitHub raw**: `https://raw.githubusercontent.com/usuario/repo/main/img.png`

Obtén la URL directa y úsala:
```javascript
url: 'https://imgbb.com/your-image-url'
```

### Tamaño Recomendado para Screenshots

- **Ancho:** 540 pixels (optimal para móvil)
- **Alto:** 1170 pixels (16:9 aspect ratio)
- **Formato:** PNG o JPEG (comprimido)
- **Peso:** < 500 KB por imagen

El carrusel se adapta automáticamente a estos tamaños.

## Paso 3: Estructura Completa de una App

```javascript
const apps = [
    {
        // Identificadores y visibilidad
        id: 'recarga-ev',                    // URL-friendly, sin espacios
        name: 'Recarga EV',                  // Nombre exacto del App Store
        icon: '⚡',                          // Emoji representativo
        category: 'Utilidad',                // Categoría del App Store
        
        // Portafolio principal
        description: 'Rastrea, analiza y optimiza tus sesiones de carga de vehículos eléctricos.',
        tags: ['SwiftUI', 'SwiftData', 'iOS 17+'],
        
        // Página de detalles
        fullDescription: 'Descripción detallada que aparece en app-detail.html. Puedes usar párrafos largos aquí.',
        
        features: [
            {
                title: 'Nombre de Feature',
                description: 'Descripción de qué hace esta característica'
            },
            {
                title: 'Otra Feature',
                description: 'Cómo beneficia al usuario'
            }
        ],
        
        screenshots: [
            {
                url: 'https://tu-url-imagen-1',
                caption: 'Descripción que aparece en el carrusel'
            },
            {
                url: 'https://tu-url-imagen-2',
                caption: 'Segunda screenshot'
            }
        ],
        
        // Información técnica
        appStoreUrl: 'https://apps.apple.com/es/app/nombre/id1234567890',
        version: '1.0',
        requirements: 'iOS 17.0 o posterior',
        releaseDate: 'Enero 2024',
        price: 'Gratis',  // o '€2.99' o '€9.99'
        
        technologies: ['SwiftUI', 'SwiftData', 'CloudKit', 'MapKit', 'Charts']
    }
];
```

## Paso 4: El Carrusel

El carrusel está completamente automatizado. Solo necesitas:

1. Proporcionar array `screenshots` en `data.js`
2. Cada objeto debe tener `url` y `caption`
3. ¡Listo! El carrusel funciona automáticamente

**Funciones del carrusel:**
- Click en indicadores para saltar a screenshot
- Botones ← / → para navegar
- Flechas del teclado (← →) funcionan
- Touch swipe (en móvil) — próximamente

## Paso 5: Política de Privacidad

La política está lista en `privacy-policy.html`. Solo necesitas personalizar:

### Líneas Clave para Actualizar

**Línea 143:** Email de contacto
```html
<a href="mailto:tu@email.com">tu@email.com</a>
```

**Línea 144-145:** Dirección
```html
<p><strong>Dirección:</strong> Tu Calle 123, Tu Ciudad, Tu País</p>
```

**Secciones relevantes:**
- Si tu app accede a ubicación → Asegúrate que la sección 2.2 lo mencione
- Si uses iCloud → Sección 4 está cubierta
- Si tengas webhooks/APIs → Sección 5 es relevante

### URL del App Store

Apple requiere que links a política de privacidad sean accesibles. El formato es:

```
https://tu-dominio.com/privacy-policy.html
```

Cópialo exacto para la URL en App Store Connect.

## Paso 6: Verificación Pre-Publicación

Antes de desplegar, verifica:

✓ `data.js` tiene sintaxis JavaScript válida  
✓ URLs de App Store son correctas  
✓ URLs de screenshots funcionan  
✓ Email en política de privacidad es tuyo  
✓ Página `privacy-policy.html` se carga bien  
✓ Carrusel funciona en `app-detail.html`  

## Ejemplos de Data.js Completo

### App Sencilla (Gratis)

```javascript
{
    id: 'simple-app',
    name: 'Simple App',
    icon: '✨',
    category: 'Utilidad',
    description: 'Una app sencilla y útil',
    tags: ['SwiftUI', 'iOS 16+'],
    
    fullDescription: 'Descripción más detallada de qué hace la app...',
    features: [
        { title: 'Feature 1', description: 'Qué hace' },
        { title: 'Feature 2', description: 'Cómo ayuda' }
    ],
    screenshots: [
        { url: 'imagen1.png', caption: 'Pantalla principal' },
        { url: 'imagen2.png', caption: 'Detalles' }
    ],
    
    appStoreUrl: 'https://apps.apple.com/es/app/simple-app/id123456789',
    version: '1.0',
    requirements: 'iOS 16.0 o posterior',
    releaseDate: 'Diciembre 2023',
    price: 'Gratis',
    technologies: ['SwiftUI', 'Foundation']
}
```

### App Premium (Pagada)

```javascript
{
    id: 'pro-app',
    name: 'Pro App',
    icon: '💎',
    category: 'Productividad',
    description: 'Herramienta profesional avanzada',
    tags: ['SwiftUI', 'SwiftData', 'Sync', 'iOS 17+'],
    
    fullDescription: 'Descripción detallada de la versión premium...',
    features: [
        { title: 'Sincronización en la nube', description: 'iCloud sync' },
        { title: 'Análisis avanzado', description: 'Reportes detallados' },
        { title: 'Exportar datos', description: 'CSV, JSON, PDF' }
    ],
    screenshots: [
        { url: 'pro1.png', caption: 'Dashboard' },
        { url: 'pro2.png', caption: 'Análisis' },
        { url: 'pro3.png', caption: 'Configuración' }
    ],
    
    appStoreUrl: 'https://apps.apple.com/es/app/pro-app/id987654321',
    version: '2.1',
    requirements: 'iOS 17.0 o posterior',
    releaseDate: 'Noviembre 2023',
    price: '€4.99',
    technologies: ['SwiftUI', 'SwiftData', 'CloudKit', 'Combine']
}
```

## Errores Comunes

### Error: "App no encontrada"

**Causa:** El ID en `data.js` no coincide con la URL  
**Solución:** Asegúrate que `app-detail.html?id=recarga-ev` coincida con `id: 'recarga-ev'`

### Carrusel muestra placeholder

**Causa:** URL de imagen rota  
**Solución:** Verifica que la URL sea válida (abre en navegador)

### Screenshots muy lentas

**Causa:** Imágenes sin comprimir  
**Solución:** Usa herramientas como TinyPNG para comprimir

### Política de privacidad truncada

**Causa:** navegador en modo lector  
**Solución:** Desactiva modo lector (botón AA en barra de direcciones)

## URLs Finales de Publicación

Una vez desplegado, tus URLs son:

```
Portafolio:        https://usuario.github.io/repo
App 1:             https://usuario.github.io/repo/app-detail.html?id=app-1
App 2:             https://usuario.github.io/repo/app-detail.html?id=app-2
Privacidad:        https://usuario.github.io/repo/privacy-policy.html
```

Usa la URL de privacidad en App Store Connect.

## Próximos Pasos

1. ✅ Edita `data.js` con tu primera app
2. ✅ Prepara 3-5 screenshots
3. ✅ Actualiza política de privacidad
4. ✅ Git push a main
5. ✅ Verifica en GitHub Pages
6. ✅ Copia URLs al App Store Connect

**¡Listo para publicar!** 🚀
