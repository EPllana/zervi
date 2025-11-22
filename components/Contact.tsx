import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Wand2, CheckCircle, AlertCircle } from 'lucide-react';
import { EventType } from '../types';
import { draftInquiry } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: EventType.HOCHZEIT,
    guests: '',
    date: '',
    message: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAIDraft = async () => {
    if (!formData.guests && !formData.date) {
      setGenerationError("Bitte geben Sie zumindest ein Datum oder die Gästeanzahl an, damit die KI helfen kann.");
      return;
    }
    
    setGenerationError(null);
    setIsGenerating(true);
    
    // Simulate "AI Thinking" details
    const details = `Datum: ${formData.date}, Gäste: ${formData.guests}`;
    const draftedMessage = await draftInquiry(formData.eventType, formData.guests || 'unbekannt', details);
    
    setFormData(prev => ({ ...prev, message: draftedMessage }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to a backend
    alert(`Vielen Dank für Ihre Anfrage, ${formData.name}! Wir melden uns in Kürze unter ${formData.email}.`);
  };

  return (
    <section id="contact" className="py-20 bg-[#1e2f29]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-zeervi-gold text-sm uppercase tracking-widest">Kontaktieren Sie uns</span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">Anfrage Senden</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-zeervi-green p-8 border border-zeervi-gold/10 rounded-sm">
              <h3 className="text-xl text-zeervi-gold font-serif mb-6">Kontaktdaten</h3>
              
              <div className="space-y-6">
                <a href="https://maps.google.com/?q=Im+Riemen+52,+64832+Babenhausen" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-zeervi-gold/10 flex items-center justify-center text-zeervi-gold group-hover:bg-zeervi-gold group-hover:text-zeervi-green transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Adresse</p>
                    <p className="text-gray-400 text-sm">Im Riemen 52<br/>64832 Babenhausen</p>
                  </div>
                </a>

                <a href="tel:+491788616223" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-zeervi-gold/10 flex items-center justify-center text-zeervi-gold group-hover:bg-zeervi-gold group-hover:text-zeervi-green transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Telefon</p>
                    <p className="text-gray-400 text-sm">+49 178 8616223</p>
                  </div>
                </a>

                <a href="mailto:info@theshadihall.de" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-zeervi-gold/10 flex items-center justify-center text-zeervi-gold group-hover:bg-zeervi-gold group-hover:text-zeervi-green transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">E-Mail</p>
                    <p className="text-gray-400 text-sm">info@theshadihall.de</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-zeervi-gold/10 flex items-center justify-center text-zeervi-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">Öffnungszeiten</p>
                    <p className="text-gray-400 text-sm">Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-zeervi-green p-8 md:p-10 border border-zeervi-gold/10 rounded-sm shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                    placeholder="Ihre Nummer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">Event Art</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                  >
                    {Object.values(EventType).map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">Datum (Optional)</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-zeervi-gold text-xs uppercase tracking-widest mb-2">Gästeanzahl (ca.)</label>
                  <input 
                    type="number" 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                    placeholder="z.B. 100"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                   <label className="block text-zeervi-gold text-xs uppercase tracking-widest">Nachricht</label>
                   <button 
                    type="button" 
                    onClick={handleAIDraft}
                    disabled={isGenerating}
                    className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-blue-300 hover:text-blue-100 transition-colors disabled:opacity-50"
                   >
                     <Wand2 size={12} />
                     {isGenerating ? 'Generiere...' : 'Text mit KI verfassen'}
                   </button>
                </div>
                <textarea 
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#1a2b25] border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-zeervi-gold transition-colors"
                  placeholder="Erzählen Sie uns mehr über Ihre Pläne..."
                ></textarea>
                {generationError && (
                  <div className="mt-2 flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={12} />
                    {generationError}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                className="w-full bg-zeervi-gold text-zeervi-green font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;