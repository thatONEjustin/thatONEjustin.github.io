// postcss.config.js

module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('@tailwindcss/typography'),
      require('autoprefixer'),
    ]
  }