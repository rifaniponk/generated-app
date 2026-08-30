import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bccdff",
          300: "#8davff",
          400: "#5c7fff",
          500: "#3b5bff",
          600: "#2543d6",
          700: "#1c34ab",
          800: "#1a2d87",
          900: "#172663",
          950: "#101733",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 2px 24px rgba(15, 23, 42, 0.06)",
        "soft-lg": "0 8px 40px rgba(15, 23, 42, 0.08)",
        neon: "0 6px 30px -4px rgba(37, 67, 214, 0.45)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "count-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "count-pulse": "count-pulse 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
