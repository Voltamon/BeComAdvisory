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
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
