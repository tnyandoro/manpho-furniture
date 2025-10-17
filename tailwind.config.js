/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'manpho-green': '#72ac06',
        'manpho-blue': '#064ccf',
      },
    },
  },
  plugins: [],
};
