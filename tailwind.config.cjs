/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '798px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {},
  },
  plugins: [],
};
