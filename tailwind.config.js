/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["inter", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
      libre: ["Libre Baskerville", "serif"],
      exo2: ["Exo 2", "sans-serif"],
    },
    colors: {
      primary: "#F86F03",
      secondary: "#",
      white: "#FFFFFF",
      black: "#000000",
      blue: {
        primary: "#170550",
        secondary: "#43366A",
      },
      purple: {
        primary: "#31065A"
      },
    },
    extend: {},
  },
  plugins: [],
}

