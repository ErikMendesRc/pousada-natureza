"use client";

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-neutral dark:bg-dark py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="gap-8 items-center max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="font-light text-dark sm:text-lg dark:text-neutral">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-dark dark:text-neutral">
            Sobre Nós
          </h2>
          <p className="mb-4">
            Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva.
            Especializamos na pesca do tucunaré açu, oferecendo uma experiência inesquecível em meio à exuberante natureza amazônica.
          </p>
          <p>
            Oferecemos pacotes completos de 5 dias de pesca, com pensão completa, bebidas, pescarias guiadas, translados e um lual na praia para
            a despedida do grupo. Venha viver uma aventura inesquecível com conforto e comodidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
          <Image className="w-full rounded-lg" src="/images/pousada1.jpeg" alt="Pousada" width={500} height={300} />
          <Image className="w-full rounded-lg sm:mt-4 lg:mt-0" src="/images/pousada2.jpeg" alt="Pesca" width={500} height={300} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;