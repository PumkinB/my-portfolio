/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "2px 2px 20px 2px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "#121212",
        secondary: "#BB86FC",
        white: "#ffff",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
