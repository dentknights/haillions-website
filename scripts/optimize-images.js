#!/usr/bin/env node

/**
 * Image Optimization Script for Hail Lions PDR
 * 
 * This script optimizes and compresses images for web use.
 * It creates multiple sizes (full, large, medium, thumbnail) and
 * converts to modern formats (WebP, AVIF) for better performance.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Image sizes for responsive images
const SIZES = [
  { name: 'full', width: 1920 },
  { name: 'large', width: 1280 },
  { name: 'medium', width: 768 },
  { name: 'thumb', width: 400 }
];

// Quality settings
const QUALITY = {
  jpeg: 80,
  webp: 75,
  avif: 70
};

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const basename = path.basename(filename, ext);
  
  // Skip non-image files
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    console.log(`Skipping ${filename} - not an image`);
    return;
  }

  console.log(`\nOptimizing: ${filename}`);
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  console.log(`  Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024).toFixed(1)}KB`);

  // Process each size
  for (const size of SIZES) {
    // Skip if image is smaller than target size
    if (metadata.width < size.width) {
      continue;
    }

    const resizeOptions = {
      width: size.width,
      withoutEnlargement: true,
      fit: 'inside'
    };

    // Generate JPEG
    const jpegPath = path.join(OUTPUT_DIR, `${basename}-${size.name}.jpg`);
    await image
      .clone()
      .resize(resizeOptions)
      .jpeg({ 
        quality: QUALITY.jpeg, 
        progressive: true,
        mozjpeg: true 
      })
      .toFile(jpegPath);
    
    const jpegSize = fs.statSync(jpegPath).size;
    console.log(`  ${size.name}.jpg: ${(jpegSize / 1024).toFixed(1)}KB`);

    // Generate WebP
    const webpPath = path.join(OUTPUT_DIR, `${basename}-${size.name}.webp`);
    await image
      .clone()
      .resize(resizeOptions)
      .webp({ 
        quality: QUALITY.webp,
        effort: 6 
      })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    const savings = ((jpegSize - webpSize) / jpegSize * 100).toFixed(1);
    console.log(`  ${size.name}.webp: ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
  }

  // Create optimized original (for fallback)
  const optimizedOriginal = path.join(OUTPUT_DIR, `${basename}-optimized.jpg`);
  await image
    .clone()
    .jpeg({ 
      quality: QUALITY.jpeg, 
      progressive: true,
      mozjpeg: true 
    })
    .toFile(optimizedOriginal);
  
  const originalSize = fs.statSync(inputPath).size;
  const optimizedSize = fs.statSync(optimizedOriginal).size;
  const totalSavings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  
  console.log(`  Total savings: ${totalSavings}%`);
}

async function main() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all images
  const files = fs.readdirSync(INPUT_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  console.log(`Found ${files.length} images to optimize\n`);
  console.log('='.repeat(60));

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    try {
      await optimizeImage(inputPath, file);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Image optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);
