import { motion } from 'motion/react';
import { Download, Sparkles } from 'lucide-react';

export function DownloadCTA() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-[3rem] px-8 py-20 md:p-24 overflow-hidden shadow-2xl glass-panel border-mint/20"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-forest to-charcoal z-0 opacity-90" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint/30 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-3xl bg-mint/20 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-10">
              <Sparkles className="w-8 h-8 text-mint" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
              Ready to own <br />
              <span className="text-mint">your next moment?</span>
            </h2>
            
            <p className="text-lg text-white/60 mb-12 max-w-xl font-medium">
              Start planning your journey today. Join half a million travelers 
              already using Roamio for their global adventures.
            </p>

            <button className="group relative px-12 py-6 rounded-[2rem] bg-mint text-forest font-black text-xl shadow-2xl shadow-mint/50 hover:shadow-mint transition-all hover:scale-105 active:scale-95 flex items-center gap-4 overflow-hidden">
               <Download className="w-6 h-6" />
               Download Roamio Free
               <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            
            <p className="mt-8 text-xs font-black tracking-[0.2em] text-white/30 uppercase">
              No credit card required • 4.9/5 Rating on App Store
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
