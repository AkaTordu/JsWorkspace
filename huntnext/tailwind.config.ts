import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        background: '#f7f7f7',
        text: '#333',
        'button-hover': '#003870',
      },
      borderRadius: {
        custom: '8px',
      },
      boxShadow: {
        custom: '0 4px 6px rgba(0,0,0,0.1)',
        'custom-light': '0 2px 5px rgba(0,0,0,0.05)',
        'custom-strong': '0 5px 15px rgba(0,0,0,0.1)',
        'custom-highlight': '0 2px 10px rgba(0,0,0,0.2)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '960px',
      },
      spacing: {
        '7.5': '30px', // Equivalent à 30px mentionné pour le body
        '20': '20px', // Généralement utilisé pour les padding/margin
      },
      transitionProperty: {
        'height-color-shadow': 'height, color, box-shadow',
        'bgc-filter-opacity': 'background-color, filter, opacity',
      },
      transitionTimingFunction: {
        'in-out-linear': 'ease-in-out',
      },
      transitionDuration: {
        '300': '300ms',
        '3000': '3000ms',
      },
      filter: { // Assure-toi que Tailwind CSS supporte les filtres directement ou utilise un plugin si nécessaire
        'none': 'none',
        'grayscale': 'grayscale(100%)',
      },
      extend: {
        animation: {
          colorFade: 'colorFade 10s ease-in-out infinite',
        },
        keyframes: {
          colorFade: {
            '0%, 100%': { backgroundColor: 'white', color: 'black' },
            '50%': { backgroundColor: 'black', color: 'white' },
          },
        },
      }
    },
  },
  plugins: [],
};

export default config;