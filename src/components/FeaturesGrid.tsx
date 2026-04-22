import { motion } from 'motion/react';
import { Map, Route, Wallet, Bot, Users, ShieldCheck, LucideIcon, ArrowRight } from 'lucide-react';
import { Scene3D } from './3d/Scene3D';
import { Car } from './3d/Models';
import { cn } from '../lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group p-8 glass-panel relative overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-mint/5 blur-3xl group-hover:bg-mint/10 transition-all" />
      <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center mb-6 group-hover:bg-mint group-hover:text-forest transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-white/40 leading-relaxed font-medium">
        {description}
      </p>
      
      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-mint opacity-0 group-hover:opacity-100 transition-opacity">
        LEARN MORE <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: Map,
    title: "Global Mapping",
    description: "Powered by TomTom, access real-time high-fidelity maps with offline capabilities."
  },
  {
    icon: Route,
    title: "Node-Edge Builder",
    description: "Visually construct your journey. Drag, drop, and link destinations with ease."
  },
  {
    icon: Wallet,
    title: "Family Budgeting",
    description: "Collaborative wallet for group expenses. Split bills and track spends in real-time."
  },
  {
    icon: Bot,
    title: "AI Command Center",
    description: "Chat with your travel co-pilot. Get instant hotel recommendations and weather alerts."
  },
  {
    icon: Users,
    title: "Collaborative Sync",
    description: "Invite family members to edit itineraries simultaneously with zero lag."
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description: "One-tap insurance for peace of mind. Get covered by industry-leading providers."
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background 3D Car */}
      <div className="absolute top-1/2 left-0 w-full h-[400px] -translate-y-1/2 opacity-10 pointer-events-none rotate-12">
        <Scene3D>
          <Car />
        </Scene3D>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Everything you need for <br />
              <span className="text-gradient">the perfect trip.</span>
            </h2>
            <p className="text-white/40 font-medium">
              We've packed Roamio with premium features designed for 
              both power users and casual weekenders.
            </p>
          </div>
          <button className="text-xs font-black tracking-widest uppercase text-mint border-b-2 border-mint/20 pb-1 hover:border-mint transition-colors">
            View All Features
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
