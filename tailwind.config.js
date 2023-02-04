/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"]
      },
      animation: {
        "scaling": "scaling 0.5s linear",
        "pointing-left": "pointing-left 1s linear infinite",
        "pointing-right": "pointing-right 1s linear infinite",
        "pointing-down": "pointing-down 1s linear infinite"
      },
      keyframes: {
        scaling: {
          '0%': {transform: 'scale(0)'},
          '100%': {transform: 'scale(1)'}
        },
        "pointing-left": {
          '0%': {transform: 'translateX(0)'},
          '95%': {transform: 'translateX(-1rem)'},
          '100%': {transform: 'translateX(0)'}
        },
        "pointing-right": {
          '0%': {transform: 'translateX(0)'},
          '95%': {transform: 'translateX(1rem)'},
          '100%': {transform: 'translateX(0)'}
        },
        "pointing-down": {
          '0%': {transform: 'translateY(0)'},
          '95%': {transform: 'translateY(1rem)'},
          '100%': {transform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}
