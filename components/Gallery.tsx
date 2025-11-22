import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GalleryImage } from '../types';

const images: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/800/600?random=10', alt: 'Hochzeitssaal Dekoration', category: 'wedding' },
  { id: '2', url: 'https://picsum.photos/800/600?random=20', alt: 'Buffet Auswahl', category: 'food' },
  { id: '3', url: 'https://picsum.photos/800/600?random=30', alt: 'Eingangsbereich', category: 'venue' },
  { id: '4', url: 'https://picsum.photos/800/600?random=40', alt: 'Party Beleuchtung', category: 'wedding' },
  { id: '5', url: 'https://picsum.photos/800/600?random=50', alt: 'Seminar Bestuhlung', category: 'seminar' },
  { id: '6', url: 'https://picsum.photos/800/600?random=60', alt: 'Brauttisch', category: 'wedding' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-20 bg-zeervi-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-zeervi-gold text-sm uppercase tracking-widest">Impressionen</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Galerie</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden group cursor-pointer aspect-[4/3] border border-zeervi-gold/10 hover:border-zeervi-gold/50 transition-colors"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-zeervi-gold border border-zeervi-gold px-4 py-2 uppercase tracking-widest text-xs bg-black/50 backdrop-blur-sm">
                  Vergrößern
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute top-4 right-4 text-white hover:text-zeervi-gold transition-colors"
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl border border-zeervi-gold/20"
          />
          <div className="absolute bottom-8 left-0 w-full text-center">
             <p className="text-white font-serif text-xl">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;