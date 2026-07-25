/**
 * make-round-favicon.mjs — utilise sharp (déjà disponible via npx)
 * Génère un favicon circulaire PNG transparent 256×256
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC  = path.join(__dirname, '..', 'favicon-serigne-cheikh-bethio.png');
const DEST = path.join(__dirname, '..', 'public', 'assets', 'favicon-round.png');
const SIZE = 256;

// Masque SVG circulaire
const mask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}">
    <circle cx="${SIZE/2}" cy="${SIZE/2}" r="${SIZE/2}" fill="white"/>
  </svg>`
);

await sharp(SRC)
  .resize(SIZE, SIZE, {
    fit: 'cover',
    position: 'top',   // cadre le visage (haut de l'image)
  })
  .composite([{ input: mask, blend: 'dest-in' }])
  .png()
  .toFile(DEST);

console.log('✅ favicon-round.png généré →', DEST);
