import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  optimizeDeps: {
    include: ["bootstrap"],
  },
  base: "/tai-chi-academy/", // Replace with the name of your GitHub repo
  build: {
    outDir: "dist", // Default Vite output directory
  },
});
