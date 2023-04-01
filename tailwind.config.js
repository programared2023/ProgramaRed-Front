/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      boxShadow: {
        shadowBlack: '1px 1px 7px 0 black',
        shadowBoxOutline: "0 0 6px 1px black"
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '20%': '20%',
      },
      width:{
        "25%": "25%"
      },
      borderRadius:{
        "40px": "40px"
      }
    },
  },
  plugins: [],
}