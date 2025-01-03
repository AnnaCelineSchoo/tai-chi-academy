import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  optimizeDeps: {
    include: ["bootstrap"],
  },
  base: "/", // Use process.env-based environment detection
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
