import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';
// import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    prefetch: true,
    site: 'https://thatonejustin.github.io',

    integrations: [
        mdx(),
        // alpinejs({
        //   entrypoint: '/src/js/alpine'
        // }),
    ],

    adapter: netlify(),

    vite: {
        plugins: [tailwindcss()]
    }
});
