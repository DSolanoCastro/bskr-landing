"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import styles from "./BexaPlaceholder.module.css";

/**
 * Placeholder para el asistente BEXA.
 * Fase 1: Solo UI / botón flotante con imagen custom.
 * Fase 2+: Conectar a backend real, OpenAI, n8n webhook.
 */
export default function BexaPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante — Imagen custom en vez de icono genérico */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente BEXA"}
        id="bexa-trigger"
      >
        {isOpen ? (
          <X size={24} color="#fff" />
        ) : (
          <Image
            src="/logos/bexa-fab.png"
            alt="Bexa IA"
            width={56}
            height={56}
            className={styles.fabImage}
          />
        )}
        {!isOpen && <span className={styles.fabPulse} />}
        {!isOpen && <span className={styles.fabLabel}>¿Necesitas ayuda?</span>}
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <div className={styles.panel} id="bexa-panel" role="dialog" aria-label="Asistente BEXA">
          <div className={styles.panelHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>
                <Image
                  src="/logos/bexa-avatar.png"
                  alt="Bexa Avatar"
                  width={36}
                  height={36}
                  className={styles.avatarImg}
                />
              </div>
              <div>
                <span className={styles.headerName}>Bexa</span>
                <span className={styles.headerStatus}>
                  <span className={styles.statusDot} />
                  Asistente IA de BSKR
                </span>
              </div>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
          </div>

          <div className={styles.panelBody}>
            {/* Mensaje de bienvenida */}
            <div className={styles.botMessage}>
              <p>
                ¡Hola! 👋 Soy <strong>Bexa</strong>, la asistente virtual de
                BSKR.
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Estoy en fase de entrenamiento, pero pronto podré ayudarte a
                resolver dudas, agendar reuniones y explorar nuestros servicios.
              </p>
            </div>

            {/* Opciones rápidas */}
            <div className={styles.quickActions}>
              <a href="#servicios" className={styles.quickBtn} onClick={() => setIsOpen(false)}>
                🛠️ Ver servicios
              </a>
              <a href="#precios" className={styles.quickBtn} onClick={() => setIsOpen(false)}>
                💰 Ver precios
              </a>
              <a
                href="https://wa.me/51999999999"
                className={styles.quickBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp
              </a>
              <a href="#contacto" className={styles.quickBtn} onClick={() => setIsOpen(false)}>
                📅 Agendar reunión
              </a>
            </div>
          </div>

          <div className={styles.panelFooter}>
            <span className={styles.footerText}>
              Pronto disponible — Hecho con IA por BSKR
            </span>
          </div>
        </div>
      )}
    </>
  );
}
