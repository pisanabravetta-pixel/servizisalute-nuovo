/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c843b',
        'secondary': '#007bff',
        'light': '#f8f9fa',
        'dark': '#333333',
      },
      fontFamily: {
        'sans': ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}