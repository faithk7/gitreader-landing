import type { Config } from "tailwindcss";

export default {
  content: ["./components/**/*.{vue,js,ts}", "./pages/**/*.{vue,js,ts}", "./app.vue"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0d0f",
        surface: "#131518",
        "surface-elevated": "#191c20",
        accent: { DEFAULT: "#ff7a1a", hover: "#ff913f", glow: "rgba(255,122,26,0.14)" },
        border: { subtle: "#292d32", active: "rgba(255,122,26,0.42)" },
        text: { primary: "#f4f1ea", secondary: "#aaa9a4", muted: "#737570" },
      },
      fontFamily: {
        sans: ["Avenir Next", "Avenir", "ui-sans-serif", "sans-serif"],
        display: ["Iowan Old Style", "Baskerville", "Georgia", "serif"],
        mono: ["SFMono-Regular", "Menlo", "ui-monospace", "monospace"],
      },
      borderRadius: { container: "16px", pill: "9999px" },
    },
  },
  plugins: [],
} satisfies Config;
