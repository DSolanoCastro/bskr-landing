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
  plans: [
    {
      name: "Presencia",
      price: "Desde $497",
      period: "proyecto",
      description:
        "Para negocios que necesitan una presencia digital profesional y efectiva.",
      features: [
        "Landing page de conversión",
        "Diseño responsive premium",
        "SEO básico on-page",
        "Formulario de contacto funcional",
        "Dominio + hosting primer año",
        "Entrega en 7-10 días",
      ],
      cta: "Empezar ahora",
      popular: false,
    },
    {
      name: "Automatización",
      price: "Desde $997",
      period: "proyecto",
      description:
        "Para empresas que quieren captar más y responder automáticamente.",
      features: [
        "Todo lo del plan Presencia",
        "Workflow de automatización",
        "Respuestas automáticas WhatsApp/Email",
        "Integración con CRM",
        "Dashboard de seguimiento",
        "Soporte por 30 días",
      ],
      cta: "Agendar reunión",
      popular: true,
    },
    {
      name: "Escala",
      price: "Personalizado",
      period: "mensual",
      description:
        "Para empresas que necesitan un ecosistema completo y escalable.",
      features: [
        "Todo lo del plan Automatización",
        "Asistente IA personalizado",
        "Software a medida",
        "Integraciones avanzadas",
        "Soporte prioritario continuo",
        "Consultoría de procesos",
      ],
      cta: "Hablemos",
      popular: false,
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
