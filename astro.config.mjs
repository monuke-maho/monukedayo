// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

import remarkBreaks from "remark-breaks";
import remarkLinkCard from "remark-link-card-plus";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact()],

  markdown: {
    remarkPlugins: [remarkBreaks, remarkLinkCard],
  },
});
