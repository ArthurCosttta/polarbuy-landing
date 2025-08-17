import type { Metadata } from 'next';
import {
  FaRoute,
  FaClock,
  FaMoneyBillWave,
} from 'react-icons/fa';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCard from '@/components/BenefitCard';
import ProofBlock from '@/components/ProofBlock';
import Fascinations from '@/components/Fascinations';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy Drivers | Mais Corridas, Mais Ganhos',
  description: 'Rotas inteligentes, alta demanda e pagamentos confiáveis. Com o PolarBuy Drivers, quem dirige manda na própria renda.',
  openGraph: {
    title: 'PolarBuy Drivers | Mais Corridas, Mais Ganhos',
    description: 'Rotas inteligentes, alta demanda e pagamentos confiáveis. Com o PolarBuy Drivers, quem dirige manda na própria renda.',
    type: 'website',
    images: ['/og-default.png'],
  },
};

// Constantes para fácil alteração
const DRIVER_CTA_HREF = '#cta';
const DRIVER_DEMO_HREF = '#demo';

const Drivers = () => {
  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: 'Ganhos Otimizados',
      text: 'Alta demanda real: mais entregas por hora, menos tempo ocioso. Seu tempo rende mais.',
    },
    {
      icon: FaRoute,
      title: 'Rotas Inteligentes',
      text: 'Atribuição por proximidade e rotas otimizadas reduzem quilometragem e combustível.',
    },
    {
      icon: FaClock,
      title: 'Pagamentos Confiáveis',
      text: 'Recebimentos claros e previsíveis. Sem taxas confusas. Transparência total.',
    },
  ];

  const fascinations = [
    'Rotas que cortam o tempo morto',
    'Picos de demanda mapeados antes de todo mundo',
    'Pagamento claro e previsível',
    'Menos km, mais corridas',
    'Fila inteligente por proximidade',
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'Vila Madalena, SP',
      metric: '+32%',
      text: 'Minhas corridas por hora aumentaram significativamente com as rotas otimizadas.',
    },
    {
      name: 'Ana Costa',
      location: 'Botafogo, RJ',
      metric: '+R$1.200',
      text: 'Ganho em média R$1.200 a mais por mês desde que comecei no PolarBuy.',
    },
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      <Header 
        ctaLabel="Cadastrar como Motorista" 
        ctaHref={DRIVER_CTA_HREF} 
      />

      <main>
        <Hero
          title={
            <>
              Mais Corridas. <span className="text-accent">Mais Ganhos.</span>
            </>
          }
          subtitle={
            <>
              A PolarChain™ conecta você à maior demanda da cidade com rotas otimizadas e pagamentos
              confiáveis. <span className="font-semibold">Sem taxas escondidas. Sem tempo perdido.</span>
            </>
          }
          primaryCta="Começar Agora"
          primaryCtaHref={DRIVER_CTA_HREF}
          secondaryCta="Ver Como Funciona"
          secondaryCtaHref={DRIVER_DEMO_HREF}
        />

        {/* Social Proof */}
        <section className="py-12 bg-background/95">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-primary/60 uppercase">
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

        {/* Benefits */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dirija com a força da <span className="text-accent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              Mais pedidos, rotas mais curtas e ganhos constantes.
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
              Mais Corridas por Hora. <br />
              <span className="text-accent">Menos Tempo Parado.</span>
            </>
          }
          body={
            <>
              Drivers na PolarBuy reportaram aumento de até <strong>32% nas corridas/hora</strong> com
              rotas otimizadas e filas inteligentes.
            </>
          }
          stats={{
            value: '+R$ 1.200/mês em média',
            description: 'Somando rotas curtas, menos espera e mais picos de demanda.',
          }}
        />

        {/* Fascinations */}
        <Fascinations items={fascinations} />

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Final CTA */}
        <FinalCta
          title={
            <>
              Controle sua renda. <br /> A cidade é sua.
            </>
          }
          subtitle="Cadastre-se e comece a receber corridas hoje mesmo. Sem complicação."
          ctaLabel="Cadastrar como Motorista"
          ctaHref={DRIVER_CTA_HREF}
          riskReversal="⚡ Cadastro grátis • Sem multas • Cancele quando quiser"
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-background/90">
        <div className="container mx-auto px-6 py-6 text-center text-primary/50">
          <p>
            &copy; {new Date().getFullYear()} PolarBuy Drivers. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Drivers;
