import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pousada Natureza - Pesca Esportiva na Amazônia",
  description: "Pousada Natureza - Pesca esportiva no Rio Preto da Eva, Amazônia. Desfrute de uma experiência única de pesca do tucunaré açu com conforto e comodidade.",
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