import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pousada Natureza - Pesca Esportiva na Amazônia",
  description: "Pousada Natureza - Pesca esportiva no Rio Preto da Eva, Amazônia. Desfrute de uma experiência única de pesca do tucunaré açu com conforto e comodidade.",
  keywords: "pesca esportiva, tucunaré açu, Rio Preto da Eva, Amazônia, lodge de pesca, pesca no Amazonas",
  openGraph: {
    title: "Pousada Natureza - Pesca Esportiva na Amazônia",
    description: "Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva.",
    url: "https://www.pousadanaturezaeva.com.br",
    type: "website",
    images: [
      {
        url: "https://www.pousadanaturezaeva.com.br/images/logo.png",
        width: 800,
        height: 600,
        alt: "Pousada Natureza Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pousadanaturezaeva",
    title: "Pousada Natureza - Pesca Esportiva na Amazônia",
    description: "Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva.",
    images: ["https://www.pousadanaturezaeva.com.br/images/logo.png"]
  },
  alternates: {
    canonical: "https://www.pousadanaturezaeva.com.br"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}