import { motion } from 'framer-motion';

const values = [
  { label: 'Crafted In', val: 'Kigali, RW' },
  { label: 'Philosophy', val: 'Slow Fashion' },
  { label: 'Artisans', val: 'Community' },
  { label: 'Impact', val: 'Ethics' },
];

export default function StatsSection() {
  return (
    <section className="bg-linen py-32 md:py-64 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mb-32">
          <div>
            <p className="font-body text-[10px] tracking-[0.6em] uppercase text-blush font-bold mb-8">
              The Universal Loom
            </p>
            <h2 className="font-display text-7xl md:text-[10rem] text-warmBrown leading-[0.8] tracking-tighter">
              Bound by <br /><span className="italic pl-12 md:pl-24">Thread</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-sm text-warmBrown/60 uppercase tracking-[0.3em] leading-loose mb-12">
              We are a starting studio with global dreams. No numbers can quantify the soul of a handmade stitch.
            </p>
            <div className="w-full h-px bg-warmBrown/10" />
          </div>
        </div>

        {/* Values Grid - Replacing numerical stats with editorial pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-warmBrown/10 border border-warmBrown/10">
          {values.map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1 }}
              viewport={{ once: true }}
              className="bg-linen py-20 px-12 flex flex-col items-center gap-6 text-center group"
            >
              <span className="font-body text-[10px] tracking-[0.5em] uppercase text-blush font-bold opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              <span className="font-display text-4xl md:text-5xl text-warmBrown group-hover:italic transition-all duration-500">
                {item.val}
              </span>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-mediumBrown/50">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[30rem] text-warmBrown/5 opacity-5 pointer-events-none italic select-none">
        Vision
      </div>
    </section>
  );
}
