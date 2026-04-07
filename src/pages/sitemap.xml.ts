import { absoluteUrl, sitemapPages, site } from "../data/site";

export function GET() {
  const urls = sitemapPages
    .map(
      (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${site.modifiedDate}</lastmod>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
