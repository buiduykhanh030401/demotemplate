/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        custom: "600px",
        'popular-place': '768px',
      },
      fontFamily: {
        'old': ['Old Standard TT']
      },
      colors:{
        'colortheme': "#1D3768",
        'color-under-price': '#FA9600'
      }
    },
  },
  plugins: [],
}
