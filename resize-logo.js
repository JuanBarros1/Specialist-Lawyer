import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const inputPath = path.resolve('src/assets/logo.png');
const outputPath = path.resolve('src/assets/logo-optimized.png');

async function resizeLogo() {
    try {
        if (!fs.existsSync(inputPath)) {
            console.error('Logo file not found at:', inputPath);
            return;
        }

        await sharp(inputPath)
            .resize(128) // Resize to 128px width (plenty for 32px display + retina)
            .png({ quality: 80 })
            .toFile(outputPath);

        console.log('Logo optimized successfully!');
    } catch (error) {
        console.error('Error optimizing logo:', error);
    }
}

resizeLogo();
