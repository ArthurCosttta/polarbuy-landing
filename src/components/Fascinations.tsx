import { FaCheckCircle } from 'react-icons/fa';

interface FascinationsProps {
  items: string[];
}

const Fascinations: React.FC<FascinationsProps> = ({ items }) => {
  return (
    <section className="container mx-auto px-6 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
          Por que escolher o PolarBuy?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-accent text-xl mt-1 flex-shrink-0" />
              <p className="text-primary opacity-80">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fascinations;
