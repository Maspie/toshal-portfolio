import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const repoName = "toshal-portfolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
