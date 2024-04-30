import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
       registerType: "prompt",
       includeAssets: ["theater_react.png"],
       manifest: {
          name: "Theater_react",
          short_name: "Theater",
          description: "Theater website with a list of future performances and the opportunity to leave a review",
          theme_color: "#ffffff",
          start_url: "/",
          icons: [
            {
              src: "/public/theater_react.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "favicon",
           },
           {
              src: "/public/theater_react.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "favicon",
           },
           {
              src: "/public/theater_react.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "apple touch icon",
           },
           {
              src: "/public/theater_react.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
           },
          ],
       },
    }),
 ],
})
