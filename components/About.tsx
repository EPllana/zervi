import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zeervi-green text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 -left-4 w-full h-full border border-zeervi-gold z-0 hidden md:block"></div>
             <img 
               src="https://picsum.photos/800/1000" 
               alt="Interior Detail" 
               className="w-full h-[400px] md:h-[500px] object-cover relative z-10 shadow-2xl"
             />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-zeervi-gold mb-6">
              Willkommen bei <br/> <span className="text-white">Zeervi Events</span>
            </h2>
            <div className="w-20 h-1 bg-zeervi-gold mb-8"></div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Wir schaffen unvergessliche Momente. Ob eine traumhafte Hochzeit, eine professionelle Firmenveranstaltung oder eine intime Geburtstagsfeier – The Shadi Hall bietet den perfekten Rahmen für Ihre Anlässe.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Gelegen im Herzen von Babenhausen, kombinieren wir modernes Ambiente mit traditioneller Gastfreundschaft. Unser erfahrenes Team kümmert sich um jedes Detail, von der Dekoration bis zum exklusiven Catering, damit Sie Ihren Tag in vollen Zügen genießen können.
            </p>
            
            <ul className="grid grid-cols-2 gap-4 text-sm text-zeervi-gold uppercase tracking-wider">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-zeervi-gold rounded-full"></span> Bis zu 300 Gäste
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-zeervi-gold rounded-full"></span> Premium Catering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-zeervi-gold rounded-full"></span> Parkplätze
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-zeervi-gold rounded-full"></span> Audio & Licht
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;