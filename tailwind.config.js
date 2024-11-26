/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px'
    },
    extend: {
      fontFamily: {
        jost: ["jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '12px',
          md: "32px"
        }
      }
    },
  },
  plugins: [],
}

