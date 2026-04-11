"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroContent } from "@/data/site";
import styles from "./Hero.module.css";

interface Particle {
  left: string;
  top: string;
  delay: string;
  duration: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 25 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`,
      }))
    );
  }, []);

  return (
    <section className={`${styles.hero} mesh-bg`} id="hero">
      {/* Background image */}
      <div className={styles.heroBg}>
        <Image
          src={`${process.env.NODE_ENV === "production" ? "/bskr-landing" : ""}/images/hero-bg.png`}
          alt=""
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.15 }}
        />
      </div>

      {/* Partículas decorativas */}
      <div className={styles.particles}>
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        {/* Badge de confianza */}
        <div className={styles.badgeWrap}>
          <span className="badge">
            <span className="badge-icon">🚀</span>
            {heroContent.badge}
          </span>
        </div>

        {/* Logo en el hero */}
        <div className={styles.logoWrap}>
          <Image
            src={`${process.env.NODE_ENV === "production" ? "/bskr-landing" : ""}/logos/bskr-logo.jpg`}
            alt="BSKR Logo"
            width={120}
            height={120}
            className={styles.heroLogo}
            priority
          />
        </div>

        {/* Headline principal */}
        <h1 className={styles.headline}>
          {heroContent.headline}
          <br />
          <span className={styles.headlineAccent}>
            {heroContent.headlineAccent}
          </span>
        </h1>

        {/* Subtítulo */}
        <p className={styles.subheadline}>{heroContent.subheadline}</p>

        {/* Botones CTA */}
        <div className={styles.ctas}>
          <a href={heroContent.ctaPrimary.href} className="btn-primary">
            {heroContent.ctaPrimary.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href={heroContent.ctaSecondary.href} className="btn-secondary">
            {heroContent.ctaSecondary.label}
          </a>
        </div>

        {/* Estadísticas */}
        <div className={styles.stats}>
          {heroContent.stats.map((stat, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradiente inferior para transición suave */}
      <div className={styles.fadeBottom} />
    </section>
  );
}
