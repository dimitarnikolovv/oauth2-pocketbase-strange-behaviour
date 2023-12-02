/** @type {import('tailwindcss').Config}*/

const { dark: darkTheme, light: lightTheme } = require('daisyui/src/theming/themes');

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
  },

  daisyui: {},

  plugins: [require('daisyui')],
};

module.exports = config;
