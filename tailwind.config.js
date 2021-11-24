module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'plaid': ['plaid']
    },
    extend: {
      colors: {
        primaryBlack:'#01030D',
        pink: '#dc3b73',
        // #EBEAEB
        primaryBG: '#EBEAEB'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
