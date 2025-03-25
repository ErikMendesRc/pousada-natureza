export function JsonLd() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: "Pousada Natureza",
      description:
        "Pousada especializada em pesca esportiva no Rio Preto da Eva, Amazonas, oferecendo pacotes all-inclusive para grupos de até 12 pessoas.",
      url: "https://www.pousadanatureza.com.br",
      telephone: "+55 92 98765-4321",
      email: "contato.pousadanatureza@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Igarapé Tiririca",
        addressLocality: "Rio Preto da Eva",
        addressRegion: "Amazonas",
        postalCode: "69000-000",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-3.0718531",
        longitude: "--59.4610173",
      },
      priceRange: "R$5.500 por pessoa",
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Pesca Esportiva",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Barcos com Motor 15HP",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Guias Nativos",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "All-Inclusive",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Ar-Condicionado",
          value: true,
        },
      ],
      image: [
        "https://www.pousadanatureza.com.br/images/pousada-exterior.jpg",
        "https://www.pousadanatureza.com.br/images/pesca-tucunare.jpg",
        "https://www.pousadanatureza.com.br/images/acomodacoes.jpg",
      ],
      offers: {
        "@type": "Offer",
        name: "Pacote de Pesca 7 dias",
        description: "7 dias de hospedagem com 5 dias de pesca, all-inclusive",
        price: "5500",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
      },
    }
  
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  }  