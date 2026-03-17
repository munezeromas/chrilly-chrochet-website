import React from 'react';
import { motion } from 'framer-motion';

const gridItems = [
  { img: '/img12.jpeg', size: 'col-span-1 row-span-1', label: 'Detail' },
  { img: '/img11.jpeg', size: 'col-span-1 row-span-1', label: 'Form' },
  { img: '/img13.jpeg', size: 'col-span-1 row-span-2', label: 'Legacy' },
  { img: '/scrunchies.jpg', size: 'col-span-1 row-span-1', label: 'Silk' },
  { img: '/pink_petals.jpg', size: 'col-span-2 row-span-1', label: 'Petals' },
  { img: '/img14.jpeg', size: 'col-span-1 row-span-1', label: 'Spirit' },
  { img: '/img16.jpeg', size: 'col-span-1 row-span-1', label: 'Unity' },
  { img: '/maxi_skirt.jpg', size: 'col-span-1 row-span-2', label: 'Flow' },
  { img: '/img17.jpeg', size: 'col-span-1 row-span-1', label: 'Craft' },
  { img: '/img15.jpeg', size: 'col-span-1 row-span-1', label: 'Founders' },
  { img: '/img18.jpeg', size: 'col-span-1 row-span-1', label: 'Loop' },
  { img: '/img19.jpeg', size: 'col-span-2 row-span-1', label: 'Texture' },
];

const LookbookSection: React.FC = () => {
  return (
    <section id="archive" className="py-32 md:py-48 px-8 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-blush font-body tracking-[0.5em] uppercase text-[10px] mb-6 block font-bold text-center md:text-left">The Visual Archive</span>
            <h2 className="text-6xl md:text-9xl font-display text-warmBrown leading-[0.85] text-center md:text-left">Life & <br /><span className="italic pl-12 md:pl-24">Stitch</span></h2>
          </div>
          <p className="font-body text-xs text-warmBrown/50 max-w-xs uppercase tracking-widest leading-loose text-center md:text-right">
            Every thread holds a memory. Every video captures the rhythm of Kigali.
          </p>
        </div>

        {/* Dynamic Video & Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] md:auto-rows-[400px] gap-8">
          {/* Main Video Piece - Using archive_vid.mp4 as requested */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 overflow-hidden border border-warmBrown/10 relative group"
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/archive_vid.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-warmBrown/20 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute bottom-10 left-10">
              <p className="font-body text-[10px] tracking-[0.5em] uppercase text-cream font-bold">The Archive Video / 001</p>
            </div>
          </motion.div>

          {gridItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`${item.size} overflow-hidden border border-warmBrown/10 relative group bg-linen`}
            >
              <img 
                src={item.img} 
                alt={item.label} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-warmBrown/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="font-display text-2xl text-cream italic mb-6 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.label}</span>
                <a 
                  href="https://wa.me/250780494910" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-cream/10 backdrop-blur-md border border-cream/20 text-cream px-6 py-2 rounded-full font-body text-[8px] tracking-[0.4em] uppercase font-bold hover:bg-cream hover:text-warmBrown transition-all duration-500"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}

          {/* Secondary Video Break */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-1 overflow-hidden border border-warmBrown/10 relative group"
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/vid3.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-warmBrown/40 group-hover:opacity-10 transition-all duration-700" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-5xl text-cream italic tracking-wider">Soul in Every Loop</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-1 overflow-hidden border border-warmBrown/10 relative group"
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/vid4.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-warmBrown/40 group-hover:opacity-10 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
