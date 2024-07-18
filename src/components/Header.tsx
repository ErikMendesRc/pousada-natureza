'use client';

import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-neutral p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/images/logo.svg" alt="Pousada Natureza Logo" width={250} height={75} />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#services">Serviços</Link></li>
          <li><Link href="#testimonials">Depoimentos</Link></li>
          <li><Link href="#gallery">Galeria</Link></li>
          <li><Link href="#location">Localização</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;