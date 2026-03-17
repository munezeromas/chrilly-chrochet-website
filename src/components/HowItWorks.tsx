import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discover',
    body: 'Browse our latest archive and fall in love with a piece that speaks to your narrative.',
    label: 'The Selection'
  },
  {
    title: 'Dialogue',
    body: "Collaborate directly with us via WhatsApp to customize your fit, colors, and specific details.",
    label: 'The Connection'
  },
  {
    title: 'Deliver',
    body: 'Your custom piece is hand-dyed, hook-woven, and shipped globally from our Kigali studio.',
    label: 'The Arrival'
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-warmBrown py-32 md:py-64 px-8 relative overflow-hidden">
      {/* Editorial Enrichment */}
      <div className="absolute inset-0 opacity-[0.08] grayscale mix-blend-screen pointer-events-none">
        <video 
          autoPlay muted loop playsInline 
          className="w-full h-full object-cover scale-110 blur-[2px]"
          src="/vid4.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warmBrown via-transparent to-warmBrown" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-40">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.6em' }}
            className="font-body text-[10px] uppercase text-blush font-bold mb-10"
          >
            The Atelier Journey
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-8xl md:text-[12rem] text-cream leading-[0.75] italic tracking-tighter"
          >
            Magic <br /><span className="text-outline-cream pl-12 md:pl-24 not-italic">Preserved</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-32">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* High-End Step Indicator */}
              <div className="flex items-end gap-6 mb-12">
                <span className="font-display text-7xl text-blush/20 group-hover:text-blush italic silk-transition select-none">0{i+1}</span>
                <div className="h-px w-20 bg-cream/10 mb-4 group-hover:w-32 transition-all duration-700" />
              </div>
              
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-blush mb-6 font-bold">{step.label}</p>
              <h3 className="font-display text-5xl text-cream mb-10 tracking-wide group-hover:pl-4 silk-transition">{step.title}</h3>
              <p className="font-body text-xs text-cream/40 leading-relaxed uppercase tracking-[0.3em] font-medium border-l border-cream/5 pl-8">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 flex flex-col items-center"
        >
          <a
            href="https://wa.me/250780494910"
            target="_blank"
            rel="noreferrer"
            className="group relative glass-pill px-16 py-6 transition-all duration-700 hover:scale-[1.05]"
          >
            <div className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <span className="relative z-10 font-body text-[11px] tracking-[0.5em] uppercase font-bold text-cream group-hover:text-warmBrown transition-colors">
              Begin Your Bespoke Narrative
            </span>
          </a>
          <p className="mt-10 font-body text-[9px] tracking-[0.4em] uppercase text-cream/20">
            Kigali Studio / Global Shipping
          </p>
        </motion.div>
      </div>

      {/* Extreme Watermark */}
      <div className="absolute right-[-10%] bottom-0 font-display text-[20rem] text-cream/5 select-none pointer-events-none vertical-text opacity-10">
        JOURNEY
      </div>
    </section>
  );
}
