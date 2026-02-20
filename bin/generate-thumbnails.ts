import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const inputDir: string = path.join(__dirname, '../public/panoramas');
const outputDir: string = path.join(__dirname, '../public/thumbnails');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.forEach((file: string) => {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            const inputFile: string = path.join(inputDir, file);
            const outputFile: string = path.join(outputDir, file);

            sharp(inputFile)
                .resize(200, 200)
                .toFile(outputFile, (err: Error | null) => {
                    if (err) {
                        console.error('Error generating thumbnail for', file, ':', err);
                    } else {
                        console.log('Thumbnail generated for', file);
                    }
                });
        }
    });
});