import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, Star, Heart } from 'lucide-react';

interface StatData {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: React.ElementType;
}

const statsData: StatData[] = [
  { id: 1, label: 'Events Durchgeführt', value: 150, suffix: '+', icon: Calendar },
  { id: 2, label: 'Zufriedene Gäste', value: 5000, suffix: '+', icon: Users },
  { id: 3, label: 'Jahre Erfahrung', value: 10, suffix: '', icon: Star },
  { id: 4, label: 'Traumhochzeiten', value: 80, suffix: '+', icon: Heart },
];

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // ms
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = (t: number) => t * (2 - t); // Easing function
        const currentProgress = easeOutQuad(progress);
        
        if (progress < 1) {
          setCounts(statsData.map(stat => Math.floor(stat.value * currentProgress)));
        } else {
          setCounts(statsData.map(stat => stat.value));
          clearInterval(timer);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-zeervi-green relative border-y border-zeervi-gold/10">
        {/* Background pattern overlay could go here */}
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {statsData.map((stat, index) => (
                    <div key={stat.id} className="text-center group">
                        <div className="flex justify-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-zeervi-gold/10 flex items-center justify-center text-zeervi-gold group-hover:bg-zeervi-gold group-hover:text-zeervi-green transition-all duration-500">
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                            {counts[index]}{stat.suffix}
                        </div>
                        <div className="text-xs md:text-sm uppercase tracking-widest text-zeervi-gold/80">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Stats;