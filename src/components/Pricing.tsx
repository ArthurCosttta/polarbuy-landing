// src/components/Pricing.tsx
import { FaCheckCircle } from 'react-icons/fa';

const plans = [
  {
    name: 'Plano Gratuito',
    price: 'Comece de Graça',
    fee: '17% de taxa por transação',
    features: [
      'Loja virtual com até 10 produtos',
      'Integração básica de logística',
      'Suporte via comunidade',
    ],
    cta: 'Começar Agora',
    isFeatured: false,
  },
  {
    name: 'Plano Pro',
    price: 'R$197/mês',
    fee: '8.5% de taxa por transação',
    features: [
      'Produtos ilimitados',
      'Acesso total à PolarChain™ (Logística e B2B)',
      'Dashboard com IA para insights de vendas',
      'Suporte prioritário 24/7',
      'Destaque nas buscas locais',
    ],
    cta: 'Escolher Plano Pro',
    isFeatured: true,
  },
  {
    name: 'Plano Enterprise',
    price: 'Personalizado',
    fee: 'Taxas especiais e faturamento direto',
    features: [
      'Tudo do Plano Pro',
      'Gerente de contas dedicado',
      'API para integrações customizadas',
      'Soluções de logística para grandes volumes',
    ],
    cta: 'Entrar em Contato',
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Escolha o Plano Certo Para <span className="text-accent">Destruir Sua Concorrência</span>
        </h2>
        <p className="text-lg text-primary/80 max-w-2xl mx-auto">
          Sem contratos, sem burocracia. Apenas poder e lucro para o seu negócio.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-card p-8 rounded-lg border-2 ${
              plan.isFeatured ? 'border-accent' : 'border-card'
            } flex flex-col`}
          >
            {plan.isFeatured && (
              <span className="bg-accent text-background text-xs font-bold uppercase px-3 py-1 rounded-full self-start mb-4">
                Mais Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-extrabold mb-2">{plan.price}</p>
            <p className="text-accent font-semibold mb-6">{plan.fee}</p>
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-primary/80">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300 ${
                plan.isFeatured
                  ? 'bg-accent text-background hover:bg-yellow-400'
                  : 'bg-primary/20 text-primary hover:bg-primary/30'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
