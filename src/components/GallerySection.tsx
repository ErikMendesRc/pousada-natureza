'use client';

import React from "react";
import Image from 'next/image';

const data = [
  { imgelink: "/images/foto1.jpeg", alt: "Pescador com tucunaré gigante", legend: "Pescador com tucunaré gigante" },
  { imgelink: "/images/foto2.jpeg", alt: "Peixe tucunaré", legend: "Peixe tucunaré" },
  { imgelink: "/images/foto3.jpeg", alt: "Pescador exibindo sua captura", legend: "Pescador exibindo sua captura" },
  { imgelink: "/images/foto4.jpeg", alt: "Pousada à beira do rio", legend: "Pousada à beira do rio" },
  { imgelink: "/images/foto5.jpeg", alt: "Área de lazer da pousada", legend: "Área de lazer da pousada" },
  { imgelink: "/images/foto6.jpeg", alt: "Vista do deck da pousada", legend: "Vista do deck da pousada" },
  { imgelink: "/images/foto7.jpeg", alt: "Pescador com peixe no rio", legend: "Pescador com peixe no rio" },
  { imgelink: "/images/foto8.jpeg", alt: "Cozinha ao ar livre da pousada", legend: "Cozinha ao ar livre da pousada" },
  { imgelink: "/images/foto9.jpeg", alt: "Quarto da pousada", legend: "Quarto da pousada" },
  { imgelink: "/images/foto10.jpeg", alt: "Pescador exibindo uma aruanã", legend: "Pescador exibindo uma aruanã" },
  { imgelink: "/images/foto11.jpg", alt: "Close de um tucunaré", legend: "Close de um tucunaré" },
  { imgelink: "/images/foto12.jpeg", alt: "Vista do rio ao entardecer", legend: "Vista do rio ao entardecer" },
  { imgelink: "/images/foto13.jpeg", alt: "Aruanã capturada", legend: "Aruanã capturada" },
  { imgelink: "/images/foto14.jpeg", alt: "Pesca esportiva", legend: "Pesca esportiva" },
  { imgelink: "/images/foto15.jpeg", alt: "Pescador feliz com sua captura", legend: "Pescador feliz com sua captura" },
  { imgelink: "/images/foto16.jpeg", alt: "Aruanã na linha", legend: "Aruanã na linha" }
];

const GallerySection = () => {
  const [active, setActive] = React.useState(data[0]);

  return (
    <section id="gallery" className="py-20 px-4 text-center bg-[#2F4F4F] text-white">
      <h2 className="text-3xl font-bold mb-8">Galeria de Fotos</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-lg mb-8">
          <Image
            className="h-auto w-full rounded-lg object-cover object-center"
            src={active.imgelink}
            alt={active.alt}
            width={800}
            height={450}
          />
          <p className="absolute bottom-2 left-2 text-white bg-darkGreen bg-opacity-75 rounded-md px-2 py-1">{active.legend}</p>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {data.map((image, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                onClick={() => setActive(image)}
                src={image.imgelink}
                className={`h-20 w-32 cursor-pointer rounded-lg object-cover object-center ${active.imgelink === image.imgelink ? 'ring-4 ring-darkGreen' : ''}`}
                alt={image.alt}
                width={150}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;