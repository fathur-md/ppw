import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  return {
    base: command === "serve" ? "/" : "/ppw/uts/dist/",
    plugins: [tailwindcss()],
    build: {
      outDir: "dist",
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          about: resolve(__dirname, "about/index.html"),
          contact: resolve(__dirname, "contact/index.html"),
        },
      },
    },
  };
});
