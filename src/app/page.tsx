// src/app/page.tsx
import type { Metadata } from 'next';
import { FaShieldAlt, FaNetworkWired, FaShippingFast } from 'react-icons/fa';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitCard from '@/components/BenefitCard';
import ProofBlock from '@/components/ProofBlock';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing'; // Importando o novo componente
import FinalCta from '@/components/FinalCta';

export const metadata: Metadata = {
  title: 'PolarBuy | Venda 3x Mais Gastando 10x Menos',
  description: 'Descubra como a PolarChain™ revoluciona seu negócio local, corta custos e te coloca no controle.',
};

const MERCHANT_CTA_HREF = '#plans';

const Home = () => {
  const benefits = [
    {
      icon: FaShieldAlt,
      title: 'Recupere o Que é Seu',
      text: 'Imagine ter de volta os 70% que você hoje entrega em taxas. Esse dinheiro não é custo, é o lucro que você ralou para conseguir. Com o PolarBuy, ele volta para o seu caixa, para você investir no seu sonho, não no império dos outros.',
    },
    {
      icon: FaShippingFast,
      title: 'Entregas em Minutos, Não em Dias',
      text: 'Seu produto chegando na casa do cliente em menos de 30 minutos. Parece mágica? É a PolarChain™. Nossa rede de motoristas parceiros transforma sua loja em uma potência de conveniência que fideliza clientes e humilha a concorrência.',
    },
    {
      icon: FaNetworkWired,
      title: 'Um Ecossistema que Trabalha para Você',
      text: 'Uma padaria que vira fornecedora da hamburgueria vizinha. Uma loja de roupas que faz parceria com a lavanderia local. A PolarChain™ não é um app, é um cérebro que enxerga oportunidades B2B e as entrega para você. Seus concorrentes verão clientes, você verá um império.',
    },
  ];

  const testimonials = [
    {
      name: 'João Silva',
      location: 'Vila Madalena, SP',
      metric: '+R$58.000',
      text: 'Economia anual de mais de R$58.000 em taxas. Agora invisto esse dinheiro no meu negócio, em vez de dar para os outros.',
    },
    {
      name: 'Maria Costa',
      location: 'Botafogo, RJ',
      metric: '4.9★',
      text: 'Meus clientes estão chocados com a velocidade da entrega. Meu faturamento dobrou porque agora eles pedem muito mais.',
    },
    {
      name: 'Carlos Andrade',
      location: 'Savassi, BH',
      metric: '+3 Parcerias B2B',
      text: 'O app me conectou com dois restaurantes locais que agora compram meus insumos. Criei uma nova fonte de receita que eu nem imaginava.',
    }
  ];

  return (
    <div className="bg-background text-primary min-h-screen">
      <Header ctaLabel="Ver Planos" ctaHref={MERCHANT_CTA_HREF} />
      <main>
        <Hero
          // NOVA HEADLINE AGRESSIVA
          title={
            <>
              Você Gostaria de Vender 3 Vezes Mais<br />
              Gastando <span className="text-accent">10 Vezes Menos?</span>
            </>
          }
          // SUBTITLE QUE SUSTENTA A PROMESSA
          subtitle={
            <>
              O segredo para transformar seu negócio local em uma máquina de lucro com a tecnologia que os gigantes não querem que você conheça. Como cortar mais de 70% das suas taxas e usar esse dinheiro para esmagar sua concorrência. A ferramenta que entrega seus produtos em minutos e transforma clientes casuais em fãs leais.
            </>
          }
          primaryCta="Quero Dominar Minha Cidade"
          primaryCtaHref={MERCHANT_CTA_HREF}
          secondaryCta="Ver Demonstração"
          secondaryCtaHref="#demo"
        />

        {/* PROVA SOCIAL POR ASSOCIAÇÃO */}
        <section className="py-12 bg-background/95">
          <div className="container mx-auto text-center">
            <h3 className="text-sm font-bold tracking-widest text-primary/60 uppercase mb-6">
              A mesma revolução que criou impérios, agora no seu bairro
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-16 mt-6 grayscale opacity-60">
              <span className="text-4xl font-bold">Amazon</span>
              <span className="text-4xl font-bold">Mercado Livre</span>
              <span className="text-4xl font-bold">iFood</span>
              <span className="text-4xl font-bold">Magazine Luiza</span>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS INTENSIFICADOS */}
        <section id="benefits" className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Poder da <span className="text-accent">PolarChain™</span>
            </h2>
            <p className="text-lg text-primary/80 max-w-3xl mx-auto">
              Isto não é um aplicativo. É uma declaração de guerra contra as altas taxas e a falta de controle. Esta é a sua arma.
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

        {/* PROVA COM NÚMEROS */}
        <ProofBlock
          title={
            <>
              Não Acredite em Nós.<br/>
              <span className="text-accent">Acredite na Matemática.</span>
            </>
          }
          body={
            <>
              Um lojista que fatura R$30.000 por mês no iFood paga em média
              <span className="text-red-400 font-bold"> R$8.100 em taxas</span>. No PolarBuy, esse mesmo faturamento te custa menos de
              <span className="text-green-400 font-bold"> R$3.200</span>.
            </>
          }
          stats={{
            value: 'Economia Anual de mais de R$ 58.000',
            description: 'O que você faria com R$58.000 de volta no seu caixa?',
          }}
        />

        {/* DEPOIMENTOS */}
        <Testimonials testimonials={testimonials} />
        
        {/* SEÇÃO DE PLANOS */}
        <div id="plans">
          <Pricing />
        </div>

        {/* CTA FINAL COM URGÊNCIA */}
        <FinalCta
          title={
            <>
              Sua concorrência não vai esperar.<br /> E nós também não.
            </>
          }
          subtitle="Enquanto você lê isso, os empreendedores mais inteligentes do seu bairro já estão escolhendo um plano. Continuar no sistema antigo não é uma opção. É uma sentença de falência."
          ctaLabel="Escolher Meu Plano e Começar a Dominar"
          ctaHref={MERCHANT_CTA_HREF}
        />
        
        {/* REPETIÇÃO DOS PLANOS PARA FECHAMENTO */}
        <div className="bg-card/30">
          <Pricing />
        </div>

      </main>
      
      <footer className="border-t border-primary/20 bg-background">
        <div className="container mx-auto px-6 py-6 text-center text-primary/50">
          <p>&copy; {new Date().getFullYear()} PolarBuy. Todos os direitos reservados. É assim que você toma o poder.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
