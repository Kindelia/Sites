const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
        mineshaft: '#393939',
        springwood: '#F7F3F0',
        taupegray: '#87878A',
        gainsboro: '#DCDCDC',
      },
    },
  },
  plugins: [],
};
