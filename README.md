<div align="center">
  <img width="1200" height="475" alt="McKinney Plumbing Services" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# McKinney Plumbing Services LLC

A modern Vite + React landing site for licensed local plumbing services in Peach Bottom, southern Lancaster County, and nearby PA/MD border communities.

## Local development

**Prerequisites:** Node.js 18+ and npm

1. Install dependencies:
   `npm install`
2. Start the development server:
   `npm run dev`
3. Open the site in the browser at the address shown by Vite.

## Build and preview

1. Build the app for production:
   `npm run build`
2. Preview the production build locally:
   `npm run preview`

The optimized production output is generated into `dist/`.

## Deployment

This project can be deployed as a static site from `dist/`.

### GitHub Pages

This repository is configured with GitHub Pages deployment support.
A GitHub Actions workflow will automatically build and deploy the site on every push to `main`.

1. Install dependencies if needed: `npm install`
2. Build and deploy: `npm run deploy`

After deployment, the site will be published to the repository GitHub Pages URL.

### cPanel shared hosting

1. Install dependencies if needed: `npm install`
2. Build the site: `npm run build`
3. Upload the entire contents of `dist/` to `public_html/` or a sub-folder such as `public_html/plumbing/`
4. Include hidden files if your upload tool supports them. The generated `dist/.htaccess` file is required for Apache routing and proper MIME handling.

The build is configured with relative asset paths so it works from the domain root or a sub-folder.

## Notes

- This project now includes Tailwind-based styling, local service branding, and service card imagery.
- If you want to replace the placeholder photography, update the images in `src/assets/images/`.
- To preview locally, run `npm run dev` after installing dependencies.
