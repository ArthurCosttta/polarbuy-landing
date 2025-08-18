import type { Metadata } from 'next';
import {
  FaRoute,
  FaClock,
  FaMoneyBillWave,
  FaUsers,
  FaLayerGroup,
  FaHandshake,
  FaBolt,
  FaShieldAlt,
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

// helpers locais
type BigCardProps = { icon: IconType; title: string; text: string; highlight?: boolean };
const BigCard = ({ icon: Icon, title, text, highlight }: BigCardProps) => (
  <div
    className={[
      'rounded-lg p-6 md:p-8 border transition-all duration-300 transform hover:scale-105 cursor-pointer',
      highlight
        ? 'bg-background/40 border-accent/30 shadow-[0_0_0_1px_rgba(252,163,17,0.25)] hover:shadow-[0_0_0_2px_rgba(252,163,17,0.4)]'
        : 'bg-background/20 border-primary/10 hover:border-accent/30 hover:bg-background/30',
    ].join(' ')}
  >
    <div className="flex items-center gap-3 mb-3">
      <Icon className="text-2xl text-accent" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-primary/80">{text}</p>
  </div>
);

const DRIVER_CTA_HREF = '#cta';
const DRIVER_DEMO_HREF = '#demo';

const Drivers = () => {
  // 6 QUADROS (primeira linha: "quadros grandes" / segunda linha: 3 benefícios)
  const topThree: BigCardProps[] = [
    {
      icon: FaUsers,
      title: 'Monte seu Time de Entregadores',
      text: 'Crie sua micro-transportadora dentro do app. Convide parceiros, distribua corridas e escale seu ganho por hora.',
      highlight: true,
    },
    {
      icon: FaLayerGroup,
      title: 'Tudo em 1 Lugar (10× Demanda)',
      text: 'Restaurantes, mercados, serviços e e-commerces locais. Um hub com mais pedidos por hora e menos tempo ocioso.',
    },
    {
      icon: FaHandshake,
      title: 'Leve o Cliente (Partidas + Lucrativas)',
      text: 'Coleta no produtor e entrega no cliente final com rotas curtas e previsíveis. Quilometragem menor, lucro maior.',
    },
  ];

  const bottomThree = [
    {
      icon: FaMoneyBillWave,
      title: 'Ganhos Otimizados',
      text: 'Picos mapeados e fila por proximidade aumentam corridas/h e reduzem espera.',
    },
    {
      icon: FaRoute,
      title: 'Rotas Inteligentes',
      text: 'Matching por distância + janelas de pico = menos km, mais entregas por hora.',
    },
    {
      icon: FaClock,
      title: 'Pagamentos Confiáveis',
      text: 'Recebimentos claros e previsíveis. Sem pegadinhas. Transparência total.',
    },
  ];

  const fascinations = [
    'Encontre corridas em minutos — sem rodar à toa',
    'Picos de demanda mapeados com antecedência',
    'Pagamento claro e previsível',
    'Menos km, mais corridas por hora (tempo morto ↓)',
    'Fila inteligente por proximidade (chega e toca)',
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'Vila Madalena, SP',
      metric: '+32%',
      text: 'Com as rotas curtas e janelas de pico, meu ganho por hora subiu de verdade.',
    },
    {
      name: 'Ana Costa',
      location: 'Botafogo, RJ',
      metric: '+R$ 1.200/mês',
      text: 'Previsibilidade de picos e app simples = mais corridas e menos espera.',
    },
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      {/* Header com fundo igual ao site (se sua logo não for transparente, o wrapper camufla) */}
      <Header ctaLabel="Cadastrar como Motorista" ctaHref={DRIVER_CTA_HREF} />

      <main>
        {/* HERO PRINCIPAL - HEADLINE CORRIGIDA */}
        <section className="container mx-auto px-6 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-primary">TRANSFORME SEU CARRO E MOTO</span>
              <br />
              <span className="text-accent">NUMA MÁQUINA DE VENDAS</span>
            </h1>
            
            <div className="bg-background/30 border border-accent/30 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-primary/70 text-sm">
                <FaShieldAlt className="inline mr-1 -mt-0.5" />
                <strong>98%</strong> dos nossos motoristas relatam lucro maior usando rotas curtas e janelas de pico.*
              </p>
              <p className="text-[11px] text-primary/40 mt-2">
                *Dados internos/regionais — os resultados variam por área, horário e performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={DRIVER_CTA_HREF}
                className="bg-accent text-background font-bold py-4 px-8 rounded-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Começar Agora →
              </a>
              <a
                href={DRIVER_DEMO_HREF}
                className="border border-accent/30 text-accent font-bold py-4 px-8 rounded-lg hover:bg-accent/10 transition-all duration-300 text-lg"
              >
                Ver Como Funciona
              </a>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-10 bg-background/95">
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

        {/* 6 QUADROS (3 + 3) - TODOS IGUAIS AGORA */}
        <section id="benefits" className="container mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Dirija com a força da <span className="text-accent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Mais pedidos, rotas mais curtas e ganhos constantes.{' '}
              <span className="text-primary/70">
                Você não precisa esperar o pedido &quot;ficar pronto&quot; nem rodar a cidade procurando cliente — o app
                coloca você **onde toca**.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {topThree.map((bf, i) => (
              <BigCard key={`top-${i}`} {...bf} />
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {bottomThree.map((b, i) => (
              <BenefitCard key={`bot-${i}`} icon={b.icon as IconType} title={b.title} text={b.text} />
            ))}
          </div>
        </section>

        {/* PROOF (mantido) */}
        <ProofBlock
          title={
            <>
              Mais Corridas por Hora. <br />
              <span className="text-accent">Menos Tempo Parado.</span>
            </>
          }
          body={
            <>
              Drivers na PolarBuy reportaram aumento de <strong>corridas por hora</strong> com rotas
              otimizadas, picos mapeados e filas inteligentes.
            </>
          }
          stats={{
            value: '+R$ 1.200/mês em média',
            description: 'Rotas curtas, menos espera e mais picos de demanda.',
          }}
        />

        {/* POR QUE ESCOLHER O POLARBUY — ÚNICA SEÇÃO */}
        <section className="container mx-auto px-6 py-14">
          <h3 className="text-2xl font-bold mb-6">Por que escolher o PolarBuy?</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaBolt className="mt-1 text-accent" />
                <p>
                  <strong>Você toca mais corridas porque fica onde a demanda nasce.</strong>{' '}
                  O app lê horários e zonas de pico e te posiciona perto da próxima chamada —{' '}
                  <em>sem rodar à toa</em>.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="mt-1 text-accent" />
                <p>
                  <strong>Você ganha por hora, não por sorte.</strong> Fila por proximidade + rotas curtas = menos km,
                  menos espera, mais entregas/hora.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="mt-1 text-accent" />
                <p>
                  <strong>Você sabe quanto entra.</strong> Pagamento claro, previsível e sem pegadinhas — dá para planejar a semana.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="mt-1 text-accent" />
                <p>
                  <strong>Você pode escalar.</strong> Em minutos, cria sua micro-transportadora com parceiros e distribui corridas pelo app.
                </p>
              </li>
            </ul>

            {/* exemplos sexy com "porque" */}
            <div className="bg-background/40 border border-primary/15 rounded-lg p-6">
              <p className="text-sm uppercase tracking-wide text-primary/60 font-semibold mb-3">
                Como a objeção cai na prática
              </p>

              <div className="space-y-4 text-primary/90">
                <p>
                  <strong>&quot;Não tem corrida.&quot;</strong> — <em>Tem sim</em>: em <strong>menos de 3 minutos</strong> você encontra
                  uma entrega de <strong>R$ 9</strong>, <u>porque</u> o app junta pedidos de vários setores num só mapa.
                </p>
                <p>
                  <strong>&quot;Não dá para fazer volume.&quot;</strong> — Dá: <strong>10 entregas de R$ 7 em ~55 min</strong>,
                  <u>porque</u> as rotas são por proximidade e a fila prioriza quem está mais perto.
                </p>
                <p>
                  <strong>&quot;Não tem como crescer.&quot;</strong> — Tem: conecte parceiros e <strong>vire transportadora em &lt; 20 min</strong>,
                  <u>porque</u> o app já traz convite, distribuição e repasse prontos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fascinations */}
        <Fascinations items={fascinations} />

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
