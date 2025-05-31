import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "fs";

// Only use HTTPS config in development
const isDev = process.env.NODE_ENV !== 'production';

let serverConfig = {};
if (isDev) {
  const certPath = path.resolve(__dirname, './cert.crt');
  const keyPath = path.resolve(__dirname, './cert.key');

  if (fs.existsSync(certPath) && fs.existsSync(keyPath)) {
    serverConfig = {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath)
      },
      host: "0.0.0.0",
      port: 3000
    };
  } else {
    console.warn("⚠️ HTTPS cert files missing. Falling back to HTTP.");
  }
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: serverConfig
});
