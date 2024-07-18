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
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ReservationSection />
      <LocationSection/>
    </main>
  );
}