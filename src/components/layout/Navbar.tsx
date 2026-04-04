"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/data/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="BSKR Home">
          <Image
            src="/logos/bskr-logo-alt.jpeg"
            alt="BSKR Logo"
            width={40}
            height={40}
            className={styles.logoImg}
            style={{ width: "40px", height: "auto" }}
          />
          <div className={styles.logoText}>
            <span className={styles.logoName}>{siteConfig.name}</span>
            <span className={styles.logoTagline}>{siteConfig.tagline}</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.desktopLinks}>
          {navigation.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className={styles.actions}>
          <a href="#contacto" className={`btn-primary ${styles.ctaBtn}`}>
            Agenda una reunión
          </a>
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
            />
          </button>
        </div>

        {/* Mobile Overlay */}
        {mobileOpen && (
          <div className={styles.mobileOverlay}>
            <ul className={styles.mobileLinks}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.mobileLink}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="btn-primary"
                  onClick={() => setMobileOpen(false)}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Agenda una reunión
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
