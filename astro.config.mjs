import { defineConfig, passthroughImageService } from 'astro/config';

import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    prefetch: true,
    site: 'https://justinlikescode.netlify.app',
    trailingSlash: 'never',
    integrations: [mdx(), alpinejs({ entrypoint: './src/alpine-entry' })],
    image: {
        remotePatterns: [{
            protocol: 'https',
            hostname: '**.media.strapiapp.com',
        }]
    },
    adapter: netlify(),

    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
});
