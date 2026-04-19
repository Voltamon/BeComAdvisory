export async function GET() {
  const baseUrl = 'https://becomadvisory.vercel.app';
  const images = [
    { 
      loc: `${baseUrl}/hero.jpg`, 
      title: 'Estrategia y tecnología empresarial - BeCom Advisory',
      caption: 'Estrategia 360º en negocios y tecnología.'
    },
    { 
      loc: `${baseUrl}/services1.png`, 
      title: 'Consultoría Estratégica - BeCom Advisory',
      caption: 'Mapeo de necesidades en Business Development y Project Management.'
    },
    { 
      loc: `${baseUrl}/services2.jpg`, 
      title: 'Servicios de Tecnología - BeCom Advisory',
      caption: 'Desarrollo de Web, Apps, ERP y CRM.'
    },
    { 
      loc: `${baseUrl}/services3.jpg`, 
      title: 'Red de Expertos Vetted - BeCom Advisory',
      caption: 'Acceso instantáneo a expertos curados.' 
    },
    { 
      loc: `${baseUrl}/accordion.jpg`, 
      title: 'Nuestra Forma de Trabajar - BeCom Advisory',
      caption: 'Metodología pull-and-execute para el crecimiento.'
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    ${images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('').trim()}
  </url>
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
