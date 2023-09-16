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
      m: '480px',
      md: '768px',
      lg: '1440px',
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
      modal: 'rgba(1, 10, 5, 0.75)',
    },
    extend: {
      backgroundImage: {
        'image-home': 'url(../public/images/home.png)',
        'image-about': 'url(../public/images/about.png)',
        'image-about480': 'url(../public/images/about480.png)',
        'image-about768': 'url(../public/images/about768.png)',
        'image-contacts': 'url(../public/images/contacts.png)',
        'image-gallery': 'url(../public/images/gallery.png)',
        'image-services': 'url(../public/images/services.png)',        
      },
    },
  },
  plugins: [],
};
