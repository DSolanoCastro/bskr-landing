"use client";

import Image from "next/image";
import { siteConfig, footerContent } from "@/data/site";
import styles from "./Footer.module.css";

/* SVG iconos de redes sociales (lucide-react no los incluye) */
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Marca */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/logos/bskr-logo-alt.jpeg"
                alt="BSKR Logo"
                width={36}
                height={36}
                className={styles.logoImg}
                style={{ width: "36px", height: "auto" }}
              />
              <div>
                <span className={styles.logoName}>{siteConfig.name}</span>
                <span className={styles.logoTagline}>
                  {siteConfig.tagline}
                </span>
              </div>
            </div>
            <p className={styles.brandDesc}>{footerContent.description}</p>
            <div className={styles.socials}>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerContent.links.map((group, i) => (
            <div key={i} className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>{group.title}</h4>
              <ul className={styles.linkList}>
                {group.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} className={styles.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {currentYear} {siteConfig.name} — {siteConfig.tagline}. Todos los
            derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
