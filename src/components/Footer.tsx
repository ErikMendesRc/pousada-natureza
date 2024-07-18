'use client';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F4F] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-6 md:mb-0 md:w-1/3">
          <Image src="/images/logo.svg" alt="Logo Pousada Natureza" width={300} height={150} />
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/3">
          <p className="text-lg font-bold">Sobre a Pousada Natureza</p>
          <p className="max-w-md mx-auto md:mx-0">
            Localizada no coração da Amazônia, a Pousada Natureza oferece uma experiência única de pesca esportiva, com todo o conforto e comodidade que você merece. Venha viver momentos inesquecíveis em meio à natureza exuberante.
          </p>
        </div>
        <div className="text-center md:text-right md:w-1/3">
          <p>&copy; 2024 Pousada Natureza. Todos os direitos reservados.</p>
          <p>
            Criado por:
            <a
              href="https://www.eebtecnologia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline ml-1"
            >
              E&B Tecnologia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;