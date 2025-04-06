// client/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🚨 Replace this with your actual GitHub repo name
const repoName = "toshal-portfolio";

export default defineConfig({
  base: `/${repoName}/`, // GitHub Pages needs this to serve from a subpath
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
