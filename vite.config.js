import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ViteSitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    // ViteSitemap({
    //   hostname: 'https://react-vite-codersh.vercel.app/',
    // }),
  ],
  base: '/',
  assetsInclude: ['**/*.PNG'],
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://codersh.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, '/wp-json'),
      },
    },
  },
  build: {
  },
});
