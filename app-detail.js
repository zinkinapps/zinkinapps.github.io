/**
 * APP DETAIL PAGE
 * Maneja la carga dinámica de detalles de app y funcionalidad de carrusel
 */

let currentApp = null;
let currentSlide = 0;

// Obtener ID de app desde URL
function getAppIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Cargar y renderizar app
function loadAppDetail() {
    const appId = getAppIdFromUrl();
    
    if (!appId) {
        document.getElementById('app-detail-container').innerHTML = '<div class="container"><p style="padding: 4rem 0; text-align: center;">App no encontrada</p></div>';
        return;
    }
    
    currentApp = getAppById(appId);
    
    if (!currentApp) {
        document.getElementById('app-detail-container').innerHTML = '<div class="container"><p style="padding: 4rem 0; text-align: center;">App no encontrada</p></div>';
        return;
    }
    
    // Actualizar meta tags
    document.title = `${getAppName(currentApp)} - Aplicación iOS`;
    document.querySelector('meta[name="description"]').content = getAppDescription(currentApp);
    
    renderAppContent();
    setupCarousel();
    renderOtherApps();
}

// Renderizar contenido de la app
function renderAppContent() {
    // Header
    const appIconEl = document.getElementById('appIcon');
    
    // Manejar icono: emoji o imagen
    if (currentApp.icon.includes('/') || currentApp.icon.endsWith('.png') || currentApp.icon.endsWith('.jpg') || currentApp.icon.endsWith('.svg')) {
        // Es una imagen
        appIconEl.innerHTML = `<img src="${currentApp.icon}" alt="${getAppName(currentApp)}">`;
    } else {
        // Es un emoji
        appIconEl.textContent = currentApp.icon;
    }
    
    document.getElementById('appName').textContent = getAppName(currentApp);
    document.getElementById('appCategory').textContent = currentApp.category;
    document.getElementById('appShortDesc').textContent = getAppDescription(currentApp);
    document.getElementById('appVersion').textContent = `v${currentApp.version}`;
    document.getElementById('appPrice').textContent = currentApp.price;
    
    // App Store Button
    const appStoreBtn = document.getElementById('appStoreBtn');
    appStoreBtn.href = currentApp.appStoreUrl;
    appStoreBtn.textContent = `${t('appDetail.downloadButton', currentLanguage)} — ${currentApp.price}`;
    
    // Descripción detallada
    document.getElementById('appFullDescription').textContent = getAppFullDescription(currentApp);
    
    // Características
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = currentApp.features.map(feature => {
        const feat = getFeature(feature);
        return `
        <div class="feature-card">
            <h3>${feat.title}</h3>
            <p>${feat.description}</p>
        </div>
    `}).join('');
    
    // Especificaciones
    document.getElementById('appRequirements').textContent = getAppRequirements(currentApp);
    document.getElementById('appVersionDetail').textContent = currentApp.version;
    document.getElementById('appReleaseDate').textContent = currentApp.releaseDate;
    document.getElementById('appPriceDetail').textContent = currentApp.price;
    
    // Tecnologías
    const techTags = document.getElementById('techTags');
    techTags.innerHTML = currentApp.technologies.map(tech => `
        <span class="tech-tag">${tech}</span>
    `).join('');
}

/**
 * CARRUSEL CON SCROLL SNAP (Más simple y robusto)
 * Reemplaza setupCarousel, updateCarousel, etc.
 */

function setupCarousel() {
    const carouselViewport = document.querySelector('.carousel-viewport');
    const carouselTrack = document.getElementById('carouselTrack');
    const indicators = document.getElementById('indicators');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carouselTrack || !indicators || !carouselViewport) return;
    
    console.log('Configurando carrusel scroll-snap con', currentApp.screenshots.length, 'screenshots');
    
    // Limpiar
    carouselTrack.innerHTML = '';
    indicators.innerHTML = '';
    currentSlide = 0;
    
    // Configurar viewport para scroll snap
    carouselViewport.style.overflowX = 'scroll';
    carouselViewport.style.scrollBehavior = 'smooth';
    carouselViewport.style.scrollSnapType = 'x mandatory';
    carouselViewport.style.overflowY = 'hidden';
    
    carouselTrack.style.display = 'flex';
    carouselTrack.style.width = '100%';
    carouselTrack.style.height = '100%';
    
    // Crear slides
    currentApp.screenshots.forEach((screenshot, index) => {
        // Caption
        let caption = screenshot.caption;
        if (typeof caption === 'object') {
            caption = caption[currentLanguage] || caption.es || caption.en;
        }
        
        console.log(`Slide ${index}:`, screenshot.url);
        
        // Crear slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.id = 'slide-' + index;
        slide.style.scrollSnapAlign = 'start';
        slide.style.flexShrink = '0';
        slide.style.width = '100%';
        slide.style.height = '100%';
        
        // Crear imagen
        const img = document.createElement('img');
        img.src = screenshot.url;
        img.alt = caption;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        
        // Crear caption
        const captionEl = document.createElement('p');
        captionEl.className = 'screenshot-caption';
        captionEl.textContent = caption;
        
        // Agregar a slide
        slide.appendChild(img);
        slide.appendChild(captionEl);
        carouselTrack.appendChild(slide);
        
        // Crear indicador
        const indicator = document.createElement('button');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            console.log('Click en indicador', index);
            scrollToSlide(index);
        });
        indicators.appendChild(indicator);
    });
    
    // Botones
    prevBtn.onclick = () => {
        console.log('Slide anterior');
        scrollToSlide(currentSlide - 1);
    };
    
    nextBtn.onclick = () => {
        console.log('Slide siguiente');
        scrollToSlide(currentSlide + 1);
    };
    
    // Detectar scroll para actualizar indicadores
    carouselViewport.addEventListener('scroll', () => {
        const scrollLeft = carouselViewport.scrollLeft;
        const slideWidth = carouselViewport.clientWidth;
        currentSlide = Math.round(scrollLeft / slideWidth);
        
        // Actualizar indicadores
        document.querySelectorAll('.indicator').forEach((ind, idx) => {
            ind.classList.toggle('active', idx === currentSlide);
        });
    });
    
    console.log('Carrusel scroll-snap configurado');
}

function scrollToSlide(index) {
    const carouselViewport = document.querySelector('.carousel-viewport');
    if (!carouselViewport) return;
    
    currentSlide = ((index % currentApp.screenshots.length) + currentApp.screenshots.length) % currentApp.screenshots.length;
    console.log('Ir a slide', index, '→ currentSlide =', currentSlide);
    
    const slideWidth = carouselViewport.clientWidth;
    carouselViewport.scrollLeft = currentSlide * slideWidth;
}

function goToSlide(index) {
    scrollToSlide(index);
}

function nextSlide() {
    scrollToSlide(currentSlide + 1);
}

function previousSlide() {
    scrollToSlide(currentSlide - 1);
}

function updateCarousel() {
    // No necesario con scroll-snap
}

// Renderizar otras apps como sugerencias
function renderOtherApps() {
    const otherApps = getOtherApps(currentApp.id);
    const otherAppsGrid = document.getElementById('otherAppsGrid');
    
    if (!otherAppsGrid) return;
    
    if (otherApps.length === 0) {
        otherAppsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--color-text-secondary); padding: 2rem;">Más apps próximamente</p>';
        return;
    }
    
    otherAppsGrid.innerHTML = otherApps.map(app => {
        // Manejar icono: emoji o imagen
        let iconHTML = '';
        if (app.icon.includes('/') || app.icon.endsWith('.png') || app.icon.endsWith('.jpg') || app.icon.endsWith('.svg')) {
            iconHTML = `<img src="${app.icon}" alt="${getAppName(app)}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
            iconHTML = app.icon;
        }
        
        return `
        <article class="app-card-compact">
            <div class="app-icon">
                ${iconHTML}
            </div>
            <h3>${getAppName(app)}</h3>
            <p class="app-category">${app.category}</p>
            <p>${getAppDescription(app)}</p>
            <a href="app-detail.html?id=${app.id}" class="app-link">Ver detalles →</a>
        </article>
    `}).join('');
}

// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    loadAppDetail();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// Re-actualizar carrusel cuando cambia idioma
window.addEventListener('languageChanged', (e) => {
    if (currentApp && typeof setupCarousel === 'function') {
        setupCarousel();
    }
});