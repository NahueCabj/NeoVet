/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"], // fuente global
      },
      colors: {
        brand: {
          violet: "#134053",
          blue: "#4D48D8",
          white: "#F6F5FA",
          lightblue: "#C8D9F3",
          green: "#06F1A2",
        },
      },
    },
  },
  plugins: [],
}
