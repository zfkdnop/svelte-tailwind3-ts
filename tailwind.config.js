const defaults = require('tailwindcss/defaultTheme');
//const production = !process.env.ROLLUP_WATCH;
const production = (process.env.NODE_ENV === 'production');

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/components/**/*.{html,js,svelte,ts}',
],
  theme: {
    fontFamily: {
      sans: ['Eczar', ...defaults.fontFamily.sans],
      serif: ['Alegreya', ...defaults.fontFamily.serif],
      mono: ['"Source Code Pro"', ...defaults.fontFamily.mono],
    },
    extend: {
      fontFamily: {
        emphasis: ['Overlock', ...defaults.fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
}
