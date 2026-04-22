import { motion } from 'motion/react';
import { MapPin, Plus, Clock, IndianRupee, Users, MessageSquare, Shield, CheckCircle2, Send } from 'lucide-react';

export const AppRoutePlanner = () => (
  <div className="p-5 font-sans h-full flex flex-col bg-[#0D0D1A] text-white">
    <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-4 flex items-center justify-between uppercase">
      <span>Route Planner</span>
      <Clock className="w-3 h-3 opacity-40" />
    </div>
    
    <div className="space-y-3 flex-1 overflow-y-auto pr-1">
      {[
        { label: 'Start: Mumbai', time: '08:00 AM', active: false },
        { label: 'Lonavala Stop', time: '11:30 AM', active: true },
        { label: 'Pune Junction', time: '02:00 PM', active: false },
        { label: 'Mahabaleshwar', time: '06:00 PM', active: false },
      ].map((stop, i) => (
        <div key={i} className={`p-3 rounded-xl border border-white/5 bg-white/5 transition-all ${stop.active ? 'border-mint/30 bg-mint/5' : ''}`}>
          <div className="flex items-center justify-between mb-1">
            <span className={`text-[10px] font-bold ${stop.active ? 'text-mint' : 'text-white/60'}`}>{stop.time}</span>
            {stop.active && <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className={`w-3 h-3 ${stop.active ? 'text-mint' : 'text-white/40'}`} />
            <span className="text-xs font-bold">{stop.label}</span>
          </div>
        </div>
      ))}
      
      <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-white/40 flex items-center justify-center gap-2 text-[10px] font-bold hover:border-mint/50 hover:text-mint/50 transition-all">
        <Plus className="w-3 h-3" /> ADD STOP
      </button>
    </div>
    
    <div className="mt-4 pt-4 border-t border-white/5">
      <button className="w-full py-3 bg-mint rounded-xl text-charcoal font-black text-xs uppercase tracking-tighter shadow-mint">
        Calculate Optimized Route
      </button>
    </div>
  </div>
);

export const AppBudgetUI = () => (
  <div className="p-5 font-sans h-full flex flex-col bg-[#0D0D1A] text-white">
    <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-4 flex items-center justify-between uppercase">
      <span>Family Budget</span>
      <IndianRupee className="w-3 h-3 opacity-40" />
    </div>
    
    <div className="flex justify-center mb-6">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
          <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="364" strokeDashoffset="120" className="text-mint" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs opacity-50 font-bold">Spent</span>
          <span className="text-lg font-black">72%</span>
        </div>
      </div>
    </div>
    
    <div className="space-y-3">
      {[
        { title: 'Fuel & Tolls', amount: '₹12,400', category: 'Transport' },
        { title: 'Luxury Hotel', amount: '₹28,500', category: 'Stay' },
        { title: 'Cafe Outing', amount: '₹4,200', category: 'Food' },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
          <div>
            <p className="text-xs font-bold">{item.title}</p>
            <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">{item.category}</p>
          </div>
          <span className="text-xs font-black">{item.amount}</span>
        </div>
      ))}
    </div>
    
    <div className="mt-auto">
      <div className="flex items-center gap-2 p-3 rounded-xl bg-forest/20 border border-forest/30">
        <Shield className="w-4 h-4 text-mint" />
        <p className="text-[9px] font-medium leading-tight">Securely shared with <span className="text-mint font-bold">4 family members</span>.</p>
      </div>
    </div>
  </div>
);

export const AppFamilySync = () => (
  <div className="p-5 font-sans h-full flex flex-col bg-[#0D0D1A] text-white">
    <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-4 flex items-center justify-between uppercase">
      <span>Family Sync</span>
      <Users className="w-3 h-3 opacity-40" />
    </div>
    
    <div className="flex-1 space-y-4">
      {[
        { name: 'Amit (Driver)', status: 'On track', active: true, color: 'bg-mint' },
        { name: 'Neha', status: 'Sleeping', active: false, color: 'bg-blue-400' },
        { name: 'Rohan', status: 'Exploring', active: true, color: 'bg-purple-400' },
        { name: 'Sita', status: 'Searching Cafe', active: true, color: 'bg-orange-400' },
      ].map((user, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="relative">
            <div className={`w-10 h-10 rounded-full ${user.active ? 'ring-2 ring-mint ring-offset-2 ring-offset-charcoal' : ''} ${user.color}`} />
            {user.active && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-mint border-2 border-charcoal rounded-full" />}
          </div>
          <div>
            <p className="text-xs font-bold">{user.name}</p>
            <p className="text-[9px] text-white/40 font-medium">{user.status}</p>
          </div>
          {user.active && <div className="ml-auto flex gap-1">
             <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin className="w-3 h-3 text-white/40" />
             </div>
             <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MessageSquare className="w-3 h-3 text-white/40" />
             </div>
          </div>}
        </div>
      ))}
    </div>
    
    <div className="bg-mint/10 border border-mint/20 rounded-2xl p-4 mt-6">
       <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
          <span className="text-[10px] font-black text-mint tracking-widest uppercase">Live Safety Check</span>
       </div>
       <p className="text-[10px] leading-relaxed text-white/70">Everyone is within 50 meters of the central meeting point.</p>
    </div>
  </div>
);

export const AppAICommand = () => (
  <div className="p-5 font-sans h-full flex flex-col bg-[#0D0D1A] text-white">
    <div className="text-[10px] font-black text-mint tracking-[0.2em] mb-4 flex items-center justify-between uppercase">
      <span>AI Assistant</span>
      <div className="flex gap-1">
        <div className="w-1 h-1 rounded-full bg-mint animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-1 h-1 rounded-full bg-mint animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="w-1 h-1 rounded-full bg-mint animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
    
    <div className="flex-1 space-y-4 overflow-hidden">
      <div className="bg-mint/10 p-3 rounded-2xl rounded-tl-none border border-mint/20 text-[10px] font-medium text-mint text-left">
        Best coffee stop near Pune?
      </div>
      <div className="bg-white/5 p-3 rounded-2xl rounded-tr-none border border-white/5 text-[10px] font-medium text-white/50 text-left ml-auto max-w-[90%]">
        Check out "Blue Tokai" in Baner. It's only 2 mins off your current route.
      </div>
      <div className="bg-mint/10 p-3 rounded-2xl rounded-tl-none border border-mint/20 text-[10px] font-medium text-mint text-left">
        Add to route.
      </div>
      <div className="bg-white/5 p-3 rounded-2xl rounded-tr-none border border-white/5 text-[10px] font-medium text-white/50 text-left ml-auto max-w-[90%]">
        Done. Rerouting via Baner...
      </div>
    </div>
    
    <div className="mt-4 flex items-center gap-2 p-1 rounded-2xl bg-white/5 border border-white/10">
      <div className="flex-1 px-4 text-[9px] text-white/20 font-bold">Ask anything...</div>
      <div className="w-8 h-8 rounded-xl bg-mint flex items-center justify-center">
        <Send className="w-4 h-4 text-forest" />
      </div>
    </div>
  </div>
);
