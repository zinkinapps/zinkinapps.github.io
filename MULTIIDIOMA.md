# Guía: Sistema Multiidioma

El sitio soporta múltiples idiomas de forma dinámica. Actualmente incluye **Español (ES)** e **Inglés (EN)**, pero es muy fácil agregar más idiomas.

## 🌍 Idiomas Soportados

- 🇪🇸 **Español** (es) — Por defecto
- 🇬🇧 **Inglés** (en) — Completamente traducido
- 🇫🇷 **Francés** (fr) — Fácil de agregar
- 🇩🇪 **Alemán** (de) — Fácil de agregar
- 🇵🇹 **Portugués** (pt) — Fácil de agregar

## ⚙️ Cómo Funciona

### Arquitectura

```
translations.js  — Todas las cadenas de texto en múltiples idiomas
    ↓
i18n.js         — Lógica de cambio de idioma, persistencia
    ↓
index.html      — Elementos con atributo data-i18n
app-detail.html — Traducciones dinámicas
privacy-policy.html — Contenido traducido
    ↓
localStorage    — Recordar idioma elegido del usuario
```

### Flujo de Usuario

1. Usuario entra al sitio
2. `i18n.js` detecta:
   - ¿Hay idioma guardado en localStorage?
   - ¿Cuál es el idioma del navegador?
   - Sino → Por defecto: Español
3. Botones de idioma (ES/EN) aparecen en header
4. Usuario hace click en idioma
5. Todo se traduce automáticamente
6. Preferencia se guarda en localStorage

---

## 📝 Cómo Agregar un Nuevo Idioma

### Paso 1: Agregar Traducciones

**En `translations.js`, agrega una nueva sección:**

```javascript
const translations = {
    es: { ... },
    en: { ... },
    // ← AQUÍ AGREGAS TU NUEVO IDIOMA
    fr: {
        // Copia todas las claves de 'es' pero traduce los valores
        'header.logo': 'iOS Dev',
        'header.nav.apps': 'Applications',
        'header.nav.about': 'À propos',
        'header.nav.contact': 'Contact',
        'hero.title': 'Appliquer iOS<br>conçues avec soin',
        // ... y así con todas las claves
    }
};
```

### Paso 2: Actualizar data.js para el Nuevo Idioma

Cada nombre y descripción de app debe tener el nuevo idioma:

```javascript
const apps = [
    {
        name: {
            es: 'Mi App',
            en: 'My App',
            fr: 'Mon App'  // ← Agregar aquí
        },
        description: {
            es: '...',
            en: '...',
            fr: '...'  // ← Y aquí
        },
        // ...
    }
];
```

### Paso 3: ¡Listo!

El sistema automáticamente:
- ✓ Mostrará el nuevo botón de idioma
- ✓ Cargará las traducciones
- ✓ Guardará la preferencia del usuario

---

## 📖 Referencia Completa de Claves

### Header

```
header.logo           → Logo/Nombre del sitio
header.nav.apps       → Link "Aplicaciones"
header.nav.about      → Link "Acerca de"
header.nav.contact    → Link "Contacto"
header.nav.privacy    → Link "Privacidad"
```

### Hero Section

```
hero.title            → Título principal
hero.description      → Descripción
hero.cta              → Botón "Ver mis apps"
```

### Apps Section

```
apps.title            → "Mis Aplicaciones"
apps.viewDetails      → "Ver detalles →"
apps.empty            → "Más apps próximamente"
```

### About Section

```
about.title           → "Acerca de"
about.description1    → Primer párrafo
about.description2    → Segundo párrafo
about.stack           → "Stack Tecnológico"
about.tech            → Tecnologías (separadas por |)
```

### Contact Section

```
contact.title         → "Conectemos"
contact.description   → Descripción
contact.email         → Botón email
contact.twitter       → Botón Twitter
contact.github        → Botón GitHub
```

### App Detail Page

```
appDetail.downloadButton    → "Descargar en App Store"
appDetail.screenshots       → "Capturas de Pantalla"
appDetail.about             → "Acerca de esta app"
appDetail.features          → "Características Principales"
appDetail.requirements      → "Requisitos"
appDetail.version           → "Versión"
appDetail.releaseDate       → "Fecha de Lanzamiento"
appDetail.price             → "Precio"
appDetail.technologies      → "Tecnologías Utilizadas"
appDetail.moreApps          → "Más Aplicaciones"
appDetail.questions         → "¿Preguntas o Sugerencias?"
appDetail.questionsDesc     → Descripción de preguntas
appDetail.contactMe         → "Contactame"
appDetail.previousSlide     → "Anterior"
appDetail.nextSlide         → "Siguiente"
```

### Footer

```
footer.copyright      → Texto del copyright
```

### Privacy Policy

Todas las secciones de privacidad comienzan con `privacy.section*`

---

## 🛠️ Ejemplo: Agregar Francés Completo

### 1. En `translations.js`:

```javascript
const translations = {
    es: { ... },
    en: { ... },
    fr: {
        'header.logo': 'iOS Dev',
        'header.nav.apps': 'Applications',
        'header.nav.about': 'À propos',
        'header.nav.contact': 'Contact',
        'header.nav.privacy': 'Confidentialité',
        
        'hero.title': 'Applications iOS<br>conçues avec soin',
        'hero.description': 'Développement d\'applications iOS modernes, fonctionnelles et élégantes utilisant les dernières technologies.',
        'hero.cta': 'Voir mes applications',
        
        'apps.title': 'Mes Applications',
        'apps.viewDetails': 'Voir les détails →',
        'apps.empty': 'Plus d\'applications à venir',
        
        // ... agregar todas las claves
    }
};
```

### 2. En `data.js`:

```javascript
{
    id: 'mi-app',
    name: {
        es: 'Mi App',
        en: 'My App',
        fr: 'Mon App'
    },
    description: {
        es: 'Descripción...',
        en: 'Description...',
        fr: 'Descriptionfrançaise...'
    },
    // ... etc
}
```

### 3. ¡Listo!

Ahora el botón "FR" aparecerá automáticamente en el header.

---

## 🎯 Cómo Usar en Templates

### Para Texto Estático

**HTML:**
```html
<h1 data-i18n="header.logo">iOS Dev</h1>
```

**Automáticamente se traduce** según el idioma seleccionado.

### Para Contenido Dinámico (Apps)

**JavaScript:**
```javascript
const appName = getAppName(app);  // Obtiene nombre en idioma actual
const appDesc = getAppDescription(app);  // Obtiene descripción en idioma actual
```

Estas funciones están en `i18n.js` y automáticamente retornan el texto en el idioma actual.

---

## 💾 Cómo se Guarda la Preferencia

```javascript
localStorage.setItem('preferredLanguage', 'es');
```

Cuando el usuario vuelve al sitio:
1. Se carga la preferencia guardada
2. Se muestra automáticamente en ese idioma
3. No hay que elegir de nuevo

---

## 🐛 Debugging

### Verificar idioma actual

En consola:
```javascript
console.log(currentLanguage);  // 'es', 'en', etc
```

### Ver todas las traducciones disponibles

```javascript
console.log(getAvailableLanguages());  // ['es', 'en']
```

### Cambiar idioma manualmente

```javascript
setLanguage('en');  // Cambia a inglés
```

---

## 📊 Estadísticas de Cobertura

### Español (es)
- ✅ 100% completado
- ✅ Todas las páginas
- ✅ Todas las apps

### Inglés (en)
- ✅ 100% completado
- ✅ Todas las páginas
- ✅ Todas las apps

---

## 🚀 Próximos Idiomas Sugeridos

Para expandir audiencia internacional:

1. **Francés (fr)** — Europa occidental
2. **Alemán (de)** — Mercado central europeo
3. **Portugués (pt)** — Brasil y Portugal
4. **Italiano (it)** — Sur de Europa
5. **Japonés (ja)** — Mercado asiático

---

## ⚡ Performance

- ✓ Sin carga adicional (traducción en el navegador)
- ✓ Cambio de idioma instantáneo
- ✓ Sin llamadas a servidores
- ✓ localStorage persiste la elección

---

## 🎓 Ejemplo Completo: Traducción Francesa

**translations.js:**
```javascript
fr: {
    'header.logo': 'iOS Dev',
    'header.nav.apps': 'Applications',
    'header.nav.about': 'À propos',
    'header.nav.contact': 'Contact',
    'header.nav.privacy': 'Confidentialité',
    'hero.title': 'Applications iOS<br>conçues avec soin',
    'hero.description': 'Développement d\'applications iOS modernes, fonctionnelles et élégantes utilisant les dernières technologies.',
    'hero.cta': 'Voir mes applications',
    'apps.title': 'Mes Applications',
    // ... etc
}
```

**data.js:**
```javascript
{
    id: 'recarga-ev',
    name: {
        es: 'Recarga EV',
        en: 'EV Charge',
        fr: 'Charge VE'
    },
    description: {
        es: 'Rastrea, analiza y optimiza...',
        en: 'Track, analyze and optimize...',
        fr: 'Suivez, analysez et optimisez...'
    },
    // ... etc
}
```

**Automáticamente:**
- El botón "FR" aparece en el header
- Todo se traduce al hacer click
- La preferencia se guarda

---

## 📞 Soporte

Si tienes dudas:
- Revisa las claves en `translations.js`
- Verifica el patrón en `data.js`
- Comprueba en consola con `getAvailableLanguages()`

**¡Agregar idiomas es simple y escala sin problemas!** 🌍
