import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-warmBrown py-32 md:py-64 px-8 text-cream relative overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 opacity-[0.05] grayscale mix-blend-color-dodge pointer-events-none">
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover scale-110 blur-[1px]" 
          src="/vid4.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warmBrown via-transparent to-warmBrown/80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-32 items-start mb-40">
          
          {/* Brand Identity / The Peak */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-10 mb-16"
            >
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="w-24 h-auto drop-shadow-[0_0_30px_rgba(255,248,242,0.15)] opacity-80" 
              />
              <div className="h-12 w-px bg-cream/10" />
              <div>
                <h3 className="font-display text-5xl md:text-6xl tracking-tighter leading-none mb-2">Chrilly <br /><span className="italic">Crochet</span></h3>
                <p className="font-body text-[9px] tracking-[0.5em] uppercase text-blush font-bold opacity-60">Digital Couture / Kigali</p>
              </div>
            </motion.div>
            
            <p className="font-body text-xs md:text-sm text-cream/50 leading-relaxed uppercase tracking-[0.3em] max-w-sm mb-16 font-medium">
              Every loop is a heartbeat preserved in Rwandan fiber. Weaving our world into yours, one stitch at a time.
            </p>

            <div className="space-y-8">
              <p className="font-body text-[10px] tracking-[0.6em] uppercase text-blush font-bold italic">The Archive Feed</p>
              <div className="flex gap-12">
                {['Instagram'].map((social) => (
                  <motion.a 
                    key={social} 
                    href="#" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.4 }}
                    whileHover={{ opacity: 1, x: 4 }}
                    className="font-body text-[10px] tracking-[0.4em] uppercase text-cream silk-transition cursor-pointer"
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigational Pillars */}
          <div className="space-y-12">
            <h4 className="font-body text-[10px] tracking-[0.8em] uppercase text-blush font-bold">The Atelier</h4>
            <nav className="flex flex-col gap-8">
              {[
                { label: 'The Narrative', href: '#story' },
                { label: 'The Archive', href: '#archive' },
                { label: 'The Exhibit', href: '#collection' },
                { label: 'The Makers', href: '#maker' }
              ].map(link => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="font-display text-3xl italic text-cream/40 hover:text-cream hover:pl-4 transition-all duration-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Boutique Contact */}
          <div className="space-y-12">
            <h4 className="font-body text-[10px] tracking-[0.8em] uppercase text-blush font-bold">Inquiries</h4>
            <div className="space-y-8">
              <p className="font-body text-[10px] text-cream/30 uppercase tracking-[0.4em]">Direct / Bespoke Orders</p>
              <a 
                href="https://wa.me/250780494910" 
                className="group flex items-center gap-6 font-display text-5xl italic text-cream hover:text-blush transition-all duration-700"
              >
                Atelier 
                <span className="w-12 h-px bg-blush/40 group-hover:w-20 transition-all duration-700" />
              </a>
            </div>
            
            <div className="pt-12 border-t border-cream/5 space-y-6">
              <p className="font-body text-[10px] text-cream/30 uppercase tracking-[0.4em]">Kigali Studio</p>
              <p className="font-body text-[11px] text-cream/60 leading-relaxed tracking-[0.2em] uppercase font-medium">
                Rwanda, Kigali <br /> Kilali Rd / Studio 04
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-cream/5">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-cream/20">
            © 2026 Chrilly Crochet. All threads preserved.
          </p>
          <div className="flex items-center gap-8">
            <span className="font-body text-[8px] tracking-[0.5em] uppercase text-cream/10 italic">High-End Digital Presence</span>
            <div className="w-10 h-px bg-cream/5" />
            <span className="font-body text-[8px] tracking-[0.5em] uppercase text-cream/10">Born in Rwanda</span>
          </div>
        </div>
      </div>

      {/* Mammoth Backdrop Type */}
      <div className="absolute left-[-5%] bottom-[-5%] font-display text-[30rem] text-cream/5 tracking-tighter opacity-5 select-none pointer-events-none rotate-6">
        SILK
      </div>
    </footer>
  );
}
