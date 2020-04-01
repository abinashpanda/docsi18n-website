module.exports = {
  theme: {
    extend: {
      spacing: {
        100: '25rem',
        150: '30rem',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwind-heropatterns')({
      variants: [],
      patterns: ['polka-dots'],
      colors: {
        default: '#F7FAFC',
      },
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
  ],
}
