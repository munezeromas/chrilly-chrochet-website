import React from 'react';
import { motion } from 'framer-motion';

// Imports per strict mapping
import ivorySet from '../assets/images/earth_ivory_granny_set_hd.png';
import ruffleSet from '../assets/images/img4.jpeg';
import coralSet from '../assets/images/img5.jpeg';
import foundersStudio from '../assets/images/img6.jpeg';
import foundersOverhead from '../assets/images/img7.jpeg';
import babyBooties from '../assets/images/baby_booties.jpg';
import babyTop from '../assets/images/baby_top.jpg';

const ProductSection: React.FC = () => {
  const collection = [
    { img: ivorySet, title: "Ivory Granny Set", desc: "Pure artisan crochet" },
    { img: ruffleSet, title: "Pink Ruffle Set", desc: "Whimsical details" },
    { img: coralSet, title: "Coral Bloom Duo", desc: "Vibrant and soft" },
    { img: foundersStudio, title: "Founders Portrait", desc: "Studio heritage" },
    { img: foundersOverhead, title: "Artisan Connection", desc: "Laughing heritage" },
    { img: babyBooties, title: "Handmade Booties", desc: "Small treasures" },
    { img: babyTop, title: "Infant Layer", desc: "Pure cotton comfort" },
  ];

  return (
    <section id="collection" className="min-h-screen bg-linen relative overflow-hidden py-40">
      <div className="max-w-[90rem] mx-auto px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-40">
          <div>
            <span className="text-blush font-body font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">
              The Woven Garden
            </span>
            <h2 className="text-6xl md:text-9xl font-display italic text-warmBrown leading-[0.8] tracking-tighter">
              Tactile <br /> Poetry
            </h2>
          </div>
          <p className="max-w-md text-warmBrown/60 font-body text-xl font-light leading-relaxed pb-4">
            A singular synthesis of heritage and modernity. Each stitch invites you to experience the luxury of patience.
          </p>
        </div>

        {/* Featured Showcase (Card 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/5] rounded-none overflow-hidden relative group border border-warmBrown/10"
          >
            <img src={ivorySet} alt="Featured" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
          </motion.div>

          <div className="pl-0 lg:pl-16">
             <span className="text-goldAccent font-body text-[10px] uppercase tracking-[0.5em] mb-12 block font-bold">Featured Collection</span>
             <h3 className="text-5xl md:text-7xl font-display text-warmBrown mb-12 italic">Earth Ivory <br /> Granny Square</h3>
             <div className="w-24 h-[1px] bg-warmBrown/20 mb-12" />
             <p className="text-warmBrown/70 font-body text-lg leading-loose font-light">
               The crown jewel of our current collection. A patient blend of ivory and earth tones, hand-stitched over weeks to create a silhouette that breathes with you.
             </p>
          </div>
        </div>

        {/* Minimalist Grid (2-7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {collection.slice(1).map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="group"
             >
                <div className="aspect-[3/4] overflow-hidden relative bg-cream/30 border border-warmBrown/5 mb-8">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110" />
                </div>
                <h4 className="text-2xl font-display italic text-warmBrown mb-2">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-warmBrown/40 font-bold">{item.desc}</p>
             </motion.div>
          ))}
        </div>

      </div>
      <div className="linen-texture" />
    </section>
  );
};

export default ProductSection;
