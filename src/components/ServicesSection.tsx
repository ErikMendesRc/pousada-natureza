"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faShip, faUmbrellaBeach, faPlane, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-neutral dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-darkGreen dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                Nossos Serviços Exclusivos
              </h2>
              <p className="text-darkGreen text-base dark:text-neutral">
                Descubra abaixo os serviços premium e os benefícios exclusivos que oferecemos aos nossos clientes, criando uma experiência única por apenas R$ 5.000,00 por pessoa.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {[
            { icon: faFish, title: 'Pacote de Pesca - 5 Dias', description: 'Experiência completa de cinco dias de pesca, incluindo refeições e bebidas à vontade.' },
            { icon: faShip, title: 'Guias de Pesca Certificados', description: 'Pescarias guiadas por profissionais certificados e autorizados pelo governo de Manaus, proporcionando segurança e expertise.' },
            { icon: faPlane, title: 'Transporte Aeroportuário', description: 'Transporte confortável de ida e volta do aeroporto até nosso local, via carro ou van, garantindo sua tranquilidade.' },
            { icon: faUtensils, title: 'Pensão Completa', description: 'Refeições saborosas e variadas durante toda a estadia, oferecendo o melhor da culinária regional.' },
            { icon: faWifi, title: 'Internet de Alta Velocidade', description: 'Conexão à internet via Starlink, proporcionando acesso rápido e estável durante sua estadia.' },
            { icon: faUmbrellaBeach, title: 'Luau Exclusivo', description: 'Celebre a despedida do grupo com um luau exclusivo na praia, incluindo churrasco e bebidas.' }
          ].map((service, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <FontAwesomeIcon icon={service.icon} className="text-white text-3xl" />
                </div>
                <h4 className="text-darkGreen mb-[14px] text-2xl font-semibold">
                  {service.title}
                </h4>
                <p className="text-darkGreen">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection