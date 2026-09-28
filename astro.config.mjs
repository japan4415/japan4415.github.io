import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://portfolio.discord.jp',
  vite: {
    plugins: [tailwindcss()],
  },
});
