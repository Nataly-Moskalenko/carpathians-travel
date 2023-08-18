/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1280px',
    },
    colors: {
      white: '#ffffff',
      orange: '#FF5757',
      light: 'rgba(255, 255, 255, 0.05)',
      pale: 'rgba(255, 255, 255, 0.2)',
      gray: 'rgba(217, 217, 217, 0.05)',
      dark: 'rgba(2, 15, 8, 0.85)',
      'dark-gray': 'rgba(2, 15, 8, 0.75)',
      'light-gray': 'rgba(2, 15, 8, 0.5)',
    },    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
