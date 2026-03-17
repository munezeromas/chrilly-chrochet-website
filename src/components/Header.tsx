import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Story', href: '#story' },
  { label: 'Archive', href: '#archive' },
  { label: 'Collection', href: '#collection' },
  { label: 'Maker', href: '#maker' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] py-8 pointer-events-none">
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Social Pill - Left */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:flex items-center glass-pill rounded-full px-6 py-3 pointer-events-auto"
        >
          <a href="#" className="font-body text-[8px] tracking-[0.4em] uppercase text-warmBrown/40 hover:text-blush transition-colors">Instagram</a>
        </motion.div>

        {/* Floating Pill Centerpiece */}
        <div className={`
          pointer-events-auto transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) px-8 py-4 rounded-full
          ${scrolled ? 'glass-pill scale-100' : 'bg-transparent scale-110'}
          flex items-center gap-12
        `}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <img src="/logo.jpeg" alt="Logo" className="w-10 h-10 object-contain drop-shadow-sm group-hover:rotate-12 transition-transform duration-500" />
            <div className="flex flex-col leading-none border-l border-warmBrown/10 pl-4">
              <span className="font-display text-lg tracking-[0.15em] text-warmBrown uppercase">Chrilly</span>
              <span className="font-body text-[6px] tracking-[0.4em] text-mediumBrown/50 uppercase">Kigali</span>
            </div>
          </a>

          {/* Desktop Links - Tucked into pill */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-[9px] tracking-[0.3em] uppercase text-warmBrown/60 hover:text-blush silk-transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Hook - Right */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:block pointer-events-auto"
        >
          <a
            href="https://wa.me/250780494910"
            target="_blank"
            className="group relative inline-flex items-center gap-4 glass-pill rounded-full px-8 py-3 overflow-hidden transition-all duration-500 hover:border-blush"
          >
            <div className="flex flex-col text-right">
              <span className="font-body text-[8px] tracking-[0.4em] uppercase text-warmBrown/40">Inquire</span>
              <span className="font-display text-sm italic text-warmBrown">WhatsApp</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-warmBrown group-hover:bg-blush flex items-center justify-center transition-colors">
              <span className="text-cream text-[10px] sm:block">→</span>
            </div>
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden glass-pill rounded-full p-4 pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-px bg-warmBrown mb-1.5 transition-all" />
          <div className="w-6 h-px bg-warmBrown" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-24 left-6 right-6 glass-pill rounded-[2rem] p-10 pointer-events-auto"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="font-display text-3xl italic text-warmBrown">
                  {link.label}
                </a>
              ))}
              <div className="w-full h-px bg-warmBrown/10 my-4" />
              <a href="https://wa.me/250780494910" className="font-body text-[10px] tracking-[0.5em] uppercase text-blush font-bold">Start Order</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
