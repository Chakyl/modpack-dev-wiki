// vite.config.js
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    Icons({
      compiler: "svelte",
    }),
    tailwindcss(),
  ],
  base: "https://chakyl.github.io/modpack-dev-wiki/",
  build: {
    cssMinify: "lightningcss",
  },
  css: {
    transformer: "lightningcss",
  },
  server: {
    allowedHosts: ["fc7a-24-141-246-63.ngrok-free.app"],
  },
});
