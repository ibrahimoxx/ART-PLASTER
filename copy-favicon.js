const fs = require('fs');
const path = require('path');

const source = 'C:/Users/asus/.gemini/antigravity/brain/f91badfd-3e59-41d1-aece-42a0039c1cda/art_plaster_gold_logo_favicon_1774010453702.png';
const targets = [
  'd:/ART PLASTER/public/favicon.png',
  'd:/ART PLASTER/app/icon.png'
];

targets.forEach(target => {
  try {
    const targetDir = path.dirname(target);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.copyFileSync(source, target);
    console.log(`Copied icon to ${target}`);
  } catch (err) {
    console.error(`Error copying icon to ${target}:`, err);
  }
});

// Delete old icon.tsx if it exists
const iconTsx = 'd:/ART PLASTER/app/icon.tsx';
if (fs.existsSync(iconTsx)) {
  fs.unlinkSync(iconTsx);
  console.log('Deleted app/icon.tsx');
}
