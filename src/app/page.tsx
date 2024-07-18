import Head from 'next/head';
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import ReservationSection from "../components/ReservationSection";
import LocationSection from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pousada Natureza - Pesca Esportiva na Amazônia</title>
        <meta name="description" content="Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva. Especializamos na pesca do tucunaré açu, oferecendo uma experiência inesquecível em meio à exuberante natureza amazônica." />
        <meta name="keywords" content="pesca esportiva, tucunaré açu, Rio Preto da Eva, Amazônia, lodge de pesca, pesca no Amazonas" />
        <meta property="og:title" content="Pousada Natureza - Pesca Esportiva na Amazônia" />
        <meta property="og:description" content="Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva." />
        <meta property="og:image" content="https://www.pousadanaturezaeva.com.br/images/logo.png" />
        <meta property="og:url" content="https://www.pousadanaturezaeva.com.br" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pousadanaturezaeva" />
        <meta name="twitter:title" content="Pousada Natureza - Pesca Esportiva na Amazônia" />
        <meta name="twitter:description" content="Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva." />
        <meta name="twitter:image" content="https://www.pousadanaturezaeva.com.br/images/logo.png" />
        <link rel="canonical" href="https://www.pousadanaturezaeva.com.br" />
      </Head>
      <main>
        <header>
          <HeroSection />
        </header>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="gallery">
          <GallerySection />
        </section>
        <section id="reservation">
          <ReservationSection />
        </section>
        <section id="location">
          <LocationSection />
        </section>
        <footer>
        </footer>
      </main>
    </>
  );
}