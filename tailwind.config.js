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
      "gray-200": "#cdcdcd",
      "gray-800": "#0e0e0e",
      "green-100": "#00ffd2",
      "red-light": "#ff003c",
      yellow: "#fcee0a",
    },
    fontFamily: {
      "pro-book": ["BlenderProBook", "sans-serif"],
      "pro-bold": ["BlenderProBold", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      padding: {
        "20vw": "20vw",
      },
    },
  },
  plugins: [],
};
