import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import CollectionSection from './components/CollectionSection'
import HowItWorks from './components/HowItWorks'
import GallerySection from './components/GallerySection'
import StatsSection from './components/StatsSection'
import GlobalMap from './components/GlobalMap'
import LookbookSection from './components/LookbookSection'
import ArtisticTexture from './components/ArtisticTexture'
import SoulOfRwanda from './components/SoulOfRwanda'
import MeetTheMaker from './components/MeetTheMaker'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'

function App() {
  useEffect(() => {
    // Custom High-Visibility Futuristic Cursor
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;

    const move = (e: MouseEvent) => {
      dotX = e.clientX; dotY = e.clientY;
      dot.style.left = dotX + 'px';
      dot.style.top = dotY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      ringX = lerp(ringX, dotX, 0.1);
      ringY = lerp(ringY, dotY, 0.1);
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(tick);
    };
    tick();

    const handleMouseEnter = () => {
      ring.style.width = '100px';
      ring.style.height = '100px';
      ring.style.borderColor = '#E8879A'; 
      ring.style.backgroundColor = 'rgba(232, 135, 154, 0.1)';
    };
    const handleMouseLeave = () => {
      ring.style.width = '40px';
      ring.style.height = '40px';
      ring.style.borderColor = 'rgba(92, 51, 23, 0.6)';
      ring.style.backgroundColor = 'transparent';
    };

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor], .group').forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };
    attach();

    // Re-attach on scroll/mutation to ensure new elements are covered
    const observer = new MutationObserver(attach);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
      if (document.body.contains(dot)) document.body.removeChild(dot);
      if (document.body.contains(ring)) document.body.removeChild(ring);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream text-warmBrown font-body selection:bg-blush/20 selection:text-warmBrown">
      <SmoothScroll />
      <Header />

      <main className="relative z-[10]">
        <HeroSection />
        <StorySection />
        <ArtisticTexture />
        <LookbookSection />
        <CollectionSection />
        <HowItWorks />
        <GallerySection />
        <GlobalMap />
        <StatsSection />
        <SoulOfRwanda />
        <MeetTheMaker />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App;
