import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// Need to package the assets folder in dist 

export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  publicDir: "assets",
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Application",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});