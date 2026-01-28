export const theme = {
  colors: {
    primary: "#C17F4E",      // Warm terracotta/copper
    secondary: "#E8B86D",    // Bright golden yellow
    background: "#FFFDF8",   // Warm off-white
    accent: "#5BB98B",       // Vibrant green
    accentBlue: "#5B9BD5",   // Bright sky blue
    accentCoral: "#E07B67",  // Warm coral/salmon
    textPrimary: "#2E2E2E",
    textMuted: "#6B6B6B",
  },
  fonts: {
    heading: "var(--font-playfair)",
    body: "var(--font-inter)",
  },
} as const;

export type Theme = typeof theme;
