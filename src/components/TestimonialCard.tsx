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
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Social Proof Text */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            {testimonial.title} {testimonial.subtitle}
          </h2>
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
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-colors transform hover:scale-105"
        >
          {testimonial.ctaText}
        </button>
      </div>
    </div>
  );
}
