import { useRef } from 'react';
import { motion } from 'motion/react';
import { AppRoutePlanner } from './AppScreens';

export function WhatIsRoamio() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            The next generation of <br />
            <span className="text-mint font-display italic">Travel Intelligence.</span>
          </h2>
          <p className="text-lg text-white/50 mb-8 leading-relaxed">
            Forget messy spreadsheets and disparate notes. Roamio brings your entire 
            travel lifecycle into a single, fluid interface. From collaborative 
            itineraries to real-time expense tracking, we handle the logistics so 
            you can focus on the memories.
          </p>
          <ul className="space-y-4">
            {['AI Route Optimization', 'Collaborative Family Hub', 'Live Budget Sync'].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-mint" />
                <span className="font-semibold text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square glass-panel flex items-center justify-center p-4 bg-charcoal/80 overflow-hidden order-1 md:order-2">
          <div className="clay-phone scale-90 sm:scale-110 relative z-10 shadow-[0_0_100px_rgba(168,230,207,0.15)]">
             <AppRoutePlanner />
          </div>
        </div>
      </div>
    </section>
  );
}
