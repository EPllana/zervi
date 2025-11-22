import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Elegant Hall Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zeervi-green/80 via-zeervi-green/40 to-zeervi-green"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <p className="text-zeervi-gold uppercase tracking-[0.3em] mb-4 text-sm md:text-base">Im Riemen 52, Babenhausen</p>
        
        <div className="border-y border-zeervi-gold/30 py-8 md:py-12 my-6 backdrop-blur-sm bg-white/5 rounded-sm max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-2 tracking-wide">
            THE SHADI HALL
          </h1>
          <p className="font-serif text-xl md:text-2xl text-zeervi-gold italic">
            By Zeervi
          </p>
        </div>

        <p className="text-gray-300 text-sm md:text-lg uppercase tracking-widest max-w-2xl mx-auto mb-10">
          Event's | Catering | Seminare | Hochzeiten
        </p>

        <a 
          href="#contact" 
          className="inline-block px-8 py-3 border border-zeervi-gold text-zeervi-gold hover:bg-zeervi-gold hover:text-zeervi-green transition-all duration-300 uppercase tracking-widest text-sm font-bold"
        >
          Termin Anfragen
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zeervi-gold/50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;