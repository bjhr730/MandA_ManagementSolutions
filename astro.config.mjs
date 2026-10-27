import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Placeholder until the real domain is registered. Set SITE_URL in the
// environment (and in Vercel) and nothing else needs to change: canonical
// tags, sitemap.xml, robots.txt and Open Graph URLs all read from here.
const site = process.env.SITE_URL || 'https://replace-me.example.com';

export default defineConfig({
  site,
  // Static by default. Only `src/pages/api/inquiry.ts` opts out with
  // `export const prerender = false`, so every page is plain HTML on the CDN.
  output: 'static',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) =>
        // Utility pages that should not appear in search results.
        !page.includes('/thank-you'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  security: {
    // Astro's built-in cross-origin POST check compares the Origin header
    // against the host it sees, which behind Vercel's proxy is not the host
    // the browser addressed. The result is a 403 on every form submission,
    // including same-origin ones. We do the equivalent check ourselves in
    // src/lib/inquiry.ts, against the forwarded host, so it survives the proxy.
    checkOrigin: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // Keep the generated set small; these are the only widths the layout uses.
    responsiveStyles: true,
  },
  prefetch: {
    prefetchAll: false,
  },
});
