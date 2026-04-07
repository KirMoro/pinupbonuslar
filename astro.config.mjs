import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://pinupbonuslar.com",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "never"
  }
});
