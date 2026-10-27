/**
 * Regenerates the social card and the Apple touch icon from SVG, so neither
 * is a binary blob nobody can edit.
 *
 *   node scripts/generate-images.mjs
 *
 * Re-run it after the real logo lands, or after changing the brand colour.
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const NAVY = '#303a46';
const SILVER = '#c8ced6';
const BRONZE = '#c9a27a';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${BRONZE}"/>
  <text x="80" y="250" font-family="Georgia, serif" font-size="86"
        font-weight="600" fill="#ffffff">M&amp;A Management Solutions</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="34"
        fill="${SILVER}">Northern Virginia property management</text>
  <line x1="80" y1="400" x2="300" y2="400" stroke="${BRONZE}" stroke-width="3"/>
  <text x="80" y="470" font-family="Georgia, serif" font-size="40"
        font-style="italic" fill="#ffffff">Your Property. Our Responsibility.</text>
</svg>`;

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" fill="${NAVY}"/>
  <text x="90" y="120" text-anchor="middle" font-family="Georgia, serif"
        font-size="82" font-weight="600" fill="#ffffff">M&amp;A</text>
</svg>`;

await writeFile(
  'public/og.png',
  await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toBuffer()
);

await writeFile(
  'public/apple-touch-icon.png',
  await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toBuffer()
);

console.log('Wrote public/og.png and public/apple-touch-icon.png');
