import React from 'react';
import { motion } from 'framer-motion';

// Imports per strict mapping
import bgImage from '../assets/images/img3.jpeg';
import watermark from '../assets/images/crochet_heart.jpg';
import avatarFounders from '../assets/images/img7.jpeg';
import avatarStudio from '../assets/images/img6.jpeg';
import avatarIvory from '../assets/images/earth_ivory_granny_set_hd.png';

const Testimonials: React.FC = () => {
  const reviews = [
    { avatar: avatarFounders, name: "Elena R.", quote: "The texture is unlike anything I've ever owned. It feels alive with history." },
    { avatar: avatarStudio, name: "Marcus T.", quote: "Absolute mastery of the craft. A piece that commands silence and respect." },
    { avatar: avatarIvory, name: "Sophia L.", quote: "Bought the ivory set and never looked back. It's my favorite heirloom." },
    { avatar: avatarFounders, name: "James K.", quote: "The personal touch and the wait made it even more special." },
    { avatar: avatarStudio, name: "Mira B.", quote: "Exquisite details. You can see the soul in every single stitch." },
  ];

  return (
    <section id="feedback" className="py-40 px-8 bg-cream relative overflow-hidden">
      <div 
        className="absolute inset-0 grayscale opacity-[0.055] z-0 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
      />
      
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] grayscale opacity-[0.04] pointer-events-none">
        <img src={watermark} alt="Watermark" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-blush font-body font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Voices in Silk</span>
          <h2 className="text-5xl md:text-8xl font-display italic text-warmBrown">Letters of <br /> Appreciation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border border-warmBrown/5 bg-cream/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-warmBrown/10">
                  <img src={r.avatar} alt={r.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h4 className="font-display italic text-xl text-warmBrown">{r.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-warmBrown/40 font-bold">Collector</p>
                </div>
              </div>
              <p className="text-warmBrown/80 font-body text-lg italic font-light leading-relaxed">
                "{r.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="linen-texture" />
    </section>
  );
};

export default Testimonials;
