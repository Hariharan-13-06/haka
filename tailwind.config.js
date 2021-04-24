module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          dark: '#00917c',
          title: '#161d6f'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
