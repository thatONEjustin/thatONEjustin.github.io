/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "!**node_modules/**",
        "!**_site/**/*",

        "./_includes/*.html",
        "./_layouts/*.html",
        
        "./_posts/*.markdown",
        "./index.markdown",

        "./src/_scripts/**/*.js",
    ],
    theme: {
        fontFamily: {
            'sans': ['Ubuntu', 'sans-serif'],
            'serif': ['"Delicious Handrawn"', 'serif'],
            'nabla': ['Nabla', '"Delicious Handrawn"', 'sans-serif']
        },
        colors: {
            transparent: 'transparent',
            black: colors.black,
            white: colors.white,
            green: colors.emerald,
            yellow: colors.amber,
            grey: colors.slate
        }
    },
    plugins: [],
}