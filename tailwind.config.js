/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': "375px",
      'lg': "1440px"
    },
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)"
      },
      fontFamily: {
        "Epilogue": ["Epilogue", "sans-serif"]
      }
    },
  },
  plugins: [],
}