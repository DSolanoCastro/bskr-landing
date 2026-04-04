"use client";

import Link from "next/link";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./precios.module.css";

interface Service {
  name: string;
  price: string;
  period: string;
  description: string;
  includes: string[];
}

interface Category {
  title: string;
  subtitle: string;
  services: Service[];
}

interface PricingDetailedData {
  headline: string;
  headlineAccent: string;
  description: string;
  categories: Category[];
}

export default function PricingDetailedView({ data }: { data: PricingDetailedData }) {
  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <ScrollReveal>
            <h1 className={styles.headline}>
              {data.headline}{" "}
              <span className="headline-accent">{data.headlineAccent}</span>
            </h1>
            <p className={styles.description}>{data.description}</p>
          </ScrollReveal>
        </div>
      </header>

      {/* Categorías */}
      <main className={styles.main}>
        <div className="container">
          {data.categories.map((category, ci) => (
            <section key={ci} className={styles.category}>
              <ScrollReveal>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                  <p className={styles.categorySubtitle}>{category.subtitle}</p>
                </div>
              </ScrollReveal>

              <div className={styles.servicesGrid}>
                {category.services.map((service, si) => (
                  <ScrollReveal key={si} delay={si * 80}>
                    <div className={`glass-card ${styles.serviceCard}`}>
                      <div className={styles.cardTop}>
                        <h3 className={styles.serviceName}>{service.name}</h3>
                        <div className={styles.priceRow}>
                          <span className={styles.price}>{service.price}</span>
                          <span className={styles.period}>/ {service.period}</span>
                        </div>
                        <p className={styles.serviceDesc}>{service.description}</p>
                      </div>
                      <ul className={styles.includes}>
                        {service.includes.map((item, ii) => (
                          <li key={ii} className={styles.includeItem}>
                            <Check size={14} className={styles.checkIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a href="/#contacto" className="btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                        Consultar
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* CTA Final */}
      <section className={`${styles.ctaSection} neural-bg`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaHeadline}>
                ¿No sabes cuál elegir? <span className="headline-accent">Te ayudamos gratis.</span>
              </h2>
              <p className={styles.ctaDesc}>
                Agenda una llamada de 15 minutos y te recomendamos la mejor opción para tu negocio.
              </p>
              <div className={styles.ctaButtons}>
                <a href="/#contacto" className="btn-primary">
                  Agendar llamada gratuita
                  <ArrowRight size={16} />
                </a>
                <Link href="/" className="btn-secondary">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
