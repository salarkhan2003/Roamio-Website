import { motion } from 'motion/react';
import { Bot, Send, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const mockMessages = [
  { role: 'ai', content: "Hey! I noticed you're heading to Varkala. Want me to book a cliff-view cafe for sunset?" },
  { role: 'user', content: "That sounds great. Prefer something quiet with vegan options." },
  { role: 'ai', content: "Found 'The Organic Shack'. They have a hidden deck with zero crowd. Booking for 5:30 PM?" },
  { role: 'user', content: "Yes please!" },
  { role: 'ai', content: "Confirmed. Reservation sent to your email. Expect light rain around 6 PM, I've added an umbrella reminder to your packing list." }
];

export function AICommandCenter() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    if (visibleMessages < mockMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <section className="py-32 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 border-mint/10 bg-gradient-to-br from-white/5 to-transparent">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-mint flex items-center justify-center">
                  <Bot className="w-5 h-5 text-forest" />
                </div>
                <span className="text-sm font-black tracking-widest text-mint uppercase">AI CO-PILOT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Command Center.<br />
                <span className="text-white/40">Zero effort.</span>
              </h2>
              <p className="text-white/50 mb-8 font-medium">
                Our proprietary AI model connects with hotel APIs, weather satellites, 
                and local event hubs to curate your trip in real-time. Just talk to it.
              </p>
              <div className="space-y-4">
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-sm font-bold opacity-60 italic">"Book a cab for 6 AM tomorrow"</span>
                    <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
                      <Send className="w-3 h-3 text-mint" />
                    </div>
                 </div>
                 <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-sm font-bold opacity-60 italic">"What's the best cafe for remote work?"</span>
                    <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center">
                      <Send className="w-3 h-3 text-mint" />
                    </div>
                 </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="clay-phone scale-100 lg:scale-110 relative z-10 h-[500px]">
                <div className="p-5 font-sans h-full flex flex-col bg-[#0D0D1A] overflow-hidden text-left">
                  <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-6 uppercase flex items-center justify-between">
                    <span>AI COMMAND</span>
                    <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  </div>
                  
                  <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                    {mockMessages.slice(0, visibleMessages).map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "p-3 rounded-2xl max-w-[90%] text-[10px] font-medium leading-relaxed",
                          msg.role === 'ai' 
                            ? "bg-mint/10 text-mint self-start rounded-tl-none border border-mint/20" 
                            : "bg-white/5 text-white/70 self-end rounded-tr-none border border-white/5 ml-auto"
                        )}
                      >
                        {msg.content}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                     <div className="flex-1 h-3 bg-white/5 rounded-full animate-pulse" />
                     <div className="w-6 h-6 rounded-full bg-mint flex items-center justify-center">
                        <Send className="w-3 h-3 text-forest" />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
