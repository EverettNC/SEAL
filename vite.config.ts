import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root,
  server: {
    host: "0.0.0.0",
    port: 7172,
    strictPort: true,
    allowedHosts: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 7173,
    strictPort: true,
  },
  plugins: [tailwindcss(), viteReact()],
});
