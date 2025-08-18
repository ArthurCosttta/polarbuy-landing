// src/app/drivers/page.tsx
import type { Metadata } from 'next';
import { FaTachometerAlt, FaRoute, FaMoneyBillWave, FaUsers, FaBullseye, FaUserCheck, FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Testimonials from '@/components/Testimonials';
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy Drivers | Transforme seu Veículo em uma Máquina de Vendas',
  description: 'Descubra como a PolarChain™ te conecta a mais corridas, com rotas inteligentes e ganhos até 75% maiores.',
};

const DRIVER_CTA_HREF = '#';

const BenefitCard = ({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) => (
  <div className="bg-card/60 p-6 rounded-lg text-center border border-card/80 hover:border-accent/40 transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="text-4xl text-accent mx-auto mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-primary/70 text-sm">{text}</p>
  </div>
);

const DriversPage = () => {
  const testimonials = [
    {
      name: 'Ricardo Mendes',
      location: 'Motorista Parceiro, SP',
      metric: '+R$4.200/mês',
      text: 'Saí de dois outros apps pra focar só no PolarBuy. Faço menos km, pego corridas em sequência e meu lucro no fim do mês é quase o dobro.',
    },
    {
      name: 'Ana Carolina',
      location: 'Dona de Frota, RJ',
      metric: '5 Motoristas',
      text: 'Comecei sozinha. Usei a ferramenta de time, chamei mais 4 amigos e hoje temos contrato fixo com 3 grandes lojas da minha região. Mudou o jogo.',
    },
  ];
  
  return (
    <div className="bg-background text-primary min-h-screen">
      <Header ctaLabel="Começar Agora" ctaHref={DRIVER_CTA_HREF} />
      <main>
        {/* Hero Section */}
        <section className="text-center py-20 px-6 bg-card/20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Transforme Seu Carro e Moto<br />
            Numa <span className="text-accent">Máquina de Vendas.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-400 font-semibold mb-8">
            Descubra por que 98% dos nossos motoristas têm um Lucro 75% maior que a concorrência.
          </p>
          <div className="flex justify-center">
            <a href={DRIVER_CTA_HREF} className="bg-accent text-background font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-colors duration-300">
              Começar Agora <FaArrowRight className="inline ml-2" />
            </a>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={FaTachometerAlt} 
              title="Chega de Tempo Morto" 
              text="Nossa IA te conecta à próxima corrida antes mesmo de você finalizar a atual. Seu tempo rende mais, seu bolso enche mais rápido."
            />
            <BenefitCard 
              icon={FaRoute} 
              title="Rotas que Geram Lucro" 
              text="A PolarChain™ otimiza suas rotas em tempo real para reduzir a quilometragem e o gasto com combustível. Menos despesa, mais lucro."
            />
            <BenefitCard 
              icon={FaMoneyBillWave} 
              title="Seu Dinheiro na Hora" 
              text="Recebimentos claros, previsíveis e sem taxas escondidas. Transparência total para você ter controle absoluto sobre seus ganhos."
            />
            <BenefitCard 
              icon={FaBullseye} 
              title="O Fim da 'Guerra por Corridas'" 
              text="iFood, Amazon, Lojas Locais... Nós consolidamos a demanda de todos em um só lugar. Para você, isso significa 10x mais oportunidades."
            />
            <BenefitCard 
              icon={FaUsers} 
              title="De Motorista a Dono de Frota" 
              text="Use nossas ferramentas para criar seu próprio time de entregadores, fechar contratos com merchants e construir um negócio de logística real."
            />
            <BenefitCard 
              icon={FaUserCheck} 
              title="Construa Sua Base de Clientes" 
              text="Merchants podem te favoritar e solicitar seus serviços com prioridade. Crie uma carteira de clientes fiéis e garanta sua renda."
            />
          </div>
        </section>

        {/* Objection Breaking Section */}
        <section className="bg-card/30 py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parece Bom Demais?
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto mb-12">
              Veja como a <span className="text-accent font-bold">PolarChain™</span> torna o impossível ridiculamente simples.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-background p-6 rounded-lg">
                <p className="text-primary/70 text-sm mb-2">Você pensa:</p>
                <h3 className="text-xl font-semibold mb-4">&ldquo;Vou demorar para conseguir a primeira corrida...&rdquo;</h3>
                <p className="text-accent text-2xl font-bold mb-4">Em menos de 3 minutos, sua primeira entrega de R$9 já aparece na tela.</p>
                <p className="text-primary/80 text-sm"><strong>Por quê?</strong> Nossa IA te conecta instantaneamente com o pedido mais próximo que corresponde ao seu perfil, sem fila de espera ou &ldquo;panelinha&rdquo;.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-primary/70 text-sm mb-2">Você pensa:</p>
                <h3 className="text-xl font-semibold mb-4">&ldquo;Não vou conseguir fazer dinheiro de verdade...&rdquo;</h3>
                <p className="text-accent text-2xl font-bold mb-4">Nossa IA te permite transformar 55 minutos em R$70 no seu bolso.</p>
                <p className="text-primary/80 text-sm"><strong>Por quê?</strong> A PolarChain™ prevê picos de demanda. Em vez de reagir, você se antecipa. Nós te mostramos como fazer 10 entregas de R$7 em sequência, otimizando sua rota.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <p className="text-primary/70 text-sm mb-2">Você pensa:</p>
                <h3 className="text-xl font-semibold mb-4">&ldquo;Isso é só mais um bico, não uma carreira...&rdquo;</h3>
                <p className="text-accent text-2xl font-bold mb-4">Em 20 minutos, você pode criar sua própria transportadora e multiplicar sua renda.</p>
                <p className="text-primary/80 text-sm"><strong>Por quê?</strong> O PolarBuy te dá as ferramentas para se tornar um parceiro logístico. Conecte-se com outros motoristas, atenda merchants com exclusividade e construa um negócio real.</p>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials 
            testimonials={testimonials} 
        />
        
        <FinalCta
          title="Seu Veículo Está Parado Ganhando Poeira?"
          subtitle="Cada minuto que você espera é dinheiro que você deixa na mesa. Baixe o app, faça seu cadastro em 5 minutos e comece a transformar seu tempo em lucro hoje mesmo."
          ctaLabel="Quero Ser um Parceiro PolarBuy"
          ctaHref={DRIVER_CTA_HREF}
        />
      </main>
      
      <footer className="border-t border-primary/20 bg-background">
        <div className="container mx-auto px-6 py-6 text-center text-primary/50">
          <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados. É assim que você toma o poder.</p>
        </div>
      </footer>
    </div>
  );
};

export default DriversPage;
