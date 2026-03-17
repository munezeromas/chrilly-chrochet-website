import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

const SocialInquiry: React.FC = () => {
  const whatsappUrl = "https://wa.me/250780494910?text=Hello%20Chrilly%20Crochet!%20I%20would%20love%20to%20order%20%F0%9F%A7%B6";
  const instagramUrl = "https://www.instagram.com/chrilly_crochet/";

  return (
    <div className="flex flex-col sm:flex-row gap-6 mt-12 justify-center items-center">
      <motion.a
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-10 py-5 bg-cream text-warmBrown rounded-none font-body text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-blush hover:text-white"
      >
        <MessageCircle size={16} />
        Thread of Interest
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-10 py-5 bg-warmBrown text-cream border border-cream/20 rounded-none font-body text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-cream/10"
      >
        <Instagram size={16} />
        Message on Instagram
      </motion.a>
    </div>
  );
};

export default SocialInquiry;
