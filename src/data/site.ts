// ============================================================
// BSKR — Site Content Data
// All editable text, links, and content in one place.
// ============================================================

export const siteConfig = {
  name: "BSKR",
  tagline: "IA y automatización",
  description:
    "Combinamos diseño web, automatización e inteligencia artificial para que tu negocio capture más clientes, responda más rápido y escale sin límites.",
  url: "https://bskr.io",
  contact: {
    email: "hola@bskr.io",
    phone: "+51 999 999 999",
    whatsapp: "https://wa.me/51999999999",
    calendly: "https://calendly.com/bskr",
  },
  social: {
    linkedin: "https://linkedin.com/company/bskr",
    instagram: "https://instagram.com/bskr.ia",
    twitter: "https://twitter.com/bskr_ia",
  },
};

export const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

export const heroContent = {
  badge: "Ya construimos nuestro propio SaaS",
  headline: "Tu negocio merece",
  headlineAccent: "tecnología que trabaje por ti",
  subheadline:
    "Combinamos diseño web, automatización e inteligencia artificial para que captures más clientes, respondas más rápido y escales sin límites.",
  ctaPrimary: { label: "Agenda una reunión", href: "#contacto" },
  ctaSecondary: { label: "Ver servicios", href: "#servicios" },
  stats: [
    { value: "50+", label: "Proyectos entregados" },
    { value: "10x", label: "Respuesta más rápida" },
    { value: "85%", label: "Reducción de trabajo manual" },
  ],
};

export const problemsContent = {
  label: "EL PROBLEMA",
  headline: "¿Tu negocio pierde oportunidades",
  headlineAccent: "por procesos lentos?",
  description:
    "Muchas empresas enfrentan estos problemas a diario. Si alguno te suena familiar, estás en el lugar correcto.",
  problems: [
    {
      icon: "UserX",
      title: "Pierdes leads por no responder a tiempo",
      description:
        "Tus clientes potenciales contactan, pero si no respondes en minutos, se van con la competencia.",
    },
    {
      icon: "Clock",
      title: "Procesos manuales que consumen horas",
      description:
        "Tu equipo dedica horas a tareas repetitivas que podrían automatizarse: correos, seguimientos, reportes.",
    },
    {
      icon: "AlertTriangle",
      title: "Presencia digital que no convierte",
      description:
        "Tienes web o redes, pero no generan leads cualificados ni guían al visitante hacia una acción clara.",
    },
    {
      icon: "Puzzle",
      title: "Herramientas desconectadas",
      description:
        "CRM por un lado, WhatsApp por otro, Excel por aquí... Nada se conecta y la información se pierde.",
    },
  ],
};

export const solutionContent = {
  label: "NUESTRA SOLUCIÓN",
  headline: "Diseño, automatización e IA",
  headlineAccent: "trabajando juntos para tu negocio",
  description:
    "No te vendemos una web bonita y ya. Creamos un sistema completo donde cada pieza está diseñada para captar, responder y escalar tu operación.",
  pillars: [
    {
      icon: "Globe",
      title: "Presencia digital que convierte",
      description:
        "Landing pages y sitios web diseñados con lógica de conversión, no solo estética. Cada elemento tiene un propósito comercial.",
    },
    {
      icon: "Workflow",
      title: "Automatización que libera tiempo",
      description:
        "Workflows inteligentes que procesan leads, envían respuestas, actualizan tu CRM y notifican a tu equipo sin intervención manual.",
    },
    {
      icon: "Bot",
      title: "Asistentes IA que nunca descansan",
      description:
        "Chatbots y asistentes inteligentes que responden consultas, califican leads y agendan reuniones 24/7.",
    },
    {
      icon: "Code2",
      title: "Software a la medida de tu operación",
      description:
        "Desde integraciones entre tus herramientas hasta productos SaaS propios. Construimos lo que tu negocio necesita.",
    },
  ],
};

export const servicesContent = {
  label: "SERVICIOS",
  headline: "Todo lo que necesitas",
  headlineAccent: "para escalar tu negocio",
  services: [
    {
      icon: "Monitor",
      title: "Landing Pages & Webs de Conversión",
      description:
        "Sitios web profesionales diseñados para captar leads y convertir visitantes en clientes. SEO, responsive y preparados para automatización.",
      features: [
        "Diseño premium y responsive",
        "Optimización SEO on-page",
        "Formularios conectados a CRM",
        "Analíticas y tracking",
      ],
    },
    {
      icon: "Zap",
      title: "Automatización de Procesos",
      description:
        "Conectamos tus herramientas y eliminamos trabajo manual con workflows inteligentes usando n8n, APIs y lógica de negocio personalizada.",
      features: [
        "Workflows con n8n",
        "Integración de herramientas",
        "Respuestas automáticas",
        "Reportes automatizados",
      ],
    },
    {
      icon: "MessageSquareCode",
      title: "Asistentes IA (Bexa)",
      description:
        "Asistentes inteligentes que entienden a tus clientes, responden preguntas frecuentes, califican leads y agendan reuniones automáticamente.",
      features: [
        "Chat inteligente 24/7",
        "Calificación de leads",
        "Agenda automática",
        "Entrenamiento personalizado",
      ],
    },
    {
      icon: "Blocks",
      title: "Software a Medida & SaaS",
      description:
        "Desarrollamos soluciones de software adaptadas a tu negocio. Desde dashboards internos hasta productos SaaS completos listos para escalar.",
      features: [
        "Arquitectura escalable",
        "UX/UI profesional",
        "Integraciones API",
        "Soporte continuo",
      ],
    },
  ],
};

export const processContent = {
  label: "CÓMO TRABAJAMOS",
  headline: "Un proceso claro",
  headlineAccent: "de inicio a resultado",
  description:
    "Empezamos donde tú necesites y escalamos contigo. Cada etapa está diseñada para entregarte valor real.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Entendemos tu negocio, tus objetivos y tus dolores. Identificamos qué necesitas primero y qué puede automatizarse.",
      icon: "Search",
    },
    {
      number: "02",
      title: "Estrategia y Diseño",
      description:
        "Definimos la arquitectura, el diseño y los flujos. Todo orientado a resultados medibles y escalabilidad.",
      icon: "PenTool",
    },
    {
      number: "03",
      title: "Desarrollo",
      description:
        "Construimos tu solución con código limpio, componentes reutilizables y las mejores prácticas de la industria.",
      icon: "Code2",
    },
    {
      number: "04",
      title: "Automatización",
      description:
        "Conectamos workflows, integramos herramientas y configuramos respuestas automáticas para liberar a tu equipo.",
      icon: "Workflow",
    },
    {
      number: "05",
      title: "Lanzamiento y Mejora Continua",
      description:
        "Lanzamos, medimos y optimizamos. Tu solución evoluciona con tu negocio, no se queda estática.",
      icon: "Rocket",
    },
  ],
};

export const proofContent = {
  label: "CAPACIDADES REALES",
  headline: "No solo hablamos de tecnología.",
  headlineAccent: "La construimos.",
  description:
    "Mientras la mayoría de agencias subcontrata desarrollo, nosotros construimos nuestros propios productos. Esto garantiza que cuando trabajamos contigo, tenemos la capacidad técnica real para cumplir.",
  highlights: [
    {
      title: "SaaS de Perfumería",
      description:
        "Estamos construyendo un producto SaaS completo para la industria de perfumería. Desde el backend hasta el frontend, incluyendo automatización de inventario, ventas y reportes.",
      tag: "Producto Propio",
    },
    {
      title: "Workflows de Automatización",
      description:
        "Hemos diseñado e implementado workflows complejos con n8n que integran OpenAI, CRMs, WhatsApp Business y pasarelas de pago para empresas reales.",
      tag: "En Producción",
    },
    {
      title: "Asistente Bexa",
      description:
        "Nuestro propio asistente IA, diseñado para ser entrenado por cada cliente. Responde preguntas, califica leads y agenda reuniones de forma autónoma.",
      tag: "IA Propia",
    },
  ],
};

export const pricingContent = {
  label: "PAQUETES",
  headline: "Soluciones claras",
  headlineAccent: "con precios transparentes",
  description:
    "Cada paquete está pensado para entregarte valor desde el primer día. Sin costos ocultos, sin sorpresas.",
  detailsLink: "/precios",
  detailsLabel: "Ver todos los servicios y precios →",
  plans: [
    {
      name: "Landing Estratégica",
      price: "S/ 1,490",
      period: "proyecto",
      description:
        "Para negocios que necesitan una presencia digital profesional y efectiva que capte leads desde el día 1.",
      features: [
        "1 página de alta conversión",
        "Diseño responsive premium",
        "Copy estructurado + CTA",
        "SEO técnico básico",
        "Formulario / WhatsApp integrado",
        "2 rondas de revisión",
      ],
      cta: "Empezar ahora",
      popular: false,
    },
    {
      name: "Web Corporativa Growth",
      price: "S/ 2,990",
      period: "proyecto",
      description:
        "Sitio corporativo con estructura comercial. Ideal para empresas que buscan crecer y captar de manera ordenada.",
      features: [
        "Hasta 5 páginas",
        "Sección de servicios y blog",
        "Formularios e integración básica",
        "Diseño responsive premium",
        "Analítica básica y SEO técnico",
        "Optimizado para conversiones",
      ],
      cta: "Agendar reunión",
      popular: false,
    },
    {
      name: "Web + Automatización",
      price: "S/ 4,990",
      period: "proyecto",
      description:
        "Para empresas que quieren captar más, responder automáticamente y validar su embudo comercial.",
      features: [
        "Web corporativa completa (hasta 5 páginas)",
        "1 flujo automatizado (leads → CRM/Email)",
        "Respuestas automáticas WhatsApp/Email",
        "Registro o mini-dashboard",
        "Validación de funnel inicial",
        "Analíticas y seguimiento avanzado",
      ],
      cta: "Hablemos",
      popular: true,
    },
  ],
};

// ============================================================
// Pricing Detailed — Para la página /precios
// ============================================================
export const pricingDetailedContent = {
  headline: "Servicios y precios",
  headlineAccent: "sin letras pequeñas",
  description: "Todos nuestros servicios con precios reales. Elige lo que necesitas hoy y escala cuando estés listo.",
  categories: [
    {
      title: "Paquetes de Entrada",
      subtitle: "Captación & Valor rápido",
      services: [
        {
          name: "Landing Estratégica",
          price: "S/ 1,490",
          period: "proyecto",
          description: "1 página de alta conversión con diseño responsive, copy estructurado, CTA con WhatsApp o formulario, SEO técnico básico.",
          includes: [
            "1 página de alta conversión",
            "Diseño responsive",
            "Copy estructurado",
            "CTA con WhatsApp/formulario",
            "SEO técnico básico",
            "2 rondas de revisión",
          ],
        },
        {
          name: "Web Corporativa Growth",
          price: "S/ 2,990",
          period: "proyecto",
          description: "Sitio corporativo con estructura comercial (hasta 5 páginas), sección de servicios, integraciones básicas, blog/contenido inicial.",
          includes: [
            "Hasta 5 páginas con estructura comercial",
            "Sección de servicios",
            "Integraciones básicas",
            "Blog / contenido inicial",
            "Analíticas básicas",
          ],
        },
        {
          name: "Web + Automatización Ligera",
          price: "S/ 4,990",
          period: "proyecto",
          description: "Web corporativa completa + 1 flujo automatizado (leads a email/sheet/CRM), registro o mini-dashboard, validación de funnel.",
          includes: [
            "Web corporativa completa",
            "1 flujo automatizado (leads → CRM/Email/Sheets)",
            "Registro o mini-dashboard",
            "Validación de funnel inicial",
            "Analíticas y seguimiento",
          ],
        },
        {
          name: "Diagnóstico de Automatización",
          price: "S/ 390",
          period: "sesión",
          description: "Reunión de discovery + mapa de oportunidades simples. Reembolsable si contratas un servicio.",
          includes: [
            "Reunión de discovery",
            "Mapa de oportunidades",
            "Recomendaciones priorizadas",
            "Reembolsable al contratar",
          ],
        },
      ],
    },
    {
      title: "Automatización & Agentes IA",
      subtitle: "Escala real con inteligencia artificial",
      services: [
        {
          name: "Automatización MVP",
          price: "Desde S/ 3,500",
          period: "proyecto",
          description: "1 proceso principal, hasta 3 integraciones, salida inicial para agendamiento, seguimiento o documentos.",
          includes: [
            "1 proceso principal automatizado",
            "Hasta 3 integraciones",
            "Salida para agendamiento/seguimiento/documentos",
            "Configuración y testing",
          ],
        },
        {
          name: "Agente IA Empresarial",
          price: "Desde S/ 2,500",
          period: "proyecto",
          description: "Configuración de canal principal, base de prompts/documentos, y orientación inicial.",
          includes: [
            "Canal principal configurado",
            "Base de prompts y documentos",
            "Orientación y capacitación inicial",
            "Integración con herramientas existentes",
          ],
        },
      ],
    },
    {
      title: "SaaS Vertical — PerfumAI",
      subtitle: "Solución para perfumerías",
      services: [
        {
          name: "Plan Founder",
          price: "S/ 349",
          period: "mes",
          description: "Onboarding S/ 1,200 + S/ 349/mes. Incluye dashboard, inventario, motor de precios, catálogos IA.",
          includes: [
            "Onboarding personalizado (S/ 1,200)",
            "Dashboard completo",
            "Gestión de inventario",
            "Motor de precios",
            "Catálogos con IA",
          ],
        },
        {
          name: "Plan Standard",
          price: "S/ 590",
          period: "mes",
          description: "Onboarding S/ 1,500 + S/ 590/mes. Todo del Plan Founder + funcionalidades avanzadas.",
          includes: [
            "Onboarding avanzado (S/ 1,500)",
            "Todo del Plan Founder",
            "Funcionalidades avanzadas",
            "Soporte prioritario",
          ],
        },
      ],
    },
    {
      title: "Desarrollo a Medida",
      subtitle: "Soluciones personalizadas",
      services: [
        {
          name: "MVP Web App",
          price: "Desde S/ 12,000",
          period: "proyecto",
          description: "Aplicación web mínima viable con arquitectura escalable, UX profesional y APIs.",
          includes: [
            "Arquitectura escalable",
            "UX/UI profesional",
            "APIs e integraciones",
            "Panel de administración",
          ],
        },
        {
          name: "Sistema a Medida",
          price: "Desde S/ 18,000",
          period: "proyecto",
          description: "Sistema completo personalizado para tu operación. Diseño, desarrollo, integración y soporte.",
          includes: [
            "Análisis de requerimientos",
            "Diseño y desarrollo completo",
            "Integraciones a medida",
            "Capacitación y documentación",
            "Soporte post-lanzamiento",
          ],
        },
      ],
    },
    {
      title: "Planes de Mantenimiento",
      subtitle: "Evolución continua",
      services: [
        {
          name: "Care Web",
          price: "Desde S/ 190",
          period: "mes",
          description: "Mantenimiento y actualizaciones para tu sitio web.",
          includes: ["Actualizaciones de contenido", "Monitoreo de uptime", "Soporte por email"],
        },
        {
          name: "Care Business",
          price: "Desde S/ 490",
          period: "mes",
          description: "Soporte para tu ecosistema web + automatización.",
          includes: ["Todo de Care Web", "Ajustes a workflows", "Reportes mensuales", "Soporte prioritario"],
        },
        {
          name: "Care Automation",
          price: "Desde S/ 990",
          period: "mes",
          description: "Mantenimiento completo de automatización, IA y sistemas.",
          includes: ["Todo de Care Business", "Optimización de agentes IA", "Monitoreo de integraciones", "Consultoría mensual"],
        },
      ],
    },
  ],
};

export const faqContent = {
  label: "PREGUNTAS FRECUENTES",
  headline: "Resolvemos tus dudas",
  headlineAccent: "antes de empezar",
  faqs: [
    {
      question: "¿Cuánto tiempo toma desarrollar una landing page?",
      answer:
        "Una landing page profesional se entrega entre 7 y 10 días hábiles desde la aprobación del diseño. Proyectos más complejos con automatización pueden tomar de 2 a 4 semanas.",
    },
    {
      question: "¿Qué incluye la automatización de procesos?",
      answer:
        "Incluye el diseño e implementación de workflows personalizados usando herramientas como n8n, integración con tu CRM, WhatsApp Business, email y otras herramientas que ya uses. Automatizamos desde respuestas a leads hasta reportes periódicos.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar las soluciones?",
      answer:
        "No. Todas nuestras soluciones están diseñadas para ser usadas por equipos no técnicos. Te entregamos la solución configurada, documentada y con capacitación incluida.",
    },
    {
      question: "¿Pueden integrarse con las herramientas que ya uso?",
      answer:
        "Sí. Trabajamos con API para conectar prácticamente cualquier herramienta: HubSpot, Google Sheets, Slack, WhatsApp, Stripe, Calendly, y muchas más.",
    },
    {
      question: "¿Qué pasa después de la entrega?",
      answer:
        "Cada plan incluye un período de soporte. Después, ofrecemos planes de mejora continua para que tu solución siga evolucionando con tu negocio.",
    },
    {
      question: "¿Puedo empezar con una landing y luego agregar automatización?",
      answer:
        "¡Exacto! Esa es nuestra filosofía. Empezamos con lo que necesitas hoy y escalamos hacia automatización, asistentes IA y más cuando estés listo.",
    },
  ],
};

export const ctaContent = {
  headline: "¿Listo para dejar de perder clientes",
  headlineAccent: "y empezar a escalar?",
  description:
    "Agenda una reunión gratuita de 30 minutos y te mostramos exactamente cómo podemos ayudar a tu negocio.",
  ctaPrimary: { label: "Agendar reunión gratuita", href: "#contacto" },
  ctaSecondary: {
    label: "Escríbenos por WhatsApp",
    href: "https://wa.me/51999999999",
  },
};

export const footerContent = {
  description:
    "Empresa de tecnología especializada en IA, automatización y desarrollo de software. Transformamos negocios con soluciones que generan resultados reales.",
  links: [
    {
      title: "Servicios",
      items: [
        { label: "Landing Pages", href: "#servicios" },
        { label: "Automatización", href: "#servicios" },
        { label: "Asistentes IA", href: "#servicios" },
        { label: "Software a medida", href: "#servicios" },
      ],
    },
    {
      title: "Empresa",
      items: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Proceso", href: "#proceso" },
        { label: "Precios", href: "#precios" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Contacto",
      items: [
        { label: "Agenda una reunión", href: "#contacto" },
        { label: "WhatsApp", href: "https://wa.me/51999999999" },
        { label: "Email", href: "mailto:hola@bskr.io" },
      ],
    },
  ],
};
