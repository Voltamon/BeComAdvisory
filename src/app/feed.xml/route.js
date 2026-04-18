export async function GET() {
  const baseUrl = 'https://becomadvisory.vercel.app';
  
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>BeCom Advisory | Estrategia y Tecnología</title>
    <link>${baseUrl}</link>
    <description>Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <item>
      <title>Agenda tu Diagnóstico Estratégico</title>
      <link>${baseUrl}/form</link>
      <description>Agenda una sesión de diagnóstico estratégico para tu empresa. Analizamos tus desafíos en Business Development y Project Management.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${baseUrl}/form</guid>
    </item>
  </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
