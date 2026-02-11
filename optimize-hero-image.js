import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/juan-lawyer-portrait.jpg');
const outputPath = path.join(__dirname, 'src/assets/juan-lawyer-portrait-optimized.webp');

async function optimizeImage() {
    try {
        console.log(`Optimizing ${inputPath}...`);

        if (!fs.existsSync(inputPath)) {
            console.error('Input file not found!');
            return;
        }

        await sharp(inputPath)
            .resize(1080, null, { // Resize to max width 1080px, maintaining aspect ratio
                withoutEnlargement: true
            })
            .webp({ quality: 80 }) // Convert to WebP with 80% quality
            .toFile(outputPath);

        console.log(`Image optimized and saved to ${outputPath}`);

        // Get file sizes for comparison
        const originalStats = fs.statSync(inputPath);
        const optimizedStats = fs.statSync(outputPath);

        console.log(`Original size: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Optimized size: ${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB`);

    } catch (error) {
        console.error('Error optimizing image:', error);
    }
}

optimizeImage();
