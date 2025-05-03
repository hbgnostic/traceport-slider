/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'white-cyan': '#F2F6F7',
          'light-teal': '#C9E5E9', 
          'eastern-blue': '#019AA8',
          'dark-tealish-blue': '#16243E',
        }
      },
    },
    plugins: [],
  }