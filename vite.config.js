import { defineConfig } from "vite";
import path from "node:path";
import vue from "@vitejs/plugin-vue2";

const resolve = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  envPrefix: "VUE_APP_",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
});
