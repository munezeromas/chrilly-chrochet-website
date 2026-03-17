import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const logoRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section ref={containerRef} className="relative h-[110vh] w-full overflow-hidden bg-warmBrown select-none">
      {/* Layer 0: Deep Video (Slow Parallax) */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-110 brightness-[0.7] contrast-[1.1]"
        >
          <source src="/archive_vid.mp4" type="video/mp4" />
        </video>

        {/* Color Grading Layers */}
        <div className="absolute inset-0 bg-[#5C3317] mix-blend-color opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#5C3317]/60 via-transparent to-[#FFF8F2]/10" />

        {/* Soft Grain / Dust Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] pointer-events-none" />
      </motion.div>

      {/* Layer 1: Blurred Narrative (img10) */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5], [0.3, 0]),
          backgroundImage: 'url("/img8.jpeg")'
        }}
        className="absolute inset-0 z-[1] bg-cover bg-center mix-blend-overlay filter blur-[60px]"
      />

      {/* Layer 2: Typographic Content (Fast Parallax) */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          style={{ scale: logoScale, rotate: logoRotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-32 md:w-44 h-auto drop-shadow-[0_0_50px_rgba(255,248,242,0.3)]"
          />
        </motion.div>

        <div className="relative">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.8em" }}
            transition={{ duration: 1.5 }}
            className="block font-body text-[8px] md:text-[10px] uppercase text-blush font-bold mb-8 drop-shadow-lg"
          >
            Digital Couture / Kigali
          </motion.span>

          <h1 className="relative font-display leading-[0.75] tracking-tighter text-white">
            <span className="block text-[15vw] md:text-[12vw] lg:text-[14rem] drop-shadow-2xl">
              CHRILLY
            </span>
            <span className="block text-[15vw] md:text-[12vw] lg:text-[14rem] italic pl-20 md:pl-40 text-outline-cream -mt-4 md:-mt-10">
              CROCHET
            </span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-20">
            <p className="font-body text-cream/60 text-[8px] md:text-[9px] tracking-[0.4em] uppercase leading-loose max-w-xs md:text-left border-l border-cream/20 pl-6">
              A symphony of Rwandan <br /> fiber and nomadic heart.
            </p>

            <a
              href="#collection"
              className="group relative overflow-hidden glass-pill rounded-full px-12 py-5 font-body text-[10px] tracking-[0.4em] uppercase text-cream hover:text-warmBrown transition-all duration-500"
            >
              <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <span className="relative z-10">The Narrative Exhibit</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Decorative vertical texts */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 font-display text-[12vw] text-cream/5 select-none pointer-events-none vertical-text opacity-10 blur-[1px]">
        POETRY
      </div>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 font-display text-[12vw] text-cream/5 select-none pointer-events-none vertical-text opacity-10 blur-[1px]">
        RWANDA
      </div>

      {/* Editorial Watermark */}
      <div className="absolute bottom-10 right-10 z-30 flex items-center gap-4 group">
        <div className="text-right">
          <p className="font-body text-[7px] tracking-[0.5em] uppercase text-cream/40">Archive</p>
          <p className="font-display text-sm italic text-cream">Vol. 001 / '26</p>
        </div>
      </div>
    </section>
  );
}
