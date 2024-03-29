/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      // 'sans': ['Ubuntu', 'sans-serif'],
      // 'serif': ['"Delicious Handrawn"', 'serif'],
      // 'nabla': ['Nabla', '"Delicious Handrawn"', 'sans-serif'],
      // 'caveat': ['Caveat', 'serif']
    },
    colors: {
      transparent: 'transparent',
    }
  },
  plugins: [
    require('tailwind-dracula')()
  ],
}
