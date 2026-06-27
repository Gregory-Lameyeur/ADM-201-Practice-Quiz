import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/ADM-201-Practice-Quiz/",
  plugins: [react(), tailwindcss()],
});
