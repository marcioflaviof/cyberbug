/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
    extend: {
      maxWidth: {
        45: "11.25rem",
        60: "15rem",
      },
      fontFamily: {
        "blender-book": [
          "var(--blender-book)",
          ...defaultTheme.fontFamily.sans,
        ],
        "blender-bold": [
          "var(--blender-bold)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        world: "url('/world.svg')",
        button: "url('/buttonBg.svg')",
        "razor-bottom-black": "url('/razorBottomBlack.svg')",
        "header-bottom-yellow": "url('/detailHeaderBottomYellow.svg')",
        "bottom-bar": "url('/bottomBar.svg')",
      },
      backgroundSize: {
        "bottom-bar-size": "auto 50%",
      },
      backgroundPosition: {
        "bottom-bar-position": "-130px 100%",
      },
      colors: {
        blue: {
          50: "#00f0ff",
          100: "#02d8f3",
        },
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          200: "#cdcdcd",
          300: "#979797",
          400: "#8c8c8c",
          600: "#323031",
          800: "#0e0e0e",
          900: "#0b0b0b",
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
      textShadow: {
        default:
          "0 2px 32px rgba(0,0,0,.9),0 2px 12px rgba(0,0,0,.9),0 2px 12px rgba(0,0,0,.9)",
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
