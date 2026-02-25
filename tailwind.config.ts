/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0F1115",
        surface: "#161A21",
        border: {
          DEFAULT: "#232833",
          dark: "#1A1D23",
        },
        primary: {
          DEFAULT: "#00C896", // Deep Emerald
          hover: "#00E0A7",
        },
        accent: {
          amber: "#FFB020",
          critical: "#FF4D4F",
        },
        text: {
          muted: "#8A8F98",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      animation: {
        'fade-in': 'fade-in 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slide-up 400ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
