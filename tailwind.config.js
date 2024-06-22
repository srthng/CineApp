/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'headerRed':'#B12323',
      'searchBar':'#761818',
      'white': '#ffffff',
      'backgroundBlack':'#1E1D1D'
    },
    extend: {
      backgroundImage: {
        'header' : "url('/public/movie-deadpool.jpg')"
      }
    }
  },
  plugins: [],
}