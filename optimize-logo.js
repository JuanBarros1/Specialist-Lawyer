import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/logo.png');
const outputPath = path.join(__dirname, 'src/assets/logo-optimized.png');

async function optimizeLogo() {
    try {
        console.log(`Optimizing ${inputPath}...`);

        if (!fs.existsSync(inputPath)) {
            console.error('Input file not found!');
            return;
        }

        await sharp(inputPath)
            .resize(400, null, { // Resize to max width 400px (retina ready for 200px display)
                withoutEnlargement: true
            })
            .png({ quality: 80, compressionLevel: 9 }) // Optimize PNG
            .toFile(outputPath);

        console.log(`Logo optimized and saved to ${outputPath}`);

        // Get file sizes
        const originalStats = fs.statSync(inputPath);
        const optimizedStats = fs.statSync(outputPath);

        console.log(`Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);
        console.log(`Optimized size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);

    } catch (error) {
        console.error('Error optimizing logo:', error);
    }
}

optimizeLogo();
