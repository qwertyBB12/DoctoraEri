import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// Brand colors
const BORGONIA = '#6B4B5C';
const ORO = '#C4A57B';
const WHITE = '#FFFFFF';

// Create SVG logo in brand colors for favicon
// Based on the lotus/flower design from the original logo
const createLogoSVG = (size, bgColor = 'transparent', petalColors = [BORGONIA, '#8B6B7C', '#A88B9C']) => {
  const scale = size / 100;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  ${bgColor !== 'transparent' ? `<rect width="100" height="100" fill="${bgColor}"/>` : ''}
  <g transform="translate(50, 55)">
    <!-- Left petal (darkest) -->
    <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="${petalColors[0]}" transform="rotate(-25)"/>
    <!-- Middle petal -->
    <ellipse cx="0" cy="-12" rx="16" ry="32" fill="${petalColors[1]}" transform="rotate(5)"/>
    <!-- Right petal (largest, lightest) -->
    <ellipse cx="20" cy="-5" rx="22" ry="35" fill="${petalColors[2]}" transform="rotate(25)"/>
  </g>
</svg>`;
};

// Create monochrome SVG for Safari pinned tab
const createMonochromeSVG = () => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 100 100">
  <g transform="translate(50, 55)">
    <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="black" transform="rotate(-25)"/>
    <ellipse cx="0" cy="-12" rx="16" ry="32" fill="black" transform="rotate(5)"/>
    <ellipse cx="20" cy="-5" rx="22" ry="35" fill="black" transform="rotate(25)"/>
  </g>
</svg>`;
};

// Favicon sizes needed
const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'favicon-48x48.png': 48,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
  'mstile-70x70.png': 70,
  'mstile-150x150.png': 150,
  'mstile-310x310.png': 310,
};

async function generateFavicons() {
  console.log('Generating favicons...\n');

  // Generate PNG favicons
  for (const [filename, size] of Object.entries(sizes)) {
    const svg = createLogoSVG(size);
    const outputPath = path.join(publicDir, filename);

    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`Created: ${filename} (${size}x${size})`);
  }

  // Generate Apple touch icon with background for better visibility
  const appleSvg = createLogoSVG(180, WHITE);
  await sharp(Buffer.from(appleSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Updated: apple-touch-icon.png with white background');

  // Generate favicon.ico (multi-size ICO using PNG as base)
  // Since sharp can't create ICO directly, we'll create the PNGs and note for manual conversion
  // For now, use 32x32 as the main favicon
  const favicon32Svg = createLogoSVG(32);
  await sharp(Buffer.from(favicon32Svg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Created: favicon.png (32x32)');

  // Create Safari pinned tab SVG
  const safariSvg = createMonochromeSVG();
  fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), safariSvg);
  console.log('Created: safari-pinned-tab.svg');

  // Create web manifest
  const manifest = {
    name: 'Urofemina - Dra. Erika Torres Valdez',
    short_name: 'Urofemina',
    description: 'Uroginecología y Medicina Pélvica Femenina en Ciudad de México',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: BORGONIA,
    background_color: WHITE,
    display: 'standalone',
    start_url: '/es',
  };
  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Created: site.webmanifest');

  // Create browserconfig.xml for Windows tiles
  const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square70x70logo src="/mstile-70x70.png"/>
      <square150x150logo src="/mstile-150x150.png"/>
      <square310x310logo src="/mstile-310x310.png"/>
      <TileColor>${BORGONIA}</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserconfig);
  console.log('Created: browserconfig.xml');

  console.log('\n✓ All favicons generated successfully!');
  console.log('\nNote: Add the following to your <head> in layout.tsx:');
  console.log(`
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="${BORGONIA}" />
<meta name="msapplication-TileColor" content="${BORGONIA}" />
<meta name="theme-color" content="${BORGONIA}" />
`);
}

generateFavicons().catch(console.error);
