import { Smartphone, Instagram, Twitter, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-charcoal pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Aurora Gradient pulse */}
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-mint/10 via-forest/5 to-transparent pointer-events-none opacity-50 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-mint flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-forest" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Roamio</span>
            </div>
            <p className="max-w-xs text-white/40 font-medium leading-relaxed mb-8">
              Redefining travel planning for the modern era. Join over 500,000+ 
              travelers owning their moments one trip at a time.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint/20 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-mint/20 transition-colors cursor-pointer">
                <MessageSquare className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-white/30">Connect</h4>
            <ul className="space-y-4 text-sm font-semibold text-white/60">
              <li><a href="#" className="hover:text-mint transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Developer Portal</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Business Inquiries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-white/30">Legal</h4>
            <ul className="space-y-4 text-sm font-semibold text-white/60">
              <li><a href="#" className="hover:text-mint transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Cookie Settings</a></li>
              <li><a href="#" className="hover:text-mint transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
          <p className="text-xs text-white/20 font-bold">© 2026 ROAMIO TECHNOLOGIES PVT LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-black text-white/40 tracking-widest">MADE WITH ❤️ IN BANGALORE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
