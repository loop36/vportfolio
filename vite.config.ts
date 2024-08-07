import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://loop36.github.io/vportfolio/',
  server: {
    port: 4000,
  },
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: "Nunito Sans",
            defer: true,
          }
          ,{
            name:"Apercu",
            defer: true,
          }
        ],
      },
    }),
  ],
});
