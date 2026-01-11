# Assets Folder

Place your gallery images in this folder.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

To use images in the Gallery component:
1. Add your image files to this folder (e.g., `gallery-1.jpg`, `gallery-2.jpg`, etc.)
2. Update `Gallery.tsx` to import the images:
   ```typescript
   import gallery1 from '../assets/gallery-1.jpg';
   import gallery2 from '../assets/gallery-2.jpg';
   // ... etc
   
   const images = [gallery1, gallery2, ...];
   ```
