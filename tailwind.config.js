module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{ts,tsx,md}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};