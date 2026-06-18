/**
 * i18n - SISTEMA DE INTERNACIONALIZACIÓN
 * Maneja cambio de idioma, persistencia y renderizado
 */

// Idioma actual (se establece al inicializar)
let currentLanguage = 'es';

/**
 * INICIALIZACIÓN
 */

function initializeI18n() {
    // 1. Obtener idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    
    if (savedLanguage && getAvailableLanguages().includes(savedLanguage)) {
        currentLanguage = savedLanguage;
    } else {
        // 2. Detectar idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (getAvailableLanguages().includes(browserLang)) {
            currentLanguage = browserLang;
        } else {
            // 3. Default a español
            currentLanguage = 'es';
        }
    }
    
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', currentLanguage);
    
    // Aplicar idioma
    applyLanguage(currentLanguage);
}

/**
 * CAMBIAR IDIOMA
 */

function setLanguage(lang) {
    if (!getAvailableLanguages().includes(lang)) {
        console.error(`Idioma no soportado: ${lang}`);
        return;
    }
    
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Aplicar cambios
    applyLanguage(lang);
    
    // Disparar evento personalizado para que otros scripts se actualicen
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

/**
 * APLICAR IDIOMA AL DOM
 */

function applyLanguage(lang) {
    // Actualizar idioma HTML
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translated = t(key, lang);
        
        // Si contiene HTML (para elementos como hero.title con <br>)
        if (translated.includes('<br>')) {
            element.innerHTML = translated;
        } else {
            element.textContent = translated;
        }
    });
    
    // Actualizar atributos (placeholder, title, etc)
    document.querySelectorAll('[data-i18n-attr]').forEach(element => {
        const attrs = element.getAttribute('data-i18n-attr').split('|');
        attrs.forEach(attr => {
            const [attrName, key] = attr.split(':');
            element.setAttribute(attrName, t(key, lang));
        });
    });
    
    // Actualizar selector de idioma
    updateLanguageSelector(lang);
}

/**
 * CREAR Y ACTUALIZAR SELECTOR DE IDIOMA
 */

function createLanguageSelector() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    // Crear contenedor del selector
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.id = 'languageSelector';
    
    // Crear botones para cada idioma disponible
    const languages = getAvailableLanguages();
    languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `lang-btn ${lang === currentLanguage ? 'active' : ''}`;
        btn.textContent = lang.toUpperCase();
        btn.setAttribute('data-lang', lang);
        btn.setAttribute('aria-label', `Cambiar a ${lang}`);
        
        btn.addEventListener('click', () => {
            setLanguage(lang);
        });
        
        selector.appendChild(btn);
    });
    
    // Insertar al final del header
    const headerContent = header.querySelector('.header-content');
    if (headerContent) {
        headerContent.appendChild(selector);
    }
}

function updateLanguageSelector(lang) {
    const selector = document.getElementById('languageSelector');
    if (!selector) return;
    
    // Remover clase active de todos
    selector.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Agregar clase active al botón actual
    const activeBtn = selector.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

/**
 * TRADUCCIONES PARA DATOS DINÁMICOS
 */

/**
 * Obtener nombre de app en idioma actual
 */
function getAppName(app) {
    if (typeof app.name === 'object') {
        return app.name[currentLanguage] || app.name.es || app.name.en;
    }
    return app.name;
}

/**
 * Obtener descripción de app en idioma actual
 */
function getAppDescription(app) {
    if (typeof app.description === 'object') {
        return app.description[currentLanguage] || app.description.es || app.description.en;
    }
    return app.description;
}

/**
 * Obtener descripción completa de app en idioma actual
 */
function getAppFullDescription(app) {
    if (typeof app.fullDescription === 'object') {
        return app.fullDescription[currentLanguage] || app.fullDescription.es || app.fullDescription.en;
    }
    return app.fullDescription;
}

/**
 * Obtener característica de app en idioma actual
 */
function getFeature(feature) {
    return {
        title: typeof feature.title === 'object' 
            ? (feature.title[currentLanguage] || feature.title.es || feature.title.en)
            : feature.title,
        description: typeof feature.description === 'object'
            ? (feature.description[currentLanguage] || feature.description.es || feature.description.en)
            : feature.description
    };
}

/**
 * Obtener requisitos en idioma actual
 */
function getAppRequirements(app) {
    if (typeof app.requirements === 'object') {
        return app.requirements[currentLanguage] || app.requirements.es || app.requirements.en;
    }
    return app.requirements;
}

/**
 * MONITOR DE CAMBIOS DE IDIOMA
 */

window.addEventListener('languageChanged', (e) => {
    const lang = e.detail.language;
    
    // Actualizar apps en portafolio si existen
    if (typeof renderApps === 'function') {
        renderApps();
    }
    
    // Actualizar detalles de app si estamos en esa página
    if (typeof renderAppContent === 'function') {
        renderAppContent();
    }
    
    // Actualizar carrusel si existe
    if (typeof setupCarousel === 'function') {
        setupCarousel();
    }
});

/**
 * INICIALIZAR AL CARGAR
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeI18n();
    createLanguageSelector();
});