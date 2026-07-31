const { Jimp } = require('jimp');
const path = require('path');

async function removeBackground(inputPath, outputPath) {
  try {
    console.log(`Reading image from: ${inputPath}`);
    const image = await Jimp.read(inputPath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // We scan every pixel to check for near-white color values and set alpha to 0 (fully transparent)
    image.scan(0, 0, width, height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // Target near-white pixels (threshold of 248 out of 255)
      if (red > 248 && green > 248 && blue > 248) {
        this.bitmap.data[idx + 3] = 0; // Set alpha channel to 0 (fully transparent)
      }
    });

    // To prevent jagged edges, we can do a simple edge smoothing pass (feathering)
    // For any pixel that is semi-opaque or next to a transparent pixel, we blend the alpha
    const tempAlpha = Buffer.from(image.bitmap.data);
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4;
        if (image.bitmap.data[idx + 3] > 0) {
          // Check 4-neighborhood alphas
          const topA = image.bitmap.data[((y - 1) * width + x) * 4 + 3];
          const bottomA = image.bitmap.data[((y + 1) * width + x) * 4 + 3];
          const leftA = image.bitmap.data[(y * width + (x - 1)) * 4 + 3];
          const rightA = image.bitmap.data[(y * width + (x + 1)) * 4 + 3];
          
          if (topA === 0 || bottomA === 0 || leftA === 0 || rightA === 0) {
            // Smooth edge: make this border pixel semi-transparent (e.g. 50% opacity)
            tempAlpha[idx + 3] = 120;
          }
        }
      }
    }
    
    image.bitmap.data = tempAlpha;
    
    await image.write(outputPath);
    console.log(`Success: Background removed. PNG saved to: ${outputPath}`);
  } catch (error) {
    console.error("Error removing background:", error);
    process.exit(1);
  }
}

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: node remove_bg.js <input_path> <output_path>");
  process.exit(1);
}

removeBackground(args[0], args[1]);
