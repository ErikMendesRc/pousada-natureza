'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-neutral p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/images/logo.svg" alt="Pousada Natureza Logo" width={250} height={75} />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">Sobre</Link></li>
          <li><Link href="#services">Serviços</Link></li>
          <li><Link href="#testimonials">Depoimentos</Link></li>
          <li><Link href="#gallery">Galeria</Link></li>
          <li><Link href="#location">Localização</Link></li>
        </ul>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-neutral">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-0 left-0 w-full h-full bg-primary text-neutral flex flex-col items-center justify-center md:hidden z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-neutral">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#about" onClick={toggleMenu}>Sobre</Link></li>
            <li><Link href="#services" onClick={toggleMenu}>Serviços</Link></li>
            <li><Link href="#testimonials" onClick={toggleMenu}>Depoimentos</Link></li>
            <li><Link href="#gallery" onClick={toggleMenu}>Galeria</Link></li>
            <li><Link href="#location" onClick={toggleMenu}>Localização</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;