/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976x',
      xl: '1440px',
      xxl: '1536px',
    },

    fontFamily: {
      accent: ['Lato', 'Open Sans'],
      pragraph: ['Roboto', 'Open Sans'],
    },
    extend: {
      colors: {
        prim1: '#004e98',
        prim2: '#3a6ea5',
        back3: '#c0c0c0',
        back4: '#ebebeb',
        acce5: '#ff6700',
      },
    },
  },
  plugins: [],
};
