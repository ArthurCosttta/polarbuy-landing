'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

export default function CountdownTimer({ targetDate, title = "Oferta Expira Em:" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-accent/30 mb-8">
      <h4 className="text-center text-lg font-semibold text-primary mb-4">
        {title}
      </h4>
      
      <div className="flex justify-center space-x-4 md:space-x-6">
        {/* Dias */}
        <div className="text-center">
          <div className="bg-accent text-background text-2xl md:text-3xl font-bold rounded-lg px-3 py-2 min-w-[60px] md:min-w-[80px]">
            {timeLeft.days.toString().padStart(2, '0')}
          </div>
          <p className="text-primary/70 text-sm mt-1">Dias</p>
        </div>
        
        {/* Horas */}
        <div className="text-center">
          <div className="bg-accent text-background text-2xl md:text-3xl font-bold rounded-lg px-3 py-2 min-w-[60px] md:min-w-[80px]">
            {timeLeft.hours.toString().padStart(2, '0')}
          </div>
          <p className="text-primary/70 text-sm mt-1">Horas</p>
        </div>
        
        {/* Minutos */}
        <div className="text-center">
          <div className="bg-accent text-background text-2xl md:text-3xl font-bold rounded-lg px-3 py-2 min-w-[60px] md:min-w-[80px]">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </div>
          <p className="text-primary/70 text-sm mt-1">Min</p>
        </div>
        
        {/* Segundos */}
        <div className="text-center">
          <div className="bg-accent text-background text-2xl md:text-3xl font-bold rounded-lg px-3 py-2 min-w-[60px] md:min-w-[80px]">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </div>
          <p className="text-primary/70 text-sm mt-1">Seg</p>
        </div>
      </div>
      
      <p className="text-center text-primary/80 text-sm mt-4">
        ⚠️ Esta oferta é por tempo limitado e pode não estar disponível amanhã
      </p>
    </div>
  );
}
