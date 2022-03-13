const colors = require('tailwindcss/colors');

module.exports = {
  experimental: {},
  future: {},
  darkMode: 'class',
  important: true,
  content: ["./src/**/*.{js,jsx,md}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      teal: colors.teal,
      green: colors.green,
      amber: colors.amber,
      orange: colors.orange,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      blue: colors.blue
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};