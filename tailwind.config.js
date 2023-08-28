/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./docs/**/*.html",
    "./asnack/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        clrOrangeLight: "var(--clr-orange-light)",
        clrOrange: "var(--clr-orange)",
        clrOrangeDark: "var(--clr-orange-dark)",
        clrBrown: "var(--clr-brown)",
        clrGrey: "var(--clr-grey)",

        clrHead1: "var(--clr-dark)",
        clrHead2: "var(--clr-dark-light)",
        clrPar1: "var(--clr-slate)",
        clrPar2: "var(--clr-slate-light)",

        clrRed: "var(--clr-red)",
        clrRedLight: "var(--clr-red-light)",
        clrGreen: "var(--clr-green)",
        clrGreenLight: "var(--clr-green-light)",
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}