"use client";

import { servicesContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Monitor,
  Zap,
  MessageSquareCode,
  Blocks,
  Check,
} from "lucide-react";
import styles from "./Services.module.css";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Zap,
  MessageSquareCode,
  Blocks,
};

export default function Services() {
  return (
    <section className={styles.section} id="servicios">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">{servicesContent.label}</span>
            <h2 className={styles.headline}>
              {servicesContent.headline}{" "}
              <span className="headline-accent">
                {servicesContent.headlineAccent}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {servicesContent.services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.cardTop}>
                    <div className={styles.iconWrap}>
                      {Icon && <Icon size={24} strokeWidth={1.5} />}
                    </div>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>
                  <ul className={styles.features}>
                    {service.features.map((feat, fi) => (
                      <li key={fi} className={styles.feature}>
                        <Check size={14} className={styles.checkIcon} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
