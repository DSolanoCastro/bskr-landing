"use client";

import { problemsContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  UserX,
  Clock,
  AlertTriangle,
  Puzzle,
} from "lucide-react";
import styles from "./Problems.module.css";

const iconMap: Record<string, React.ElementType> = {
  UserX,
  Clock,
  AlertTriangle,
  Puzzle,
};

export default function Problems() {
  return (
    <section className={styles.section} id="problemas">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">{problemsContent.label}</span>
          <h2 className={styles.headline}>
            {problemsContent.headline}{" "}
            <span className="headline-accent">
              {problemsContent.headlineAccent}
            </span>
          </h2>
          <p className={styles.description}>{problemsContent.description}</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {problemsContent.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon];
            return (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`glass-card ${styles.card}`}>
                  <div className={styles.iconWrap}>
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3 className={styles.cardTitle}>{problem.title}</h3>
                  <p className={styles.cardDesc}>{problem.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
