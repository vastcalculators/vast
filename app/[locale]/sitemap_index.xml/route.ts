export async function GET() {
    const languages = ['home', 'fr', 'es', 'de', 'pt', 'ru', 'it', 'tr', 'zh', 'ar', 'hi', 'ur'];
    const baseUrl = 'https://vastcalculators.com';
    const lastmod = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${languages.map(lang => `  <sitemap>
    <loc>${baseUrl}/sitemap_${lang}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
