import type { Metadata } from 'next';
import { FaBolt, FaShieldAlt, FaChartLine, FaStore, FaTruck, FaCheckCircle, FaRocket, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCard from '@/components/BenefitCard';
import ProofBlock from '@/components/ProofBlock';
import Fascinations from '@/components/Fascinations';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy | Domine Sua Cidade, Recupere Seu Lucro',
  description: 'Pare de pagar taxas abusivas. Com o PolarBuy e a tecnologia PolarChain™, você corta custos, controla sua entrega e aumenta suas vendas.',
  openGraph: {
    title: 'PolarBuy | Domine Sua Cidade, Recupere Seu Lucro',
    description: 'Pare de pagar taxas abusivas. Com o PolarBuy e a tecnologia PolarChain™, você corta custos, controla sua entrega e aumenta suas vendas.',
    type: 'website',
    images: ['/og-default.png'],
  },
};

// Constantes para fácil alteração
const MERCHANT_CTA_HREF = '#cta';
const MERCHANT_DEMO_HREF = '#demo';

const Home = () => {
  const benefits = [
    {
      icon: FaShieldAlt,
      title: 'Corte Custos, Não Lucros',
      text: 'Com taxas até 70% menores, o dinheiro que ia para as plataformas agora volta para o seu bolso. Invista no seu crescimento, não na taxa deles.',
    },
    {
      icon: FaTruck,
      title: 'Controle Total da Entrega',
      text: 'Conecte-se diretamente com motoristas e empresas de logística. Defina suas taxas, suas regras. A entrega deixa de ser um custo para virar seu diferencial.',
    },
    {
      icon: FaChartLine,
      title: 'Crescimento em Rede',
      text: 'Cada novo merchant e cliente no PolarBuy torna o ecossistema mais forte e barato para todos. É o efeito de rede trabalhando para você, não contra você.',
    },
  ];

  const fascinations = [
    'Taxas até 70% menores que concorrentes',
    'Controle total da logística e entrega',
    'Conexão direta com motoristas parceiros',
    'Dashboard com métricas em tempo real',
    'Suporte brasileiro 24/7',
  ];

  const testimonials = [
    {
      name: 'João Silva',
      location: 'Vila Madalena, SP',
      metric: '+R$58.000',
      text: 'Economia anual de mais de R$58.000 em taxas. Agora invisto esse dinheiro no meu negócio.',
    },
    {
      name: 'Maria Costa',
      location: 'Botafogo, RJ',
      metric: '4.9★',
      text: 'Clientes adoram a entrega mais rápida e eu ganho mais com menos taxas.',
    },
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      <Header 
        ctaLabel="Crie Sua Loja Agora" 
        ctaHref={MERCHANT_CTA_HREF} 
      />

      <main>
        <Hero
          title={
            <>
              Pare de Pagar Taxas Abusivas.<br />
              <span className="text-accent">Domine Sua Cidade.</span>
            </>
          }
          subtitle={
            <>
              Você está cansado de entregar 30% do seu lucro para plataformas que não te ajudam a crescer? 
              Chegou a hora de tomar o controle com o PolarBuy e a tecnologia <span className="text-accent font-semibold">PolarChain™</span>.
            </>
          }
          primaryCta="Crie Sua Loja em 1 Clique"
          primaryCtaHref={MERCHANT_CTA_HREF}
          secondaryCta="Veja a Demonstração"
          secondaryCtaHref={MERCHANT_DEMO_HREF}
          showLogo={true}
        />

        {/* Social Proof Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-primary uppercase mb-6 opacity-60">
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
        <section id="benefits" className="container mx-auto px-6 py-20 bg-background">
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
              O Poder da <span className="text-accent bg-gradient-to-r from-accent to-accent bg-clip-text text-transparent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary max-w-3xl mx-auto opacity-80">
              Nosso ecossistema inteligente não é mais um app. É sua arma para vencer.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
              />
            ))}
          </div>
        </section>

        {/* Proof Section */}
        <ProofBlock
          title={
            <>
              Não Acredite em Nós.<br/> 
              <span className="text-accent">Acredite na Matemática.</span>
            </>
          }
          body={
            <>
              Um lojista que fatura R$30.000 por mês em outra plataforma paga em média 
              <span className="text-red-400 font-bold"> R$8.100 em taxas</span>. 
              No PolarBuy, esse custo pode cair para menos de 
              <span className="text-green-400 font-bold"> R$3.200</span>.
            </>
          }
          stats={{
            value: 'Economia Anual de mais de R$ 58.000',
            description: 'O que você faria com esse dinheiro de volta no seu caixa?',
          }}
        />

        {/* Features Grid */}
        <section className="container mx-auto px-6 py-20 bg-background">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Por que o PolarBuy é <span className="text-accent">Diferente</span>
            </h2>
            <p className="text-lg text-primary max-w-2xl mx-auto opacity-80">
              Enquanto outros extraem valor, nós criamos valor para todos os participantes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Setup em 5 minutos</h3>
              <p className="text-primary text-sm opacity-70">Sem burocracia, sem complicação</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Suporte 24/7</h3>
              <p className="text-primary text-sm opacity-70">Equipe brasileira, sempre disponível</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Integração total</h3>
              <p className="text-primary text-sm opacity-70">Conecta com seus sistemas existentes</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Sem contratos longos</h3>
              <p className="text-primary text-sm opacity-70">Cancele quando quiser, sem multas</p>
            </div>
          </div>
        </section>

        {/* Fascinations */}
        <Fascinations items={fascinations} />

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Final CTA Section */}
        <FinalCta
          title={
            <>
              Sua concorrência não vai esperar.<br /> 
              E nós também não.
            </>
          }
          subtitle="Enquanto você lê isso, seus concorrentes já estão pagando taxas menores e entregando mais rápido. Continuar no sistema antigo não é uma opção. É um prejuízo."
          ctaLabel="Tomar o Controle Agora"
          ctaHref={MERCHANT_CTA_HREF}
          showLogo={true}
          riskReversal="⚡ Comece hoje mesmo • Sem cartão de crédito • Setup gratuito"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary bg-background opacity-20">
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
              <p className="text-primary text-sm opacity-60">
                A revolução do comércio local. Menos taxas, mais controle, mais lucro.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-primary">Produto</h4>
              <ul className="text-primary text-sm space-y-2 opacity-60">
                <li><a href="#" className="hover:text-accent transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Integrações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-primary">Suporte</h4>
              <ul className="text-primary text-sm space-y-2 opacity-60">
                <li><a href="#" className="hover:text-accent transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary pt-6 text-center text-primary opacity-50">
            <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados. É assim que você toma o poder.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
