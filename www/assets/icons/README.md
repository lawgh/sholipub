# PWA Icons

Place your PWA icons in this directory with the following sizes:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## Quick Generation

You can use PWA Asset Generator to create all icons from a single source image:

```bash
npx pwa-asset-generator source-logo.png ./src/assets/icons --icon-only
```

Or use any online PWA icon generator like:
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net/

## Temporary Solution

For development, you can use simple colored squares or placeholder images.
The app will still work without icons, but won't be installable as a PWA.
