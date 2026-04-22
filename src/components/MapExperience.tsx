import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Scene3D } from './3d/Scene3D';
import { PhoneMockup } from './3d/Models';
import { MapPin } from 'lucide-react';
import { LiveMap } from './LiveMap';

export function MapExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 1], [-0.5, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-black to-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">
            A map that <span className="text-mint font-display italic">breathes.</span>
          </h2>
          <p className="text-lg text-white/40">
            Real-time GPS Pings, traffic heatmaps, and dynamic route adjustments 
            powered by the world's most accurate mapping engine.
          </p>
        </div>

        <div className="relative h-[600px] flex justify-center items-center">
          <div className="clay-phone scale-110 lg:scale-125">
             <div className="w-full h-full bg-charcoal overflow-hidden relative">
                <LiveMap center={[32.243, 77.189]} zoom={14} className="w-full h-full" />
                {/* GPS Ping Animation Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-12 h-12 bg-mint/20 rounded-full flex items-center justify-center animate-ping" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-mint rounded-full shadow-mint border-2 border-white" />
                </div>
             </div>
          </div>
          
          {/* Floating UI Bits */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute left-4 lg:left-0 top-1/4 glass-panel p-4 flex items-center gap-3 z-30"
          >
            <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
              <MapPin className="w-5 h-5 text-mint" />
            </div>
            <div>
              <p className="text-xs font-bold text-white/50 uppercase">Next Destination</p>
              <p className="font-bold">Manali Valley, HP</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="absolute right-4 lg:right-0 bottom-1/4 glass-panel p-4 z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="font-bold text-sm tracking-tight text-white/80">3 Traffic Delays Ahead</p>
            </div>
            <p className="text-[10px] text-white/30 font-bold uppercase mt-2">Rerouting suggestion active</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
