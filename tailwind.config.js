/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bgprimary: "#DC5F00",
        primary: "#000000",
        secondary: "#686D76",
        tertiary: "#352F44",
        "black-100": "#5C5470",
        "black-200": "#B9B4C7",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/bg-hero-2.jpg')",
      },
    },
  },
  plugins: [],
};