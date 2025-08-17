import type { Metadata } from 'next';
import {
  FaBolt,
  FaShieldAlt,
  FaGift,
} from 'react-icons/fa';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCard from '@/components/BenefitCard';
import ProofBlock from '@/components/ProofBlock';
import Fascinations from '@/components/Fascinations';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy | Receba Melhor, Pague Menos',
  description: 'Tudo o que ama da sua cidade, chegando mais rápido e mais barato. PolarBuy com PolarChain™ entrega confiança e conveniência em um só app.',
  openGraph: {
    title: 'PolarBuy | Receba Melhor, Pague Menos',
    description: 'Tudo o que ama da sua cidade, chegando mais rápido e mais barato. PolarBuy com PolarChain™ entrega confiança e conveniência em um só app.',
    type: 'website',
    images: ['/og-default.png'],
  },
};

// Constantes para fácil alteração
const CONSUMER_CTA_HREF = '#cta';
const CONSUMER_DEMO_HREF = '#demo';

const Consumers = () => {
  const benefits = [
    {
      icon: FaBolt,
      title: 'Entrega Mais Rápida',
      text: 'Rotas inteligentes e logística local deixam o pedido na sua porta no menor tempo.',
    },
    {
      icon: FaShieldAlt,
      title: 'Confiável e Seguro',
      text: 'Pagamentos protegidos e rastreamento em tempo real. Você sabe onde seu pedido está.',
    },
    {
      icon: FaGift,
      title: 'Melhor Custo-Benefício',
      text: 'Menos taxas para o lojista = mais qualidade, melhores preços e ofertas para você.',
    },
  ];

  const fascinations = [
    'Rastreamento em tempo real',
    'Entrega mais rápida no seu bairro',
    'Menos taxas = melhores preços',
    'Lojas selecionadas com nota alta',
    'Ofertas locais que não aparecem em outros apps',
  ];

  const testimonials = [
    {
      name: 'Mariana Santos',
      location: 'Pinheiros, SP',
      metric: '4.9★',
      text: 'Entrega sempre pontual e os preços são realmente melhores que outros apps.',
    },
    {
      name: 'Roberto Lima',
      location: 'Leblon, RJ',
      metric: '15min',
      text: 'Pedido chegou em 15 minutos! Nunca vi tanta velocidade na entrega.',
    },
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      <Header 
        ctaLabel="Baixar o App" 
        ctaHref={CONSUMER_CTA_HREF} 
      />

      <main>
        <Hero
          title={
            <>
              Chega <span className="text-accent">Mais Rápido</span>. Paga{' '}
              <span className="text-accent">Mais Barato</span>.
            </>
          }
          subtitle={
            <>
              Restaurantes, mercados, barbearias e serviços locais em um único lugar — com entrega
              confiável e preços honestos.
            </>
          }
          primaryCta="Começar a Pedir"
          primaryCtaHref={CONSUMER_CTA_HREF}
          secondaryCta="Ver Restaurantes & Lojas"
          secondaryCtaHref={CONSUMER_DEMO_HREF}
        />

        {/* Social Proof */}
        <section className="py-12 bg-background/95">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-primary/60 uppercase">
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

        {/* Benefits */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experiência movida por <span className="text-accent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Qualidade, preço e velocidade — no mesmo pedido.
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

        {/* Proof Block */}
        <ProofBlock
          title={
            <>
              Seu pedido, do jeito certo. <br />
              <span className="text-accent">Rápido. Rastreado. Sem surpresas.</span>
            </>
          }
          body={
            <>
              Quando o lojista paga menos taxas, ele investe mais na sua experiência: melhor
              embalagem, brindes e qualidade.
            </>
          }
          stats={{
            value: 'Satisfação média 4.8★',
            description: 'Mais cuidado no preparo e entrega = mais felicidade no recebimento.',
          }}
        />

        {/* Fascinations */}
        <Fascinations items={fascinations} />

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Final CTA */}
        <FinalCta
          title="Descubra os melhores do seu bairro."
          subtitle="Um app, tudo o que importa. Baixe e faça seu primeiro pedido agora."
          ctaLabel="Baixar o App"
          ctaHref={CONSUMER_CTA_HREF}
          riskReversal="⚡ App gratuito • Sem taxas ocultas • Cancele quando quiser"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background/90">
        <div className="container mx-auto px-6 py-6 text-center text-primary/50">
          <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Consumers;
