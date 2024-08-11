import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Esto es necesario para que las rutas de React funcionen correctamente.
  },
});
