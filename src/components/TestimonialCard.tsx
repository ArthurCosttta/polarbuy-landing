'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
  };
  onContinue: () => void;
}

export default function TestimonialCard({ testimonial, onContinue }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <button className="text-gray-600 hover:text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
            <span className="text-green-600 text-sm">✨</span>
          </div>
          <span className="text-gray-500 text-sm font-medium">rejuvenescimento</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Social Proof Text */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {testimonial.title}
          </h2>
          <p className="text-gray-700 text-lg">
            {testimonial.subtitle}
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Image
              src={testimonial.image}
              alt="Mulheres com pele rejuvenescida"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <button
          onClick={onContinue}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-colors transform hover:scale-105"
        >
          {testimonial.ctaText}
        </button>
      </div>
    </div>
  );
}
