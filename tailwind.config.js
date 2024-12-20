/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#0A2A26",
        mint: "#dbfbf6",
        persian: "#369b8e",
        aqua: "#97FCE4",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
