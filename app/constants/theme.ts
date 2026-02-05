export const theme = {
  colors: {
    primary: "#5B4B8A",       // Deep purple
    secondary: "#B57EDC",      // Orchid
    background: "#FAF8FC",     // Light lavender-white
    mint: "#9FD9C3",           // Mint green
    gold: "#D4AF37",           // Gold
    lavender: "#D4C4E0",       // Light lavender
    textPrimary: "#3D3636",
    textMuted: "#5C5460",
  },
  fonts: {
    heading: "var(--font-playfair)",
    body: "var(--font-inter)",
  },
} as const;

export type Theme = typeof theme;
