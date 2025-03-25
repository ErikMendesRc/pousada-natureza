"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "pt" | "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations object
const translations = {
  // Header
  "nav.home": {
    pt: "Início",
    en: "Home",
    es: "Inicio",
  },
  "nav.about": {
    pt: "Sobre",
    en: "About",
    es: "Sobre",
  },
  "nav.packages": {
    pt: "Pacotes",
    en: "Packages",
    es: "Paquetes",
  },
  "nav.all-inclusive": {
    pt: "All-Inclusive",
    en: "All-Inclusive",
    es: "Todo Incluido",
  },
  "nav.equipment": {
    pt: "Equipamentos",
    en: "Equipment",
    es: "Equipos",
  },
  "nav.species": {
    pt: "Espécies",
    en: "Species",
    es: "Especies",
  },
  "nav.prices": {
    pt: "Preços",
    en: "Prices",
    es: "Precios",
  },
  "nav.accommodations": {
    pt: "Acomodações",
    en: "Accommodations",
    es: "Alojamiento",
  },
  "nav.location": {
    pt: "Localização",
    en: "Location",
    es: "Ubicación",
  },
  "nav.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
  "button.book": {
    pt: "Reservar Agora",
    en: "Book Now",
    es: "Reservar Ahora",
  },

  // Hero Section
  "hero.title": {
    pt: "Pesca Esportiva na Amazônia como Você Nunca Viu",
    en: "Sport Fishing in the Amazon Like You've Never Seen Before",
    es: "Pesca Deportiva en el Amazonas Como Nunca Has Visto",
  },
  "hero.subtitle": {
    pt: "Descubra o paraíso dos pescadores no Rio Preto da Eva. Pacotes exclusivos, guias experientes e as melhores espécies da Amazônia.",
    en: "Discover the fisherman's paradise on the Rio Preto da Eva. Exclusive packages, experienced guides, and the best species in the Amazon.",
    es: "Descubre el paraíso de los pescadores en el Río Preto da Eva. Paquetes exclusivos, guías experimentados y las mejores especies del Amazonas.",
  },
  "hero.cta": {
    pt: "Reserve sua Aventura",
    en: "Book Your Adventure",
    es: "Reserva tu Aventura",
  },
  "hero.video": {
    pt: "Assista o Vídeo",
    en: "Watch the Video",
    es: "Ver el Video",
  },
  "hero.discover": {
    pt: "Descubra Mais",
    en: "Discover More",
    es: "Descubre Más",
  },

  // About Section
  "about.title": {
    pt: "Sobre a Pousada Natureza",
    en: "About Pousada Natureza",
    es: "Sobre Pousada Natureza",
  },
  "about.subtitle": {
    pt: "Um refúgio exclusivo para os amantes da pesca esportiva e da natureza amazônica",
    en: "An exclusive retreat for lovers of sport fishing and Amazonian nature",
    es: "Un refugio exclusivo para los amantes de la pesca deportiva y la naturaleza amazónica",
  },
  "about.p1": {
    pt: "Localizada às margens do Rio Preto da Eva, a Pousada Natureza oferece uma experiência única de hospedagem e pesca no coração da Amazônia. Nossa pousada foi projetada para proporcionar conforto e tranquilidade, permitindo que nossos hóspedes desfrutem plenamente das belezas naturais e da rica biodiversidade da região.",
    en: "Located on the banks of the Rio Preto da Eva, Pousada Natureza offers a unique lodging and fishing experience in the heart of the Amazon. Our lodge was designed to provide comfort and tranquility, allowing our guests to fully enjoy the natural beauty and rich biodiversity of the region.",
    es: "Ubicada a orillas del Río Preto da Eva, Pousada Natureza ofrece una experiencia única de alojamiento y pesca en el corazón del Amazonas. Nuestra posada fue diseñada para proporcionar comodidad y tranquilidad, permitiendo que nuestros huéspedes disfruten plenamente de las bellezas naturales y la rica biodiversidad de la región.",
  },
  "about.p2": {
    pt: "Nascidos e criados as margens do Rio, nos especializamos em proporcionar as melhores experiências de pesca esportiva na Amazônia, com guias experientes que conhecem todos os segredos do rio e as melhores técnicas para capturar as espécies mais desejadas pelos pescadores.",
    en: "Born and raised on the riverbanks, we specialize in providing the best sport fishing experiences in the Amazon, with experienced guides who know all the river’s secrets and the best techniques to catch the most sought-after species by anglers.",
    es: "Nacidos y criados a orillas del río, nos especializamos en ofrecer las mejores experiencias de pesca deportiva en la Amazonía, con guías experimentados que conocen todos los secretos del río y las mejores técnicas para capturar las especies más deseadas por los pescadores.",
  },
  "about.p3": {
    pt: "Situada no Igarapé Tiririca, reconhecido como o melhor igarapé do Rio Preto da Eva, nossa pousada oferece acesso privilegiado a alguns dos melhores pontos de pesca da região, onde você poderá encontrar espécies como tucunaré, pirarucu, tambaqui e muitas outras.",
    en: "Located on the Tiririca Igarapé, known as the best igarapé on the Rio Preto da Eva, our lodge offers privileged access to some of the best fishing spots in the region, where you can find species such as peacock bass, arapaima, tambaqui, and many others.",
    es: "Ubicada en el Igarapé Tiririca, reconocido como el mejor igarapé del Río Preto da Eva, nuestra posada ofrece acceso privilegiado a algunos de los mejores puntos de pesca de la región, donde podrás encontrar especies como tucunaré, pirarucú, tambaquí y muchas más.",
  },
  "about.feature1": {
    pt: "Guias especializados",
    en: "Specialized guides",
    es: "Guías especializados",
  },
  "about.feature2": {
    pt: "Equipamentos de qualidade",
    en: "Quality equipment",
    es: "Equipos de calidad",
  },
  "about.feature3": {
    pt: "Gastronomia regional",
    en: "Regional cuisine",
    es: "Gastronomía regional",
  },
  "about.feature4": {
    pt: "Acomodações confortáveis",
    en: "Comfortable accommodations",
    es: "Alojamiento confortable",
  },
  "about.feature5": {
    pt: "Passeios ecológicos",
    en: "Ecological tours",
    es: "Paseos ecológicos",
  },
  "about.feature6": {
    pt: "Pesca esportiva",
    en: "Sport fishing",
    es: "Pesca deportiva",
  },

  // Packages Section
  "packages.title": {
    pt: "Pacotes de Pesca",
    en: "Fishing Packages",
    es: "Paquetes de Pesca",
  },
  "packages.subtitle": {
    pt: "Experiências exclusivas de pesca esportiva na Amazônia, cuidadosamente planejadas para grupos",
    en: "Exclusive sport fishing experiences in the Amazon, carefully planned for groups",
    es: "Experiencias exclusivas de pesca deportiva en el Amazonas, cuidadosamente planificadas para grupos",
  },
  "packages.heading": {
    pt: "Pacotes Exclusivos para Grupos",
    en: "Exclusive Packages for Groups",
    es: "Paquetes Exclusivos para Grupos",
  },
  "packages.p1": {
    pt: "Na Pousada Natureza, especializamo-nos em oferecer pacotes de pesca para grupos de até 12 pessoas, sendo 10 o número ideal para garantir o máximo conforto e atenção personalizada. Nossos pacotes incluem 7 dias de hospedagem, com 5 dias dedicados exclusivamente à pesca.",
    en: "At Pousada Natureza, we specialize in offering fishing packages for groups of up to 12 people, with 10 being the ideal number to ensure maximum comfort and personalized attention. Our packages include 7 days of accommodation, with 5 days dedicated exclusively to fishing.",
    es: "En Pousada Natureza, nos especializamos en ofrecer paquetes de pesca para grupos de hasta 12 personas, siendo 10 el número ideal para garantizar el máximo confort y atención personalizada. Nuestros paquetes incluyen 7 días de alojamiento, con 5 días dedicados exclusivamente a la pesca.",
  },
  "packages.p2": {
    pt: "Cada pacote é cuidadosamente planejado para proporcionar uma experiência completa, combinando aventura, conforto e contato com a natureza amazônica. Nossos guias experientes conhecem os melhores pontos de pesca e as técnicas mais eficazes para cada espécie.",
    en: "Each package is carefully planned to provide a complete experience, combining adventure, comfort, and contact with Amazonian nature. Our experienced guides know the best fishing spots and the most effective techniques for each species.",
    es: "Cada paquete está cuidadosamente planificado para proporcionar una experiencia completa, combinando aventura, comodidad y contacto con la naturaleza amazónica. Nuestros guías experimentados conocen los mejores puntos de pesca y las técnicas más eficaces para cada especie.",
  },
  "packages.group": {
    pt: "Tamanho do Grupo",
    en: "Group Size",
    es: "Tamaño del Grupo",
  },
  "packages.group.desc": {
    pt: "Até 12 pessoas\nIdeal: 10 pessoas",
    en: "Up to 12 people\nIdeal: 10 people",
    es: "Hasta 12 personas\nIdeal: 10 personas",
  },
  "packages.duration": {
    pt: "Duração",
    en: "Duration",
    es: "Duración",
  },
  "packages.duration.desc": {
    pt: "7 dias de hospedagem\n5 dias de pesca",
    en: "7 days of accommodation\n5 days of fishing",
    es: "7 días de alojamiento\n5 días de pesca",
  },
  "packages.modalities": {
    pt: "Modalidades",
    en: "Modalities",
    es: "Modalidades",
  },
  "packages.modalities.desc": {
    pt: "Pesca esportiva\nPesque e solte",
    en: "Sport fishing\nCatch and release",
    es: "Pesca deportiva\nCaptura y liberación",
  },
  "packages.all-inclusive": {
    pt: "All-Inclusive",
    en: "All-Inclusive",
    es: "Todo Incluido",
  },
  "packages.all-inclusive.desc": {
    pt: "Hospedagem, alimentação\nEquipamentos e guias",
    en: "Accommodation, meals\nEquipment and guides",
    es: "Alojamiento, comidas\nEquipo y guías",
  },
  "packages.request": {
    pt: "Solicitar Reserva",
    en: "Request Reservation",
    es: "Solicitar Reserva",
  },
  "packages.why": {
    pt: "Por que escolher nossos pacotes?",
    en: "Why choose our packages?",
    es: "¿Por qué elegir nuestros paquetes?",
  },
  "packages.reason1": {
    pt: "Experiência personalizada para seu grupo",
    en: "Personalized experience for your group",
    es: "Experiencia personalizada para tu grupo",
  },
  "packages.reason2": {
    pt: "Guias nativos com profundo conhecimento local",
    en: "Native guides with deep local knowledge",
    es: "Guías nativos con profundo conocimiento local",
  },
  "packages.reason3": {
    pt: "Acesso a pontos de pesca exclusivos",
    en: "Access to exclusive fishing spots",
    es: "Acceso a puntos de pesca exclusivos",
  },
  "packages.reason4": {
    pt: "Equipamentos de pesca de alta qualidade",
    en: "High-quality fishing equipment",
    es: "Equipos de pesca de alta calidad",
  },
  "packages.reason5": {
    pt: "Gastronomia amazônica autêntica",
    en: "Authentic Amazonian cuisine",
    es: "Gastronomía amazónica auténtica",
  },
  "packages.reason6": {
    pt: "Acomodações confortáveis em meio à natureza",
    en: "Comfortable accommodations in the midst of nature",
    es: "Alojamiento confortable en medio de la naturaleza",
  },

  // All-Inclusive Section
  "all-inclusive.title": {
    pt: "Experiência All-Inclusive",
    en: "All-Inclusive Experience",
    es: "Experiencia Todo Incluido",
  },
  "all-inclusive.subtitle": {
    pt: "Desfrute de uma estadia sem preocupações com tudo incluído no seu pacote",
    en: "Enjoy a worry-free stay with everything included in your package",
    es: "Disfruta de una estancia sin preocupaciones con todo incluido en tu paquete",
  },
  "all-inclusive.heading": {
    pt: "Tudo Incluído para seu Conforto",
    en: "Everything Included for Your Comfort",
    es: "Todo Incluido para tu Comodidad",
  },
  "all-inclusive.p1": {
    pt: "Na Pousada Natureza, oferecemos uma experiência verdadeiramente all-inclusive, onde você não precisa se preocupar com nada além de aproveitar sua pescaria e relaxar. Nossos pacotes incluem todas as refeições, bebidas e lanches durante toda a sua estadia.",
    en: "At Pousada Natureza, we offer a truly all-inclusive experience, where you don't need to worry about anything other than enjoying your fishing and relaxing. Our packages include all meals, drinks, and snacks throughout your stay.",
    es: "En Pousada Natureza, ofrecemos una experiencia verdaderamente todo incluido, donde no necesitas preocuparte por nada más que disfrutar de tu pesca y relajarte. Nuestros paquetes incluyen todas las comidas, bebidas y aperitivos durante toda tu estancia.",
  },
  "all-inclusive.p2": {
    pt: "Desfrute da autêntica gastronomia amazônica, preparada com ingredientes frescos e locais, incluindo peixes da região, frutas tropicais e outros sabores únicos que só a Amazônia pode oferecer. Nossas refeições são preparadas por chefs experientes que conhecem bem os sabores regionais.",
    en: "Enjoy authentic Amazonian cuisine, prepared with fresh, local ingredients, including regional fish, tropical fruits, and other unique flavors that only the Amazon can offer. Our meals are prepared by experienced chefs who know the regional flavors well.",
    es: "Disfruta de la auténtica gastronomía amazónica, preparada con ingredientes frescos y locales, incluyendo pescados de la región, frutas tropicales y otros sabores únicos que solo el Amazonas puede ofrecer. Nuestras comidas son preparadas por chefs experimentados que conocen bien los sabores regionales.",
  },
  "all-inclusive.p3": {
    pt: "Além das refeições principais, oferecemos uma variedade de bebidas, incluindo guaraná, cerveja, água e sucos regionais feitos com frutas amazônicas.",
    en: "In addition to main meals, we offer a variety of drinks, including guarana, beer, water, and regional juices made with Amazonian fruits.",
    es: "Además de las comidas principales, ofrecemos una variedad de bebidas, incluyendo guaraná, cerveza, agua y jugos regionales hechos con frutas amazónicas. ",
  },
  "all-inclusive.meals": {
    pt: "Refeições Completas",
    en: "Complete Meals",
    es: "Comidas Completas",
  },
  "all-inclusive.meals.item1": {
    pt: "Café da manhã reforçado",
    en: "Hearty breakfast",
    es: "Desayuno abundante",
  },
  "all-inclusive.meals.item2": {
    pt: "Almoço com pratos típicos",
    en: "Lunch with typical dishes",
    es: "Almuerzo con platos típicos",
  },
  "all-inclusive.meals.item3": {
    pt: "Jantar com especialidades amazônicas",
    en: "Dinner with Amazonian specialties",
    es: "Cena con especialidades amazónicas",
  },
  "all-inclusive.meals.item4": {
    pt: "Opções para restrições alimentares",
    en: "Options for dietary restrictions",
    es: "Opciones para restricciones alimentarias",
  },
  "all-inclusive.drinks": {
    pt: "Bebidas Inclusas",
    en: "Included Drinks",
    es: "Bebidas Incluidas",
  },
  "all-inclusive.drinks.item1": {
    pt: "Cerveja gelada",
    en: "Cold beer",
    es: "Cerveza fría",
  },
  "all-inclusive.drinks.item2": {
    pt: "Guaraná regional",
    en: "Regional guarana",
    es: "Guaraná regional",
  },
  "all-inclusive.drinks.item3": {
    pt: "Água mineral",
    en: "Mineral water",
    es: "Agua mineral",
  },
  "all-inclusive.drinks.item4": {
    pt: "Sucos de frutas amazônicas",
    en: "Amazonian fruit juices",
    es: "Jugos de frutas amazónicas",
  },
  "all-inclusive.snacks": {
    pt: "Lanches e Extras",
    en: "Snacks and Extras",
    es: "Aperitivos y Extras",
  },
  "all-inclusive.snacks.item1": {
    pt: "Lanches para os dias de pesca",
    en: "Snacks for fishing days",
    es: "Aperitivos para los días de pesca",
  },
  "all-inclusive.snacks.item2": {
    pt: "Frutas regionais",
    en: "Regional fruits",
    es: "Frutas regionales",
  },
  "all-inclusive.snacks.item3": {
    pt: "Petiscos amazônicos",
    en: "Amazonian appetizers",
    es: "Aperitivos amazónicos",
  },
  "all-inclusive.snacks.item4": {
    pt: "Doces típicos",
    en: "Typical sweets",
    es: "Dulces típicos",
  },
  "all-inclusive.highlights": {
    pt: "Destaques da Nossa Gastronomia",
    en: "Highlights of Our Cuisine",
    es: "Destacados de Nuestra Gastronomía",
  },
  "all-inclusive.fish": {
    pt: "Peixe Fresco",
    en: "Fresh Fish",
    es: "Pescado Fresco",
  },
  "all-inclusive.fruits": {
    pt: "Frutas Regionais",
    en: "Regional Fruits",
    es: "Frutas Regionales",
  },
  "all-inclusive.juices": {
    pt: "Sucos Naturais",
    en: "Natural Juices",
    es: "Jugos Naturales",
  },
  "all-inclusive.coffee": {
    pt: "Café Regional",
    en: "Regional Coffee",
    es: "Café Regional",
  },
  "all-inclusive.manioc": {
    pt: "Mandioca",
    en: "Manioc",
    es: "Yuca",
  },
  "all-inclusive.beer": {
    pt: "Cerveja Gelada",
    en: "Cold Beer",
    es: "Cerveza Fría",
  },

  // Equipment Section
  "equipment.title": {
    pt: "Equipamentos de Pesca",
    en: "Fishing Equipment",
    es: "Equipos de Pesca",
  },
  "equipment.subtitle": {
    pt: "Tudo o que você precisa para uma experiência de pesca inesquecível na Amazônia",
    en: "Everything you need for an unforgettable fishing experience in the Amazon",
    es: "Todo lo que necesitas para una experiencia de pesca inolvidable en el Amazonas",
  },
  "equipment.heading": {
    pt: "Equipamentos Completos para sua Aventura",
    en: "Complete Equipment for Your Adventure",
    es: "Equipos Completos para tu Aventura",
  },
  "equipment.p1": {
    pt: "Na Pousada Natureza, fornecemos todos os equipamentos de pesca necessários para que você tenha a melhor experiência possível. Nossos barcos são equipados com motores de 15HP, oferecendo segurança e agilidade para explorar os melhores pontos de pesca.",
    en: "At Pousada Natureza, we provide all the fishing equipment necessary for you to have the best possible experience. Our boats are equipped with 15HP engines, offering safety and agility to explore the best fishing spots.",
    es: "En Pousada Natureza, proporcionamos todos los equipos de pesca necesarios para que tengas la mejor experiencia posible. Nuestros barcos están equipados con motores de 15HP, ofreciendo seguridad y agilidad para explorar los mejores puntos de pesca.",
  },
  "equipment.p2": {
    pt: "Contamos com pilotos nativos experientes que conhecem profundamente a região e sabem exatamente onde encontrar as melhores espécies. Além disso, oferecemos gasolina ilimitada para que você possa explorar sem preocupações.",
    en: "We have experienced native pilots who know the region deeply and know exactly where to find the best species. In addition, we offer unlimited gasoline so you can explore without worries.",
    es: "Contamos con pilotos nativos experimentados que conocen profundamente la región y saben exactamente dónde encontrar las mejores especies. Además, ofrecemos gasolina ilimitada para que puedas explorar sin preocupaciones.",
  },
  "equipment.p3": {
    pt: "Para a pesca de peixes de couro, fornecemos iscas naturais específicas. Caso deseje pescar esta espécie, recomendamos consultar nossa equipe antecipadamente para garantir a disponibilidade das iscas adequadas.",
    en: "For leather fish fishing, we provide specific natural baits. If you wish to fish for this species, we recommend consulting our team in advance to ensure the availability of suitable baits.",
    es: "Para la pesca de peces de cuero, proporcionamos cebos naturales específicos. Si deseas pescar esta especie, recomendamos consultar a nuestro equipo con anticipación para garantizar la disponibilidad de los cebos adecuados.",
  },
  "equipment.boats": {
    pt: "Barcos Equipados",
    en: "Equipped Boats",
    es: "Barcos Equipados",
  },
  "equipment.boats.desc": {
    pt: "Barcos com motores de 15HP, confortáveis e seguros para navegar pelos rios e igarapés.",
    en: "Boats with 15HP engines, comfortable and safe for navigating rivers and streams.",
    es: "Barcos con motores de 15HP, cómodos y seguros para navegar por ríos e igarapés.",
  },
  "equipment.pilots": {
    pt: "Pilotos Nativos",
    en: "Native Pilots",
    es: "Pilotos Nativos",
  },
  "equipment.pilots.desc": {
    pt: "Guias experientes que conhecem todos os segredos dos rios e as melhores técnicas de pesca.",
    en: "Experienced guides who know all the secrets of the rivers and the best fishing techniques.",
    es: "Guías experimentados que conocen todos los secretos de los ríos y las mejores técnicas de pesca.",
  },
  "equipment.fuel": {
    pt: "Gasolina Ilimitada",
    en: "Unlimited Fuel",
    es: "Gasolina Ilimitada",
  },
  "equipment.fuel.desc": {
    pt: "Explore sem preocupações, com combustível suficiente para todas as suas aventuras de pesca.",
    en: "Explore without worries, with enough fuel for all your fishing adventures.",
    es: "Explora sin preocupaciones, con combustible suficiente para todas tus aventuras de pesca.",
  },
  "equipment.baits": {
    pt: "Iscas Naturais",
    en: "Natural Baits",
    es: "Cebos Naturales",
  },
  "equipment.baits.desc": {
    pt: "Iscas específicas para pesca de peixes de couro, aumentando suas chances de sucesso.",
    en: "Specific baits for leather fish fishing, increasing your chances of success.",
    es: "Cebos específicos para la pesca de peces de cuero, aumentando tus posibilidades de éxito.",
  },
  "equipment.included": {
    pt: "O que está incluso no seu pacote",
    en: "What is included in your package",
    es: "Lo que está incluido en tu paquete",
  },
  "equipment.boats.title": {
    pt: "Barcos com Motor 15HP",
    en: "Boats with 15HP Engine",
    es: "Barcos con Motor 15HP",
  },
  "equipment.boats.subtitle": {
    pt: "Confortáveis e seguros para toda a expedição",
    en: "Comfortable and safe for the entire expedition",
    es: "Cómodos y seguros para toda la expedición",
  },
  "equipment.guides.title": {
    pt: "Guias Especializados",
    en: "Specialized Guides",
    es: "Guías Especializados",
  },
  "equipment.guides.subtitle": {
    pt: "Conhecedores dos melhores pontos de pesca",
    en: "Knowledgeable about the best fishing spots",
    es: "Conocedores de los mejores puntos de pesca",
  },
  "equipment.fuel.title": {
    pt: "Gasolina Ilimitada",
    en: "Unlimited Fuel",
    es: "Gasolina Ilimitada",
  },
  "equipment.fuel.subtitle": {
    pt: "Para explorar todos os cantos do rio",
    en: "To explore all corners of the river",
    es: "Para explorar todos los rincones del río",
  },
  "equipment.safety.title": {
    pt: "Equipamentos de Segurança",
    en: "Safety Equipment",
    es: "Equipos de Seguridad",
  },
  "equipment.safety.subtitle": {
    pt: "Coletes salva-vidas e kit de primeiros socorros",
    en: "Life jackets and first aid kit",
    es: "Chalecos salvavidas y kit de primeros auxilios",
  },

  // Species Section
  "species.title": {
    pt: "Espécies de Peixes",
    en: "Fish Species",
    es: "Especies de Peces",
  },
  "species.subtitle": {
    pt: "Conheça as principais espécies que você poderá encontrar durante sua pescaria",
    en: "Learn about the main species you can find during your fishing trip",
    es: "Conoce las principales especies que podrás encontrar durante tu pesca",
  },
  "species.heading": {
    pt: "Diversidade de Espécies Amazônicas",
    en: "Diversity of Amazonian Species",
    es: "Diversidad de Especies Amazónicas",
  },
  "species.p1": {
    pt: "O Rio Preto da Eva e o Igarapé Tiririca são conhecidos pela rica biodiversidade e pela abundância de peixes, tornando-os destinos ideais para os amantes da pesca esportiva. Na Pousada Natureza, você terá a oportunidade de pescar algumas das espécies mais desejadas pelos pescadores.",
    en: "The Rio Preto da Eva and the Tiririca Igarapé are known for their rich biodiversity and abundance of fish, making them ideal destinations for sport fishing enthusiasts. At Pousada Natureza, you will have the opportunity to fish for some of the most desired species by fishermen.",
    es: "El Río Preto da Eva y el Igarapé Tiririca son conocidos por su rica biodiversidad y abundancia de peces, lo que los convierte en destinos ideales para los amantes de la pesca deportiva. En Pousada Natureza, tendrás la oportunidad de pescar algunas de las especies más deseadas por los pescadores.",
  },
  "species.p2": {
    pt: "Entre as principais espécies encontradas em nossas águas estão o famoso tucunaré, conhecido por sua força e resistência, o gigante pirarucu, considerado um dos maiores peixes de água doce do mundo, além de tambaqui, traíra, pirarara e muitas outras espécies nativas da Amazônia.",
    en: "Among the main species found in our waters are the famous peacock bass, known for its strength and resistance, the giant arapaima, considered one of the largest freshwater fish in the world, as well as tambaqui, wolf fish, redtail catfish, and many other native Amazonian species.",
    es: "Entre las principales especies encontradas en nuestras aguas están el famoso tucunaré, conocido por su fuerza y resistencia, el gigante pirarucú, considerado uno de los peces de agua dulce más grandes del mundo, además de tambaquí, tararira, pirarara y muchas otras especies nativas del Amazonas.",
  },
  "species.p3": {
    pt: 'Nossos guias conhecem os melhores pontos e as técnicas mais eficazes para cada espécie, aumentando significativamente suas chances de sucesso. Praticamos a pesca esportiva na modalidade "pesque e solte", contribuindo para a preservação das espécies e garantindo que futuras gerações também possam desfrutar dessa experiência única.',
    en: 'Our guides know the best spots and the most effective techniques for each species, significantly increasing your chances of success. We practice sport fishing in the "catch and release" mode, contributing to the preservation of species and ensuring that future generations can also enjoy this unique experience.',
    es: 'Nuestros guías conocen los mejores puntos y las técnicas más eficaces para cada especie, aumentando significativamente tus posibilidades de éxito. Practicamos la pesca deportiva en la modalidad "captura y liberación", contribuyendo a la preservación de las especies y garantizando que las generaciones futuras también puedan disfrutar de esta experiencia única.',
  },
  "species.peacock": {
    pt: "Tucunaré",
    en: "Peacock Bass",
    es: "Tucunaré",
  },
  "species.peacock.weight": {
    pt: "Peso: 0-12 kg",
    en: "Weight: 0-12 kg",
    es: "Peso: 0-12 kg",
  },
  "species.peacock.size": {
    pt: "Tamanho: 0-90+ cm",
    en: "Size: 0-90+ cm",
    es: "Tamaño: 0-90+ cm",
  },
  "species.peacock.desc": {
    pt: "Conhecido por sua agressividade e resistência, o tucunaré é um dos peixes mais procurados pelos pescadores esportivos na Amazônia. Sua coloração vibrante e comportamento predador fazem dele um troféu desejado.",
    en: "Known for its aggressiveness and resistance, the peacock bass is one of the most sought-after fish by sport fishermen in the Amazon. Its vibrant coloration and predatory behavior make it a desired trophy.",
    es: "Conocido por su agresividad y resistencia, el tucunaré es uno de los peces más buscados por los pescadores deportivos en el Amazonas. Su coloración vibrante y comportamiento depredador lo convierten en un trofeo deseado.",
  },
  "species.arapaima": {
    pt: "Pirarucu",
    en: "Arapaima",
    es: "Pirarucú",
  },
  "species.arapaima.weight": {
    pt: "Peso: 0-200 kg",
    en: "Weight: 0-200 kg",
    es: "Peso: 0-200 kg",
  },
  "species.arapaima.size": {
    pt: "Tamanho: 0-3 m",
    en: "Size: 0-3 m",
    es: "Tamaño: 0-3 m",
  },
  "species.arapaima.desc": {
    pt: "Considerado um dos maiores peixes de água doce do mundo, o pirarucu é um verdadeiro gigante amazônico. Sua pesca é regulamentada e praticamos o pesque e solte para contribuir com a preservação da espécie.",
    en: "Considered one of the largest freshwater fish in the world, the arapaima is a true Amazonian giant. Its fishing is regulated, and we practice catch and release to contribute to the preservation of the species.",
    es: "Considerado uno de los peces de agua dulce más grandes del mundo, el pirarucú es un verdadero gigante amazónico. Su pesca está regulada y practicamos la captura y liberación para contribuir a la preservación de la especie.",
  },
  "species.tambaqui": {
    pt: "Tambaqui",
    en: "Tambaqui",
    es: "Tambaquí",
  },
  "species.tambaqui.weight": {
    pt: "Peso: 0-30+ kg",
    en: "Weight: 0-30+ kg",
    es: "Peso: 0-30+ kg",
  },
  "species.tambaqui.size": {
    pt: "Tamanho: 0-100 cm",
    en: "Size: 0-100 cm",
    es: "Tamaño: 0-100 cm",
  },
  "species.tambaqui.desc": {
    pt: "O tambaqui é um peixe forte e resistente, muito apreciado tanto na pesca esportiva quanto na culinária amazônica. Sua pesca requer técnicas específicas e conhecimento dos seus hábitos alimentares.",
    en: "The tambaqui is a strong and resistant fish, highly appreciated both in sport fishing and in Amazonian cuisine. Its fishing requires specific techniques and knowledge of its feeding habits.",
    es: "El tambaquí es un pez fuerte y resistente, muy apreciado tanto en la pesca deportiva como en la cocina amazónica. Su pesca requiere técnicas específicas y conocimiento de sus hábitos alimenticios.",
  },
  "species.other": {
    pt: "Outras Espécies Disponíveis",
    en: "Other Available Species",
    es: "Otras Especies Disponibles",
  },
  "species.traira": {
    pt: "Traíra",
    en: "Wolf Fish",
    es: "Tararira",
  },
  "species.pirarara": {
    pt: "Pirarara",
    en: "Redtail Catfish",
    es: "Pirarara",
  },
  "species.surubim": {
    pt: "Surubim",
    en: "Surubim",
    es: "Surubí",
  },
  "species.piraiba": {
    pt: "Piraíba",
    en: "Piraíba",
    es: "Piraíba",
  },
  "species.matrinxa": {
    pt: "Matrinxã",
    en: "Matrinxã",
    es: "Matrinxã",
  },
  "species.piau": {
    pt: "Piau",
    en: "Piau",
    es: "Piau",
  },
  "species.aruana": {
    pt: "Aruanã",
    en: "Arowana",
    es: "Aruaná",
  },
  "species.cachorra": {
    pt: "Cachorra",
    en: "Payara",
    es: "Payara",
  },
  "species.piranha": {
    pt: "Piranha",
    en: "Piranha",
    es: "Piraña",
  },
  "species.curimata": {
    pt: "Curimatã",
    en: "Curimata",
    es: "Curimatá",
  },

  // Prices Section
  "prices.title": {
    pt: "Preços e Condições de Pagamento",
    en: "Prices and Payment Terms",
    es: "Precios y Condiciones de Pago",
  },
  "prices.subtitle": {
    pt: "Investimento transparente para uma experiência inesquecível de pesca na Amazônia",
    en: "Transparent investment for an unforgettable fishing experience in the Amazon",
    es: "Inversión transparente para una experiencia inolvidable de pesca en el Amazonas",
  },
  "prices.heading": {
    pt: "Investimento por Pessoa",
    en: "Investment per Person",
    es: "Inversión por Persona",
  },
  "prices.p1": {
    pt: "O valor do nosso pacote completo é de R$ 5.500,00 por pessoa, incluindo 7 dias de hospedagem com 5 dias dedicados à pesca, todas as refeições, bebidas, equipamentos e guias especializados.",
    en: "The value of our complete package is R$ 5,500.00 per person, including 7 days of accommodation with 5 days dedicated to fishing, all meals, drinks, equipment, and specialized guides.",
    es: "El valor de nuestro paquete completo es de R$ 5.500,00 por persona, incluyendo 7 días de alojamiento con 5 días dedicados a la pesca, todas las comidas, bebidas, equipos y guías especializados.",
  },
  "prices.p2": {
    pt: "Para garantir sua reserva, solicitamos um depósito inicial de 30% do valor total. O saldo restante pode ser parcelado e deve ser quitado até duas semanas antes da viagem.",
    en: "To secure your reservation, we request an initial deposit of 30% of the total amount. The remaining balance can be paid in installments and must be settled up to two weeks before the trip.",
    es: "Para asegurar tu reserva, solicitamos un depósito inicial del 30% del valor total. El saldo restante puede ser pagado en cuotas y debe ser liquidado hasta dos semanas antes del viaje.",
  },
  "prices.p3": {
    pt: "Aceitamos diversas formas de pagamento, incluindo transferência bancária, PIX e cartões de crédito, para sua conveniência. Entre em contato conosco para discutir as opções de parcelamento disponíveis.",
    en: "We accept various forms of payment, including bank transfer, PIX, and credit cards, for your convenience. Contact us to discuss the available installment options.",
    es: "Aceptamos diversas formas de pago, incluyendo transferencia bancaria, PIX y tarjetas de crédito, para tu conveniencia. Contáctanos para discutir las opciones de pago a plazos disponibles.",
  },
  "prices.per-person": {
    pt: "Valor por Pessoa",
    en: "Value per Person",
    es: "Valor por Persona",
  },
  "prices.package": {
    pt: "Pacote completo de 7 dias",
    en: "Complete 7-day package",
    es: "Paquete completo de 7 días",
  },
  "prices.item1": {
    pt: "Hospedagem por 7 dias",
    en: "7 days of accommodation",
    es: "7 días de alojamiento",
  },
  "prices.item2": {
    pt: "5 dias de pesca com guias",
    en: "5 days of fishing with guides",
    es: "5 días de pesca con guías",
  },
  "prices.item3": {
    pt: "Todas as refeições e bebidas",
    en: "All meals and drinks",
    es: "Todas las comidas y bebidas",
  },
  "prices.item4": {
    pt: "Equipamentos e barcos",
    en: "Equipment and boats",
    es: "Equipos y barcos",
  },
  "prices.payment": {
    pt: "Formas de Pagamento",
    en: "Payment Methods",
    es: "Formas de Pago",
  },
  "prices.payment.item1": {
    pt: "Transferência bancária",
    en: "Bank transfer",
    es: "Transferencia bancaria",
  },
  "prices.payment.item2": {
    pt: "PIX",
    en: "PIX",
    es: "PIX",
  },
  "prices.payment.item3": {
    pt: "Cartões de crédito",
    en: "Credit cards",
    es: "Tarjetas de crédito",
  },
  "prices.payment.item4": {
    pt: "Parcelamento disponível",
    en: "Installment available",
    es: "Pago a plazos disponible",
  },
  "prices.reservation": {
    pt: "Condições de Reserva",
    en: "Reservation Conditions",
    es: "Condiciones de Reserva",
  },
  "prices.reservation.item1": {
    pt: "30% de entrada",
    en: "30% deposit",
    es: "30% de entrada",
  },
  "prices.reservation.item2": {
    pt: "Saldo até 2 semanas antes",
    en: "Balance up to 2 weeks before",
    es: "Saldo hasta 2 semanas antes",
  },
  "prices.reservation.item3": {
    pt: "Consulte política de cancelamento",
    en: "Check cancellation policy",
    es: "Consulta política de cancelación",
  },
  "prices.reservation.item4": {
    pt: "Reserva sujeita à disponibilidade",
    en: "Reservation subject to availability",
    es: "Reserva sujeta a disponibilidad",
  },
  "prices.faq": {
    pt: "Perguntas Frequentes sobre Preços",
    en: "Frequently Asked Questions about Prices",
    es: "Preguntas Frecuentes sobre Precios",
  },
  "prices.faq1.q": {
    pt: "O que está incluso no valor?",
    en: "What is included in the price?",
    es: "¿Qué está incluido en el precio?",
  },
  "prices.faq1.a": {
    pt: "O valor inclui hospedagem, todas as refeições (café da manhã, almoço e jantar), bebidas (guaraná, cerveja, água), lanches, barcos com motor 15HP, guias experientes, gasolina ilimitada e iscas naturais para pesca de peixes de couro.",
    en: "The price includes accommodation, all meals (breakfast, lunch, and dinner), drinks (guarana, beer, water), snacks, boats with 15HP engines, experienced guides, unlimited gasoline, and natural baits for leather fish fishing.",
    es: "El precio incluye alojamiento, todas las comidas (desayuno, almuerzo y cena), bebidas (guaraná, cerveza, agua), aperitivos, barcos con motor 15HP, guías experimentados, gasolina ilimitada y cebos naturales para la pesca de peces de cuero.",
  },
  "prices.faq2.q": {
    pt: "Há descontos para grupos?",
    en: "Are there discounts for groups?",
    es: "¿Hay descuentos para grupos?",
  },
  "prices.faq2.a": {
    pt: "Sim, oferecemos condições especiais para grupos a partir de 8 pessoas. Entre em contato conosco para discutir as opções disponíveis e obter um orçamento personalizado.",
    en: "Yes, we offer special conditions for groups of 8 or more people. Contact us to discuss the available options and get a personalized quote.",
    es: "Sí, ofrecemos condiciones especiales para grupos a partir de 8 personas. Contáctanos para discutir las opciones disponibles y obtener un presupuesto personalizado.",
  },
  "prices.faq3.q": {
    pt: "Como funciona o pagamento parcelado?",
    en: "How does installment payment work?",
    es: "¿Cómo funciona el pago a plazos?",
  },
  "prices.faq3.a": {
    pt: "Após o pagamento da entrada de 30%, o saldo restante pode ser parcelado em até 3 vezes, com a última parcela vencendo duas semanas antes da data da viagem.",
    en: "After paying the 30% deposit, the remaining balance can be paid in up to 3 installments, with the last installment due two weeks before the travel date.",
    es: "Después de pagar la entrada del 30%, el saldo restante puede ser pagado en hasta 3 cuotas, con la última cuota venciendo dos semanas antes de la fecha del viaje.",
  },
  "prices.faq4.q": {
    pt: "Qual a política de cancelamento?",
    en: "What is the cancellation policy?",
    es: "¿Cuál es la política de cancelación?",
  },
  "prices.faq4.a": {
    pt: "Cancelamentos com mais de 30 dias de antecedência recebem reembolso de 70% do valor pago. Cancelamentos entre 15 e 30 dias recebem 50%. Cancelamentos com menos de 15 dias não são reembolsáveis.",
    en: "Cancellations more than 30 days in advance receive a 70% refund of the amount paid. Cancellations between 15 and 30 days receive 50%. Cancellations less than 15 days are non-refundable.",
    es: "Las cancelaciones con más de 30 días de anticipación reciben un reembolso del 70% del valor pagado. Las cancelaciones entre 15 y 30 días reciben el 50%. Las cancelaciones con menos de 15 días no son reembolsables.",
  },

  // Accommodations Section
  "accommodations.title": {
    pt: "Acomodações",
    en: "Accommodations",
    es: "Alojamiento",
  },
  "accommodations.subtitle": {
    pt: "Conforto e tranquilidade em meio à natureza amazônica",
    en: "Comfort and tranquility in the midst of Amazonian nature",
    es: "Comodidad y tranquilidad en medio de la naturaleza amazónica",
  },
  "accommodations.heading": {
    pt: "Quartos Confortáveis",
    en: "Comfortable rooms",
    es: "Habitaciones cómodas",
  },
  "accommodations.p1": {
    pt: "Na Pousada Natureza, oferecemos acomodações confortáveis e bem equipadas, projetadas para proporcionar uma estadia agradável em meio à natureza amazônica. Nossos quartos são espaçosos e aconchegantes, permitindo que você descanse após um dia intenso de pesca.",
    en: "At Pousada Natureza, we offer comfortable and well-equipped accommodations, designed to provide a pleasant stay in the midst of Amazonian nature. Our rooms are spacious and cozy, allowing you to rest after an intense day of fishing.",
    es: "En Pousada Natureza, ofrecemos alojamiento cómodo y bien equipado, diseñado para proporcionar una estancia agradable en medio de la naturaleza amazónica. Nuestras cabañas son espaciosas y acogedoras, permitiéndote descansar después de un intenso día de pesca.",
  },
  "accommodations.p2": {
    pt: "Todos os quartos são equipados com uma cama de solteiro e uma beliche, com exceção de um quarto especial que possui uma cama de casal. Esta configuração é ideal para acomodar grupos de pescadores ou famílias que desejam compartilhar a experiência.",
    en: "All rooms are equipped with a single bed and a bunk bed, with the exception of a special room that has a double bed. This configuration is ideal for accommodating groups of fishermen or families who wish to share the experience.",
    es: "Todas las habitaciones están equipadas con una cama individual y una litera, con la excepción de una habitación especial que tiene una cama doble. Esta configuración es ideal para acomodar grupos de pescadores o familias que desean compartir la experiencia.",
  },
  "accommodations.p3": {
    pt: "Nossos quartos possuem vista para o rio ou para a floresta, permitindo que você desperte com o canto dos pássaros e o som suave das águas. Todos são equipados com ar-condicionado, garantindo seu conforto mesmo nos dias mais quentes da Amazônia.",
    en: "Our rooms have a view of the river or the forest, allowing you to wake up to the singing of birds and the soft sound of the waters. All are equipped with air conditioning, ensuring your comfort even on the hottest days in the Amazon.",
    es: "Nuestras cabañas tienen vista al río o al bosque, permitiéndote despertar con el canto de los pájaros y el suave sonido de las aguas. Todas están equipadas con aire acondicionado, garantizando tu comodidad incluso en los días más calurosos del Amazonas.",
  },
  "accommodations.beds": {
    pt: "Camas confortáveis",
    en: "Comfortable beds",
    es: "Camas cómodas",
  },
  "accommodations.ac": {
    pt: "Ar-condicionado",
    en: "Air conditioning",
    es: "Aire acondicionado",
  },
  "accommodations.wifi": {
    pt: "Wi-Fi nas áreas comuns",
    en: "Wi-Fi in common areas",
    es: "Wi-Fi en áreas comunes",
  },
  "accommodations.tv": {
    pt: "TV",
    en: "TV",
    es: "TV",
  },
  "accommodations.rooms": {
    pt: "Configuração dos Quartos",
    en: "Room Configuration",
    es: "Configuración de las Habitaciones",
  },
  "accommodations.rooms.desc": {
    pt: "Todos os quartos são equipados com uma cama de solteiro e uma beliche, proporcionando acomodação confortável para até 3 pessoas por quarto.",
    en: "All rooms are equipped with a single bed and a bunk bed, providing comfortable accommodation for up to 3 people per room.",
    es: "Todas las habitaciones están equipadas con una cama individual y una litera, proporcionando alojamiento cómodo para hasta 3 personas por habitación.",
  },
  "accommodations.capacity": {
    pt: "Capacidade: 3 pessoas por quarto",
    en: "Capacity: 3 people per room",
    es: "Capacidad: 3 personas por habitación",
  },
  "accommodations.special": {
    pt: "Quarto Especial",
    en: "Special Room",
    es: "Habitación Especial",
  },
  "accommodations.special.desc": {
    pt: "Dispomos de um quarto especial com cama de casal, ideal para casais que desejam desfrutar de uma experiência de pesca juntos.",
    en: "We have a special room with a double bed, ideal for couples who wish to enjoy a fishing experience together.",
    es: "Disponemos de una habitación especial con cama doble, ideal para parejas que desean disfrutar de una experiencia de pesca juntos.",
  },
  "accommodations.special.capacity": {
    pt: "Capacidade: 2 pessoas",
    en: "Capacity: 2 people",
    es: "Capacidad: 2 personas",
  },
  "accommodations.amenities": {
    pt: "Amenidades",
    en: "Amenities",
    es: "Comodidades",
  },
  "accommodations.amenities.item1": {
    pt: "Ar-condicionado em todos os quartos",
    en: "Air conditioning in all rooms",
    es: "Aire acondicionado en todas las habitaciones",
  },
  "accommodations.amenities.item2": {
    pt: "Wi-Fi nas áreas comuns",
    en: "Wi-Fi in common areas",
    es: "Wi-Fi en áreas comunes",
  },
  "accommodations.amenities.item3": {
    pt: "TV nos quartos",
    en: "TV in rooms",
    es: "TV en las habitaciones",
  },
  "accommodations.amenities.item4": {
    pt: "Banheiro privativo",
    en: "Private bathroom",
    es: "Baño privado",
  },

  // Location Section
  "location.title": {
    pt: "Localização",
    en: "Location",
    es: "Ubicación",
  },
  "location.subtitle": {
    pt: "Como chegar à Pousada Natureza no Rio Preto da Eva, Amazonas",
    en: "How to get to Pousada Natureza on the Rio Preto da Eva, Amazonas",
    es: "Cómo llegar a Pousada Natureza en el Río Preto da Eva, Amazonas",
  },
  "location.heading": {
    pt: "Localização Privilegiada",
    en: "Privileged Location",
    es: "Ubicación Privilegiada",
  },
  "location.p1": {
    pt: "A Pousada Natureza está estrategicamente localizada no Igarapé Tiririca, reconhecido como o melhor igarapé do Rio Negro, a aproximadamente 80 km de Manaus, capital do Amazonas. Esta localização privilegiada oferece acesso a alguns dos melhores pontos de pesca da região.",
    en: "Pousada Natureza is strategically located on the Tiririca Igarapé, recognized as the best igarapé on the Rio Negro, approximately 80 km from Manaus, the capital of Amazonas. This privileged location offers access to some of the best fishing spots in the region.",
    es: "Pousada Natureza está estratégicamente ubicada en el Igarapé Tiririca, reconocido como el mejor igarapé del Río Negro, a aproximadamente 80 km de Manaus, capital del Amazonas. Esta ubicación privilegiada ofrece acceso a algunos de los mejores puntos de pesca de la región.",
  },
  "location.p2": {
    pt: "O Rio Preto da Eva é conhecido por sua rica biodiversidade e pela abundância de peixes, tornando-o um destino ideal para os amantes da pesca esportiva. A região também oferece paisagens deslumbrantes, com a exuberante floresta amazônica e uma variedade impressionante de fauna e flora.",
    en: "The Rio Preto da Eva is known for its rich biodiversity and abundance of fish, making it an ideal destination for sport fishing enthusiasts. The region also offers stunning landscapes, with the lush Amazon rainforest and an impressive variety of fauna and flora.",
    es: "El Río Preto da Eva es conocido por su rica biodiversidad y abundancia de peces, lo que lo convierte en un destino ideal para los amantes de la pesca deportiva. La región también ofrece paisajes impresionantes, con la exuberante selva amazónica y una impresionante variedad de fauna y flora.",
  },
  "location.plane": {
    pt: "De Avião",
    en: "By Plane",
    es: "En Avión",
  },
  "location.plane.desc": {
    pt: "Chegue ao Aeroporto Internacional de Manaus (Eduardo Gomes). Nossa equipe pode organizar o traslado do aeroporto até a pousada.",
    en: "Arrive at Manaus International Airport (Eduardo Gomes). Our team can arrange transportation from the airport to the lodge.",
    es: "Llega al Aeropuerto Internacional de Manaus (Eduardo Gomes). Nuestro equipo puede organizar el traslado del aeropuerto a la posada.",
  },
  "location.car": {
    pt: "De Carro",
    en: "By Car",
    es: "En Coche",
  },
  "location.car.desc": {
    pt: "De Manaus, siga pela AM-010 até o município de Rio Preto da Eva (aproximadamente 80 km). Na cidade, siga as placas para o porto, onde nossa equipe estará esperando para o traslado de barco até a pousada.",
    en: "From Manaus, follow AM-010 to the municipality of Rio Preto da Eva (approximately 80 km). In the city, follow the signs to the port, where our team will be waiting for the boat transfer to the lodge.",
    es: "Desde Manaus, sigue por la AM-010 hasta el municipio de Rio Preto da Eva (aproximadamente 80 km). En la ciudad, sigue las señales hasta el puerto, donde nuestro equipo estará esperando para el traslado en barco hasta la posada.",
  },
  "location.boat": {
    pt: "De Barco",
    en: "By Boat",
    es: "En Barco",
  },
  "location.boat.desc": {
    pt: "Do porto de Rio Preto da Eva, o traslado até a pousada é feito em barcos da nossa frota, em uma viagem de aproximadamente 30 minutos pelo rio, onde você já pode começar a apreciar a beleza da natureza amazônica.",
    en: "From the port of Rio Preto da Eva, the transfer to the lodge is made in boats from our fleet, in a journey of approximately 30 minutes along the river, where you can already begin to appreciate the beauty of Amazonian nature.",
    es: "Desde el puerto de Rio Preto da Eva, el traslado hasta la posada se realiza en barcos de nuestra flota, en un viaje de aproximadamente 30 minutos por el río, donde ya puedes comenzar a apreciar la belleza de la naturaleza amazónica.",
  },
  "location.coordinates": {
    pt: "Coordenadas GPS: -3.0718531,-59.4610173",
    en: "GPS Coordinates: -3.0718531,-59.4610173",
    es: "Coordenadas GPS: -3.0718531,-59.4610173",
  },
  "location.transfer": {
    pt: "Solicitar Informações de Traslado",
    en: "Request Transfer Information",
    es: "Solicitar Información de Traslado",
  },

  // Gallery Section
  "gallery.title": {
    pt: "Galeria",
    en: "Gallery",
    es: "Galería",
  },
  "gallery.subtitle": {
    pt: "Conheça um pouco mais da Pousada Natureza através das nossas imagens",
    en: "Learn more about Pousada Natureza through our images",
    es: "Conoce un poco más de Pousada Natureza a través de nuestras imágenes",
  },
  "gallery.more": {
    pt: "Ver Mais Fotos",
    en: "See More Photos",
    es: "Ver Más Fotos",
  },
  "gallery.close": {
    pt: "Fechar",
    en: "Close",
    es: "Cerrar",
  },

  // Testimonials Section
  "testimonials.title": {
    pt: "Depoimentos",
    en: "Testimonials",
    es: "Testimonios",
  },
  "testimonials.subtitle": {
    pt: "Experiências reais de quem já desfrutou da Pousada Natureza",
    en: "Real experiences from those who have already enjoyed Pousada Natureza",
    es: "Experiencias reales de quienes ya han disfrutado de Pousada Natureza",
  },
  "testimonials.1.text": {
    pt: '"Uma experiência incrível! A pesca foi excelente, consegui capturar vários tucunarés com a ajuda do guia. As acomodações são confortáveis e a comida é deliciosa. Certamente voltarei com minha família."',
    en: '"An incredible experience! The fishing was excellent, I managed to catch several peacock bass with the help of the guide. The accommodations are comfortable and the food is delicious. I will certainly return with my family."',
    es: '"¡Una experiencia increíble! La pesca fue excelente, logré capturar varios tucunarés con la ayuda del guía. El alojamiento es cómodo y la comida es deliciosa. Ciertamente volveré con mi familia."',
  },
  "testimonials.1.name": {
    pt: "Carlos Silva",
    en: "Carlos Silva",
    es: "Carlos Silva",
  },
  "testimonials.1.location": {
    pt: "São Paulo, SP",
    en: "São Paulo, SP",
    es: "São Paulo, SP",
  },
  "testimonials.2.text": {
    pt: '"Lugar paradisíaco! A natureza ao redor é deslumbrante, os passeios de barco pelo rio são inesquecíveis. Os funcionários são muito atenciosos e os guias conhecem todos os segredos da pesca na região. Recomendo fortemente!"',
    en: '"Paradisiacal place! The surrounding nature is stunning, the boat trips along the river are unforgettable. The staff are very attentive and the guides know all the secrets of fishing in the region. I strongly recommend it!"',
    es: '"¡Lugar paradisíaco! La naturaleza alrededor es deslumbrante, los paseos en barco por el río son inolvidables. El personal es muy atento y los guías conocen todos los secretos de la pesca en la región. ¡Lo recomiendo encarecidamente!"',
  },
  "testimonials.2.name": {
    pt: "Mariana Costa",
    en: "Mariana Costa",
    es: "Mariana Costa",
  },
  "testimonials.2.location": {
    pt: "Rio de Janeiro, RJ",
    en: "Rio de Janeiro, RJ",
    es: "Rio de Janeiro, RJ",
  },
  "testimonials.3.text": {
    pt: '"Minha terceira vez na Pousada Natureza e sempre fico impressionado. A pesca esportiva é excelente, os quartos são muito confortáveis e a gastronomia regional é um show à parte. Um verdadeiro paraíso para os amantes da pesca e da natureza."',
    en: '"My third time at Pousada Natureza and I am always impressed. The sport fishing is excellent, the rooms are very comfortable, and the regional cuisine is a show in itself. A true paradise for lovers of fishing and nature."',
    es: '"Mi tercera vez en Pousada Natureza y siempre quedo impresionado. La pesca deportiva es excelente, las cabañas son muy cómodas y la gastronomía regional es un espectáculo aparte. Un verdadero paraíso para los amantes de la pesca y la naturaleza."',
  },
  "testimonials.3.name": {
    pt: "Roberto Mendes",
    en: "Roberto Mendes",
    es: "Roberto Mendes",
  },
  "testimonials.3.location": {
    pt: "Belo Horizonte, MG",
    en: "Belo Horizonte, MG",
    es: "Belo Horizonte, MG",
  },

  // Contact Section
  "contact.title": {
    pt: "Entre em Contato",
    en: "Contact Us",
    es: "Contáctanos",
  },
  "contact.subtitle": {
    pt: "Estamos prontos para ajudar a planejar sua aventura de pesca na Pousada Natureza",
    en: "We are ready to help plan your fishing adventure at Pousada Natureza",
    es: "Estamos listos para ayudar a planificar tu aventura de pesca en Pousada Natureza",
  },
  "contact.info": {
    pt: "Informações de Contato",
    en: "Contact Information",
    es: "Información de Contacto",
  },
  "contact.p": {
    pt: "Entre em contato conosco para obter mais informações sobre a Pousada Natureza, verificar disponibilidade ou fazer uma reserva. Nossa equipe está pronta para responder a todas as suas perguntas e ajudar a planejar sua estadia perfeita.",
    en: "Contact us for more information about Pousada Natureza, check availability, or make a reservation. Our team is ready to answer all your questions and help plan your perfect stay.",
    es: "Contáctanos para obtener más información sobre Pousada Natureza, verificar disponibilidad o hacer una reserva. Nuestro equipo está listo para responder a todas tus preguntas y ayudar a planificar tu estancia perfecta.",
  },
  "contact.phone": {
    pt: "Telefone",
    en: "Phone",
    es: "Teléfono",
  },
  "contact.email": {
    pt: "E-mail",
    en: "Email",
    es: "Correo electrónico",
  },
  "contact.address": {
    pt: "Endereço",
    en: "Address",
    es: "Dirección",
  },
  "contact.address.text": {
    pt: "Igarapé Tiririca, Rio Preto da Eva\nAmazonas, Brasil\nCoordenadas GPS: -3.0718531,-59.4610173",
    en: "Tiririca Igarapé, Rio Preto da Eva\nAmazonas, Brazil\nGPS Coordinates: -3.0718531,-59.4610173",
    es: "Igarapé Tiririca, Rio Preto da Eva\nAmazonas, Brasil\nCoordenadas GPS: -3.0718531,-59.4610173",
  },
  "contact.social": {
    pt: "Siga-nos nas Redes Sociais",
    en: "Follow Us on Social Media",
    es: "Síguenos en Redes Sociales",
  },
  "contact.hours": {
    pt: "Horário de Atendimento",
    en: "Service Hours",
    es: "Horario de Atención",
  },
  "contact.hours.phone": {
    pt: "Atendimento telefônico: Segunda a Domingo, das 8:00 às 20:00",
    en: "Phone service: Monday to Sunday, from 8:00 AM to 8:00 PM",
    es: "Atención telefónica: Lunes a Domingo, de 8:00 a 20:00",
  },
  "contact.hours.email": {
    pt: "E-mail: Respondemos em até 24 horas",
    en: "Email: We respond within 24 hours",
    es: "Correo electrónico: Respondemos en hasta 24 horas",
  },
  "contact.hours.checkin": {
    pt: "Check-in: A combinar",
    en: "Check-in: To be agreed",
    es: "Check-in: A convenir",
  },
  "contact.hours.checkout": {
    pt: "Check-out: A combinar",
    en: "Check-out: To be agreed",
    es: "Check-out: A convenir",
  },
  "contact.form": {
    pt: "Formulário de Contato",
    en: "Contact Form",
    es: "Formulario de Contacto",
  },
  "contact.success": {
    pt: "Mensagem Enviada com Sucesso!",
    en: "Message Sent Successfully!",
    es: "¡Mensaje Enviado con Éxito!",
  },
  "contact.success.text": {
    pt: "Agradecemos seu contato. Nossa equipe responderá o mais breve possível.",
    en: "Thank you for your contact. Our team will respond as soon as possible.",
    es: "Agradecemos tu contacto. Nuestro equipo responderá lo antes posible.",
  },
  "contact.new": {
    pt: "Enviar Nova Mensagem",
    en: "Send New Message",
    es: "Enviar Nuevo Mensaje",
  },
  "contact.name": {
    pt: "Nome Completo",
    en: "Full Name",
    es: "Nombre Completo",
  },
  "contact.email.label": {
    pt: "E-mail",
    en: "Email",
    es: "Correo electrónico",
  },
  "contact.phone.label": {
    pt: "Telefone",
    en: "Phone",
    es: "Teléfono",
  },
  "contact.subject": {
    pt: "Assunto",
    en: "Subject",
    es: "Asunto",
  },
  "contact.subject.reservation": {
    pt: "Reserva",
    en: "Reservation",
    es: "Reserva",
  },
  "contact.subject.info": {
    pt: "Informações",
    en: "Information",
    es: "Información",
  },
  "contact.subject.packages": {
    pt: "Pacotes de Pesca",
    en: "Fishing Packages",
    es: "Paquetes de Pesca",
  },
  "contact.subject.quote": {
    pt: "Orçamento para Grupo",
    en: "Group Quote",
    es: "Presupuesto para Grupo",
  },
  "contact.subject.other": {
    pt: "Outros",
    en: "Other",
    es: "Otros",
  },
  "contact.date": {
    pt: "Data Pretendida (opcional)",
    en: "Intended Date (optional)",
    es: "Fecha Prevista (opcional)",
  },
  "contact.date.select": {
    pt: "Selecione uma data",
    en: "Select a date",
    es: "Selecciona una fecha",
  },
  "contact.people": {
    pt: "Número de Pessoas",
    en: "Number of People",
    es: "Número de Personas",
  },
  "contact.people.select": {
    pt: "Selecione o número de pessoas",
    en: "Select the number of people",
    es: "Selecciona el número de personas",
  },
  "contact.people.1-3": {
    pt: "1-3 pessoas",
    en: "1-3 people",
    es: "1-3 personas",
  },
  "contact.people.4-6": {
    pt: "4-6 pessoas",
    en: "4-6 people",
    es: "4-6 personas",
  },
  "contact.people.7-9": {
    pt: "7-9 pessoas",
    en: "7-9 people",
    es: "7-9 personas",
  },
  "contact.people.10-12": {
    pt: "10-12 pessoas",
    en: "10-12 people",
    es: "10-12 personas",
  },
  "contact.message": {
    pt: "Mensagem",
    en: "Message",
    es: "Mensaje",
  },
  "contact.message.placeholder": {
    pt: "Digite sua mensagem aqui...",
    en: "Type your message here...",
    es: "Escribe tu mensaje aquí...",
  },
  "contact.terms": {
    pt: "Concordo com os termos e condições e a política de privacidade.",
    en: "I agree to the terms and conditions and privacy policy.",
    es: "Acepto los términos y condiciones y la política de privacidad.",
  },
  "contact.send": {
    pt: "Enviar Mensagem",
    en: "Send Message",
    es: "Enviar Mensaje",
  },

  // Footer
  "footer.description": {
    pt: "Uma experiência única de pesca esportiva e hospedagem no coração da Amazônia, às margens do Rio Preto da Eva, no famoso Igarapé Tiririca.",
    en: "A unique sport fishing and lodging experience in the heart of the Amazon, on the banks of the Rio Preto da Eva, on the famous Tiririca Igarapé.",
    es: "Una experiencia única de pesca deportiva y alojamiento en el corazón del Amazonas, a orillas del Río Preto da Eva, en el famoso Igarapé Tiririca.",
  },
  "footer.links": {
    pt: "Links Rápidos",
    en: "Quick Links",
    es: "Enlaces Rápidos",
  },
  "footer.about": {
    pt: "Sobre Nós",
    en: "About Us",
    es: "Sobre Nosotros",
  },
  "footer.packages": {
    pt: "Pacotes de Pesca",
    en: "Fishing Packages",
    es: "Paquetes de Pesca",
  },
  "footer.all-inclusive": {
    pt: "All-Inclusive",
    en: "All-Inclusive",
    es: "Todo Incluido",
  },
  "footer.equipment": {
    pt: "Equipamentos",
    en: "Equipment",
    es: "Equipos",
  },
  "footer.species": {
    pt: "Espécies de Peixes",
    en: "Fish Species",
    es: "Especies de Peces",
  },
  "footer.prices": {
    pt: "Preços",
    en: "Prices",
    es: "Precios",
  },
  "footer.accommodations": {
    pt: "Acomodações",
    en: "Accommodations",
    es: "Alojamiento",
  },
  "footer.location": {
    pt: "Localização",
    en: "Location",
    es: "Ubicación",
  },
  "footer.contact": {
    pt: "Contato",
    en: "Contact",
    es: "Contacto",
  },
  "footer.rights": {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved.",
    es: "Todos los derechos reservados.",
  },
  "footer.privacy": {
    pt: "Política de Privacidade",
    en: "Privacy Policy",
    es: "Política de Privacidad",
  },
  "footer.terms": {
    pt: "Termos de Uso",
    en: "Terms of Use",
    es: "Términos de Uso",
  },

  // Currency
  "currency.brl": {
    pt: "R$",
    en: "R$",
    es: "R$",
  },
  "currency.usd": {
    pt: "US$",
    en: "US$",
    es: "US$",
  },
  "currency.eur": {
    pt: "€",
    en: "€",
    es: "€",
  },
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt")

  // Function to translate keys
  const t = (key: keyof typeof translations): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }  

  // Set language based on browser preference on initial load
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "pt" || browserLang === "en" || browserLang === "es") {
      setLanguage(browserLang as Language)
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}