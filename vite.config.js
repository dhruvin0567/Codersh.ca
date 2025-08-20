import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  assetsInclude: ["**/*.PNG"],
  server: {
    proxy: {
      "/wp-json": {
        target: "https://codersh.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-json/, "/wp-json"),
      },
    },
  },
  build: {},
});
