/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary35': 'var(--color-primary35)',
        'blue00': 'var(--color-blue00)',
        'red_validation:': 'var(--color-red_validation)',
        'greyEA:': 'var(--color-greyEA)',

      }
    },
  },
  plugins: [],
}

