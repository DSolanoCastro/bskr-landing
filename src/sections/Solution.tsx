"use client";

import { solutionContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Globe, Workflow, Bot, Code2 } from "lucide-react";
import styles from "./Solution.module.css";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Workflow,
  Bot,
  Code2,
};

export default function Solution() {
  return (
    <section className={`${styles.section} neural-bg`} id="nosotros">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{solutionContent.label}</span>
          <h2 className={styles.headline}>
            {solutionContent.headline}{" "}
            <span className="headline-accent">
              {solutionContent.headlineAccent}
            </span>
          </h2>
          <p className={styles.description}>{solutionContent.description}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {solutionContent.pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.iconWrap}>
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                  </div>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                  <p className={styles.cardDesc}>{pillar.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
