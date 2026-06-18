/**
 * APPS DATA
 * Define aquí todas tus aplicaciones iOS.
 * Cada app necesita: id, name, icon, category, description, tags, y detalles
 */

const apps = [
    {
        id: 'maxwell-ev',
        name: {
            es: 'Maxwell EV',
            en: 'Maxwell EV'
        },
        icon: 'assets/icons/maxwell-ev.png',
        category: 'Productividad',
        description: {
            es: 'Rastrea, analiza y optimiza tus sesiones de carga de vehículos eléctricos.',
            en: 'Track, analyze and optimize your electric vehicle charging sessions.'
        },
        tags: ['SwiftUI', 'SwiftData', 'iOS 17+'],
        
        // Detalles de la página individual
        fullDescription: {
            es: 'Maxwell es una app que te aporta funcionalidades para tu coche eléctrico que no encontraras en otro sitio.\nSi tu vehículo no permite detener la carga al alcanzar un determinado nivel de batería y te preocupa la salud de la misma, con Maxwell puedes calcular a que hora deberías empezar a cargarlo.\nSi cargas el vehículo con diferentes apps y quieres controlar en un único sitio cuanto has recargado y lo que te ha costado, Maxwell es para tí. Puedes gestionar varios vehículos, multiples puntos de recarga, diferentes tarifas...\nAdemás, si eres usuario de Tronity, puedes utilizar su API para descargarte los datos de tu vehículo o las recargas realizadas y personalizarlas un poco más.',
            en: "Maxwell is an app that provides you with features for your electric car that you won't find anywhere else: If your vehicle doesn't allow you to stop charging when it reaches a certain battery level and you're worried about its health, with Maxwell you can calculate what time you should start charging it. If you charge your vehicle with different apps and want to control in one place how much you've recharged and what it cost you, Maxwell is for you. You can manage several vehicles, multiple charging points, different rates... In addition, if you're a Tronity user, you can use its API to download your vehicle's data or the recharges you've made and personalize them a little more."
        },
        features: [
            {
                title: { es: 'Registro Automático', en: 'Automatic Recording' },
                description: { es: 'Si tienes cuenta de Tronity podrás sincronizar todas tus recargas sin esfuerzo', en: 'With a Tronity account, sync all your charges effortlessly' }
            },
            {
                title: { es: 'Análisis Detallado', en: 'Detailed Analysis' },
                description: { es: 'Estadísticas completas: tiempo, energía consumida, costo y eficiencia', en: 'Complete statistics: time, energy consumed, cost and efficiency' }
            },
            {
                title: { es: 'Filtros Avanzados', en: 'Advanced Filters' },
                description: { es: 'Busca por punto de recarga, tarifa, rango de fechas, estado y más', en: 'Search by charging point, rate, date range, status and more' }
            },
            {
                title: { es: 'Histórico Completo', en: 'Complete History' },
                description: { es: 'Acceso a todo tu historial con datos sincronizados en iCloud', en: 'Access your entire history with data synchronized in iCloud' }
            },
            {
                title: { es: 'Exportar Datos', en: 'Export Data' },
                description: { es: 'Descarga tu historial en CSV para análisis adicionales', en: 'Download your history as CSV for additional analysis' }
            },
            {
                title: { es: 'Diseño Intuitivo', en: 'Intuitive Design' },
                description: { es: 'Interfaz moderna y fácil de usar, optimizada para cada tamaño de pantalla', en: 'Modern and easy-to-use interface, optimized for every screen size' }
            }
        ],
        screenshots: [
            { url: 'assets/screenshots/maxwell-ev-1.png', caption: { es: 'Calcula la hora optima de comienzo de carga', en: 'Calculate the best time to start charging' } },
            { url: 'assets/screenshots/maxwell-ev-2.png', caption: { es: 'Pantalla principal con historial de cargas', en: 'Main screen with charging history' } },
            { url: 'assets/screenshots/maxwell-ev-3.png', caption: { es: 'Detalles de cada sesión de carga', en: 'Details of each charging session' } },
            { url: 'assets/screenshots/maxwell-ev-4.png', caption: { es: 'Estadísticas y análisis detallados', en: 'Statistics and detailed analysis' } }
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/maxwell-ev/id6738625873',
        version: '1.2',
        requirements: 'iOS 17.0 o posterior',
        releaseDate: 'Diciembre 2024',
        price: 'Gratis',
        technologies: ['SwiftUI', 'SwiftData', 'CloudKit', 'MapKit', 'Charts'],
    },
    {
        id: 'maxwell-psacc',
        name: {
            es: 'Maxwell PSACC',
            en: 'Maxwell PSACC'
        },
        icon: 'assets/icons/maxwell-psacc.png',
        category: 'Productividad',
        description: {
            es: 'Cliente de PSA Car Controller para iOS. Controla tu vehículo electrico con total comodidad',
            en: 'PSA Car Controller for iOS. Control your electric vehicle with complete ease.'
        },
        tags: ['SwiftUI', 'SwiftData', 'iOS 26+'],
        
        // Detalles de la página individual
        fullDescription: {
            es: 'Maxwell PSACC es la app que faltaba para controlar y monitorizar tu vehículo eléctrico Stellantis (Peugeot, Citroën, Opel, DS) desde tu iPhone, iPad o Mac.\nSe conecta a tu propio servidor PSA Car Controller (basado en Home Assistant) para darte control total sobre tu coche, sin intermediarios ni servidores de terceros: tus datos viajan directamente entre tu dispositivo y tu servidor.',
            en: 'Maxwell PSACC is the missing app for monitoring and controlling your Stellantis electric vehicle (Peugeot, Citroën, Opel, DS) from your iPhone, iPad, or Mac.\nIt connects to your own PSA Car Controller server (built on Home Assistant) to give you full control, with no third-party servers in between: your data travels directly between your device and your server.'
        },
        features: [
            {
                title: { es: 'Panel Principal', en: 'Dashboard' },
                description: { es: 'Consulta de un vistazo el nivel de batería, autonomía, estado de climatización, ubicación del vehículo en el mapa y resumen del mes en curso.', en: 'See battery level, range, climate status, vehicle location on the map, and a summary of the current month at a glance.' }
            },
            {
                title: { es: 'Control remoto', en: 'Remote Control' },
                description: { es: 'Bloquea y desbloquea el vehículo, activa el claxon y las luces, programa la climatización, y gestiona la carga: inicio inmediato, límite de carga, hora de inicio y fin programados.', en: 'Lock and unlock your vehicle, sound the horn, flash the lights, schedule climate control, and manage charging: start immediately, set a charge limit, or schedule a start and stop time.' }
            },
            {
                title: { es: 'Historial detallado', en: 'Detailed History' },
                description: { es: 'Revisa todas tus recargas y viajes con filtros avanzados por fecha, modo de carga, día de la semana, franja horaria y más. Asigna tarifas eléctricas personalizadas, incluso con tramos de precio que cambian con el tiempo.', en: 'Review every charge and trip with advanced filters by date, charging mode, day of the week, time range, and more. Assign custom electricity tariffs, even with price periods that change over time.' }
            },
            {
                title: { es: 'Estadísticas', en: 'Statistics' },
                description: { es: 'Gráficas interactivas de energía cargada, distancia recorrida, coste total, coste por 100 km, velocidad media de carga y distribución por tarifa o modo de carga. Agrupa por mes, año o periodo completo.', en: 'Interactive charts for energy charged, distance traveled, total cost, cost per 100 km, average charging speed, and distribution by tariff or charging mode. Group by month, year, or all time.' }
            },
            {
                title: { es: 'Copia de seguridad', en: 'Backup' },
                description: { es: 'Exporta e importa tus datos en cualquier momento, con opción de fusionar sin perder lo que ya tienes.', en: 'Export and import your data anytime, with an option to merge without losing what you already have.' }
            },
            {
                title: { es: 'Diseño Intuitivo', en: 'Intuitive Design' },
                description: { es: 'Interfaz moderna y fácil de usar, optimizada para cada tamaño de pantalla', en: 'Modern and easy-to-use interface, optimized for every screen size' }
            }
        ],
        screenshots: [
{ url: 'assets/screenshots/maxwell-psacc-1.png', caption: { es: 'Elegante presentación de información', en: 'Elegant information display' } },
            { url: 'assets/screenshots/maxwell-psacc-2.png', caption: { es: 'Multiples controles para tu vehículo', en: 'Multiple controls for your vehicle' } },
            { url: 'assets/screenshots/maxwell-psacc-3.png', caption: { es: 'Historial de recargas realizadas', en: 'Charging history' } },
            { url: 'assets/screenshots/maxwell-psacc-4.png', caption: { es: 'Historial de viajes realizados', en: 'Trip history' } },
            { url: 'assets/screenshots/maxwell-psacc-5.png', caption: { es: 'Estadísticas mes a mes', en: 'Monthly statistics' } },
            { url: 'assets/screenshots/maxwell-psacc-6.png', caption: { es: 'Estadísticas parciales ', en: 'Partial summary' } },
            { url: 'assets/screenshots/maxwell-psacc-7.png', caption: { es: 'Estadísticas año a año', en: 'Year-over-year statistics' } },
            { url: 'assets/screenshots/maxwell-psacc-8.png', caption: { es: 'Estadísticas totales', en: 'Overall statistics' } },
            { url: 'assets/screenshots/maxwell-psacc-9.png', caption: { es: 'Multiples opciones de configuración', en: 'Multiple configuration options' } }
        ],
        appStoreUrl: 'https://apps.apple.com/us/app/maxwell-psacc/id6779398673',
        version: '1.0',
        requirements: 'iOS 26 o posterior',
        releaseDate: 'Junio 2026',
        price: 'Gratis',
        technologies: ['SwiftUI', 'SwiftData', 'MapKit', 'Charts'],
    }
];

/**
 * FUNCIONES AUXILIARES
 */

// Obtener una app por ID
function getAppById(id) {
    return apps.find(app => app.id === id);
}

// Obtener todas las apps excepto una
function getOtherApps(excludeId) {
    return apps.filter(app => app.id !== excludeId);
}
