import { Jimp } from 'jimp';
import path from 'path';

async function removeBackgroundGlobally(imagePath, outputPath, threshold) {
  try {
    console.log(`Loading image: ${imagePath}`);
    const image = await Jimp.read(imagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const realThreshold = threshold || 238; 
    let transparentCount = 0;
    
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const color = image.getPixelColor(x, y);
        const r = (color >> 24) & 0xff;
        const g = (color >> 16) & 0xff;
        const b = (color >> 8) & 0xff;
        const a = color & 0xff;
        
        if (a < 10 || (r > realThreshold && g > realThreshold && b > realThreshold)) {
          image.setPixelColor(0x00000000, x, y);
          transparentCount++;
        }
      }
    }
    
    console.log(`Set ${transparentCount} pixels to transparent globally with threshold ${realThreshold}.`);
    await image.write(outputPath);
    console.log(`Successfully saved transparent image to: ${outputPath}`);
  } catch (error) {
    console.error("Error in removeBackgroundGlobally:", error);
  }
}

async function main() {
  const assetsDir = "./src/assets";
  const src = path.join(assetsDir, "global-presence-map.png");
  const dest = path.join(assetsDir, "global-presence-map-nobg.png");
  await removeBackgroundGlobally(src, dest, 238);
}

main();
