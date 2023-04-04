let mix = require('laravel-mix');

const tailwind_source = '_tailwind/style.scss';
const tailwind_dist = 'assets/css/';

const tailwind = require('tailwindcss');

// CSS
mix.sass(
    `${tailwind_source}`,
    `${tailwind_dist}`)
    .options({
        processCssUrls: false,
        postCss: [ tailwind ]
    });

// Sourcemaps
// mix.sourceMaps(true, 'source-map');

mix.browserSync({
    proxy: 'https://127.0.0.1:4000/',
    files: [
        './*.markdown', 
        './_posts/*.markdown',
        './_layouts/*.markdown',
        './_includes/*.markdown',
    ]
});