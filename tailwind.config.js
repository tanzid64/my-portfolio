/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0B1120",
        secondaryDark: "#0C1221",
        primaryLight: "#F8F9FC",
        cardDark: "#0F172A",
        cardLight: "#F8FAFC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
