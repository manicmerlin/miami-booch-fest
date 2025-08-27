/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f6f0',
          100: '#e8eddf',
          200: '#d3dcc1',
          300: '#b8c79a',
          400: '#9db073',
          500: '#556B2F', // Main Olive
          600: '#4a5f29',
          700: '#3f5023',
          800: '#34401e',
          900: '#2a3318',
        },
        secondary: {
          50: '#fef7f2',
          100: '#fdeee4',
          200: '#fbd5c4',
          300: '#f7b899',
          400: '#f2936c',
          500: '#E6762B', // Accent Orange
          600: '#d45d1e',
          700: '#b14818',
          800: '#8e3a17',
          900: '#712f16',
        },
        accent: {
          50: '#fefcf4',
          100: '#fef8e4',
          200: '#fcefc4',
          300: '#f9e199',
          400: '#f5d06c',
          500: '#F6C244', // Warm Yellow
          600: '#e8a82e',
          700: '#c88a24',
          800: '#a06f21',
          900: '#825a1e',
        },
        neutral: {
          50: '#fdfcfa',
          100: '#faf8f3',
          200: '#F7F2E7', // Sand
          300: '#f0e6d5',
          400: '#e6d4bb',
          500: '#d8c1a0',
          600: '#c5a785',
          700: '#a8896b',
          800: '#896f57',
          900: '#6f5a48',
        },
      },
      fontFamily: {
        'headline': ['Georgia', 'serif'],
        'body': ['Verdana', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'headline': '0.05em',
      },
      lineHeight: {
        'relaxed-body': '1.6',
      },
    },
  },
  plugins: [],
}
