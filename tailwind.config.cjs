/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#B0CB1F',
        primaryHover: '#9eb61b'
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif']
      }
    },

  },
  plugins: [],
}
