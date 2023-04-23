let mix = require('laravel-mix');

// Javascript
const javascript_source = 'src/_scripts/app.js';
const javascript_dist = 'assets/js/';
require('laravel-mix-esbuild');
mix.js(javascript_source, javascript_dist)
    .esbuild();

// CSS
const tailwind_source = 'src/_tailwind/style.scss';
const tailwind_dist = 'assets/css/';

const tailwind = require('tailwindcss');
mix.sass(
        `${tailwind_source}`,
        `${tailwind_dist}`
    )
    .options({
        processCssUrls: false,
        postCss: [ tailwind ]
    });

mix.copy('src/_assets', 'assets/');
// Sourcemaps
mix.sourceMaps(true, 'source-map');

mix.browserSync({
    proxy: 'https://127.0.0.1:4000/',
    files: [
        './*.markdown', 
        './_posts/*.markdown',
        './_layouts/*.markdown',
        './_includes/*.markdown',
    ]
});