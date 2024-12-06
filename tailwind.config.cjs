module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          light: '#0EA5E9',
          dark: '#1F2937',
        },
        secondary: {
          DEFAULT: '#6B7280',
          light: '#F3F4F6',
          dark: '#4B5563',
        },
        accent: {
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
};