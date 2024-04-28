/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neucha: ["Neucha", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "custom-color": "rgba(19,15,73,0.07)",
        grey: "#615E85",
        purple: "#A5A6FF",
        "dark-blue": "#130f49",
        blue: "#0000FF",
        orange: "#FF972D",
        "light-grey": "#F3F3F6",
        "home-bg": "#EFFBF8",
      },
    },
  },
  plugins: [],
};
