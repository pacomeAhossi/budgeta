/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "budgeta-green": "#B4DE00", // vert principal
        "budgeta-gray": "#949494", // gris secondaire
        beige: "#f2f4ef",
        black: "#1B1B1B", // black
        white: "#ffffff",
        "budgeta-gray-background": "#F2F4EF",
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          800: "#262626",
          900: "#171717",
        },
        brown: {
          50: "#F5EFEA",
          100: "#E8DCD1",
          200: "#D3BCA6",
          300: "#BE9B7B",
          400: "#A77A57",
          500: "#8C5A33", // tu peux choisir cette valeur comme "par défaut"
          600: "#734826",
          700: "#59361A",
          800: "#40240E",
          900: "#271305",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi) ", "system-ui", "ui-sans-serif"], // texte courant
        satoshi: ["var(--font-satoshi)", "system-ui", "sans-serif"], // titres
      },
      fontSize: {
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
      },
      boxShadow: {
        card: "0 4px 8px rgba(0,0,0,0.05)", // pour cartes
        nav: "0 2px 6px rgba(0,0,0,0.08)", // pour navbar
      },
    },
  },
  plugins: [],
};
