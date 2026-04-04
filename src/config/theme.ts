// ============================================================
// BSKR — Design System Tokens (Nebula Core)
// Derived from Stitch MCP "Nebula Core" design system
// and the BSKR brand identity (brain+circuit logo in blue)
// ============================================================

export const theme = {
  colors: {
    // Brand colors from logo
    brand: {
      primary: "#0A6EBD",
      secondary: "#12B5E5",
      accent: "#6C3AED",
    },
    // Nebula Core palette
    background: "#050e20",
    surface: {
      base: "#050e20",
      dim: "#050e20",
      container: "#0e192f",
      containerLow: "#091327",
      containerHigh: "#131f37",
      containerHighest: "#19253f",
      bright: "#1e2c48",
      variant: "#19253f",
    },
    primary: {
      main: "#70b1ff",
      container: "#5aa4f6",
      dim: "#57a1f3",
      fixed: "#60a9fc",
    },
    secondary: {
      main: "#30c1f2",
      container: "#006684",
      dim: "#0ab3e3",
    },
    text: {
      onSurface: "#dde5ff",
      onSurfaceVariant: "#a2abc3",
      onPrimary: "#003057",
      onSecondary: "#003749",
    },
    outline: {
      main: "#6d758b",
      variant: "#3f485c",
    },
    error: "#ff716c",
    // Functional
    gradients: {
      hero: "linear-gradient(135deg, #0A6EBD 0%, #6C3AED 50%, #12B5E5 100%)",
      cta: "linear-gradient(135deg, #70b1ff 0%, #0ab3e3 100%)",
      text: "linear-gradient(135deg, #70b1ff 0%, #30c1f2 100%)",
      surface:
        "linear-gradient(180deg, #050e20 0%, #091327 50%, #050e20 100%)",
    },
  },
  typography: {
    fontFamily: {
      heading: "'Inter', sans-serif",
      body: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    fontSize: {
      displayLg: "clamp(2.5rem, 5vw, 4.5rem)",
      displayMd: "clamp(2rem, 4vw, 3.5rem)",
      headlineLg: "clamp(1.75rem, 3vw, 2.5rem)",
      headlineMd: "clamp(1.5rem, 2.5vw, 2rem)",
      titleLg: "1.375rem",
      titleMd: "1.125rem",
      bodyLg: "1.125rem",
      bodyMd: "1rem",
      bodySm: "0.875rem",
      labelLg: "0.875rem",
      labelMd: "0.75rem",
    },
  },
  spacing: {
    section: "clamp(4rem, 8vw, 8rem)",
    container: "clamp(1rem, 5vw, 6rem)",
  },
  borderRadius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  effects: {
    glass: {
      background: "rgba(25, 37, 63, 0.4)",
      blur: "blur(20px)",
      border: "1px solid rgba(63, 72, 92, 0.15)",
    },
    glow: {
      primary: "0 0 40px rgba(112, 177, 255, 0.06)",
      secondary: "0 0 40px rgba(48, 193, 242, 0.06)",
      hover: "0 0 60px rgba(112, 177, 255, 0.12)",
    },
  },
} as const;
