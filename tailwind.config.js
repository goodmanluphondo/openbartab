/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        fontFamily: {
            custom: ['Pirata One'],
        },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

