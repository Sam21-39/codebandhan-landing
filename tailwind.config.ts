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
        primary: "#4d4dff",
        "primary-hover": "#3a3add",
        "background-light": "#f5f5f8",
        "background-dark": "#0E1117",
        "surface-dark": "#161b22",
        "card-dark": "#161b22",
        "border-dark": "#30363d",
        "text-main": "#E6EDF3",
        "text-muted": "#8b949e",
        "text-secondary": "#8b949e",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(77, 77, 255, 0.15) 0%, rgba(14, 17, 23, 0) 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
