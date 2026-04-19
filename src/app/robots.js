export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://becomadvisory.vercel.app/sitemap.xml',
      'https://becomadvisory.vercel.app/sitemap-images.xml',
      'https://becomadvisory.vercel.app/sitemap-videos.xml',
    ],
  };
}
