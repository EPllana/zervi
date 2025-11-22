import React from 'react';
import { Cake, Briefcase, Users, Music } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'wedding',
    title: 'Hochzeiten',
    description: 'Der schönste Tag Ihres Lebens verdient den perfekten Rahmen. Wir bieten ein romantisches Ambiente und sorgen für einen reibungslosen Ablauf.',
    icon: 'ring'
  },
  {
    id: 'catering',
    title: 'Catering',
    description: 'Kulinarische Genüsse für jeden Geschmack. Unser Catering-Service verwöhnt Sie und Ihre Gäste mit frisch zubereiteten Speisen.',
    icon: 'food'
  },
  {
    id: 'seminar',
    title: 'Seminare',
    description: 'Professionelle Ausstattung für Ihre Tagungen. Beamer, Soundanlage und Bestuhlung nach Wunsch für produktive Business-Events.',
    icon: 'work'
  },
  {
    id: 'events',
    title: 'Private Events',
    description: 'Geburtstage, Jubiläen oder Henna-Abende. Wir gestalten jeden Anlass individuell nach Ihren Vorstellungen.',
    icon: 'party'
  }
];

const Services: React.FC = () => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'ring': return <Users className="w-8 h-8 text-zeervi-green" />;
      case 'food': return <Cake className="w-8 h-8 text-zeervi-green" />;
      case 'work': return <Briefcase className="w-8 h-8 text-zeervi-green" />;
      case 'party': return <Music className="w-8 h-8 text-zeervi-green" />;
      default: return <Users className="w-8 h-8 text-zeervi-green" />;
    }
  }

  return (
    <section id="services" className="py-20 bg-[#1e2f29]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-zeervi-gold text-sm uppercase tracking-widest">Was wir bieten</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Unsere Leistungen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-zeervi-green border border-zeervi-gold/10 p-8 hover:border-zeervi-gold transition-colors duration-300 group text-center md:text-left"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zeervi-gold rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;