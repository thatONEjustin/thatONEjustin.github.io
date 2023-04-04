/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./_includes/*.html",
        "./_posts/*.html",
        "./_layouts/*.html",
        "!node_modules/**",
        "!_site/**/*"
    ],
    theme: {
        fontFamily: {
            'sans': ['Ubuntu', 'sans-serif'],
            'serif': ['"Delicious Handrawn"', 'serif'],
            'nabla': ['Nabla', '"Delicious Handrawn"', 'sans-serif']
        },
        colors: {
            black: colors.black,
            white: colors.white,
            green: colors.emerald,
            yellow: colors.amber,
            grey: colors.slate
        }
    },
    plugins: [],
}