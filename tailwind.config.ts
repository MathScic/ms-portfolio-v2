import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        brand: {
          DEFAULT: "#f97316",
          soft: "#ffedd5",
          dark: "#ea580c",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
