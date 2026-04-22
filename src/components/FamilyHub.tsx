import { motion } from 'motion/react';
import { Users, ShieldCheck, Heart } from 'lucide-react';
import { AppFamilySync } from './AppScreens';

const users = [
  { name: 'Aditya', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya', role: 'Owner' },
  { name: 'Neha', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Neha', role: 'Editor' },
  { name: 'Kunal', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kunal', role: 'Viewer' },
  { name: 'Rohan', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan', role: 'Editor' }
];

export function FamilyHub() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-forest/20 text-mint font-bold text-sm mb-10 border border-mint/10"
            >
              <Users className="w-4 h-4" />
              <span>Multi-User Sync Enabled</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              The <span className="text-mint font-display italic">Family Hub.</span> <br />
              No one gets left behind.
            </h2>
            
            <p className="text-lg text-white/50 mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Invite your family or travel buddies to a shared space. 
              Assign roles, set individual spend limits, and see everyone's 
              GPS position in real-time on our family board.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-10 mb-16">
              {users.map((user, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-br from-mint to-forest">
                      <img src={user.img} alt={user.name} className="w-full h-full rounded-full bg-charcoal p-1" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm sm:text-base">{user.name}</p>
                    <p className="text-[8px] font-black tracking-widest text-white/30 uppercase">{user.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-6 glass-panel text-left">
                  <ShieldCheck className="w-6 h-6 text-mint mb-4" />
                  <h4 className="font-bold text-lg mb-2">Private by Design</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-medium">End-to-end encrypted travel data. Your location is only shared with who you choose.</p>
               </div>
               <div className="p-6 glass-panel text-left border-mint/20 bg-mint/5">
                  <Users className="w-6 h-6 text-mint mb-4" />
                  <h4 className="font-bold text-lg mb-2">Live Avatar Sync</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-medium">See as family members move across the map. Instant safety pings for parents.</p>
               </div>
            </div>
          </div>

          <div className="relative flex justify-center">
             <div className="clay-phone scale-110 lg:scale-[1.2] relative z-10">
                <AppFamilySync />
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mint/5 blur-[120px] rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
