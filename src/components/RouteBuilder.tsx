import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Scene3D } from './3d/Scene3D';
import { Train, Bus, PhoneMockup } from './3d/Models';
import { ArrowLeftRight, Navigation } from 'lucide-react';
import { AppRoutePlanner } from './AppScreens';

export function RouteBuilder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const busX = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

  return (
    <section ref={containerRef} className="py-40 relative overflow-hidden bg-charcoal/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
             <div className="relative">
                <div className="clay-phone scale-100 lg:scale-110 relative z-10">
                   <AppRoutePlanner />
                </div>
                
                {/* Floating Node Data */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  className="absolute -left-12 top-1/4 p-4 glass-panel bg-mint/10 border-mint/20 z-20 backdrop-blur-xl hidden sm:block"
                >
                   <p className="text-[10px] font-black uppercase text-mint tracking-widest mb-1">Node Optimized</p>
                   <p className="text-xs font-bold font-mono">ID: MUM_02A</p>
                </motion.div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-5xl font-bold tracking-tighter mb-8 leading-[0.9]">
               The Canvas of <br />
               <span className="text-mint font-display italic">Your Journey.</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed font-medium">
              Our unique node-edge route architecture allows you to visualize complicated 
              multi-city trips like simple connected points. Adjusting a date or 
              skipping a stop automatically recalculates your budget and distance.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 glass-panel border-white/5">
                 <ArrowLeftRight className="w-6 h-6 text-mint mb-3" />
                 <h4 className="font-bold mb-1">Drag & Drop</h4>
                 <p className="text-xs text-white/30 font-medium">Reorder stops instantly by sliding nodes.</p>
              </div>
              <div className="p-6 glass-panel border-white/5">
                 <Navigation className="w-6 h-6 text-mint mb-3" />
                 <h4 className="font-bold mb-1">Live Rerouting</h4>
                 <p className="text-xs text-white/30 font-medium">Auto-calculations based on traffic data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bus driving across effect */}
      <motion.div style={{ x: busX }} className="absolute bottom-20 left-0 w-[400px] h-32 opacity-20 pointer-events-none">
        <Scene3D>
          <Bus />
        </Scene3D>
      </motion.div>
    </section>
  );
}
