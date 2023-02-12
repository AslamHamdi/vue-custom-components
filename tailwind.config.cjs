/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'custom-orange': {
          100: '#f7ba50',
          200: '#f5ab2b',
          300: '#e3a87f',
          400: '#cb631c',
          500: '#c75100'
        },
        'custom-info': {
          100: '#f1f6fa',
          //200: '#f5ab2b',
          //300: '#e3a87f',
          //400: '#cb631c',
          500: '#2c75dd'
        },
        'custom-error': {
          100: '#fef5f5',
          200: '#d66257',
          // 300: '#e3a87f',
          // 400: '#cb631c',
          500: '#cc3123'
        },
        'custom-warning': {
          100: '#fdf3e1',
          //200: '#f5ab2b',
          300: '#d1671c',
          // 400: '#cb631c',
          500: '#dc5a00'
        },
        'custom-success': {
          100: '#f8fff2',
          // 200: '#f5ab2b',
          300: '#049b04',
          // 400: '#cb631c',
          500: '#008700'
        },
      }
    },
  },
  plugins: [],
}
