import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { JsonLd } from "@/components/json-ld"
import { HeroSection } from "@/components/hero-section"
import { SobreSection } from "@/components/sobre-section"
import { PacotesSection } from "@/components/pacotes-section"
import { AllInclusiveSection } from "@/components/all-inclusive-section"
import { EquipamentosSection } from "@/components/equipamentos-section"
import { EspeciesPescaSection } from "@/components/especies-pesca-section"
import { PrecosSection } from "@/components/precos-section"
import { AcomodacoesSection } from "@/components/acomodacoes-section"
import { LocalizacaoSection } from "@/components/localizacao-section"
import { GaleriaSection } from "@/components/galeria-section"
import { DepoimentosSection } from "@/components/depoimentos-section"
import { ContatoSection } from "@/components/contato-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pousada Natureza | Pesca Esportiva no Rio Preto da Eva, Amazonas",
  description:
    "Experimente a melhor pesca esportiva da Amazônia na Pousada Natureza. Pacotes all-inclusive, barcos equipados, guias experientes e conforto no coração da floresta amazônica.",
  keywords:
    "pesca esportiva, Amazonas, Rio Preto da Eva, tucunaré, pirarucu, pacotes de pesca, pousada de pesca, Igarapé Tiririca, Rio Negro",
  openGraph: {
    title: "Pousada Natureza | Pesca Esportiva no Rio Preto da Eva, Amazonas",
    description:
      "Experimente a melhor pesca esportiva da Amazônia na Pousada Natureza. Pacotes all-inclusive, barcos equipados, guias experientes e conforto no coração da floresta amazônica.",
    url: "https://www.pousadanatureza.com.br",
    siteName: "Pousada Natureza",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pousada Natureza - Pesca Esportiva na Amazônia",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pousada Natureza | Pesca Esportiva no Rio Preto da Eva, Amazonas",
    description:
      "Experimente a melhor pesca esportiva da Amazônia na Pousada Natureza. Pacotes all-inclusive, barcos equipados, guias experientes e conforto no coração da floresta amazônica.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://www.pousadanatureza.com.br",
    languages: {
      "en-US": "https://www.pousadanatureza.com.br/en",
      "es-ES": "https://www.pousadanatureza.com.br/es",
    },
  },
}

export default function Home() {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <JsonLd />
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <HeroSection />
                <SobreSection />
                <PacotesSection />
                <AllInclusiveSection />
                <EquipamentosSection />
                <EspeciesPescaSection />
                <PrecosSection />
                <AcomodacoesSection />
                <LocalizacaoSection />
                <GaleriaSection />
                <DepoimentosSection />
                <ContatoSection />
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}