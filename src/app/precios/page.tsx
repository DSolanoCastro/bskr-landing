import { pricingDetailedContent, siteConfig } from "@/data/site";
import type { Metadata } from "next";
import PricingDetailedView from "./PricingDetailedView";

export const metadata: Metadata = {
  title: `Precios y Servicios — ${siteConfig.name}`,
  description: "Todos los servicios y precios de BSKR: landing pages, automatización, agentes IA, SaaS y software a medida. Sin letras pequeñas.",
};

export default function PreciosPage() {
  return <PricingDetailedView data={pricingDetailedContent} />;
}
