import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  FaBolt,
  FaShieldAlt,
  FaGift,
  FaArrowRight,
} from 'react-icons/fa';

const Consumers: NextPage = () => {
  return (
    <div className="bg-[#0D1B2A] text-[#E0E1DD]">
      <Head>
        <title>PolarBuy | Receba Melhor, Pague Menos</title>
        <meta
          name="description"
          content="Tudo o que ama da sua cidade, chegando mais rápido e mais barato. PolarBuy com PolarChain™ entrega confiança e conveniência em um só app."
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
          Baixar o App
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Chega <span className="text-[#FCA311]">Mais Rápido</span>. Paga{' '}
            <span className="text-[#FCA311]">Mais Barato</span>.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-8">
            Restaurantes, mercados, barbearias e serviços locais em um único lugar — com entrega
            confiável e preços honestos.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#cta"
              className="bg-[#FCA311] text-[#0D1B2A] font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Começar a Pedir <FaArrowRight className="inline ml-2" />
            </a>
            <a
              href="#demo"
              className="border-2 border-[#FCA311] text-[#FCA311] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#FCA311] hover:text-[#0D1B2A] transition-colors duration-300"
            >
              Ver Restaurantes & Lojas
            </a>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 bg-[#1B263B]/50">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              A força do comércio local com tecnologia de ponta
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 mt-6 grayscale opacity-60">
              <span className="text-4xl font-bold">Shopify</span>
              <span className="text-4xl font-bold">Stripe</span>
              <span className="text-4xl font-bold">Apple Pay</span>
              <span className="text-4xl font-bold">Google</span>
            </div>
          </div>
        </section>

        {/* Benefits (Consumers) */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Experiência movida por <span className="text-[#FCA311]">PolarChain™</span>
            </h2>
            <p className="text-lg text-[#b0b2af] max-w-2xl mx-auto mt-2">
              Qualidade, preço e velocidade — no mesmo pedido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaBolt className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Entrega Mais Rápida</h3>
              <p className="text-[#b0b2af]">
                Rotas inteligentes e logística local deixam o pedido na sua porta no menor tempo.
              </p>
            </div>

            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaShieldAlt className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Confiável e Seguro</h3>
              <p className="text-[#b0b2af]">
                Pagamentos protegidos e rastreamento em tempo real. Você sabe onde seu pedido está.
              </p>
            </div>

            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaGift className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Melhor Custo-Benefício</h3>
              <p className="text-[#b0b2af]">
                Menos taxas para o lojista = mais qualidade, melhores preços e ofertas para você.
              </p>
            </div>
          </div>
        </section>

        {/* Proof / Demo */}
        <section id="demo" className="bg-[#1B263B] py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Seu pedido, do jeito certo. <br />
                <span className="text-[#FCA311]">Rápido. Rastreado. Sem surpresas.</span>
              </h2>
              <p className="text-lg text-[#b0b2af] mt-4 mb-6">
                Quando o lojista paga menos taxas, ele investe mais na sua experiência: melhor
                embalagem, brindes e qualidade.
              </p>
              <div className="bg-green-900/50 border border-green-500 text-green-300 p-4 rounded-lg">
                <p className="text-2xl font-bold">Satisfação média 4.8★</p>
                <p>Mais cuidado no preparo e entrega = mais felicidade no recebimento.</p>
              </div>
            </div>
            <div className="bg-[#0D1B2A] h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[Vídeo: fluxo do pedido e rastreamento]</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="text-center container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Descubra os melhores do seu bairro.
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-10">
            Um app, tudo o que importa. Baixe e faça seu primeiro pedido agora.
          </p>
          <a
            href="#"
            className="bg-[#FCA311] text-[#0D1B2A] font-bold py-5 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20"
          >
            Baixar o App
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Consumers;
