/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        'cyan-custom': '0 10px 15px rgba(0, 182, 188, 0.2), 0 4px 6px rgba(0, 182, 188, 0.12)',
      },
      colors:{
        'primary' : '#3238f2'
      },
      fontFamily:{
        'display' : ['Montserrat', 'sans-serif'],
        'body' : ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

