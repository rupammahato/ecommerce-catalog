module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Navy Blue
          light: '#0EA5E9',    // Sky Blue
          dark: '#1F2937',     // Dark Navy (for dark mode)
        },
        secondary: {
          DEFAULT: '#6B7280', // Cool Gray
          light: '#F3F4F6',    // Light Gray
          dark: '#4B5563',     // Dark Gray (for dark mode)
        },
        accent: {
          emerald: '#10B981', // Emerald Green
          amber: '#F59E0B',    // Amber
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Professional and clean font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};