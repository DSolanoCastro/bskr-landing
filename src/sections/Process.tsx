"use client";

import { processContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Search, PenTool, Code2, Workflow, Rocket } from "lucide-react";
import styles from "./Process.module.css";

const iconMap: Record<string, React.ElementType> = {
  Search,
  PenTool,
  Code2,
  Workflow,
  Rocket,
};

export default function Process() {
  return (
    <section className={`${styles.section} neural-bg`} id="proceso">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">{processContent.label}</span>
            <h2 className={styles.headline}>
              {processContent.headline}{" "}
              <span className="headline-accent">
                {processContent.headlineAccent}
              </span>
            </h2>
            <p className={styles.description}>{processContent.description}</p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          {processContent.steps.map((step, i) => {
            const Icon = iconMap[step.icon];
            return (
              <ScrollReveal key={i} delay={i * 120}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>
                    <span>{step.number}</span>
                    {i < processContent.steps.length - 1 && (
                      <div className={styles.connector} />
                    )}
                  </div>
                  <div className={`glass-card ${styles.stepContent}`}>
                    <div className={styles.stepIcon}>
                      {Icon && <Icon size={20} strokeWidth={1.5} />}
                    </div>
                    <div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
