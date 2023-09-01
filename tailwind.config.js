/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#f6d860",
        "secondary": "#636d7e",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
  }],
  },
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      }
    },
  },
  plugins: [require("daisyui")],
}

