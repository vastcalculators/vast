import { financeCalculators } from "@/lib/calculators/finance-calculators";

export async function GET() {
  const baseUrl = 'https://vastcalculators.com';
  const lastmod = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/it/finance</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
${financeCalculators.map(calc => `  <url>
    <loc>${baseUrl}/it/finance/${calc.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
'X-Robots-Tag': 'noindex, follow',
    },
  });
}