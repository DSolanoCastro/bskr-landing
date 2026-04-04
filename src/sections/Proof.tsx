"use client";

import { proofContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import styles from "./Proof.module.css";

export default function Proof() {
  return (
    <section className={styles.section} id="capacidades">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{proofContent.label}</span>
          <h2 className={styles.headline}>
            {proofContent.headline}{" "}
            <span className="headline-accent">
              {proofContent.headlineAccent}
            </span>
          </h2>
          <p className={styles.description}>{proofContent.description}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {proofContent.highlights.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className={`glass-card ${styles.card}`}>
                <span className={styles.tag}>{item.tag}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
