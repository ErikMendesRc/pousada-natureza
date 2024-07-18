"use client";

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário, por exemplo, usando fetch para enviar os dados para um servidor.
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 px-4 text-center bg-neutral text-dark">
      <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left text-lg mb-2">Nome</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left text-lg mb-2">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-left text-lg mb-2">Mensagem</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-primary text-neutral px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default ContactSection;