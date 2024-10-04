'use client';

import React from 'react';

const ReservationSection: React.FC = () => {
  return (
    <section id="reservation" className="py-20 px-4 text-center bg-white text-primary">
      <h2 className="text-3xl font-bold mb-4">Reserve Agora</h2>
      <p className="text-lg mb-6">Garanta já o seu lugar e viva uma aventura de pesca inesquecível na Amazônia!</p>
      <a
        href="https://wa.me/5519971649386"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-darkGreen transition-colors duration-300 shadow-lg"
      >
        Faça sua Reserva
      </a>
    </section>
  );
};

export default ReservationSection;