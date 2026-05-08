import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: resolve("index.html"),
      about: resolve("about/index.html"),
      contact: resolve("contact/index.html"),
    },
  },
});
