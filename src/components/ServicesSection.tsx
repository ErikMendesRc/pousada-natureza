"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faShip, faUmbrellaBeach, faPlane, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-neutral dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h2 className="text-darkGreen dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">O que oferecemos</h2>
              <p className="text-darkGreen text-base dark:text-neutral">Confira abaixo nossos principais serviços e benefícios exclusivos para nossos clientes.</p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faFish} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen mb-[14px] text-2xl font-semibold">Pacote de 5 Dias de Pesca</h4>
              <p className="text-darkGreen ">Desfrute de cinco dias de pesca emocionante e relaxante, incluindo todas as refeições e bebidas.</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faShip} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen  mb-[14px] text-2xl font-semibold">Pescarias Guiadas</h4>
              <p className="text-darkGreen d">Guias experientes para garantir a melhor experiência de pesca.</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faPlane} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen  mb-[14px] text-2xl font-semibold">Translados Inclusos</h4>
              <p className="text-darkGreen ">Transporte confortável e seguro de ida e volta até o aeroporto.</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faUtensils} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen mb-[14px] text-2xl font-semibold">Pensão Completa</h4>
              <p className="text-darkGreen">Todas as refeições incluídas, com opções variadas e deliciosas.</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faWifi} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen -[14px] text-2xl font-semibold">Internet Gratuita</h4>
              <p className="text-darkGreen ">Internet via Starlink, garantindo alta velocidade e estabilidade.</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-9 rounded-[20px] bg-white dark:bg-dark-2 p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                <FontAwesomeIcon icon={faUmbrellaBeach} className="text-white text-3xl" />
              </div>
              <h4 className="text-darkGreen  mb-[14px] text-2xl font-semibold">Lual na Praia</h4>
              <p className="text-darkGreen ">Desfrute de um lual na praia com churrasco e bebidas para a despedida do grupo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;