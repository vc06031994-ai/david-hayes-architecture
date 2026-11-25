// @ts-check
import { defineConfig } from 'astro/config';
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";

import react from "@astrojs/react";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";

// https://astro.build/config
export default defineConfig({
  integrations: [wix(), wixPages(), react()],
  security: { checkOrigin: false },
  adapter: wixHostingAdapter(),

  image: {
    domains: ["static.wixstatic.com"],
  },

  // Polling avoids Windows fs.watch EBUSY errors on locked/synced image files.
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
        ignored: ['**/node_modules/**', '**/.git/**'],
      },
    },
  },

  output: "server",
});
