/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "blue-100": "#02d8f3",
      black: "#000000",
      white: "#FFFFFF",
      "gray-200": "#cdcdcd",
      "gray-800": "#0e0e0e",
      "green-100": "#00ffd2",
      "red-100": "#ff003c",
      yellow: "#fcee0a",
    },
    fontFamily: {
      "pro-book": ["BlenderProBook", "sans-serif"],
      "pro-bold": ["BlenderProBold", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    maxWidth: {
      45: "11.25rem",
      60: "15rem",
    },
    extend: {
      padding: {
        "20vw": "20vw",
      },
      backgroundImage: {
        world: "url('/world.svg')",
      },
    },
  },
  plugins: [],
};
