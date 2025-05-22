module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#228B22',
          light: '#2eaf2e',
          dark: '#1e6b1e',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        spartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
