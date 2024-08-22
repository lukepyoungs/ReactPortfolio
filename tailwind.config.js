/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Dark background
        secondary: '#1e293b', // Darker for headers
        accent: '#3b82f6', // Blue for accents
        textLight: '#f1f5f9', // Light text
        textDark: '#94a3b8', // Darker text
      },
    },
  },
  plugins: [],
}
