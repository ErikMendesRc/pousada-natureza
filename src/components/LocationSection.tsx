'use client';

import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 px-4 text-center bg-[#2F4F4F] text-white">
      <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
      <p className="text-lg mb-6">Encontre-nos no coração da Amazônia para uma experiência única de pesca e aventura.</p>
      <div className="w-full h-64 sm:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63770.74343797888!2d-59.4651271!3d-3.0588614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926ec7df45ab9693%3A0xc8c7eb35c0368805!2sPousada%20Natureza!5e0!3m2!1sen!2sbr!4v1690438459848!5m2!1sen!2sbr"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </section>
  );
};

export default LocationSection;