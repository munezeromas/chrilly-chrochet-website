import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SoundManager: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="w-12 h-12 rounded-full bg-warmBrown/10 backdrop-blur-md border border-warmBrown/20 flex items-center justify-center text-warmBrown hover:bg-warmBrown hover:text-cream transition-all shadow-lg"
        title={isMuted ? "Unmute Ambient Experience" : "Mute Experience"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
      
      {!isMuted && (
        <div className="absolute left-16 bottom-0 bg-cream/80 backdrop-blur-md border border-blush/30 px-4 py-2 rounded-full whitespace-nowrap text-xs uppercase tracking-widest text-warmBrown opacity-0 animate-fade-in pointer-events-none">
          Ambient Yarn Friction & Sounds
        </div>
      )}
      
      {/* Audio elements would go here if assets were available */}
      {/* <audio loop muted={isMuted} src="/ambient-loop.mp3" /> */}
    </div>
  );
};


export default SoundManager;
