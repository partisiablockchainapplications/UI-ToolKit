/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red40: '#AF1E2D',
        gray20: '#F3F6FB',
        gray40: '#EEF1F9',
        gray60: '#C2C2E5',
        gray80: '#9D9DC4',
        gray100: '#545281',
        gray120: '#302C60',
        peace: '#20E6A2',
      },
    },
    fontFamily: {
      sans: ['Gordita'],
      display: ['Trade Gothic'],
    },
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
  },
}
