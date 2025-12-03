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
        dark: "#1A1A1A", // black
        white: "#ffffff",
        "budgeta-gray-background": "#F2F4EF",
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
