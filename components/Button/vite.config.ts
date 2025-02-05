import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Button",
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