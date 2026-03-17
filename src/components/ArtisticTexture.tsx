import React from 'react';
import { motion } from 'framer-motion';

const textures = [
  { img: '/pink_petals.jpg', title: 'Pink Petals', desc: 'Hand-dyed soul', size: 'col-span-1' },
  { img: '/img8.jpeg', title: 'The Hook', desc: 'Rhythmic precision', size: 'col-span-1' },
  { img: '/img12.jpeg', title: 'Fibers', desc: 'Organic connection', size: 'col-span-1' },
  { img: '/img5.jpeg', title: 'Serenity', desc: 'Patient loops', size: 'col-span-1' },
  { img: '/img6.jpeg', title: 'Detail', desc: 'Macro perfection', size: 'col-span-1' },
  { img: '/img7.jpeg', title: 'Earth', desc: 'Natural dyes', size: 'col-span-1' },
];

const ArtisticTexture: React.FC = () => {
  return (
    <section className="py-32 md:py-64 bg-warmBrown relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-10">
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover grayscale blur-[2px] scale-110"
          src="/vid2.mp4"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5 border border-cream/5">
          {textures.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="group relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden border border-cream/5"
            >
              <div className="absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000 grayscale group-hover:grayscale-0">
                <img src={t.img} alt={t.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms] cubic-bezier(0.16, 1, 0.3, 1)" />
                <div className="absolute inset-0 bg-warmBrown/40 group-hover:bg-transparent transition-colors duration-1000" />
              </div>
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <span className="font-body text-[10px] tracking-[0.6em] uppercase text-blush mb-4 block font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">0{i+1}</span>
                <h3 className="font-display text-4xl md:text-5xl text-cream mb-4 group-hover:italic transition-all translate-y-4 group-hover:translate-y-0 duration-700">{t.title}</h3>
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-cream/40 group-hover:text-cream transition-colors duration-700">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-cream/5 select-none pointer-events-none italic">
        Texture
      </div>
    </section>
  );
};

export default ArtisticTexture;
