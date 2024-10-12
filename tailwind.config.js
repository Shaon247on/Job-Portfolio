/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#232a3c",
        "medium": "#FD6F00",
        "primary": "#FD6F00"
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [require("daisyui")],  
};
