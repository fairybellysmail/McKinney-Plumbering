export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 120px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        brand: {
          orange: '#f97316',
          blue: '#38bdf8',
        },
      },
    },
  },
  plugins: [],
};
