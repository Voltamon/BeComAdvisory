export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://becomadvisory.vercel.app/sitemap.xml',
  };
}
