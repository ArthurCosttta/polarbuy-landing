import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  FaRoute,
  FaClock,
  FaMoneyBillWave,
  FaArrowRight,
} from 'react-icons/fa';

const Drivers: NextPage = () => {
  return (
    <div className="bg-[#0D1B2A] text-[#E0E1DD]">
      <Head>
        <title>PolarBuy Drivers | Mais Corridas, Mais Ganhos</title>
        <meta
          name="description"
          content="Rotas inteligentes, alta demanda e pagamentos confiáveis. Com o PolarBuy Drivers, quem dirige manda na própria renda."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/LogoPolarBuy.png" alt="PolarBuy Logo" width={150} height={40} />
        </div>
        <a
          href="#cta"
          className="hidden md:block bg-[#FCA311] text-[#0D1B2A] font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300"
        >
          Cadastrar como Motorista
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Mais Corridas. <span className="text-[#FCA311]">Mais Ganhos.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-8">
            A PolarChain™ conecta você à maior demanda da cidade com rotas otimizadas e pagamentos
            confiáveis. <span className="font-semibold">Sem taxas escondidas. Sem tempo perdido.</span>
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#cta"
              className="bg-[#FCA311] text-[#0D1B2A] font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Começar Agora <FaArrowRight className="inline ml-2" />
            </a>
            <a
              href="#demo"
              className="border-2 border-[#FCA311] text-[#FCA311] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#FCA311] hover:text-[#0D1B2A] transition-colors duration-300"
            >
              Ver Como Funciona
            </a>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-[#1B263B]/50">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              Tecnologia de rota e demanda inspirada nos gigantes
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 mt-6 grayscale opacity-60">
              <span className="text-4xl font-bold">Uber</span>
              <span className="text-4xl font-bold">Waze</span>
              <span className="text-4xl font-bold">DoorDash</span>
              <span className="text-4xl font-bold">Shopify</span>
            </div>
          </div>
        </section>

        {/* Benefits (Drivers) */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Dirija com a força da <span className="text-[#FCA311]">PolarChain™</span>
            </h2>
            <p className="text-lg text-[#b0b2af] max-w-2xl mx-auto mt-2">
              Mais pedidos, rotas mais curtas e ganhos constantes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaMoneyBillWave className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ganhos Otimizados</h3>
              <p className="text-[#b0b2af]">
                Alta demanda real: mais entregas por hora, menos tempo ocioso. Seu tempo rende mais.
              </p>
            </div>

            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaRoute className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Rotas Inteligentes</h3>
              <p className="text-[#b0b2af]">
                Atribuição por proximidade e rotas otimizadas reduzem quilometragem e combustível.
              </p>
            </div>

            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaClock className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pagamentos Confiáveis</h3>
              <p className="text-[#b0b2af]">
                Recebimentos claros e previsíveis. Sem taxas confusas. Transparência total.
              </p>
            </div>
          </div>
        </section>

        {/* Proof / Demo */}
        <section id="demo" className="bg-[#1B263B] py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Mais Corridas por Hora. <br />
                <span className="text-[#FCA311]">Menos Tempo Parado.</span>
              </h2>
              <p className="text-lg text-[#b0b2af] mt-4 mb-6">
                Drivers na PolarBuy reportaram aumento de até <strong>32% nas corridas/hora</strong> com
                rotas otimizadas e filas inteligentes.
              </p>
              <div className="bg-green-900/50 border border-green-500 text-green-300 p-4 rounded-lg">
                <p className="text-2xl font-bold">+R$ 1.200/mês em média</p>
                <p>Somando rotas curtas, menos espera e mais picos de demanda.</p>
              </div>
            </div>
            <div className="bg-[#0D1B2A] h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[Vídeo: app do driver e simulação de rota]</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="text-center container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Controle sua renda. <br /> A cidade é sua.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-10">
            Cadastre-se e comece a receber corridas hoje mesmo. Sem complicação.
          </p>
          <a
            href="#"
            className="bg-[#FCA311] text-[#0D1B2A] font-bold py-5 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20"
          >
            Cadastrar como Motorista
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} PolarBuy Drivers. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Drivers;
