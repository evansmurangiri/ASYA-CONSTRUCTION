/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#FAF6EE",
          100: "#F2E8D0",
          200: "#E5CFA0",
          300: "#D4B060",
          400: "#C9A030",
          500: "#B89020",
          600: "#8B6A14",
          700: "#6E5010",
          800: "#4A3208",
          900: "#2C1A04",
        },
        navy: {
          900: "#1A0E05",
          800: "#2C1A0A",
        },
        coffee: {
          50:  "#FAF6EE",
          100: "#F5EDD8",
          200: "#EDD8B0",
          300: "#D4B878",
          400: "#B89050",
          500: "#8B6030",
          600: "#6B4820",
          700: "#4A3018",
          800: "#2C1A0A",
          900: "#1A0E05",
        },
      },
      fontFamily: {
        sans:  ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
