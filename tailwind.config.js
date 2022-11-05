/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#F9F9F9',
        customBlue: '#1D9BF0'
      }
    },
  },
  plugins: [],
}