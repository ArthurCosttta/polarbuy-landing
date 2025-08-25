import React from 'react';

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitListProps {
  benefits: BenefitItem[];
}

export default function BenefitList({ benefits }: BenefitListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {benefits.map((benefit, index) => (
        <div 
          key={index}
          className="bg-card p-6 rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300 group"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-background text-2xl">
              {benefit.icon}
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {benefit.title}
              </h4>
              <p className="text-primary/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
