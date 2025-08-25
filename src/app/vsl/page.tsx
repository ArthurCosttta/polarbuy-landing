import React from 'react';
import CountdownTimer from '../../components/CountdownTimer';
import BenefitList from '../../components/BenefitList';

export default function VSLPage() {
  // Define a data de expiração da oferta (7 dias a partir de agora)
  const offerExpiryDate = new Date();
  offerExpiryDate.setDate(offerExpiryDate.getDate() + 7);

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* 1. Seção do Vídeo (Hero Section) */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-accent">
            Como um Motorista Comum Descobriu um 'Hack' Dentro do Nosso App para Multiplicar Seus Ganhos em 30 Dias (Sem Trabalhar Mais Horas)
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-primary/90 mb-12 max-w-3xl mx-auto">
            Assista a esta curta apresentação para descobrir o método que 98% dos motoristas da concorrência desconhecem.
          </p>
          
          {/* Contador Regressivo */}
          <CountdownTimer targetDate={offerExpiryDate} title="🚨 OFERTA ESPECIAL EXPIRA EM:" />
          
          {/* Video Placeholder */}
          <div className="relative mb-12">
            <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-card to-background rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg 
                      className="w-12 h-12 md:w-16 md:h-16 text-background ml-2" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Video Thumbnail Text */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-primary/80 text-sm md:text-base">
                    Clique para assistir a apresentação completa
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Principal */}
          <button type="button" className="w-full md:w-auto px-12 py-6 bg-accent text-background text-xl md:text-2xl font-bold rounded-2xl hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-accent/25">
            QUERO ACESSO IMEDIATO AO MÉTODO
          </button>
        </div>
      </section>

      {/* 1.5. Seção de Benefícios */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent">
            O Que Você Vai Receber Hoje Mesmo
          </h2>
          
          <BenefitList 
            benefits={[
              {
                icon: "🚀",
                title: "Método Completo de Otimização",
                description: "Estratégia passo-a-passo para maximizar seus ganhos usando o app PolarBuy de forma inteligente."
              },
              {
                icon: "⚡",
                title: "Acesso Imediato",
                description: "Todo o conteúdo disponível instantaneamente após a compra, sem esperas ou complicações."
              },
              {
                icon: "📱",
                title: "App Exclusivo",
                description: "Versão premium do app com funcionalidades avançadas que apenas membros têm acesso."
              },
              {
                icon: "🎯",
                title: "Suporte Personalizado",
                description: "Equipe dedicada para responder suas dúvidas e garantir seu sucesso com o método."
              }
            ]}
          />
        </div>
      </section>

      {/* 2. Seção de Prova Social (Depoimentos) */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent">
            Motoristas Reais. Ganhos Reais.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-card p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg">
                  J
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-primary">João Silva</h4>
                  <p className="text-primary/70 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-primary/90 leading-relaxed">
                "Aumentei meus ganhos em 3x em apenas 3 semanas usando o método. É incrível como algo tão simples pode fazer tanta diferença!"
              </p>
            </div>
            
            {/* Depoimento 2 */}
            <div className="bg-card p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg">
                  M
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-primary">Maria Santos</h4>
                  <p className="text-primary/70 text-sm">Rio de Janeiro, RJ</p>
                </div>
              </div>
              <p className="text-primary/90 leading-relaxed">
                "Nunca imaginei que conseguiria dobrar minha renda sem trabalhar mais horas. O PolarBuy mudou minha vida completamente!"
              </p>
            </div>
            
            {/* Depoimento 3 */}
            <div className="bg-card p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-background font-bold text-lg">
                  C
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-primary">Carlos Oliveira</h4>
                  <p className="text-primary/70 text-sm">Belo Horizonte, MG</p>
                </div>
              </div>
              <p className="text-primary/90 leading-relaxed">
                "Em 30 dias, consegui pagar todas as minhas contas e ainda guardar dinheiro. O método é realmente revolucionário!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção de Prova Lógica (Como Visto Em) */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-primary">
            A Mídia Já Está Falando Sobre a Revolução PolarBuy
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Logo Placeholder - Exame */}
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <div className="text-2xl font-bold text-accent">EXAME</div>
            </div>
            
            {/* Logo Placeholder - Forbes */}
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <div className="text-2xl font-bold text-accent">FORBES</div>
            </div>
            
            {/* Logo Placeholder - G1 */}
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <div className="text-2xl font-bold text-accent">G1</div>
            </div>
            
            {/* Logo Placeholder - Valor */}
            <div className="bg-card p-6 rounded-xl border border-accent/20">
              <div className="text-2xl font-bold text-accent">VALOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção de CTA Final com Garantia */}
      <section className="px-4 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">
            Sua Vaga Nesta Nova Economia Está a Um Clique de Distância.
          </h2>
          
          {/* Garantia */}
          <div className="bg-background p-8 rounded-2xl border-2 border-accent mb-12">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-accent mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h4 className="text-xl font-bold text-primary">Garantia de 30 Dias</h4>
            </div>
            <p className="text-primary/90 text-lg">
              Se em 30 dias você não estiver satisfeito com os resultados, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
            </p>
          </div>
          
          {/* CTA Final */}
          <button type="button" className="w-full md:w-auto px-12 py-6 bg-accent text-background text-xl md:text-2xl font-bold rounded-2xl hover:bg-accent/90 transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-accent/25">
            QUERO ACESSO IMEDIATO AO MÉTODO
          </button>
          
          <p className="text-primary/70 text-sm mt-4">
            ⚡ Acesso instantâneo • Suporte 24/7 • Garantia de 30 dias
          </p>
        </div>
      </section>
    </div>
  );
}
