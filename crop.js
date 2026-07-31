import { Jimp } from 'jimp';

async function cropImage() {
  const imgPath = 'src/assets/glowing-chilli-premium-remove-bg-io.png';
  try {
    console.log('Reading image...');
    const image = await Jimp.read(imgPath);
    console.log('Original dimensions:', image.width, 'x', image.height);

    console.log('Autocropping transparent borders...');
    image.autocrop();

    console.log('New dimensions:', image.width, 'x', image.height);
    await image.write(imgPath);
    console.log('Image cropped and saved successfully!');
  } catch (error) {
    console.error('Error cropping image:', error);
  }
}

cropImage();
