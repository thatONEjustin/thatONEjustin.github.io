import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import dracula from 'tailwind-dracula'
// import dracula from './src/js/dracula';

// console.log(dracula);

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: 'https://thatonejustin.github.io',

    integrations: [
        mdx(),
    ],

    adapter: netlify(),

    vite: {
        plugins: [
            tailwindcss({
            }),
        ]
    }
});
