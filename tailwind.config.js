/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      "blender-book": ["BlenderBook", ...defaultTheme.fontFamily.sans],
      "blender-bold": ["BlenderBold", ...defaultTheme.fontFamily.sans],
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
        button: "url('/buttonBg.svg')",
        "razor-bottom-black": "url('/razorBottomBlack.svg')",
      },
      colors: {
        blue: {
          100: "#02d8f3",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          200: "#cdcdcd",
          600: "#323031",
          800: "#0e0e0e",
        },
        green: {
          100: "#00ffd2",
        },
        red: {
          100: "#ff003c",
          200: "#db0d15",
        },
        yellow: {
          200: "#fcee0a",
          400: "#bfb506",
        },
      },
    },
  },
  plugins: [],
};
