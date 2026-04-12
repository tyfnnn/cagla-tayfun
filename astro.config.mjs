// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://cagla.tyfn.online',
  output: 'static',
  adapter: vercel(),
});
