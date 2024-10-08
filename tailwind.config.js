/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'], 
        product: ['Product Sans', 'sans-serif'],
      },
      colors: {
        'main-dark': '#151718',
        'main-purple': '#674eff',
      }
    },
  },
  plugins: [],
}

