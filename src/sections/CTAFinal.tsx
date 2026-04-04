"use client";

import { ctaContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import styles from "./CTAFinal.module.css";

export default function CTAFinal() {
  return (
    <section className={`${styles.section} neural-bg`} id="contacto">
      <div className="container">
        <ScrollReveal>
          <div className={styles.card}>
            {/* Decoración de fondo */}
            <div className={styles.glowOrb1} />
            <div className={styles.glowOrb2} />

            <h2 className={styles.headline}>
              {ctaContent.headline}{" "}
              <span className="headline-accent">
                {ctaContent.headlineAccent}
              </span>
            </h2>
            <p className={styles.description}>{ctaContent.description}</p>

            <div className={styles.ctas}>
              <a href={ctaContent.ctaPrimary.href} className="btn-primary">
                {ctaContent.ctaPrimary.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={ctaContent.ctaSecondary.href}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                {ctaContent.ctaSecondary.label}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
