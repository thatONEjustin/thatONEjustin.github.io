let mix = require('laravel-mix');

// copyWatched
require('laravel-mix-copy-watched')

// Javascript
const javascript_source = 'src/_scripts/app.js';
const javascript_dist = 'assets/js/';
require('laravel-mix-esbuild');
mix.js(javascript_source, javascript_dist)
    .esbuild()
    .sourceMaps(true, 'source-map');

// CSS
const tailwind_source = 'src/_tailwind/style.scss';
const tailwind_dist = 'assets/css/';

const tailwind = require('tailwindcss');
mix.sass(tailwind_source, tailwind_dist)
    .options({
        processCssUrls: false,
        postCss: [ tailwind ]
    })
    .sourceMaps(true, 'source-map');

mix.copyWatched(
    'src/_assets/img',
    'assets/img'
);

mix.copyWatched(
    'src/_assets/*.pdf',
    'assets'
);

mix.copyWatched(
    'src/_assets/*.json',
    'assets'
);



/* mix.browserSync({
    proxy: 'https://127.0.0.1:4000/',
    files: [
        './*.markdown', 
        './_posts/*.markdown',
        './_layouts/*.markdown',
        './_includes/*.markdown',
    ]
}); */