module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};