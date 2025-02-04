

/** 
 * This vite configuration is used to build the Button component as a library.
 * We want to take the files in the src directory and output them to the lib directory as a CommonJS and ES module and with typescript type files
*/

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
      name: "Incra",
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