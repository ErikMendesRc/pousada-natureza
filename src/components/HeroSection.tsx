"use client";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-center bg-cover bg-center text-neutral py-20 px-4 sm:py-24" style={{ backgroundImage: "url('/images/heroimage.jpg')" }}>
      <div className="absolute inset-0 bg-dark opacity-60"></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-neutral">Bem-vindo à Pousada Natureza</h1>
        <p className="text-xl sm:text-2xl mb-8 text-neutral">Pesca esportiva no Rio Preto da Eva, Amazônia</p>
        <a href="#contact" className="bg-secondary text-neutral py-2 px-4 rounded-lg hover:bg-secondary-dark transition duration-300 shadow-lg">Reserve Agora</a>
      </div>
    </section>
  );
};

export default HeroSection;