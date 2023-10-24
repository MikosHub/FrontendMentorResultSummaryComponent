/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Hanken Grotesk', 'Sans-serif']
    },
    colors: {
      'gradient-start': '#7857ff',
      'gradient-end': '#2e2be9',
      'circle-start': '#4e21ca',
      'circle-end': 'hsla(241, 72%, 46%, 0)',
      'primary-red': '#ff5757',
      'primary-red-transparent': '#ff575720',
      'primary-orange': '#ffb01f',
      'primary-orange-transparent': '#ffb01f20',
      'primary-green': '#00bd91',
      'primary-green-transparent': '#00bd9120',
      'primary-blue': '#1125d4',
      'primary-blue-transparent': '#1125d420',
      'white': '#ffffff',
      'black': '#000000',
      'button-normal': '#303b5a',
      'lavender': '#c8c7ff',
      'pale-blue': '#ebf1ff',
      'grey': '#c0c0c0'
    },
    extend: {},
  },
  plugins: [],
}

