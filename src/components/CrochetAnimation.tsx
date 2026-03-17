import React from 'react';
import { motion } from 'framer-motion';

// Imports per strict mapping
import bgDetail from '../assets/images/crochet_detail_38.jpg';
import propRight from '../assets/images/img2.jpeg';
import propLeft from '../assets/images/img1.jpeg';

const CrochetAnimation: React.FC = () => {
  return (
    <section id="process-animation" className="py-40 px-8 bg-cream relative overflow-hidden">
      {/* Background with strict mapping opacity */}
      <div 
        className="absolute inset-0 grayscale opacity-[0.06] z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgDetail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <span className="text-blush font-body font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">The Soul of the Stitch</span>
        <h2 className="text-6xl md:text-9xl font-display italic text-warmBrown mb-12 leading-none">Patience <br /> in Motion</h2>

        {/* Animated Visuals */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Circular prop right (180px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            className="absolute right-[10%] top-[20%] w-[180px] h-[180px] rounded-full overflow-hidden border border-warmBrown/10 z-20"
          >
            <img src={propRight} alt="Prop" className="w-full h-full object-cover" />
          </motion.div>

          {/* Circular prop left (120px) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            className="absolute left-[15%] bottom-[30%] w-[120px] h-[120px] rounded-full overflow-hidden border border-warmBrown/10 z-20"
          >
            <img src={propLeft} alt="Prop" className="w-full h-full object-cover" />
          </motion.div>

          {/* Center SVG for animation (Simplified elegant loop) */}
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-warmBrown/20">
             <motion.path
               d="M100,50 C130,50 150,80 150,110 C150,140 120,160 100,160 C80,160 50,140 50,110 C50,80 70,50 100,50 Z"
               fill="none"
               stroke="currentColor"
               strokeWidth="0.5"
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             />
          </svg>
        </div>

        <p className="max-w-2xl mx-auto text-warmBrown/60 font-body text-xl font-light leading-relaxed italic">
          "Luxury is the ability to wait for something that matters."
        </p>
      </div>

      <div className="linen-texture" />
    </section>
  );
};

export default CrochetAnimation;
