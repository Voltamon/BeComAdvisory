import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-heading' });

export const metadata = {
  metadataBase: new URL('https://becomadvisory.vercel.app'),
  title: {
    default: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
    template: "%s | BeCom Advisory"
  },
  description: "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado. Soluciones a la medida para Startups y empresas consolidadas.",
  keywords: ["Consultoría estratégica", "Desarrollo de tecnología", "Project Management", "Startups", "PyMEs", "BeCom Advisory", "Expertos Vetted", "Crecimiento empresarial"],
  authors: [{ name: "BeCom Advisory" }],
  creator: "BeCom Advisory",
  publisher: "BeCom Advisory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
    description: "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.",
    url: 'https://becomadvisory.vercel.app',
    siteName: 'BeCom Advisory',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
    description: "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
  alternates: {
    canonical: 'https://becomadvisory.vercel.app',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://becomadvisory.vercel.app/#organization",
      "name": "BeCom Advisory",
      "url": "https://becomadvisory.vercel.app",
      "logo": "https://becomadvisory.vercel.app/imagotipo_primario_blanco.png",
      "description": "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.",
      "sameAs": [
        "https://www.linkedin.com/company/becom-advisory",
        "https://www.instagram.com/becom_advisory"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://becomadvisory.vercel.app/#service",
      "name": "BeCom Advisory",
      "url": "https://becomadvisory.vercel.app",
      "image": "https://becomadvisory.vercel.app/imagotipo_primario_blanco.png",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mexico City",
        "addressCountry": "MX"
      },
      "description": "Consultoría estratégica y desarrollo tecnológico para empresas.",
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://becomadvisory.vercel.app/form",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Appointment",
          "name": "Diagnóstico Estratégico"
        }
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
