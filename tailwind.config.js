/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sticky-yellow': '#FFE066',
        'sticky-blue': '#87CEEB',
        'sticky-pink': '#FFB6C1',
        'sticky-green': '#98FB98',
        'sticky-orange': '#FFA07A',
      },
      fontFamily: {
        'handwritten': ['Patrick Hand', 'cursive'],
        'modern': ['Inter', 'sans-serif'],
        'hero': ['DM Sans', 'sans-serif'],
        'sticky': ['Fredoka', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}