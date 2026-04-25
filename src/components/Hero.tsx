import { motion, AnimatePresence } from 'motion/react';
import { Download, PlayCircle, Star, Smartphone, Send, CheckCircle2 } from 'lucide-react';
import { Scene3D } from './3d/Scene3D';
import { Airplane } from './3d/Models';
import { LiveMap } from './LiveMap';
import { useState, useMemo } from 'react';

const MUMBAI_ROUTE: [number, number][] = [
  [18.922, 72.834], // Gateway
  [18.932, 72.834],
  [18.942, 72.824],
  [18.962, 72.814], // Marine Drive
];

import { AppRoutePlanner, AppFamilySync, AppAICommand } from './AppScreens';

export function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const mumbaiRoute = useMemo(() => MUMBAI_ROUTE, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative min-h-[120vh] lg:min-h-screen flex items-center pt-32 lg:pt-20 overflow-hidden pb-20">
      {/* Background Depth Elements */}
      <div className="aurora" />
      <div className="aurora-bottom" />
      
      {/* 3D Background Objects remain but adapted space */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Scene3D environment="city">
          <group position={[5, 2, -2]} rotation={[0.2, -0.8, 0.1]}>
            <Airplane />
          </group>
        </Scene3D>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-24">
        <div className="hero-content text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-pill mx-auto lg:mx-0"
          >
            Travel 2.0 &bull; Early Access
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[82px] font-extrabold leading-[1] lg:leading-[0.95] tracking-[-0.03em] lg:tracking-[-0.05em] mb-6"
          >
            Plan the<br />
            <span className="text-mint font-display italic">Journey.</span><br />
            Own the Moment.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-offwhite/60 max-w-[450px] mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            Experience the world's most advanced travel orchestrator. Join the waitlist to be the first to own the next generation of travel intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="flex items-center gap-3 bg-mint/20 border border-mint/30 px-6 py-4 rounded-2xl text-mint font-bold"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  <span>You're on the list! We'll notify you soon.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-stretch gap-3 max-w-[500px]"
                >
                  <div className="relative flex-1 group">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-mint/50 focus:bg-white/10 transition-all font-medium placeholder:text-white/20"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-mint/5 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity pointer-events-none" />
                  </div>
                  <button 
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary-clay whitespace-nowrap disabled:opacity-50 disabled:scale-100"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal animate-spin rounded-full" />
                    ) : (
                      <>Join Waitlist <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-2 text-sm font-bold text-white/40 hover:text-white transition-colors">
                <PlayCircle className="w-5 h-5" />
                See How It Works
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="mt-12 lg:mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40"
          >
            Built for Families &bull; Join 12,042+ on Waitlist &bull; Powered by TomTom + AI
          </motion.div>
        </div>

        <div className="relative h-[400px] md:h-[550px] lg:h-[600px] w-full mt-10 lg:mt-0">
          {/* Plane SVG Floating as in design */}
          <div className="absolute top-0 right-10 w-20 md:w-32 -rotate-[15deg] z-20 drop-shadow-2xl opacity-90 hidden sm:block">
             <svg className="fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
             </svg>
          </div>

          {/* Clay Mockup Stack - Using 3D Models within styled frames */}
          <div className="relative w-full h-full flex justify-center items-center lg:items-center perspective-[1000px]">
             {/* Phone 1 (Primary) - Live Map */}
             <motion.div 
               initial={{ rotateY: -15, z: 50, opacity: 0 }}
               animate={{ rotateY: -8, z: 0, opacity: 1 }}
               className="clay-phone z-10 scale-90 sm:scale-100 lg:scale-105"
             >
                <div className="p-4 sm:p-5 font-sans h-full flex flex-col bg-[#0D0D1A]">
                  <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-3 flex items-center justify-between uppercase">
                    <span>Active Route</span>
                    <span className="opacity-40">10:42 AM</span>
                  </div>
                  
                  {/* Real Map Content */}
                  <div className="flex-1 rounded-2xl relative overflow-hidden mb-4 border border-white/5 bg-[#24243E]">
                    <LiveMap route={mumbaiRoute} center={[18.93, 72.825]} zoom={12} className="w-full h-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="bg-white/5 p-2 sm:p-3 rounded-xl border border-white/5">
                      <p className="text-[7px] sm:text-[8px] uppercase opacity-50 font-bold tracking-widest mb-1">Distance</p>
                      <p className="text-xs sm:text-sm font-bold tracking-tight">1,240 km</p>
                    </div>
                    <div className="bg-white/5 p-2 sm:p-3 rounded-xl border border-white/5">
                      <p className="text-[7px] sm:text-[8px] uppercase opacity-50 font-bold tracking-widest mb-1">Status</p>
                      <p className="text-xs sm:text-sm font-bold tracking-tight text-mint">On Time</p>
                    </div>
                  </div>
                  <div className="bg-white/5 p-2 sm:p-3 rounded-xl border border-white/5">
                    <p className="text-[7px] sm:text-[8px] uppercase opacity-50 font-bold tracking-widest mb-1 text-mint">NEXT STOP</p>
                    <p className="text-[9px] sm:text-[10px] font-medium leading-tight">Lonavala • ETA 11:30 AM</p>
                  </div>
                </div>
             </motion.div>

             {/* Phone 2 (Secondary) - AI Command */}
             <div 
               className="clay-phone absolute z-0 scale-75 sm:scale-80 lg:scale-90 -translate-y-10 hidden sm:block rotate-[15deg] translate-x-[140px] opacity-60"
             >
                <AppAICommand />
             </div>

             {/* Phone 3 (Background) - Family Sync */}
             <div 
               className="clay-phone absolute z-0 scale-70 sm:scale-75 lg:scale-80 translate-y-10 hidden lg:block -rotate-[25deg] -translate-x-[140px] opacity-40"
             >
                <AppFamilySync />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
