/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0B',
        panel: '#151515',
        card: '#1D1D1D',
        border: '#303030',
        muted: '#A3A3A3',
        accent: '#22C55E',
        accentSoft: '#1f9a4d',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
};
