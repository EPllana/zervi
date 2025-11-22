import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Start', href: '#hero' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zeervi-green shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-zeervi-gold rounded-full flex items-center justify-center text-zeervi-gold font-serif font-bold text-xl bg-zeervi-green/80">
            S
          </div>
          <div className="text-zeervi-light">
            <h1 className="font-serif font-bold text-lg tracking-widest text-zeervi-gold">THE SHADI HALL</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-80">By Zeervi</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest text-zeervi-light hover:text-zeervi-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social/Contact Icons Desktop */}
        <div className="hidden md:flex items-center gap-4 text-zeervi-gold">
          <a href="tel:+491788616223" className="hover:text-white transition-colors">
            <Phone size={20} />
          </a>
          <a href="https://instagram.com/theshadihall" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zeervi-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zeervi-green border-t border-zeervi-gold/20 shadow-2xl py-6 px-4 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-center py-2 text-zeervi-light hover:text-zeervi-gold uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-zeervi-gold/20">
            <a href="tel:+491788616223" className="text-zeervi-gold flex flex-col items-center gap-1">
              <Phone size={24} />
              <span className="text-xs">Anrufen</span>
            </a>
            <a href="https://instagram.com/theshadihall" className="text-zeervi-gold flex flex-col items-center gap-1">
              <Instagram size={24} />
              <span className="text-xs">Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;