"use client";

import Link from "next/link";
import { pricingContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Check } from "lucide-react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <section className={`${styles.section} neural-bg`} id="precios">
      <div className={styles.glowBackground} />
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">{pricingContent.label}</span>
            <h2 className={styles.headline}>
              {pricingContent.headline}{" "}
              <span className="headline-accent">
                {pricingContent.headlineAccent}
              </span>
            </h2>
            <p className={styles.description}>{pricingContent.description}</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {pricingContent.plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className={`glass-card ${styles.card} ${
                  plan.popular ? styles.popular : ""
                }`}
              >
                {plan.popular && (
                  <span className={styles.popularBadge}>Más popular</span>
                )}
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <div className={styles.priceWrap}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>/ {plan.period}</span>
                  </div>
                  <p className={styles.planDesc}>{plan.description}</p>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className={styles.feature}>
                      <Check size={16} className={styles.checkIcon} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={
                    plan.popular ? "btn-primary" : "btn-secondary"
                  }
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "auto",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Link a página de precios completa */}
        <ScrollReveal delay={400}>
          <div className={styles.detailsLinkWrap}>
            <Link href="/precios" className={styles.detailsLink}>
              {pricingContent.detailsLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

