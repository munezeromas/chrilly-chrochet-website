import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stages = [
  {
    number: '01',
    title: 'The Selection',
    body: "Curating hand-dyed 'Pink Petals' and 'Earth Ivory' yarns from Kigali's local dye gardens.",
    image: '/img8.jpeg'
  },
  {
    number: '02',
    title: 'The Dialogue',
    body: 'A symphony of hook and fiber where every loop represents a word in our shared creative language.',
    image: '/img11.jpeg'
  },
  {
    number: '03',
    title: 'The Slow Sew',
    body: 'Engineering movement and structure through thousands of patient, rhythmic hand-stitches.',
    image: '/img12.jpeg'
  },
  {
    number: '04',
    title: 'The Legacy',
    body: 'A piece that transcends fashion, born from friendship and designed to hold your unique story.',
    image: '/img13.jpeg'
  },
];

export default function StorySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const xTranslate = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section ref={scrollRef} id="story" className="bg-cream py-32 md:py-64 relative overflow-hidden">
      {/* Background Fluid Type */}
      <motion.div 
        style={{ x: xTranslate }}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display text-[25vw] text-warmBrown/5 whitespace-nowrap italic pointer-events-none select-none"
      >
        WEAVE STORY WEAVE MEMORY WEAVE SOUL
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="mb-40 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl text-center md:text-left">
            <p className="font-body text-[10px] tracking-[0.8em] uppercase text-blush font-bold mb-10">
              The Digital Narrative
            </p>
            <h2 className="font-display text-7xl md:text-[10rem] text-warmBrown leading-[0.8] tracking-tighter">
              Silent <br /><span className="italic pl-12 md:pl-24">Dialogues</span>
            </h2>
          </div>
          <div className="w-[1px] h-40 bg-warmBrown/10 hidden md:block" />
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-warmBrown/40 max-w-xs leading-loose text-center md:text-right font-bold">
            A meticulous evolution from raw Rwandan fiber to a wearable digital couture legacy.
          </p>
        </div>

        {/* Parallax Card Stream */}
        <div className="flex flex-col gap-48">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-20`}
            >
              {/* Cinematic Image Frame */}
              <div className="w-full md:w-1/2 aspect-[16/10] overflow-hidden relative border border-warmBrown/10 shadow-2xl skew-y-2 group">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-[3000ms] group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-2" 
                />
                <div className="absolute inset-0 bg-warmBrown/10 group-hover:bg-transparent transition-all duration-1000" />
                
                {/* Floating Cap */}
                <span className="absolute bottom-8 left-8 font-display text-8xl text-cream opacity-20 italic">0{i+1}</span>
              </div>

              {/* Editorial Text */}
              <div className="w-full md:w-2/5 px-4 text-center md:text-left">
                <span className="font-body text-[10px] tracking-[0.6em] uppercase text-blush font-bold mb-6 block italic">Phase 0{i+1}</span>
                <h3 className="font-display text-5xl md:text-6xl text-warmBrown mb-10 tracking-tight leading-none group-hover:italic transition-all">
                  {stage.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-warmBrown/60 leading-relaxed uppercase tracking-[0.3em] max-w-sm">
                  {stage.body}
                </p>
                
                <div className="mt-12 w-20 h-px bg-warmBrown/30 mx-auto md:mx-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commercial Bridge */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-64 text-center"
        >
          <p className="font-display text-5xl md:text-[6rem] text-warmBrown italic max-w-5xl mx-auto leading-tight tracking-tighter opacity-80 mb-20">
            "We weave our hearts into every loop."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a
              href="#"
              className="inline-flex items-center gap-10 group"
            >
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-blush font-bold hover:tracking-[0.8em] transition-all duration-700">Explore Instagram</span>
              <div className="w-10 h-10 rounded-full border border-blush flex items-center justify-center group-hover:bg-blush transition-all duration-500">
                <span className="text-blush group-hover:text-cream silk-transition">→</span>
              </div>
            </a>
            <div className="hidden md:block w-px h-8 bg-warmBrown/10" />
            <a
              href="https://wa.me/250780494910"
              target="_blank"
              rel="noreferrer"
              className="font-body text-[10px] tracking-[0.6em] uppercase text-warmBrown/50 hover:text-blush font-bold transition-all"
            >
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
