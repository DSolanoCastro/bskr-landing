# BSKR — Landing Page Oficial

**IA y automatización** | Presencia digital, automatización y software a medida.

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:3000
```

## 📁 Estructura del proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Layout principal + metadatos SEO
│   ├── page.tsx            # Página home (ensambla secciones)
│   └── globals.css         # Estilos globales + design tokens CSS
│
├── components/             # Componentes reutilizables
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegación principal (glassmorphism)
│   │   └── Navbar.module.css
│   ├── chatbot/
│   │   ├── BexaPlaceholder.tsx   # Placeholder del asistente IA
│   │   └── BexaPlaceholder.module.css
│   └── ui/
│       └── ScrollReveal.tsx      # Animación scroll reveal
│
├── sections/               # Secciones de la landing
│   ├── Hero.tsx            # Hero principal con CTAs
│   ├── Problems.tsx        # Dolores del cliente
│   ├── Solution.tsx        # Propuesta de valor BSKR
│   ├── Services.tsx        # Servicios detallados
│   ├── Process.tsx         # Flujo de trabajo
│   ├── Proof.tsx           # Capacidades reales (SaaS, Bexa)
│   ├── Pricing.tsx         # Paquetes y precios
│   ├── FAQ.tsx             # Preguntas frecuentes
│   ├── CTAFinal.tsx        # CTA de contacto final
│   ├── Footer.tsx          # Pie de página
│   └── *.module.css        # Estilos por sección
│
├── data/
│   └── site.ts             # TODO el contenido editable (textos, links, precios)
│
└── config/
    └── theme.ts            # Tokens de diseño (Nebula Core)

public/
└── logos/
    └── bskr-logo.jpg       # Logo principal BSKR
```

## 🎨 Sistema de diseño: Nebula Core

Paleta derivada del logo BSKR (cerebro + circuitos en azul):

| Token | Color | Uso |
|-------|-------|-----|
| `--primary` | `#70b1ff` | Elementos primarios |
| `--secondary` | `#30c1f2` | Acentos y estados |
| `--bg` | `#050e20` | Fondo principal oscuro |
| `--surface-container` | `#0e192f` | Cards y superficies |
| `--on-surface` | `#dde5ff` | Texto principal |
| `--gradient-cta` | azul → cyan | Botones CTAs |

## ✏️ Editar contenido

Todo el contenido está centralizado en `src/data/site.ts`:
- Textos, headlines y descripciones
- Servicios y sus características
- Precios y paquetes
- FAQs
- Links de contacto (email, WhatsApp, Calendly)
- Redes sociales

**No necesitas tocar componentes para actualizar textos o precios.**

## 🤖 Integración Bexa (Chatbot)

El componente `src/components/chatbot/BexaPlaceholder.tsx` está preparado para evolucionar:

1. **Fase actual**: UI placeholder con quick actions
2. **Siguiente fase**: Conectar via `fetch()` o WebSocket a tu API
3. **Avanzado**: Integrar con n8n webhook + OpenAI

## 📋 Próximos pasos

- [ ] Conectar formulario de contacto con n8n webhook
- [ ] Integrar Calendly embed en sección de contacto
- [ ] Reemplazar placeholder de Bexa con chat real
- [ ] Agregar analytics (GA4 / Plausible)
- [ ] Deploy a Vercel/Netlify
- [ ] Configurar dominio bskr.io

## 🛠️ Tecnologías

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS** (base) + CSS Modules (componentes)
- **Lucide React** (iconos)
- **Framer Motion** (disponible para animaciones avanzadas)
