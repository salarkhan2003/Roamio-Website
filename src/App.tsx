/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useLenis } from './hooks/useLenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsRoamio } from './components/WhatIsRoamio';
import { FeaturesGrid } from './components/FeaturesGrid';
import { MapExperience } from './components/MapExperience';
import { RouteBuilder } from './components/RouteBuilder';
import { BudgetTracker } from './components/BudgetTracker';
import { AICommandCenter } from './components/AICommandCenter';
import { FamilyHub } from './components/FamilyHub';
import { Pricing } from './components/Pricing';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

export default function App() {
  useLenis();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial high-end loading feel
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-charcoal flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-16 h-16 rounded-2xl bg-mint flex items-center justify-center shadow-mint shadow-2xl mb-6"
            >
              <Smartphone className="w-8 h-8 text-forest" />
            </motion.div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold tracking-tight">Roamio</span>
              <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="w-full h-full bg-mint"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <WhatIsRoamio />
        <FeaturesGrid />
        <MapExperience />
        <RouteBuilder />
        <BudgetTracker />
        <AICommandCenter />
        <FamilyHub />
        <Pricing />
        <DownloadCTA />
      </main>

      <Footer />

      {/* Exit Intent / Sticky Offer Overlay (Optional but nice) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-40 hidden lg:block"
      >
        <div className="glass-panel p-4 bg-mint/10 border-mint/20 max-w-[240px]">
           <p className="text-[10px] font-black uppercase tracking-widest text-mint mb-2">Limited Offer</p>
           <p className="text-sm font-bold leading-tight mb-4 text-white">Join Pro for ₹99/mo and get a free travel kit.</p>
           <button className="w-full py-2 rounded-xl bg-mint text-forest font-bold text-xs uppercase tracking-tighter shadow-mint">Claim Moment →</button>
        </div>
      </motion.div>
    </div>
  );
}

