import React from 'react';
import { motion } from 'framer-motion';

const connections = [
  { name: 'Paris', x: 480, y: 157 },
  { name: 'New York', x: 250, y: 180 },
  { name: 'Dubai', x: 580, y: 202 },
  { name: 'Tokyo', x: 820, y: 189 },
  { name: 'Cape Town', x: 520, y: 382 },
];

const GlobalMap: React.FC = () => {
  return (
    <section className="py-32 md:py-64 px-8 bg-warmBrown relative overflow-hidden text-cream">
      {/* Texture Layer / Editorial Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] grayscale mix-blend-overlay scale-110 pointer-events-none"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/micro-carbon.png")',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.2em' }}
              whileInView={{ opacity: 1, letterSpacing: '0.8em' }}
              className="text-blush font-body uppercase text-[10px] mb-10 block font-bold italic"
            >
              The Global Loom
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[11rem] font-display leading-[0.75] tracking-tighter"
            >
              From Kigali <br /> <span className="italic pl-12 md:pl-24 text-outline-cream">to the World</span>
            </motion.h2>
          </div>
          <div className="text-right">
            <p className="font-body text-[11px] text-cream/40 uppercase tracking-[0.4em] max-w-[250px] leading-relaxed mb-6">
              Our threads have no borders. Each stitch carries the warmth of Rwanda to every corner of the map.
            </p>
            <div className="w-20 h-[1px] bg-cream/10 ml-auto" />
          </div>
        </div>

        {/* The Map Interface */}
        <div className="relative aspect-[21/9] w-full glass-heavy rounded-[2rem] border border-cream/5 flex items-center justify-center overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blush/5 blur-[150px] rounded-full pointer-events-none" />

          {/* SVG Stylized Map */}
          <svg viewBox="0 0 1000 450" className="w-full h-full opacity-20 filter drop-shadow-2xl">
            {/* Minimal World Map Paths (Points) */}
            <g fill="rgba(255, 248, 242, 0.15)">
               {/* Very simplified dots map for 'Vogue' look */}
               {[...Array(200)].map((_, i) => (
                 <circle 
                   key={i} 
                   cx={Math.random() * 1000} 
                   cy={Math.random() * 450} 
                   r={Math.random() * 1.5} 
                   className="animate-pulse"
                   style={{ animationDelay: `${Math.random() * 5}s` }}
                 />
               ))}
            </g>

            {/* Kigali Center Point */}
            <motion.circle 
              cx="550" cy="270" r="4" 
              fill="#E8879A" 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="drop-shadow-[0_0_15px_#E8879A]"
            />
            <circle cx="550" cy="270" r="12" fill="none" stroke="#E8879A" strokeWidth="0.5" className="animate-ping" />

            {/* Connection Paths */}
            <g>
              {connections.map((city, i) => (
                <motion.path
                  key={i}
                  d={`M 550 270 Q 600 200 ${city.x} ${city.y}`}
                  fill="none"
                  stroke="rgba(232, 135, 154, 0.3)"
                  strokeWidth="0.8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 3, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
                />
              ))}
            </g>
          </svg>

          {/* Floating UI Indicators */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {/* Kigali Label */}
            <div className="absolute top-[60%] left-[56%] flex items-center gap-4">
              <div className="w-8 h-[1px] bg-blush" />
              <span className="font-display text-xl italic text-cream">Kigali Studio</span>
            </div>

            {/* Floating City Tags */}
            <div className="absolute top-[35%] left-[45%] opacity-40">
              <span className="font-body text-[8px] tracking-[0.4em] uppercase text-cream">Europe</span>
            </div>
            <div className="absolute top-[38%] left-[22%] opacity-40">
              <span className="font-body text-[8px] tracking-[0.4em] uppercase text-cream">N. America</span>
            </div>
            <div className="absolute top-[42%] left-[80%] opacity-40">
              <span className="font-body text-[8px] tracking-[0.4em] uppercase text-cream">Asia</span>
            </div>
          </div>
        </div>

        {/* Shipping Pointers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-32">
          {[
            { tag: 'Origin', title: 'Kigali Atelier', desc: 'Directly from the source.' },
            { tag: 'Delivery', title: 'Global Air Cargo', desc: 'World-wide connectivity.' },
            { tag: 'Customs', title: 'Bespoke Handling', desc: 'Seamless luxury transit.' },
            { tag: 'Tracking', title: 'Concierge Updates', desc: 'Personalized yarn-path.' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-pill backdrop-blur-3xl group silk-transition"
            >
              <p className="font-body text-[9px] tracking-[0.5em] uppercase text-blush font-bold mb-6">{item.tag}</p>
              <h4 className="font-display text-2xl italic text-cream mb-4 group-hover:pl-2 silk-transition">{item.title}</h4>
              <p className="font-body text-[9px] text-cream/40 uppercase tracking-[0.2em]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extreme Decorative Text */}
      <div className="absolute -bottom-20 -left-20 font-display text-[25rem] text-cream/5 tracking-tighter opacity-10 pointer-events-none italic">
        Kigali
      </div>
    </section>
  );
};

export default GlobalMap;
