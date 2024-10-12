/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
       
  ],
  theme: {

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        montserrat: ["var(--font-montserrat)"]
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ['light', {
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "base-100": "#1E1E1E",
      },
      darkMode: ['class', '[data-theme="dark"]']
    },
    ]
  },
};
