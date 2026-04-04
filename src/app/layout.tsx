import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BSKR — IA y Automatización | Presencia digital, automatización e inteligencia artificial",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
