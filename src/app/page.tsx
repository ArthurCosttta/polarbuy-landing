import { FaBolt, FaShieldAlt, FaChartLine, FaStore, FaTruck, FaUsers, FaArrowRight, FaCheckCircle, FaRocket, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-primary min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo real do PolarBuy - Header MUITO MAIOR */}
          <Image
            src="/LogoPolarBuy.png" 
            alt="PolarBuy Logo" 
            width={250} 
            height={100} 
            className="h-20 w-auto"
            priority
          />
        </div>
        <a 
          href="#cta" 
          className="hidden md:block bg-accent text-background font-bold py-2 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
        >
          Crie Sua Loja Agora
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Logo central no Hero - ULTRA IMPACTANTE */}
            <div className="mb-16">
              <Image
                src="/LogoPolarBuy.png" 
                alt="PolarBuy" 
                width={500} 
                height={200} 
                className="mx-auto h-40 w-auto mb-10"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Pare de Pagar Taxas Abusivas.<br />
              <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Domine Sua Cidade.
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary/80 mb-8 leading-relaxed">
              Você está cansado de entregar 30% do seu lucro para plataformas que não te ajudam a crescer? 
              Chegou a hora de tomar o controle com o PolarBuy e a tecnologia <span className="text-accent font-semibold">PolarChain™</span>.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="#cta" 
                className="bg-accent text-background font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-accent flex items-center gap-2"
              >
                Crie Sua Loja em 1 Clique <FaArrowRight className="inline" />
              </a>
              <a
                href="#demo" 
                className="border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent hover:text-background transition-all duration-300 transform hover:scale-105"
              >
                Veja a Demonstração
              </a>
            </div>
          </div>
        </section>

        {/* Social Proof Section - Fundo mais sutil para integração perfeita */}
        <section className="py-12 bg-background/95">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-primary/60 uppercase mb-6">
              A mesma revolução que mudou mercados, agora no seu bairro
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 mt-6 grayscale opacity-60">
              {/* Logos de empresas disruptivas para associação de poder */}
              <div className="text-center">
                <FaGlobe className="text-4xl text-accent mx-auto mb-2" />
                <span className="text-lg font-bold">Uber</span>
              </div>
              <div className="text-center">
                <FaStore className="text-4xl text-accent mx-auto mb-2" />
                <span className="text-lg font-bold">Airbnb</span>
              </div>
              <div className="text-center">
                <FaBolt className="text-4xl text-accent mx-auto mb-2" />
                <span className="text-lg font-bold">Stripe</span>
              </div>
              <div className="text-center">
                <FaRocket className="text-4xl text-accent mx-auto mb-2" />
                <span className="text-lg font-bold">Shopify</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section (PolarChain™) */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            {/* Logo na seção de benefícios - MUITO MAIOR */}
            <div className="mb-10">
              <Image
                src="/LogoPolarBuy.png" 
                alt="PolarBuy" 
                width={280} 
                height={112} 
                className="mx-auto h-28 w-auto opacity-95"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              O Poder da <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Nosso ecossistema inteligente não é mais um app. É sua arma para vencer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/90 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-card/80 hover:border-accent/40 shadow-background">
              <FaShieldAlt className="text-5xl text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Corte Custos, Não Lucros</h3>
              <p className="text-primary/80 leading-relaxed">
                Com taxas até 70% menores, o dinheiro que ia para as plataformas agora volta para o seu bolso. 
                Invista no seu crescimento, não na taxa deles.
              </p>
            </div>
            <div className="bg-card/90 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-card/80 hover:border-accent/40 shadow-background">
              <FaTruck className="text-5xl text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Controle Total da Entrega</h3>
              <p className="text-primary/80 leading-relaxed">
                Conecte-se diretamente com motoristas e empresas de logística. Defina suas taxas, suas regras. 
                A entrega deixa de ser um custo para virar seu diferencial.
              </p>
            </div>
            <div className="bg-card/90 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-card/80 hover:border-accent/40 shadow-background">
              <FaChartLine className="text-5xl text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Crescimento em Rede</h3>
              <p className="text-primary/80 leading-relaxed">
                Cada novo merchant e cliente no PolarBuy torna o ecossistema mais forte e barato para todos. 
                É o efeito de rede trabalhando para você, não contra você.
              </p>
            </div>
          </div>
        </section>

        {/* Proof Section - Fundo mais sutil */}
        <section id="demo" className="bg-card/85 py-20 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Não Acredite em Nós.<br/> 
                <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Acredite na Matemática.
                </span>
              </h2>
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                Um lojista que fatura R$30.000 por mês em outra plataforma paga em média 
                <span className="text-red-400 font-bold"> R$8.100 em taxas</span>. 
                No PolarBuy, esse custo pode cair para menos de 
                <span className="text-green-400 font-bold"> R$3.200</span>.
              </p>
              <div className="bg-green-900/30 border border-green-500/50 text-green-300 p-6 rounded-lg">
                <p className="text-2xl font-bold mb-2">Economia Anual de mais de R$ 58.000</p>
                <p className="text-green-200">O que você faria com esse dinheiro de volta no seu caixa?</p>
              </div>
            </div>
            {/* Placeholder para vídeo/demonstração */}
            <div className="bg-background/95 h-80 rounded-lg flex items-center justify-center border-2 border-dashed border-accent/40 shadow-background">
              <div className="text-center">
                <FaRocket className="text-6xl text-accent mx-auto mb-4" />
                <p className="text-primary/60 text-lg">[Aqui vai seu vídeo de demonstração]</p>
                <p className="text-primary/40 text-sm">Mostre o PolarBuy em ação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que o PolarBuy é <span className="text-accent">Diferente</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Enquanto outros extraem valor, nós criamos valor para todos os participantes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Setup em 5 minutos</h3>
              <p className="text-primary/70 text-sm">Sem burocracia, sem complicação</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-primary/70 text-sm">Equipe brasileira, sempre disponível</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integração total</h3>
              <p className="text-primary/70 text-sm">Conecta com seus sistemas existentes</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sem contratos longos</h3>
              <p className="text-primary/70 text-sm">Cancele quando quiser, sem multas</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="text-center container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Logo final no CTA - ULTRA IMPACTANTE */}
            <div className="mb-12">
              <Image
                src="/LogoPolarBuy.png" 
                alt="PolarBuy" 
                width={400} 
                height={160} 
                className="mx-auto h-32 w-auto opacity-95"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Sua concorrência não vai esperar.<br /> 
              E nós também não.
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary/80 mb-10 leading-relaxed">
              Enquanto você lê isso, seus concorrentes já estão pagando taxas menores e entregando mais rápido. 
              Continuar no sistema antigo não é uma opção. É um prejuízo.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a 
                href="#" 
                className="bg-accent text-background font-bold py-5 px-12 rounded-lg text-xl hover:bg-accent/90 transition-all duration-300 shadow-accent-lg transform hover:scale-105 flex items-center gap-2"
              >
                <FaRocket className="text-2xl" />
                Tomar o Controle Agora
              </a>
            </div>
            <p className="text-sm text-primary/50 mt-4">
              ⚡ Comece hoje mesmo • Sem cartão de crédito • Setup gratuito
            </p>
          </div>
        </section>
      </main>

      {/* Footer - Fundo mais sutil para integração perfeita */}
      <footer className="border-t border-primary/20 bg-background/90">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              {/* Logo no footer - MUITO MAIOR */}
              <div className="mb-8">
                <Image
                  src="/LogoPolarBuy.png" 
                  alt="PolarBuy" 
                  width={220} 
                  height={88} 
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-primary/60 text-sm">
                A revolução do comércio local. Menos taxas, mais controle, mais lucro.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Produto</h4>
              <ul className="text-primary/60 text-sm space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="text-primary/60 text-sm space-y-2">
                <li><a href="#" className="hover:text-accent transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-6 text-center text-primary/50">
            <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados. É assim que você toma o poder.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
