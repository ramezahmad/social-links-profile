/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: '#c5f82a', // hsl(75, 94%, 57%)
        white: '#FFFFFF', // hsl(0, 0%, 100%)
        gray: {
          100: '#333333', // hsl(0, 0%, 20%)
          200: '#1f1f1f', // hsl(0, 0%, 12%)
          300: '#141414', // hsl(0, 0%, 8%)
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'paragraph': '14px',
      },
      fontWeight: {
        'normal': 400,
        'medium': 600,
        'bold': 700,
      }
    },
  },
  plugins: [],
}
