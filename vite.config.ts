import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Replace with your GitHub repo name
const repoName = "toshal-portfolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  root: path.resolve(__dirname, "client"), // <== your frontend source lives here
  build: {
    outDir: path.resolve(__dirname, "dist"), // <== where to generate build
    emptyOutDir: true,
  },
});
