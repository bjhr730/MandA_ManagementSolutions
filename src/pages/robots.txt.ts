import type { APIRoute } from 'astro';

/**
 * Generated rather than static so the sitemap URL always matches the
 * configured site origin instead of a hardcoded placeholder domain.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? '';

  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /thank-you',
    '',
    origin ? `Sitemap: ${origin}/sitemap-index.xml` : '',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
