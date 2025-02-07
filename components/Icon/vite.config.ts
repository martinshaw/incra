import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    dts({
       rollupTypes: true,
       tsconfigPath: './tsconfig.json',
      include: ["src/**/*"],
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Icon",
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