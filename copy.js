const fs = require('fs');
try {
  fs.copyFileSync(
    'C:/Users/asus/.gemini/antigravity/brain/f91badfd-3e59-41d1-aece-42a0039c1cda/art_plaster_favicon_logo_1773937243608.png',
    'd:/ART PLASTER/public/favicon.png'
  );
  fs.writeFileSync('d:/ART PLASTER/copy-result.txt', 'SUCCESS');
} catch (e) {
  fs.writeFileSync('d:/ART PLASTER/copy-result.txt', e.stack);
}
