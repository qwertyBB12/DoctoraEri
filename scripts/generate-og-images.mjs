import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');

// Brand colors
const BORGONIA = '#6B4B5C';
const BORGONIA_LIGHT = '#F5F0F2';
const ORO = '#C4A57B';
const GRAFITO = '#3D3735';
const WHITE = '#FFFFFF';

// OG image dimensions
const WIDTH = 1200;
const HEIGHT = 630;

// Create logo SVG
const createLogoSVG = (size) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <g transform="translate(50, 55)">
    <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="#6B4B5C" transform="rotate(-25)"/>
    <ellipse cx="0" cy="-12" rx="16" ry="32" fill="#8B6B7C" transform="rotate(5)"/>
    <ellipse cx="20" cy="-5" rx="22" ry="35" fill="#A88B9C" transform="rotate(25)"/>
  </g>
</svg>`;
};

// Create OG image SVG
const createOGImageSVG = (locale) => {
  const isSpanish = locale === 'es';

  const title = 'Dra. Erika Torres Valdez';
  const subtitle = 'Urofemina';
  const specialty = isSpanish
    ? 'Uroginecología · Medicina Pélvica Femenina'
    : 'Urogynecology · Female Pelvic Medicine';
  const location = isSpanish
    ? 'World Trade Center · Ciudad de México'
    : 'World Trade Center · Mexico City';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BORGONIA_LIGHT}"/>

  <!-- Decorative accent bar -->
  <rect x="0" y="0" width="8" height="${HEIGHT}" fill="${ORO}"/>

  <!-- Logo (positioned top-right) -->
  <g transform="translate(950, 80) scale(1.8)">
    <g transform="translate(50, 55)">
      <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="${BORGONIA}" opacity="0.15" transform="rotate(-25)"/>
      <ellipse cx="0" cy="-12" rx="16" ry="32" fill="${BORGONIA}" opacity="0.12" transform="rotate(5)"/>
      <ellipse cx="20" cy="-5" rx="22" ry="35" fill="${BORGONIA}" opacity="0.1" transform="rotate(25)"/>
    </g>
  </g>

  <!-- Main content area -->
  <g transform="translate(80, 180)">
    <!-- Small accent -->
    <rect x="0" y="0" width="60" height="3" fill="${ORO}"/>

    <!-- Title -->
    <text x="0" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="800" fill="${BORGONIA}" letter-spacing="-1">
      ${title}
    </text>

    <!-- Subtitle -->
    <text x="0" y="130" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="600" fill="${ORO}">
      ${subtitle}
    </text>

    <!-- Specialty -->
    <text x="0" y="200" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="500" fill="${GRAFITO}" opacity="0.8">
      ${specialty}
    </text>

    <!-- Location -->
    <text x="0" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="400" fill="${GRAFITO}" opacity="0.6">
      ${location}
    </text>
  </g>

  <!-- Bottom accent line -->
  <rect x="80" y="580" width="200" height="2" fill="${ORO}" opacity="0.5"/>

  <!-- Small logo mark bottom right -->
  <g transform="translate(1050, 530) scale(0.7)">
    <g transform="translate(50, 55)">
      <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="${BORGONIA}" transform="rotate(-25)"/>
      <ellipse cx="0" cy="-12" rx="16" ry="32" fill="#8B6B7C" transform="rotate(5)"/>
      <ellipse cx="20" cy="-5" rx="22" ry="35" fill="#A88B9C" transform="rotate(25)"/>
    </g>
  </g>
</svg>`;
};

async function generateOGImages() {
  console.log('Generating Open Graph images...\n');

  // Create OG images directory
  const ogDir = path.join(publicDir, 'og');
  if (!fs.existsSync(ogDir)) {
    fs.mkdirSync(ogDir, { recursive: true });
  }

  // Generate Spanish OG image
  const esSvg = createOGImageSVG('es');
  await sharp(Buffer.from(esSvg))
    .resize(WIDTH, HEIGHT)
    .png({ quality: 90 })
    .toFile(path.join(ogDir, 'og-es.png'));
  console.log('Created: /og/og-es.png (1200x630)');

  // Generate English OG image
  const enSvg = createOGImageSVG('en');
  await sharp(Buffer.from(enSvg))
    .resize(WIDTH, HEIGHT)
    .png({ quality: 90 })
    .toFile(path.join(ogDir, 'og-en.png'));
  console.log('Created: /og/og-en.png (1200x630)');

  // Also create a default one (Spanish as default)
  await sharp(Buffer.from(esSvg))
    .resize(WIDTH, HEIGHT)
    .png({ quality: 90 })
    .toFile(path.join(ogDir, 'og-default.png'));
  console.log('Created: /og/og-default.png (1200x630)');

  // Create Twitter card image (same dimensions work, but let's create specific ones)
  // Twitter recommends 1200x600 for summary_large_image
  const twitterHeight = 600;

  const createTwitterSVG = (locale) => {
    const isSpanish = locale === 'es';
    const title = 'Dra. Erika Torres Valdez';
    const subtitle = isSpanish
      ? 'Uroginecología · Ciudad de México'
      : 'Urogynecology · Mexico City';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${twitterHeight}" viewBox="0 0 ${WIDTH} ${twitterHeight}">
    <rect width="${WIDTH}" height="${twitterHeight}" fill="${BORGONIA_LIGHT}"/>
    <rect x="0" y="0" width="6" height="${twitterHeight}" fill="${ORO}"/>

    <g transform="translate(80, 160)">
      <rect x="0" y="0" width="50" height="3" fill="${ORO}"/>
      <text x="0" y="70" font-family="system-ui, sans-serif" font-size="52" font-weight="800" fill="${BORGONIA}">
        ${title}
      </text>
      <text x="0" y="130" font-family="system-ui, sans-serif" font-size="28" font-weight="500" fill="${ORO}">
        Urofemina
      </text>
      <text x="0" y="190" font-family="system-ui, sans-serif" font-size="22" fill="${GRAFITO}" opacity="0.7">
        ${subtitle}
      </text>
    </g>

    <g transform="translate(1020, 480) scale(0.8)">
      <g transform="translate(50, 55)">
        <ellipse cx="-18" cy="-8" rx="18" ry="28" fill="${BORGONIA}" transform="rotate(-25)"/>
        <ellipse cx="0" cy="-12" rx="16" ry="32" fill="#8B6B7C" transform="rotate(5)"/>
        <ellipse cx="20" cy="-5" rx="22" ry="35" fill="#A88B9C" transform="rotate(25)"/>
      </g>
    </g>
  </svg>`;
  };

  await sharp(Buffer.from(createTwitterSVG('es')))
    .resize(WIDTH, twitterHeight)
    .png({ quality: 90 })
    .toFile(path.join(ogDir, 'twitter-es.png'));
  console.log('Created: /og/twitter-es.png (1200x600)');

  await sharp(Buffer.from(createTwitterSVG('en')))
    .resize(WIDTH, twitterHeight)
    .png({ quality: 90 })
    .toFile(path.join(ogDir, 'twitter-en.png'));
  console.log('Created: /og/twitter-en.png (1200x600)');

  console.log('\n✓ All OG images generated successfully!');
}

generateOGImages().catch(console.error);
