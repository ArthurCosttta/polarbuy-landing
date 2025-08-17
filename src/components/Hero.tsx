import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps {
  title: ReactNode;
  subtitle: ReactNode;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  showLogo?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryCta,
  primaryCtaHref,
  secondaryCta,
  secondaryCtaHref,
  showLogo = false,
}) => {
  return (
    <section className="text-center py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Logo central no Hero (opcional) */}
        {showLogo && (
          <div className="mb-16">
            <Image
              src="/LogoPolarBuy.png" 
              alt="PolarBuy" 
              width={500} 
              height={200} 
              className="mx-auto h-40 w-auto mb-10"
              priority
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-primary">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary mb-8 leading-relaxed opacity-80">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={primaryCtaHref}
            className="bg-accent text-background font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
          >
            {primaryCta} <FaArrowRight className="inline" />
          </a>
          <a
            href={secondaryCtaHref}
            className="border-2 border-accent text-accent font-bold py-4 px-8 rounded-lg text-lg hover:bg-accent hover:text-background transition-all duration-300 transform hover:scale-105"
          >
            {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
