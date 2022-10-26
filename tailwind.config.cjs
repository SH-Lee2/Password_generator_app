/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black' : '#18171F',
      'black-gray' : '#24232C',
      'green' : '#A4FFAF',
      'red' : '#F64A4A',
      'orange' : '#FB7C58',
      'yellow' : '#FBCD65',
      'white' : '#E6E5EA',
      'gray' : '#817D92',
    },
    screens: {
      'sm' : '375px',
      'md' : '768px',
      'lg' : '1440px'
    },
    extend: {},
  },
  plugins: [],
}