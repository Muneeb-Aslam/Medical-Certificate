/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "btn-bg": "#005760",
        primary: "#FAF8F3",
        white: "#FFFFFF",
      },
      colors: {
        green: "#005760",
        offwhite: "#FAF8F3",
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
};
