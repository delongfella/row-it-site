import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://row-it.in',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/thank-you/') })],
});
