import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Petal Fringe Maxi',
    tags: ['Silk', 'Hand-dyed'],
    image: '/maxi_skirt.jpg',
    secondaryImage: '/img11.jpeg',
    price: 'Bespoke'
  },
  {
    id: 2,
    name: 'Desert Blossom Bucket',
    tags: ['Cotton', 'Artisanal'],
    image: '/img1.jpeg',
    secondaryImage: '/img12.jpeg',
    price: 'Bespoke'
  },
  {
    id: 3,
    name: 'The Kigali Tote',
    tags: ['Signature', 'Heritage'],
    image: '/img2.jpeg',
    secondaryImage: '/img13.jpeg',
    price: 'Bespoke'
  },
  {
    id: 4,
    name: 'Silk-Thread Scrunchies',
    tags: ['Essential', 'Silk'],
    image: '/scrunchies.jpg',
    secondaryImage: '/pink_petals.jpg',
    price: 'Bespoke'
  },
  {
    id: 5,
    name: 'Ivory Heirloom Set',
    tags: ['Heirloom', 'Wool'],
    image: '/img3.jpeg',
    secondaryImage: '/img14.jpeg',
    price: 'Bespoke'
  },
  {
    id: 6,
    name: 'Rose-Bud Booties',
    tags: ['Cute', 'Soft'],
    image: '/img4.jpeg',
    secondaryImage: '/img15.jpeg',
    price: 'Bespoke'
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="bg-linen py-32 md:py-64 px-8 relative overflow-hidden">
      {/* Editorial Decorative Type */}
      <div className="absolute top-20 right-[-10%] font-display text-[20rem] text-warmBrown/5 select-none pointer-events-none italic opacity-30">
        Boutique
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <p className="font-body text-[10px] tracking-[0.6em] uppercase text-blush font-bold mb-8 italic">
              Selected Wearables
            </p>
            <h2 className="font-display text-8xl md:text-[10rem] text-warmBrown leading-[0.8] tracking-tighter">
              The Master <br /> <span className="italic pl-12 md:pl-24">Boutique</span>
            </h2>
          </div>
          <div className="text-right">
            <p className="font-body text-[10px] text-warmBrown/40 uppercase tracking-[0.4em] max-w-[200px] leading-relaxed mb-6">
              A curated harmony of fiber and form.
            </p>
            <div className="w-20 h-[1px] bg-warmBrown/20 ml-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Boutique Mask Card Structure */}
              <div className="relative aspect-[3/4] overflow-hidden mb-12 silk-transition">
                {/* Image Scale & Mask Effect */}
                <div className="absolute inset-0 boutique-mask">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover grayscale transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:scale-110"
                  />
                  {/* Hover Reveal Image */}
                  <motion.img
                    src={p.secondaryImage}
                    alt={`${p.name} detail`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 silk-transition scale-110 group-hover:scale-100"
                  />
                </div>
                
                {/* Identity Tag */}
                <div className="absolute top-8 left-8">
                  <span className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 font-body text-[8px] tracking-[0.4em] uppercase text-cream/80">
                    Handmade
                  </span>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute bottom-10 right-10 scale-0 group-hover:scale-100 silk-transition">
                  <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                    <span className="text-cream text-xs">→</span>
                  </div>
                </div>
              </div>

              {/* Editorial Info */}
              <div className="flex justify-between items-start">
                <div className="group-hover:pl-4 silk-transition">
                  <h3 className="font-display text-4xl text-warmBrown mb-4 group-hover:italic transition-all">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 opacity-40 group-hover:opacity-100 silk-transition">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-body text-[8px] tracking-[0.4em] uppercase text-mediumBrown font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl text-blush italic mb-2">{p.price}</p>
                  <p className="font-body text-[7px] tracking-[0.5em] uppercase text-warmBrown/30">Limited Edition</p>
                </div>
              </div>

              {/* Order Trigger */}
              <a
                href="https://wa.me/250780494910"
                target="_blank"
                rel="noreferrer"
                className="mt-12 block w-full py-5 text-center glass-pill font-body text-[10px] tracking-[0.5em] uppercase text-warmBrown/60 hover:text-blush hover:bg-cream/50 silk-transition font-bold"
              >
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
