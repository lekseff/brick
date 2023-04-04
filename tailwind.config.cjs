/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#B0CB1F',
        primaryHover: '#9eb61b',
        primaryDark: '#2B2A29',
      },
      fontFamily: {
        main: ['Montserrat', 'sans-serif']
      }
    },

  },
  plugins: [],
}
