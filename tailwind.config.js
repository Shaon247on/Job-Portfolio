const { dark } = require('daisyui/src/theming/themes');
const { Poppins } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': "1920px"
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins"],
        montserrat: ["var(--font-montserrat"]
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
    },
    ],
    darkMode: ['class', '[data-theme="dark"]']
  },
};
