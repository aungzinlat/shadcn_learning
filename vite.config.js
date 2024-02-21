import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import jsonServer from "vite-plugin-simple-json-server";

export default defineConfig({
  plugins: [react(), jsonServer({ delay: 4000 })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
