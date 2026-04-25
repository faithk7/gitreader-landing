import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#171717",
        "surface-elevated": "#1f1f1f",
        accent: {
          DEFAULT: "#f97316",
          hover: "#ea580c",
          glow: "rgba(249,115,22,0.1)",
        },
        border: {
          subtle: "#262626",
          active: "rgba(249,115,22,0.3)",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a3a3a3",
          muted: "#737373",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      borderRadius: {
        container: "12px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
} satisfies Config;
