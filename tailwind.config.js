/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gelica: "Gelica",
        barlow: "Barlow Semi Condensed",
        geist: "Geist",
      },
      colors: {
        primary: "#141414",
        accent: "#9BE74F",
      },
    },
  },
  plugins: [],
};
