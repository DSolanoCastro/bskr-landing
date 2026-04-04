"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import styles from "./BexaPlaceholder.module.css";

/**
 * Placeholder para el asistente BEXA.
 * Fase 1: Solo UI / botón flotante.
 * Fase 2+: Conectar a backend real, OpenAI, n8n webhook.
 *
 * Para integrar:
 * 1. Reemplazar el contenido del panel con el componente de chat real
 * 2. Conectar via WebSocket o fetch a tu API de Bexa
 * 3. Los estilos ya están preparados para un chat completo
 */
export default function BexaPlaceholder() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        className={styles.fab}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Cerrar asistente" : "Abrir asistente BEXA"}
        id="bexa-trigger"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <span className={styles.fabPulse} />}
      </button>

      {/* Panel del chat */}
      {isOpen && (
        <div className={styles.panel} id="bexa-panel" role="dialog" aria-label="Asistente BEXA">
          <div className={styles.panelHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatar}>
                <MessageCircle size={18} />
              </div>
              <div>
                <span className={styles.headerName}>Bexa</span>
                <span className={styles.headerStatus}>Asistente IA de BSKR</span>
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
                Ver servicios
              </a>
              <a href="#precios" className={styles.quickBtn} onClick={() => setIsOpen(false)}>
                Ver precios
              </a>
              <a
                href="https://wa.me/51999999999"
                className={styles.quickBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
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
