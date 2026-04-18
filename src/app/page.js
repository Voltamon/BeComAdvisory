import HomeClient from './HomeClient';

export const metadata = {
  title: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
  description: "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado. Soluciones a la medida para Startups y empresas consolidadas.",
  alternates: {
    canonical: 'https://becomadvisory.vercel.app',
  },
  openGraph: {
    title: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
    description: "Expertos en Business Development y Project Management. Centralizamos el expertise para que tu negocio crezca sin riesgos.",
    url: 'https://becomadvisory.vercel.app',
    siteName: 'BeCom Advisory',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BeCom Advisory | Estrategia y Tecnología",
    description: "Ecosistema centralizado para el crecimiento de Startups y empresas consolidadas.",
  },
};

export default function Home() {
  return <HomeClient />;
}
