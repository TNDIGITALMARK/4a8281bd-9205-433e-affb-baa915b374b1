'use client';

import Image from 'next/image';

const galleryItems = [
  {
    before: '/generated/before-1.png',
    after: '/generated/after-1.png',
    title: 'BEFORE',
    titleAfter: 'AFTER',
  },
  {
    before: '/generated/before-1.png',
    after: '/generated/after-1.png',
    title: 'BEFORE',
    titleAfter: 'AFTER',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">TRANSFORMATION GALLERY</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div key={index} className="space-y-4">
              {/* Before Image */}
              <div className="relative aspect-[4/3] bg-gray-800 rounded-sm overflow-hidden">
                <Image
                  src={item.before}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                  <span className="text-xs font-bold text-secondary">{item.title}</span>
                </div>
              </div>

              {/* After Image */}
              <div className="relative aspect-[4/3] bg-gray-800 rounded-sm overflow-hidden">
                <Image
                  src={item.after}
                  alt={item.titleAfter}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-sm">
                  <span className="text-xs font-bold text-secondary">{item.titleAfter}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
