/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      fontSize: {
              'xs': '.75rem',
              'sm': '.875rem',
              'base': '1rem',
              'lg': '1.125rem',
              'xl': '1.5rem',
              '2xl': '1.75rem',
              '3xl': '1.875rem',
              '4xl': '2.25rem',
              '5xl': '3rem',
            },
    },
  },
  variants: {},
  plugins: [],
}
