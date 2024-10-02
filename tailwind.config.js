/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        primary:"#FAF8F3",
        white:"#FFFFFF"
      },
      colors:{
        green:"#005760",
      }
    },
  },
  plugins: [],
}