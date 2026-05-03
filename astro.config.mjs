import { defineConfig, passthroughImageService } from 'astro/config';

import mdx from "@astrojs/mdx";
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    image: {
        service: passthroughImageService()
    },
    output: 'static',
    prefetch: true,
    site: 'https://justinlikescode.netlify.app',
    integrations: [
        mdx(),
    ],

    adapter: netlify(),

    vite: {
        plugins: [
            tailwindcss(),
        ]
    }
});
