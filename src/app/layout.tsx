import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "BSKR — IA y Automatización | Presencia digital, automatización e inteligencia artificial",
  description:
    "Combinamos diseño web, automatización e inteligencia artificial para que tu negocio capture más clientes, responda más rápido y escale sin límites. Landing pages, workflows, asistentes IA y software a medida.",
  keywords: [
    "BSKR",
    "automatización",
    "inteligencia artificial",
    "landing page",
    "software a medida",
    "chatbot",
    "n8n",
    "asistente IA",
    "desarrollo web",
    "SaaS",
  ],
  authors: [{ name: "BSKR", url: "https://bskr.io" }],
  openGraph: {
    title: "BSKR — IA y Automatización",
    description:
      "Presencia digital que convierte, automatización empresarial, asistentes IA y software a medida.",
    type: "website",
    locale: "es_PE",
    siteName: "BSKR",
  },
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Security: CSP meta tag */}
        <meta
          httpEquiv="X-Content-Type-Options"
          content="nosniff"
        />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />
      </head>
      <body>
        {children}

        {/* Bexa AI Assistant — Vertex AI Conversational Messenger */}
        <link
          rel="stylesheet"
          href="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/themes/df-messenger-default.css"
        />
        <script
          src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"
          async
        />
        {/* @ts-expect-error - df-messenger is a web component from Google */}
        <df-messenger
          location="us-central1"
          project-id="enduring-wharf-492723-v8"
          agent-id="2fe660b4-4a6b-4c63-881e-679a74efb910"
          language-code="es"
          max-query-length="-1"
        >
          {/* @ts-expect-error - df-messenger-chat-bubble is a web component from Google */}
          <df-messenger-chat-bubble chat-title="Bexa — Asistente BSKR" />
        </df-messenger>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              df-messenger {
                z-index: 999;
                position: fixed;
                bottom: 16px;
                right: 16px;
                --df-messenger-font-color: #e0e0e0;
                --df-messenger-font-family: 'Inter', 'Google Sans', sans-serif;
                --df-messenger-chat-background: #0a0a1a;
                --df-messenger-message-user-background: #6c3aed;
                --df-messenger-message-bot-background: #1a1a2e;
                --df-messenger-chat-bubble-background: #6c3aed;
                --df-messenger-chat-bubble-icon-color: #fff;
                --df-messenger-send-icon-color: #6c3aed;
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
