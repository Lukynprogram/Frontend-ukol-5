module.exports = {
  darkMode: 'class', // Enables 'class' based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: ['light', 'dark'],
  theme: {
    extend: {},
  },
  plugins: [],
};