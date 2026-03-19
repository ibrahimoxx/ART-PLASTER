import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0C0A",
        surface: "#1A1612",
        "surface-2": "#231F19",
        primary: "#B66E2E",
        "primary-light": "#C9A96E",
        "primary-dark": "#8B4F1A",
        teal: "#0B6E6B",
        "teal-light": "#0D9E9A",
        text: "#F5F0EB",
        "text-muted": "#9A8E82",
        "text-dim": "#6B5F55",
        border: "rgba(182, 110, 46, 0.2)",
        "border-light": "rgba(201, 169, 110, 0.15)",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(2.125rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["clamp(1.875rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(1.625rem, 4vw, 3rem)", { lineHeight: "1.15" }],
        "display-md": ["clamp(1.375rem, 3vw, 2.25rem)", { lineHeight: "1.2" }],
        "display-sm": ["clamp(1.125rem, 2.5vw, 1.875rem)", { lineHeight: "1.25" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gold-gradient":
          "linear-gradient(135deg, #B66E2E 0%, #C9A96E 50%, #B66E2E 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0E0C0A 0%, #1A1612 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "blob-1": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "blob-2": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(-30px, 50px) scale(0.9)" },
          "66%": { transform: "translate(20px, -20px) scale(1.1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scan-line": {
          "0%": { transform: "scaleX(0)", opacity: "1" },
          "50%": { transform: "scaleX(1)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "0" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(182, 110, 46, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(182, 110, 46, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "blob-1": "blob-1 8s ease-in-out infinite",
        "blob-2": "blob-2 10s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scan-line": "scan-line 2s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 30px rgba(182, 110, 46, 0.3)",
        "glow-lg": "0 0 60px rgba(182, 110, 46, 0.4)",
        card: "0 4px 30px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
