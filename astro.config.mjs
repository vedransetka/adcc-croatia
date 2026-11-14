// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://adcc-croatia.com',
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Allow Astro's built-in Sharp pipeline to optimise local event photos.
    responsiveStyles: true,
  },
});
