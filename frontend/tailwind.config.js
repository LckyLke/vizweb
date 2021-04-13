module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      RED: '#FE4A49',
      BACKGROUND: "#F4F4F8",
      DARK: '#101019',
      BLUE: '#067DF7'
    },
    extend: {
       zIndex: {
         '-10': '-10',
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
