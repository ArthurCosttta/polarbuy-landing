import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FaShieldAlt, FaChartLine, FaTruck, FaArrowRight } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className="bg-[#0D1B2A] text-[#E0E1DD]">
      <Head>
        <title>PolarBuy | Domine Sua Cidade, Recupere Seu Lucro</title>
        <meta name="description" content="Pare de pagar taxas abusivas. Com o PolarBuy e a tecnologia PolarChain™, você corta custos, controla sua entrega e aumenta suas vendas." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Adicione sua logo aqui na pasta /public */}
          <Image src="/LogoPolarBuy.png" alt="PolarBuy Logo" width={150} height={40} />
        </div>
        <a href="#cta" className="hidden md:block bg-[#FCA311] text-[#0D1B2A] font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300">
          Crie Sua Loja Agora
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Pare de Pagar Taxas Abusivas.<br />
            <span className="text-[#FCA311]">Domine Sua Cidade.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-8">
            Você está cansado de entregar 30% do seu lucro para plataformas que não te ajudam a crescer? 
            Chegou a hora de tomar o controle com o PolarBuy.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#cta" className="bg-[#FCA311] text-[#0D1B2A] font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300">
              Crie Sua Loja em 1 Clique
              <FaArrowRight className="inline ml-2" />
            </a>
            <a href="#demo" className="border-2 border-[#FCA311] text-[#FCA311] font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#FCA311] hover:text-[#0D1B2A] transition-colors duration-300">
              Veja a Demonstração
            </a>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-12 bg-[#1B263B]/50">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              A mesma revolução que mudou mercados, agora no seu bairro
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 mt-6 grayscale opacity-60">
              {/* Logos de empresas disruptivas para associação de poder */}
              <span className="text-4xl font-bold">Uber</span>
              <span className="text-4xl font-bold">Airbnb</span>
              <span className="text-4xl font-bold">Stripe</span>
              <span className="text-4xl font-bold">Shopify</span>
            </div>
          </div>
        </section>

        {/* Benefits Section (PolarChain™) */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">O Poder da <span className="text-[#FCA311]">PolarChain™</span></h2>
            <p className="text-lg text-[#b0b2af] max-w-2xl mx-auto mt-2">Nosso ecossistema inteligente não é mais um app. É sua arma para vencer.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaShieldAlt className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Corte Custos, Não Lucros</h3>
              <p className="text-[#b0b2af]">Com taxas até 70% menores, o dinheiro que ia para as plataformas agora volta para o seu bolso. Invista no seu crescimento, não na taxa deles.</p>
            </div>
            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaTruck className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Controle Total da Entrega</h3>
              <p className="text-[#b0b2af]">Conecte-se diretamente com motoristas e empresas de logística. Defina suas taxas, suas regras. A entrega deixa de ser um custo para virar seu diferencial.</p>
            </div>
            <div className="bg-[#1B263B] p-8 rounded-lg text-center">
              <FaChartLine className="text-5xl text-[#FCA311] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Crescimento em Rede</h3>
              <p className="text-[#b0b2af]">Cada novo merchant e cliente no PolarBuy torna o ecossistema mais forte e barato para todos. É o efeito de rede trabalhando para você, não contra você.</p>
            </div>
          </div>
        </section>

        {/* Proof Section */}
        <section id="demo" className="bg-[#1B263B] py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Não Acredite em Nós.<br/> 
                <span className="text-[#FCA311]">Acredite na Matemática.</span>
              </h2>
              <p className="text-lg text-[#b0b2af] mt-4 mb-6">
                Um lojista que fatura R$30.000 por mês em outra plataforma paga em média 
                <span className="text-red-400 font-bold"> R$8.100 em taxas</span>. 
                No PolarBuy, esse custo pode cair para menos de 
                <span className="text-green-400 font-bold"> R$3.200</span>.
              </p>
              <div className="bg-green-900/50 border border-green-500 text-green-300 p-4 rounded-lg">
                <p className="text-2xl font-bold">Economia Anual de mais de R$ 58.000</p>
                <p>O que você faria com esse dinheiro de volta no seu caixa?</p>
              </div>
            </div>
            {/* Placeholder para vídeo/demonstração */}
            <div className="bg-[#0D1B2A] h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">[Aqui vai seu vídeo de demonstração]</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="text-center container mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Sua concorrência não vai esperar.<br /> E nós também não.</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#b0b2af] mb-10">
            Enquanto você lê isso, seus concorrentes já estão pagando taxas menores e entregando mais rápido. Continuar no sistema antigo não é uma opção. É um prejuízo.
          </p>
          <a href="#" className="bg-[#FCA311] text-[#0D1B2A] font-bold py-5 px-12 rounded-lg text-xl hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-yellow-500/20">
            Tomar o Controle Agora
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados. É assim que você toma o poder.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
