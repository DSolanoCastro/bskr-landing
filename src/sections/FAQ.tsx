"use client";

import { useState } from "react";
import { faqContent } from "@/data/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <ScrollReveal>
          <div className={styles.header}>
            <span className="section-label">{faqContent.label}</span>
            <h2 className={styles.headline}>
              {faqContent.headline}{" "}
              <span className="headline-accent">
                {faqContent.headlineAccent}
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className={styles.list}>
          {faqContent.faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div
                className={`${styles.item} ${
                  openIndex === i ? styles.open : ""
                }`}
              >
                <button
                  className={styles.question}
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={styles.chevron}
                  />
                </button>
                <div className={styles.answerWrap}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
