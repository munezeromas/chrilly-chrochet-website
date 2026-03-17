import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Founder portraits
import foundersOverhead from '../assets/images/img7.jpeg';
import foundersStudio from '../assets/images/img6.jpeg';

gsap.registerPlugin(ScrollTrigger);

const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic entrance for typography
      gsap.fromTo(".hero-word",
        { y: 50, opacity: 0, rotationX: -10 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      );

      // Subtle video parallax
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 100
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-warmBrown flex items-center px-8 md:px-20">
      {/* ━━━ CINEMATIC VIDEO BACKGROUND ━━━ */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
          src="/archive_vid.mp4"
        />
        
        {/* Editorial Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warmBrown via-transparent to-warmBrown/40 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
        
        {/* Editorial Typography */}
        <div className="flex-1 text-cream">
          <motion.div>
            <a href="https://wa.me/250780494910" target="_blank" rel="noreferrer" className="text-goldAccent font-body text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold hero-word hover:text-blush silk-transition">
              Handcrafted in Kigali
            </a>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display leading-[0.85] tracking-tight">
              <span className="block hero-word">Heritage</span>
              <span className="block hero-word text-blush italic ml-12 md:ml-32">Stitched.</span>
            </h1>
            <p className="mt-12 text-cream/70 text-lg font-body font-light max-w-sm hero-word">
              Experience the patient craftsmanship of Rwandan artisans. Every piece tells a story of culture and mindful creation.
            </p>
          </motion.div>
        </div>

        {/* Editorial Floating Images (Strict Mapping) */}
        <div className="flex-1 relative w-full h-[60vh] md:h-[70vh]">
          {/* Card A (img7.jpeg) - Primary */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-[3/4] overflow-hidden border border-cream/20 bg-cream/5 backdrop-blur-sm z-20">
            <img src={foundersOverhead} alt="Founder portrait" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-x-8 bottom-8 text-cream">
                <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">Overhead Study</p>
                <p className="font-display italic text-2xl">img7.jpeg</p>
            </div>
          </div>

          {/* Card B (img6.jpeg) - Alternating */}
          <div className="absolute top-[45%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-[3/4] overflow-hidden border border-warmBrown/20 -z-10 opacity-40">
            <img src={foundersStudio} alt="Studio shot" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
      </div>

      <div className="grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
    </section>
  );
};

import { motion } from 'framer-motion';
export default HeroScene;
