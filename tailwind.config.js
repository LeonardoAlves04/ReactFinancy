/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white': '#fff',
      'greyPrimary': '#b0c4de',
      'cyanPrimary': '#0891b2',
    },
    extend: {
      fontFamily: {
        'sans': ['Inclusive Sans'],
      },
    },
  },
  plugins: [],
}
