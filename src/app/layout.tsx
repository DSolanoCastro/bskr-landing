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

                /* Chat bubble (floating button) */
                --df-messenger-chat-bubble-background: #6c3aed;
                --df-messenger-chat-bubble-icon-color: #ffffff;
                --df-messenger-chat-bubble-size: 56px;

                /* Chat window */
                --df-messenger-chat-background: #0d0d1a;
                --df-messenger-chat-window-height: 500px;
                --df-messenger-chat-window-width: 370px;
                --df-messenger-chat-border-radius: 16px;
                --df-messenger-chat-padding: 16px;

                /* Typography */
                --df-messenger-font-color: #e8e8f0;
                --df-messenger-font-family: 'Inter', 'Google Sans', system-ui, sans-serif;
                --df-messenger-font-size: 14px;

                /* Header / titlebar */
                --df-messenger-titlebar-background: #111128;
                --df-messenger-titlebar-font-color: #ffffff;
                --df-messenger-titlebar-icon-color: #a78bfa;
                --df-messenger-titlebar-padding: 14px 16px;

                /* Bot messages */
                --df-messenger-message-bot-background: #1a1a2e;
                --df-messenger-message-bot-font-color: #d4d4e8;
                --df-messenger-message-bot-border-radius: 12px 12px 12px 4px;

                /* User messages */
                --df-messenger-message-user-background: #6c3aed;
                --df-messenger-message-user-font-color: #ffffff;
                --df-messenger-message-user-border-radius: 12px 12px 4px 12px;

                /* Input area */
                --df-messenger-input-background: #151530;
                --df-messenger-input-font-color: #e8e8f0;
                --df-messenger-input-border-color: #2a2a4a;
                --df-messenger-input-placeholder-font-color: #6b6b8a;
                --df-messenger-input-border-radius: 24px;
                --df-messenger-input-padding: 10px 16px;

                /* Send button */
                --df-messenger-send-icon-color: #6c3aed;
                --df-messenger-send-icon-color-hover: #8b5cf6;

                /* Chips / quick replies */
                --df-messenger-chip-background: #1e1e3a;
                --df-messenger-chip-font-color: #a78bfa;
                --df-messenger-chip-border-color: #6c3aed;
                --df-messenger-chip-border-radius: 20px;

                /* Scrollbar */
                --df-messenger-chat-scroll-color: #2a2a4a;
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
