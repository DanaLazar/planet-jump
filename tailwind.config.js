/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'midnight': '#070826',
        'midnight-dark': '#010103',
        'midnight-blue': '#090b58',
        'shadow-color': '#d9b360',
      },
      boxShadow: {
        '3xl': '0 85px 160px rgba(217, 179, 96, 0.3)',
      }
    }
  },
  plugins: [],
}

