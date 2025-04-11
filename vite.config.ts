import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src",
  publicDir: "public",
  resolve: {
    alias: {
      "@scenes": path.resolve(__dirname, "src/scenes"),
    },
  },
  server: {
    host: true, // 他デバイスからのアクセスも可能にする（スマホ確認など）
    port: 5173,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
