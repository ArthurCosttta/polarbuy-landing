import type { Metadata } from 'next';
import {
  FaRoute,
  FaClock,
  FaMoneyBillWave,
  FaUsers,
  FaLayerGroup,
  FaHandshake,
  FaArrowRight,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCard from '@/components/BenefitCard';
import ProofBlock from '@/components/ProofBlock';
import Fascinations from '@/components/Fascinations';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy Drivers | Mais Corridas, Mais Ganhos',
  description:
    'Rotas inteligentes, alta demanda e pagamentos confiáveis. Com o PolarBuy Drivers, quem dirige manda na própria renda.',
  openGraph: {
    title: 'PolarBuy Drivers | Mais Corridas, Mais Ganhos',
    description:
      'Rotas inteligentes, alta demanda e pagamentos confiáveis. Com o PolarBuy Drivers, quem dirige manda na própria renda.',
    type: 'website',
    images: ['/og-default.png'],
  },
};

// === Helpers locais ===
type BigCardProps = {
  icon: IconType;
  title: string;
  text: string;
  highlight?: boolean;
};
const BigCard = ({ icon: Icon, title, text, highlight }: BigCardProps) => (
  <div
    className={[
      'rounded-lg p-6 md:p-8 border',
      highlight
        ? 'bg-background/40 border-accent/30 shadow-[0_0_0_1px_rgba(252,163,17,0.25)]'
        : 'bg-background/20 border-primary/10',
    ].join(' ')}
  >
    <div className="flex items-center gap-3 mb-3">
      <Icon className="text-2xl text-accent" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-primary/80">{text}</p>
  </div>
);

// === Constantes ===
const DRIVER_CTA_HREF = '#cta';
const DRIVER_DEMO_HREF = '#demo';

const Drivers = () => {
  // blocos novos (topo)
  const bigFeatures: BigCardProps[] = [
    {
      icon: FaUsers,
      title: 'Monte seu Time de Entregadores',
      text: 'Crie sua micro-transportadora dentro do app. Chame parceiros, distribua corridas e escale seus ganhos.',
      highlight: true,
    },
    {
      icon: FaLayerGroup,
      title: 'Tudo Num Lugar Só (10× mais demanda)',
      text: 'Restaurantes, mercados, serviços, e-commerce local — um hub com muito mais pedidos por hora.',
    },
    {
      icon: FaHandshake,
      title: 'Leve o Cliente',
      text: 'Partidas mais lucrativas: retire no produtor, leve até o consumidor, com rotas curtas e previsíveis.',
    },
  ];

  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: 'Ganhos Otimizados',
      text: 'Alta demanda real: mais entregas por hora, menos tempo ocioso. Seu tempo rende mais.',
    },
    {
      icon: FaRoute,
      title: 'Rotas Inteligentes',
      text: 'Atribuição por proximidade e rotas otimizadas reduzem km e combustível.',
    },
    {
      icon: FaClock,
      title: 'Pagamentos Confiáveis',
      text: 'Recebimentos claros e previsíveis. Sem taxas confusas. Transparência total.',
    },
  ];

  const fascinations = [
    'Encontre corridas em minutos — sem "rodar" a cidade',
    'Picos de demanda mapeados com antecedência',
    'Pagamento claro, previsível e sem pegadinhas',
    'Menos km, mais corridas por hora (tempo morto ↓)',
    'Fila inteligente por proximidade (chega e toca)',
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'Vila Madalena, SP',
      metric: '+32%',
      text: 'Minhas corridas por hora aumentaram com as rotas curtas e janelas de pico.',
    },
    {
      name: 'Ana Costa',
      location: 'Botafogo, RJ',
      metric: '+R$ 1.200/mês',
      text: 'A previsibilidade de picos e o app simples fizeram meu ganho mensal subir.',
    },
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      <Header ctaLabel="Cadastrar como Motorista" ctaHref={DRIVER_CTA_HREF} />

      <main>
        {/* HERO */}
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

        {/* Callout lateral do Hero (prova + promessa direta) */}
        <section className="container mx-auto px-6 -mt-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2" />
            <aside className="md:col-span-1">
              <div className="bg-background/30 border border-accent/30 rounded-lg p-5">
                <p className="text-accent font-extrabold text-lg leading-snug">
                  TRANSFORME SEU CARRO E MOTO
                  <br /> NUMA MÁQUINA DE VENDAS
                </p>
                <p className="text-primary/70 text-sm mt-2">
                  <strong>Prova:</strong> motoristas com rotas curtas e janelas de pico têm{' '}
                  <span className="font-semibold">+corridas/h</span> e menos tempo parado.
                </p>
              </div>
            </aside>
          </div>
        </section>

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

        {/* Benefits + linha emocional extra */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Dirija com a força da <span className="text-accent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Mais pedidos, rotas mais curtas e ganhos constantes.{' '}
              <span className="text-primary/70">
                Com a PolarChain™, você não precisa esperar o pedido "ficar pronto" nem rodar a cidade
                inteira para achar clientes.
              </span>
            </p>
          </div>

          {/* 3 quadros grandes (como você pediu) */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {bigFeatures.map((bf, i) => (
              <BigCard key={i} {...bf} />
            ))}
          </div>

          {/* cards padrão (ganhos/rotas/pagamentos) */}
          <div className="grid md:grid-cols-3 gap-8 mt-10">
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

        {/* Proof Block (mantido) */}
        <ProofBlock
          title={
            <>
              Mais Corridas por Hora. <br />
              <span className="text-accent">Menos Tempo Parado.</span>
            </>
          }
          body={
            <>
              Drivers na PolarBuy reportaram aumento de{' '}
              <strong>corridas por hora</strong> com rotas otimizadas, picos mapeados e filas
              inteligentes.
            </>
          }
          stats={{
            value: '+R$ 1.200/mês em média',
            description: 'Rotas curtas, menos espera e mais picos de demanda.',
          }}
        />

        {/* Fascinations (mais emocionais) */}
        <Fascinations items={fascinations} />

        {/* Bloco de EXEMPLOS CONCRETOS */}
        <section className="container mx-auto px-6 py-14">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Com menos de <span className="text-accent">3 minutos</span> você já encontra uma
                entrega de <span className="text-accent">R$ 9</span>.
              </h3>
              <p className="text-primary/80">
                Nossa tecnologia identifica <strong>picos de demanda</strong> e te permite fazer{' '}
                <strong>10 entregas de R$ 7</strong> em <strong>~55 minutos</strong> (exemplo real).
              </p>
              <p className="text-primary/70 mt-3">
                Conecte parceiros e crie sua <strong>micro-transportadora</strong> em menos de 20
                minutos — **mais pedidos na sua mão**, todos os dias.
              </p>
              <a
                href={DRIVER_CTA_HREF}
                className="inline-flex items-center gap-2 mt-5 bg-accent text-background font-bold px-5 py-3 rounded-lg hover:brightness-110 transition"
              >
                Começar Agora <FaArrowRight />
              </a>
              <p className="text-xs text-primary/50 mt-3">
                *Os resultados variam por região, horário e performance do motorista.
              </p>
            </div>
            <div id="demo" className="bg-background/40 border border-primary/15 rounded-lg h-64 md:h-80 grid place-items-center">
              <p className="text-primary/60">[Vídeo de demonstração]</p>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <Testimonials testimonials={testimonials} />

        {/* CTA Final */}
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

      <footer className="border-t border-primary/20 bg-background/90">
        <div className="container mx-auto px-6 py-6 text-center text-primary/50">
          <p>&copy; {new Date().getFullYear()} PolarBuy Drivers. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Drivers;
