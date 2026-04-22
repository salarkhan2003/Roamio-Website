import { motion } from 'motion/react';
import { Plus, Apple, Smartphone, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-12 py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-charcoal/50 backdrop-blur-md px-4 sm:px-8 py-3 rounded-2xl border border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-mint flex items-center justify-center -rotate-[15deg]">
            <Smartphone className="w-4 h-4 text-forest" />
          </div>
          <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-mint">Roamio</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/70">
          <a href="#" className="hover:text-mint transition-colors">The Experience</a>
          <a href="#" className="hover:text-mint transition-colors">Map Builder</a>
          <a href="#" className="hover:text-mint transition-colors">AI Guide</a>
          <a href="#" className="hover:text-mint transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 rounded-full bg-mint text-charcoal text-[13px] font-bold shadow-mint hover:scale-105 active:scale-95 transition-all">
            Get Pro &mdash; ₹99/mo
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
