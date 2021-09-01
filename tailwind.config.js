module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark_cyan: '#0E8784',
        light_cyan: '#66D2CF',
        dark_grey: '#333D4B',
        light_grey: '#83888F',
        pale_orange: '#FDD6BA',
        light_cream: '#FEFCF7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
