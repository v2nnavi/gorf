/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gorp': {
          green: '#99be5f',
          cream: '#fff5e3',
        },
      },
      fontFamily: {
        'comic': ['Comic Sans MS', 'Comic Sans', 'cursive'],
        'gorditas': ['Gorditas', 'serif'],
      },
    },
  },
  plugins: [],
}