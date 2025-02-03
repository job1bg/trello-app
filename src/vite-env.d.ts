/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // 👈 Import SVGR

export default defineConfig({
  plugins: [react(), svgr()], // 👈 Add SVGR to plugins
});

