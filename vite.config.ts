import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Replace with your repo name
const repoName = "toshal-portfolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
