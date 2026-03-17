import { motion } from 'framer-motion';

const allImages = [
  { src: '/img1.jpeg', scale: 'lg' }, 
  { src: '/img2.jpeg', scale: 'sm' }, 
  { src: '/img3.jpeg', scale: 'md' }, 
  { src: '/img4.jpeg', scale: 'lg' }, 
  { src: '/img5.jpeg', scale: 'sm' },
  { src: '/img6.jpeg', scale: 'md' }, 
  { src: '/img7.jpeg', scale: 'lg' }, 
  { src: '/img8.jpeg', scale: 'sm' }, 
  { src: '/img9.jpeg', scale: 'md' }, 
  { src: '/img11.jpeg', scale: 'lg' },
  { src: '/img12.jpeg', scale: 'sm' }, 
  { src: '/img13.jpeg', scale: 'md' }, 
  { src: '/img14.jpeg', scale: 'lg' }, 
  { src: '/img15.jpeg', scale: 'sm' }, 
  { src: '/img16.jpeg', scale: 'md' },
  { src: '/img17.jpeg', scale: 'lg' }, 
  { src: '/img18.jpeg', scale: 'sm' }, 
  { src: '/img19.jpeg', scale: 'md' }, 
  { src: '/pink_petals.jpg', scale: 'lg' }, 
  { src: '/maxi_skirt.jpg', scale: 'sm' },
  { src: '/scrunchies.jpg', scale: 'md' }, 
  { src: '/baby_booties.jpg', scale: 'lg' }, 
  { src: '/baby_top.jpg', scale: 'sm' }, 
  { src: '/crochet_heart.jpg', scale: 'md' }, 
  { src: '/crochet_detail_38.jpg', scale: 'lg' }
];

export default function GallerySection() {
  return (
    <section id="poetry" className="bg-cream py-32 md:py-64 px-8 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="mb-40 flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-body text-[10px] tracking-[0.8em] uppercase text-blush font-bold mb-10"
            >
              The Visual Manifesto
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-8xl md:text-[12rem] text-warmBrown leading-[0.85] tracking-tighter"
            >
              Visual <br /><span className="italic pl-12 md:pl-24">Poetry</span>
            </motion.h2>
          </div>
          <div className="md:text-right border-l md:border-l-0 md:border-r border-warmBrown/10 pl-8 md:pl-0 md:pr-8">
            <p className="font-body text-[11px] text-warmBrown/40 uppercase tracking-[0.4em] max-w-[280px] leading-relaxed">
              Every captured frame is a syllable in the story of Kigali luxury. Hand-dyed thread, volcanic earth, and digital spirit.
            </p>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-12 space-y-12">
          {allImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (i % 4) * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden glass-pill p-2 ${
                img.scale === 'lg' ? 'aspect-[3/4]' : img.scale === 'md' ? 'aspect-square' : 'aspect-[4/5]'
              }`}
            >
              <img
                src={img.src}
                alt={`Poetry shard ${i + 1}`}
                className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-110"
                loading="lazy"
              />
              {/* Interaction Overlay */}
              <div className="absolute inset-0 bg-warmBrown/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-center justify-center gap-6">
                <a 
                  href="https://wa.me/250780494910" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-cream text-warmBrown px-8 py-3 rounded-full font-body text-[9px] tracking-[0.4em] uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 hover:bg-blush hover:text-cream"
                >
                  Order on WhatsApp
                </a>
              </div>
              
              {/* Metadata tag */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-body text-[8px] tracking-[0.4em] uppercase text-cream bg-warmBrown/40 backdrop-blur-md px-4 py-2 rounded-full">
                  Archive No.{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Type */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[30rem] text-warmBrown/5 select-none pointer-events-none vertical-text opacity-5">
        POETRY
      </div>
    </section>
  );
}
