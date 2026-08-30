/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#162019',
        moss: '#284633',
        mint: '#DDFBE7',
        citrus: '#C6F241',
        coral: '#FF6B4A',
        skyglass: '#E6F7FF',
        wheat: '#F7E4B4',
      },
      boxShadow: {
        crisp: '0 18px 60px rgba(22, 32, 25, 0.12)',
        float: '0 16px 36px rgba(22, 32, 25, 0.16)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
