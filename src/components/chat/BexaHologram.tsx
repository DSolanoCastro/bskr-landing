"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, Activity, User, Sparkles, Zap } from "lucide-react";
import styles from "./BexaHologram.module.css";

export default function BexaHologram() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "ai",
      content: "¡Hola! Soy Bexa, tu asistente comercial. ¿Cómo puedo ayudarte a escalar tus operaciones hoy?"
    }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userText = input;
    const newMessage = { id: Date.now(), role: "user", content: userText };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userText, sessionId }),
      });

      const data = await response.json();
      console.log("DATOS RECIBIDOS DE BEXA API:", data);
      
      if (data.sessionId) setSessionId(data.sessionId);
      
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "ai", content: data.text }
      ]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "ai", content: "Error en el enlace neuronal. Por favor, revisa la conexión con Google Cloud." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      {!isOpen ? (
        <button className={styles.trigger} onClick={() => setIsOpen(true)}>
          <div className={styles.triggerOrb}></div>
          <Sparkles size={24} className={styles.triggerIcon} />
        </button>
      ) : (
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerTitle}>
            <div className={styles.miniOrb}></div>
            <span className={styles.brandName}>Bexa AI</span>
            <div className={styles.statusBadge}>Online</div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <div className={styles.closeIcon}></div>
          </button>
        </header>

        {/* Big Mesh Orb */}
        <div className={styles.heroSection}>
          <div className={`${styles.mainOrb} ${isLoading ? styles.orbThinking : ""}`}>
            <div className={styles.orbInner}></div>
            <div className={styles.orbGlow}></div>
          </div>
          <div className={styles.neuralLink}>
            <Zap size={14} className={styles.neuralIcon} />
            <span>{isLoading ? "DATA STREAMING..." : "NEURAL LINK ACTIVE"}</span>
          </div>
        </div>

        {/* Chat Body */}
        <div className={styles.chatBody} id="chat-body" ref={scrollRef}>
          {messages.map((msg) => (
            <div key={msg.id} className={msg.role === "ai" ? styles.aiMsg : styles.userMsg}>
              <div className={styles.msgBubble}>
                <p>{msg.content || "⚠️ ERROR: Contenido de respuesta vacío o nulo"}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className={styles.aiMsg}>
              <div className={styles.msgBubble}>
                <div className={styles.typing}></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <div className={styles.inputBox}>
            <Activity size={18} className={styles.inputDecorator} />
            <input 
              type="text" 
              placeholder="Escribe tu mensaje..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={isLoading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
