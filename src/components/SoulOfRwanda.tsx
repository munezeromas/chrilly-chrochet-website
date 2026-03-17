import { motion } from 'framer-motion';

const SoulOfRwanda: React.FC = () => {
  return (
    <section className="min-h-screen bg-warmBrown flex items-center justify-center relative overflow-hidden px-8">
      {/* Background Cinematic Asset */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover opacity-20 scale-110 grayscale brightness-50"
          src="/vid4.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warmBrown via-transparent to-warmBrown/80" />
      </div>

      {/* Floating Image Fragments (Parallax) */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-48 md:w-64 aspect-[3/4] glass-heavy p-2 skew-x-3 opacity-30"
        >
          <img src="/img16.jpeg" className="w-full h-full object-cover grayscale" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[15%] right-[5%] w-56 md:w-80 aspect-[4/5] glass-heavy p-2 -skew-x-2 opacity-40 hover:opacity-100 silk-transition"
        >
          <img src="/img17.jpeg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Watermark */}
          <div className="mb-20">
            <img src="/logo.jpeg" alt="Logo" className="w-20 h-20 mx-auto drop-shadow-[0_0_30px_rgba(255,248,242,0.1)] opacity-40 hover:opacity-100 transition-opacity" />
            <div className="w-[1px] h-12 bg-cream/10 mx-auto mt-8" />
          </div>

          <span className="font-body text-[10px] tracking-[1rem] uppercase text-blush mb-16 block font-bold">The Heritage Manifest</span>
          
          <h2 className="font-display text-8xl md:text-[14rem] text-cream leading-[0.75] mb-24 tracking-tighter">
            Woven <br /> <span className="italic pl-12 md:pl-24 text-outline-cream">Soul</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 text-left border-t border-cream/5 pt-20">
            <div className="space-y-8">
              <p className="font-body text-[11px] md:text-xs text-cream/50 leading-relaxed uppercase tracking-[0.4em] font-medium">
                Every loop is a heartbeat preserved in Rwandan fiber. We don't just create garments; we anchor memories in the weight of hand-dyed thread, born from the volcanic earth of Kigali.
              </p>
              <div className="w-12 h-px bg-blush/40" />
            </div>
            
            <div className="space-y-8">
              <p className="font-body text-[11px] md:text-xs text-cream/50 leading-relaxed uppercase tracking-[0.4em] font-medium">
                The future of luxury is patient. It is a silent dialogue between the hook and the dream, a legacy whispered from friend to friend, and now shared globally through digital couture.
              </p>
              <a href="#maker" className="group flex items-center gap-6 font-display text-2xl italic text-cream/80 hover:text-cream silk-transition">
                Meet the Artisans
                <span className="w-10 h-[1px] bg-cream/20 group-hover:w-16 transition-all" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Vertical Watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 font-display text-[20rem] text-cream/5 select-none pointer-events-none vertical-text opacity-10">
        LEGACY
      </div>
    </section>
  );
};

export default SoulOfRwanda;
