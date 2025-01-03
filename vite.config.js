import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isDevelopment = process.env.NODE_ENV === "development"; // Use process.env for environment detection

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  optimizeDeps: {
    include: ["bootstrap"],
  },
  base: isDevelopment ? "/" : "/tai-chi-academy/", // Use process.env-based environment detection
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
