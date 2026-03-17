import { motion } from 'framer-motion';

export default function MeetTheMaker() {
  return (
    <section id="maker" className="bg-cream py-32 md:py-64 px-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-25 grayscale mix-blend-multiply scale-110"
          autoPlay loop muted playsInline
          src="/vid1.mp4"
        />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          
          {/* Founders Spotlight - Collage Style */}
          <div className="w-full lg:w-[45%] relative group">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden glass-heavy p-3 skew-y-1 shadow-2xl"
            >
              <img
                src="/img10.jpeg"
                alt="Henriette & Christine"
                className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warmBrown/10 group-hover:opacity-0 transition-opacity" />
            </motion.div>

            {/* Editorial Cap */}
            <div className="absolute -top-12 -left-12 font-display text-9xl text-warmBrown/5 italic select-none pointer-events-none">
              Founders
            </div>
          </div>

          {/* Narrative & Commercial */}
          <div className="w-full lg:w-[50%]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-body text-[10px] tracking-[0.8em] uppercase text-blush font-bold mb-10">
                The Hands Behind the Narrative
              </p>
              
              <h2 className="font-display text-7xl md:text-[10rem] text-warmBrown leading-[0.8] tracking-tighter mb-16 px-4 md:px-0">
                Henriette <br />& <span className="italic pl-12 md:pl-24">Christine</span>
              </h2>

              <div className="space-y-12 mb-20">
                <p className="font-body text-xs md:text-sm text-warmBrown/70 leading-relaxed uppercase tracking-[0.4em] border-l border-warmBrown/10 pl-10">
                  Chrilly Crochet is a celebration of "Silent Synergy"—a lifelong friendship born in the hills of Kigali, transformed into a globally recognized luxury digital boutique. 
                </p>
                <div className="flex items-center gap-10">
                  <div className="w-20 h-px bg-blush" />
                  <p className="font-display text-4xl italic text-warmBrown/60">"Artistry in every loop."</p>
                </div>
              </div>

              {/* Commercial High-Density Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a 
                  href="#" 
                  className="group block p-10 glass-pill transition-all duration-700 hover:scale-[1.02]"
                >
                  <h4 className="font-display text-3xl italic mb-4 text-warmBrown">The Archive</h4>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-warmBrown/40 mb-10">
                    See our latest process shots and Kigali studio life.
                  </p>
                  <span className="font-body text-[8px] tracking-[0.5em] uppercase text-blush font-bold group-hover:pl-4 transition-all">Instagram Feed →</span>
                </a>

                <a 
                  href="https://wa.me/250780494910" 
                  className="group block p-10 glass-heavy backdrop-blur-3xl transition-all duration-700 hover:scale-[1.02]"
                >
                  <h4 className="font-display text-3xl italic mb-4 text-warmBrown">The Atelier</h4>
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-warmBrown/40 mb-10">
                    Bespoke sizing, custom dyes, and global shipping.
                  </p>
                  <span className="font-body text-[8px] tracking-[0.5em] uppercase text-blush font-bold group-hover:pl-4 transition-all">Order on WhatsApp →</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Extreme Decorative Element */}
      <div className="absolute right-[-5%] bottom-[-5%] font-display text-[30rem] text-warmBrown/5 select-none pointer-events-none rotate-12">
        &
      </div>
    </section>
  );
}
