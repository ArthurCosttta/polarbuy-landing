import { IconType } from 'react-icons';

interface BenefitCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, text }) => {
  return (
    <div className="bg-card/90 p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-card/80 hover:border-accent/40 shadow-background">
      <Icon className="text-5xl text-accent mx-auto mb-6" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-primary/80 leading-relaxed">{text}</p>
    </div>
  );
};

export default BenefitCard;
