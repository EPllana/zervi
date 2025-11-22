export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'wedding' | 'seminar' | 'food' | 'venue';
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  message: string;
}

export enum EventType {
  HOCHZEIT = 'Hochzeit',
  SEMINAR = 'Seminar',
  GEBURTSTAG = 'Geburtstag',
  CATERING = 'Catering',
  SONSTIGES = 'Sonstiges'
}