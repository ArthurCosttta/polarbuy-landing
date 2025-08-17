import { ReactNode } from 'react';

interface ProofBlockProps {
  title: ReactNode;
  body: ReactNode;
  stats?: {
    value: string;
    description: string;
  };
}

const ProofBlock: React.FC<ProofBlockProps> = ({ title, body, stats }) => {
  return (
    <section className="bg-card py-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            {title}
          </h2>
          <p className="text-lg text-primary mb-6 leading-relaxed opacity-80">
            {body}
          </p>
          {stats && (
            <div className="bg-green-900/30 border border-green-500/50 text-green-300 p-6 rounded-lg">
              <p className="text-2xl font-bold mb-2">{stats.value}</p>
              <p className="text-green-200">{stats.description}</p>
            </div>
          )}
        </div>
        <div className="bg-background h-80 rounded-lg flex items-center justify-center border-2 border-dashed border-accent shadow-lg">
          <div className="text-center">
            <p className="text-primary text-lg opacity-60">[Vídeo de demonstração]</p>
            <p className="text-primary text-sm opacity-40">Mostre o PolarBuy em ação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofBlock;
