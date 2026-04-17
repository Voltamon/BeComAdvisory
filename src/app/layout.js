import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-body' });
const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700'], variable: '--font-heading' });

export const metadata = {
  title: "BeCom Advisory | Ecosistema Centralizado para el Crecimiento",
  description: "Estrategia 360º en negocios. Desarrollo de tecnología. Expertise centralizado.",
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
