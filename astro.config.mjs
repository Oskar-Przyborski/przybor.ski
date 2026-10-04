// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://przybor.ski',
  prefetch: true,
  i18n: {
    locales: ["pl"],
    defaultLocale: "pl"
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Geist Mono",
    cssVariable: "--font-geist-mono",
    fallbacks: ["monospace"],
    styles: ["normal"],
    weights: ["400 500"],
    subsets: ["latin", "latin-ext"],
  }]
});
