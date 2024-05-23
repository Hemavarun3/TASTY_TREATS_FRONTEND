/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
          "maincolor" : "#120D12",
          "main2color" : "#df2020"
      }
    },
  },
  plugins: [],
}

