import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO before going live: replace both values below.
// - If this repo will be deployed as USERNAME.github.io (an org/user site), set base to '/'.
// - If this repo will be deployed as a project site (github.com/USERNAME/quidedge),
//   set base to '/quidedge' (or whatever the repo is named) and site to
//   'https://USERNAME.github.io'.
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/quidedge',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
