import { motion } from 'motion/react';
import { PieChart, TrendingDown, DollarSign, FileDown, Wallet } from 'lucide-react';
import { AppBudgetUI } from './AppScreens';

export function BudgetTracker() {
  return (
    <section className="py-32 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="w-16 h-16 rounded-3xl bg-mint/10 flex items-center justify-center mb-10">
              <Wallet className="w-8 h-8 text-mint" />
            </div>
            <h2 className="text-5xl font-bold tracking-tighter mb-8 text-center md:text-left">
              Stay in control of <br />
              <span className="text-mint font-display italic">every rupee.</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed font-medium text-center md:text-left">
              Real-time currency conversion, expenditure forecasting, and collaborative 
              group wallets. Roamio ensures you never overspend, even when you're 
              offline in the mountains of Ladakh.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="glass-panel p-6 bg-charcoal/40">
                  <TrendingDown className="w-6 h-6 text-mint mb-3" />
                  <p className="text-2xl font-black">₹4,200</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Savings Predicted</p>
               </div>
               <div className="glass-panel p-6 bg-charcoal/40">
                  <DollarSign className="w-6 h-6 text-mint mb-3" />
                  <p className="text-2xl font-black">1.04%</p>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Forex Markup</p>
               </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
             <div className="clay-phone scale-110 lg:scale-[1.2] relative z-10">
                <AppBudgetUI />
             </div>
             
             {/* Decorative Background Ring */}
             <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-white/5 opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-mint/10 opacity-10 animate-pulse" />
             </div>

             {/* Floating PDF Link */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               whileHover={{ scale: 1.05 }}
               className="absolute bottom-10 right-4 lg:-right-4 p-4 glass-panel bg-mint text-forest flex items-center gap-3 cursor-pointer shadow-mint z-20"
             >
                <FileDown className="w-5 h-5" />
                <span className="font-bold text-sm">Export PDF</span>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
