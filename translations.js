/**
 * TRANSLATIONS
 * Todas las cadenas de texto del sitio en múltiples idiomas
 * Agregar nuevos idiomas: añade una nueva clave (ej: 'fr', 'de')
 */

const translations = {
    es: {
        // Header & Navigation
        'header.logo': 'Zink! Studio',
        'header.nav.apps': 'Aplicaciones',
        'header.nav.about': 'Acerca de',
        'header.nav.contact': 'Contacto',
        'header.nav.privacy': 'Privacidad',

        // Hero Section
        'hero.title': 'Aplicaciones iOS<br>diseñadas con cuidado',
        'hero.description': 'Desarrollo de aplicaciones modernas, funcionales y elegantes para iOS usando las tecnologías más actuales.',
        'hero.cta': 'Ver mis apps',

        // Apps Section
        'apps.title': 'Mis Aplicaciones',
        'apps.viewDetails': 'Ver detalles →',
        'apps.empty': 'Más apps próximamente',

        // About Section
        'about.title': 'Acerca de',
        'about.description1': 'Desarrollador iOS independiente apasionado por crear aplicaciones que combinan funcionalidad, diseño limpio y experiencias de usuario intuitivas.',
        'about.description2': 'Especializado en SwiftUI y arquitecturas modernas. Creo herramientas que resuelven problemas reales y que la gente disfruta usar.',
        'about.stack': 'Stack Tecnológico',
        'about.tech': 'SwiftUI & UIKit|SwiftData & Core Data|Async/Await|REST APIs & WebSockets|Testing & Performance',

        // Contact Section
        'contact.title': 'Conectemos',
        'contact.description': '¿Interesado en colaborar o tienes una pregunta? Me encantaría escucharte.',
        'contact.email': 'Enviar email',
        'contact.twitter': 'Twitter',
        'contact.github': 'GitHub',

        // Footer
        'footer.copyright': '© 2026. Zink! Studio. Hecho con cuidado.',

        // App Detail Page
        'appDetail.downloadButton': 'Descargar en App Store',
        'appDetail.screenshots': 'Capturas de Pantalla',
        'appDetail.about': 'Acerca de esta app',
        'appDetail.features': 'Características Principales',
        'appDetail.requirements': 'Requisitos',
        'appDetail.version': 'Versión',
        'appDetail.releaseDate': 'Fecha de Lanzamiento',
        'appDetail.price': 'Precio',
        'appDetail.technologies': 'Tecnologías Utilizadas',
        'appDetail.moreApps': 'Más Aplicaciones',
        'appDetail.questions': '¿Preguntas o Sugerencias?',
        'appDetail.questionsDesc': 'Me encantaría escuchar tu opinión sobre esta app',
        'appDetail.contactMe': 'Contactame',
        'appDetail.previousSlide': 'Anterior',
        'appDetail.nextSlide': 'Siguiente',

        // Privacy Policy
        'privacy.title': 'Política de Privacidad',
        'privacy.lastUpdated': 'Última actualización',
        'privacy.section1.title': '1. Introducción',
        'privacy.section1.text': 'Respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, compartimos y protegemos tu información cuando utilizas nuestras aplicaciones iOS.',
        'privacy.section2.title': '2. Información que Recopilamos',
        'privacy.section2.intro': 'Nuestras aplicaciones pueden recopilar la siguiente información:',
        'privacy.section2.1.title': '2.1 Información que Proporcionas Voluntariamente',
        'privacy.section2.2.title': '2.2 Información Recopilada Automáticamente',
        'privacy.section2.3.title': '2.3 iCloud y Sincronización',
        'privacy.section3.title': '3. Cómo Utilizamos Tu Información',
        'privacy.section4.title': '4. Almacenamiento de Datos',
        'privacy.section5.title': '5. Compartir Información con Terceros',
        'privacy.section6.title': '6. Seguridad de Datos',
        'privacy.section7.title': '7. Tus Derechos y Control',
        'privacy.section8.title': '8. Rastreo y Análisis',
        'privacy.section9.title': '9. Cookies y Tecnologías Similares',
        'privacy.section10.title': '10. Retención de Datos',
        'privacy.section11.title': '11. Privacidad de Menores',
        'privacy.section12.title': '12. Cambios a Esta Política',
        'privacy.section13.title': '13. Conformidad con Regulaciones',
        'privacy.section14.title': '14. Contacto',
        'privacy.section15.title': '15. Resumen de Privacidad Rápido',
        'privacy.section15.do': '✓ Lo Que Hacemos',
        'privacy.section15.dont': '✗ Lo Que NO Hacemos',
        'privacy.contact.email': 'Email:',
        'privacy.contact.address': 'Dirección:',
        'privacy.contact.responseTime': 'Responderemos a tus consultas dentro de 30 días.',
    },

    en: {
        // Header & Navigation
        'header.logo': 'Zink! Studio',
        'header.nav.apps': 'Apps',
        'header.nav.about': 'About',
        'header.nav.contact': 'Contact',
        'header.nav.privacy': 'Privacy',

        // Hero Section
        'hero.title': 'iOS Apps<br>designed with care',
        'hero.description': 'Development of modern, functional and elegant iOS applications using the latest technologies.',
        'hero.cta': 'View my apps',

        // Apps Section
        'apps.title': 'My Applications',
        'apps.viewDetails': 'View details →',
        'apps.empty': 'More apps coming soon',

        // About Section
        'about.title': 'About',
        'about.description1': 'Independent iOs developer passionate about creating applications that combine functionality, clean design and intuitive user experiences.',
        'about.description2': 'Specialized in SwiftUI and modern architectures. I create tools that solve real problems and that people enjoy using.',
        'about.stack': 'Tech Stack',
        'about.tech': 'SwiftUI & UIKit|SwiftData & Core Data|Async/Await|REST APIs & WebSockets|Testing & Performance',

        // Contact Section
        'contact.title': 'Let\'s Connect',
        'contact.description': 'Interested in collaborating or have a question? I\'d love to hear from you.',
        'contact.email': 'Send email',
        'contact.twitter': 'Twitter',
        'contact.github': 'GitHub',

        // Footer
        'footer.copyright': '© 2026. Zink! Studio. Made with care.',

        // App Detail Page
        'appDetail.downloadButton': 'Download on App Store',
        'appDetail.screenshots': 'Screenshots',
        'appDetail.about': 'About this app',
        'appDetail.features': 'Main Features',
        'appDetail.requirements': 'Requirements',
        'appDetail.version': 'Version',
        'appDetail.releaseDate': 'Release Date',
        'appDetail.price': 'Price',
        'appDetail.technologies': 'Technologies Used',
        'appDetail.moreApps': 'More Applications',
        'appDetail.questions': 'Questions or Suggestions?',
        'appDetail.questionsDesc': 'I\'d love to hear your feedback about this app',
        'appDetail.contactMe': 'Contact me',
        'appDetail.previousSlide': 'Previous',
        'appDetail.nextSlide': 'Next',

        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.lastUpdated': 'Last updated',
        'privacy.section1.title': '1. Introduction',
        'privacy.section1.text': 'We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, share and protect your information when you use our iOS applications.',
        'privacy.section2.title': '2. Information We Collect',
        'privacy.section2.intro': 'Our applications may collect the following information:',
        'privacy.section2.1.title': '2.1 Information You Provide Voluntarily',
        'privacy.section2.2.title': '2.2 Information Collected Automatically',
        'privacy.section2.3.title': '2.3 iCloud and Synchronization',
        'privacy.section3.title': '3. How We Use Your Information',
        'privacy.section4.title': '4. Data Storage',
        'privacy.section5.title': '5. Sharing Information with Third Parties',
        'privacy.section6.title': '6. Data Security',
        'privacy.section7.title': '7. Your Rights and Control',
        'privacy.section8.title': '8. Tracking and Analytics',
        'privacy.section9.title': '9. Cookies and Similar Technologies',
        'privacy.section10.title': '10. Data Retention',
        'privacy.section11.title': '11. Children\'s Privacy',
        'privacy.section12.title': '12. Changes to This Policy',
        'privacy.section13.title': '13. Regulatory Compliance',
        'privacy.section14.title': '14. Contact',
        'privacy.section15.title': '15. Quick Privacy Summary',
        'privacy.section15.do': '✓ What We Do',
        'privacy.section15.dont': '✗ What We Don\'t Do',
        'privacy.contact.email': 'Email:',
        'privacy.contact.address': 'Address:',
        'privacy.contact.responseTime': 'We will respond to your inquiries within 30 days.',
    }

    // Para agregar más idiomas, copia la estructura anterior:
    // fr: { ... }
    // de: { ... }
    // pt: { ... }
};

/**
 * FUNCIONES DE TRADUCCIÓN
 */

/**
 * Obtener traducción por clave
 * @param {string} key - Clave de traducción (ej: 'hero.title')
 * @param {string} lang - Idioma (ej: 'es', 'en')
 * @returns {string} Texto traducido
 */
function t(key, lang = currentLanguage) {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback a inglés si no existe
    if (translations.en && translations.en[key]) {
        return translations.en[key];
    }
    // Si no existe, retorna la clave
    return key;
}

/**
 * Obtener todas las traducciones disponibles
 */
function getAvailableLanguages() {
    return Object.keys(translations);
}
