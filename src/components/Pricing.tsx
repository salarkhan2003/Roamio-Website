import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPro?: boolean;
}

function PricingCard({ title, price, features, isPro }: PricingCardProps) {
  return (
    <div className={cn(
      "p-10 rounded-[2.5rem] flex flex-col h-full relative overflow-hidden transition-transform hover:scale-[1.02]",
      isPro 
        ? "bg-forest border-2 border-mint text-white" 
        : "bg-white/5 border border-white/10"
    )}>
      {isPro && (
        <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-mint text-forest text-[10px] font-black tracking-widest uppercase">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-5xl font-extrabold uppercase">{price}</span>
        {price !== "Free" && <span className="text-sm opacity-50 uppercase font-bold tracking-widest">/mo</span>}
      </div>
      
      <div className="flex-1 space-y-4 mb-10">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", isPro ? "bg-mint/20" : "bg-white/10")}>
              <Check className={cn("w-3 h-3", isPro ? "text-mint" : "text-white/40")} />
            </div>
            <span className="text-sm font-medium opacity-80">{f}</span>
          </div>
        ))}
      </div>

      <button className={cn(
        "w-full py-5 rounded-2xl font-black tracking-widest uppercase text-sm transition-all shadow-lg active:scale-95",
        isPro 
          ? "bg-mint text-forest shadow-mint hover:shadow-mint/50" 
          : "bg-white text-charcoal hover:bg-white/90"
      )}>
        {isPro ? "Go Pro Now" : "Start For Free"}
      </button>
    </div>
  );
}

export function Pricing() {
  return (
    <section className="py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Choose your <span className="text-mint">pace.</span></h2>
          <p className="text-white/40 font-medium">Simple, transparent pricing for every kind of traveler.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard 
            title="Wanderer"
            price="Free"
            features={[
              "Up to 3 active trip itineraries",
              "Standard 2D Mapping (Google Maps)",
              "Basic Budget Tracking",
              "AI Chat (Limited to 20 msgs/day)",
              "Manual PII Isolation"
            ]}
          />
          <PricingCard 
            isPro
            title="Voyager"
            price="₹99"
            features={[
              "Unlimited trip itineraries",
              "High-Fidelity 3D TomTom Maps",
              "Collaborative Live Budget Hub",
              "Unlimited AI Co-pilot Support",
              "Route Optimization Engine",
              "Real-time Traffic Rerouting",
              "Export itineraries to PDF/JSON"
            ]}
          />
        </div>
      </div>
    </section>
  );
}
