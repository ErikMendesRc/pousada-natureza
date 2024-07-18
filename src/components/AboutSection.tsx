"use client";

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-neutral dark:bg-dark">
      <div className="gap-16 items-center py-3xl px-lg mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-3xl lg:px-lg">
        <div className="font-light text-dark sm:text-lg dark:text-neutral">
          <h2 className="mb-lg text-4xl tracking-tight font-extrabold text-dark dark:text-neutral">
            Sobre Nós
          </h2>
          <p className="mb-lg">
            Localizada no coração da Amazônia, no Rio Preto da Eva, a Pousada Natureza é o destino perfeito para os amantes da pesca esportiva. 
            Especializamos na pesca do tucunaré açu, oferecendo uma experiência inesquecível em meio à exuberante natureza amazônica.
          </p>
          <p>
            Oferecemos pacotes completos de 5 dias de pesca, com pensão completa, bebidas, pescarias guiadas, translados e um lual na praia para 
            a despedida do grupo. Venha viver uma aventura inesquecível com conforto e comodidade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-lg">
          <Image className="w-full rounded-lg" src="/images/pousada1.jpeg" alt="Pousada" width={500} height={300} />
          <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/images/pousada2.jpeg" alt="Pesca" width={500} height={300} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;