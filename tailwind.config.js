module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        obscuroraxe: '#020215',
        azulraxe: '#6196e4'
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
