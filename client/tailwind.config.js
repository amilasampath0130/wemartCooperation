/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteText : "#fff",
        darkText : "#000000",
        lightText : "#9b9b9b",
        greenText : "#1d8221",
        redText : "#e02b2b",
        skyText : "#32bde8",
        logoBlue: "#23bfe6",
        logoRed: "#f05e5e",
        Logolight: "#d8a47f",
        logoBack: "#272932",
        
      },
      flex:{
        full: "0 0 100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

