import { IconType } from 'react-icons';

interface BenefitCardProps {
  icon: IconType;
  title: string;
  text: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, text }) => {
  return (
    <div className="bg-card p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 border border-card hover:border-accent shadow-lg">
      <Icon className="text-5xl text-accent mx-auto mb-6" />
      <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
      <p className="text-primary leading-relaxed opacity-80">{text}</p>
    </div>
  );
};

export default BenefitCard;
