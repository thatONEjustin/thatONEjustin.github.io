import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
    site: 'https://thatonejustin.github.io',
    integrations: [
        tailwind({
            applyBaseStyles: false,
            nesting: true
        }),
        mdx(),
        // alpinejs({
        //   entrypoint: '/src/js/alpine'
        // }),
        // db()
    ]
});
