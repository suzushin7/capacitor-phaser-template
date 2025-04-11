import { defineConfig } from "vite";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";
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
    host: true,
    port: 5173,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: true,
  },
  plugins: [
    javascriptObfuscator({
      options: {
        compact: true,
        controlFlowFlattening: true,
        deadCodeInjection: true,
        debugProtection: true,
        disableConsoleOutput: false,
        identifierNamesGenerator: "hexadecimal",
        numbersToExpressions: true,
        renameGlobals: false,
        rotateStringArray: true,
        selfDefending: true,
        stringArray: true,
        stringArrayEncoding: ["rc4"],
        stringArrayThreshold: 0.75,
      },
    }),
  ],
});
