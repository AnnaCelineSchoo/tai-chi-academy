import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  optimizeDeps: {
    include: ["bootstrap"],
  },
  base: "/", // Replace with the name of your GitHub repo (/ when you have a custom domain)
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
