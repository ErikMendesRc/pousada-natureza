"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    text: "Incrível! Os guias são super competentes e o luau na praia foi inesquecível.",
    author: "João",
    role: "Ribeirão Preto-SP"
  },
  {
    text: "A Pousada Natureza é um paraíso para qualquer pescador. Atendimento perfeito!",
    author: "Maria",
    role: "Campinas-SP"
  },
  {
    text: "Recomendo a Pousada Natureza a todos os amantes da pesca. Localização paradisíaca!",
    author: "Carlos",
    role: "Campinas-SP"
  },
  {
    text: "Momentos maravilhosos na Pousada Natureza. Equipe atenciosa e instalações top.",
    author: "Leo",
    role: "Belo Horizonte-MG"
  },
  {
    text: "Lugar perfeito para relaxar e pescar. O luau na praia foi o ponto alto da viagem.",
    author: "Roberto",
    role: "São Paulo-SP"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-24 bg-neutral">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between gap-8">
          <h2 className="text-4xl text-center font-bold text-dark lg:text-left">Depoimentos</h2>
          <div className="flex items-center gap-8">
            <button
              onClick={prevTestimonial}
              className="group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="h-6 w-6 text-primary group-hover:text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="group flex justify-center items-center border border-solid border-primary w-12 h-12 transition-all duration-500 rounded-full hover:bg-primary"
            >
              <FontAwesomeIcon icon={faChevronRight} className="h-6 w-6 text-primary group-hover:text-white" />
            </button>
          </div>
        </div>
        <div className="lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
          <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-primary">
            <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-primary">
              {[...Array(5)].map((star, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className="w-5 h-5" />
              ))}
            </div>
            <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
              {testimonials[currentIndex].text}
            </p>
            <div className="flex items-center gap-5">
              <div className="grid gap-1">
                <h5 className="text-dark font-medium transition-all duration-500 group-hover:text-primary">
                  {testimonials[currentIndex].author}
                </h5>
                <span className="text-sm leading-6 text-gray-500">{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;