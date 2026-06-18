// Cargar apps dinámicamente desde data.js
function renderApps() {
    const container = document.getElementById('apps-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    apps.forEach(app => {
        const card = document.createElement('article');
        card.className = 'app-card';
        
        // Manejar icono: emoji o imagen
        let iconHTML = '';
        if (app.icon.includes('/') || app.icon.endsWith('.png') || app.icon.endsWith('.jpg') || app.icon.endsWith('.svg')) {
            // Es una imagen
            iconHTML = `<img src="${app.icon}" alt="${getAppName(app)}" style="width: 100%; height: 100%; object-fit: contain;">`;
        } else {
            // Es un emoji
            iconHTML = app.icon;
        }
        
        card.innerHTML = `
            <div class="app-icon">
                ${iconHTML}
            </div>
            <h3>${getAppName(app)}</h3>
            <p class="app-category">${app.category}</p>
            <p class="app-description">${getAppDescription(app)}</p>
            <div class="app-features">
                ${app.tags.map(tag => `<span class="feature-tag">${tag}</span>`).join('')}
            </div>
            <a href="app-detail.html?id=${app.id}" class="app-link" data-i18n="apps.viewDetails">Ver detalles →</a>
        `;
        container.appendChild(card);
    });

    // Re-aplicar traducciones a los nuevos elementos
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translated = t(key, currentLanguage);
        
        if (translated.includes('<br>')) {
            element.innerHTML = translated;
        } else {
            element.textContent = translated;
        }
    });
    
    // Animar cards después de renderizar
    setupAnimations();
}

// Actualizar tech stack cuando cambia el idioma
window.addEventListener('languageChanged', (e) => {
    const techList = document.getElementById('techList');
    if (techList) {
        const techs = t('about.tech', e.detail.language).split('|');
        techList.innerHTML = techs.map(tech => `<li>${tech}</li>`).join('');
    }
});

// Smooth scroll para navegación (complementa el scroll-behavior del CSS)
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

// Intersection Observer para animación al entrar en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function setupAnimations() {
    // Animar cards al entrar en vista
    document.querySelectorAll('.app-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });

    // Animar secciones
    document.querySelectorAll('.section-title').forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(10px)';
        title.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(title);
    });
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderApps();
});