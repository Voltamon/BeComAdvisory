import FormClient from './FormClient';

export const metadata = {
  title: "Agenda tu Diagnóstico | BeCom Advisory",
  description: "Agenda una sesión de diagnóstico estratégico para tu empresa. Analizamos tus desafíos en Business Development y Project Management.",
  alternates: {
    canonical: 'https://becomadvisory.vercel.app/form',
  },
  openGraph: {
    title: "Agenda tu Diagnóstico | BeCom Advisory",
    description: "Sesión de diagnóstico estratégico personalizada para Startups y empresas consolidadas.",
    url: 'https://becomadvisory.vercel.app/form',
    siteName: 'BeCom Advisory',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agenda tu Diagnóstico | BeCom Advisory",
    description: "Diagnóstico estratégico gratuito para impulsar el crecimiento de tu negocio.",
  },
};

export default function FormPage() {
  return <FormClient />;
}
