import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://afterecon.com';

async function generateSitemap() {
  // Get all markdown files from content directory
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));

  // Static routes
  const staticPaths = [''];

  // Create sitemap entries
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPaths
    .map(
      (path) => `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
  ${files
    .map(
      (slug) => `
    <url>
      <loc>${SITE_URL}/posts/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  // Write sitemap file
  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);

  // Generate robots.txt
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  fs.writeFileSync(path.join(process.cwd(), 'public/robots.txt'), robotsTxt);
}

generateSitemap().catch(console.error);
