/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  theme: {
    extend: {
      fontFamily: {
        // inter: ['inter', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'], 
      },
    },
  },
  plugins: [],
}
