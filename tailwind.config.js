/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        orange: '#fc5c54',
        black: '#201c1c',
        blue: '#252D48',
        yellow: '#EFA51F',
        beige: '#E6D5B8',
        transparent: 'transparent'
      },
      borderWidth: {
        '1': '2px',
      },    
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};