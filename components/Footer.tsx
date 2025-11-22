import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-12 border-t border-zeervi-gold/10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
            <h2 className="font-serif text-2xl text-zeervi-gold font-bold">THE SHADI HALL</h2>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-sm uppercase tracking-widest">
            <a href="#hero" className="hover:text-white">Start</a>
            <a href="#gallery" className="hover:text-white">Galerie</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
            <a href="#" className="hover:text-white">Impressum</a>
        </div>
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} The Shadi Hall by Zeervi. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;