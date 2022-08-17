/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        slideLeft: "slideLeft .5s ease-in-out",
        fadeIn: "fadeIn .7s ease-in-out",
      },
    },
  },
  plugins: [],
};
