import { FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import { ReactNode } from 'react';

interface FinalCtaProps {
  title: ReactNode;
  subtitle: ReactNode;
  ctaLabel: string;
  ctaHref: string;
  showLogo?: boolean;
  riskReversal?: string;
}

const FinalCta: React.FC<FinalCtaProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  showLogo = false,
  riskReversal,
}) => {
  return (
    <section className="text-center container mx-auto px-6 py-24 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Logo final no CTA (opcional) */}
        {showLogo && (
          <div className="mb-12">
            <Image
              src="/LogoPolarBuy.png" 
              alt="PolarBuy" 
              width={400} 
              height={160} 
              className="mx-auto h-32 w-auto opacity-95"
            />
          </div>
        )}
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-primary">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary mb-10 leading-relaxed opacity-80">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={ctaHref}
            className="bg-accent text-background font-bold py-5 px-12 rounded-lg text-xl hover:bg-accent/90 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
          >
            <FaRocket className="text-2xl" />
            {ctaLabel}
          </a>
        </div>
        {riskReversal && (
          <p className="text-sm text-primary mt-4 opacity-50">
            {riskReversal}
          </p>
        )}
      </div>
    </section>
  );
};

export default FinalCta;
