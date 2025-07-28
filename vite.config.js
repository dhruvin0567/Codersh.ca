import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSitemap from 'vite-plugin-sitemap';
import SitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      hostname: 'https://react-vite-codersh.vercel.app/',
    }),
    SitemapPlugin({
      baseUrl: 'https://react-vite-codersh.vercel.app/',
      changefreq: 'daily',
      priority: 1.0,
    }),
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
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2,
      },
      format: {
        comments: false,
      },
      mangle: true,
    },
  },
});
