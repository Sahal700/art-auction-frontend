/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moon: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(25deg)' },
          // '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        clrchange: {
          '0%': { backgroundColor:'rgb(250,250,250)'},
          '100%': { backgroundColor:'rgb(245,245,245)' },
        },
      },
      animation: {
        moon: 'moon 2s ease-in-out infinite',
        clrchange: 'clrchange 1s ease-in-out forwards',
      },
      colors:{
        primary:'#ffb73b',
        phover:'#ffb73be7',
        dprimary:"#ff8c00"
      }
    },
  },
  plugins: [],
}

