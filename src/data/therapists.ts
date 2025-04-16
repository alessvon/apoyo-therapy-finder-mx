
import { Therapist, Hour } from './types';

export const therapyTypeLabels: Record<string, string> = {
  'family': 'Terapia Familiar',
  'couples': 'Terapia de Pareja',
  'grief': 'Duelo',
  'suicide-prevention': 'Prevención de Suicidio',
  'gender-related': 'Temas de Género'
};

export const sessionTypeLabels: Record<string, string> = {
  'in-person': 'Presencial',
  'remote': 'En línea'
};

export const dayLabels: Record<string, string> = {
  'monday': 'Lunes',
  'tuesday': 'Martes',
  'wednesday': 'Miércoles',
  'thursday': 'Jueves',
  'friday': 'Viernes',
  'saturday': 'Sábado',
  'sunday': 'Domingo'
};

export const hourLabels: Record<Hour, string> = {
  '08:00': '8:00',
  '09:00': '9:00',
  '10:00': '10:00',
  '11:00': '11:00',
  '12:00': '12:00',
  '13:00': '13:00',
  '14:00': '14:00',
  '15:00': '15:00',
  '16:00': '16:00',  
  '17:00': '17:00',
  '18:00': '18:00',
  '19:00': '19:00',
  '20:00': '20:00',
  '21:00': '21:00'
};

export const therapists: Therapist[] = [
  {
    id: '1',
    name: 'Dr. Ana García',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['family', 'couples'],
    sessionTypes: ['in-person', 'remote'],
    location: { country: 'MX', state: 'CDMX' },
    availability: [
      { day: 'monday', hours: ['14:00', '15:00', '16:00', '17:00', '18:00'] },
      { day: 'wednesday', hours: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'friday', hours: ['09:00', '10:00', '11:00'] }
    ],
    bio: 'Especialista en terapia familiar con 10 años de experiencia.'
  },
  {
    id: '2',
    name: 'Lic. Roberto Méndez',
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['grief', 'suicide-prevention'],
    sessionTypes: ['remote'],
    availability: [
      { day: 'tuesday', hours: ['14:00', '15:00', '16:00', '19:00', '20:00'] },
      { day: 'thursday', hours: ['14:00', '15:00', '16:00', '19:00', '20:00'] },
      { day: 'saturday', hours: ['09:00', '10:00', '11:00', '14:00', '15:00'] }
    ],
    bio: 'Especializado en intervención en crisis y duelo.'
  },
  {
    id: '3',
    name: 'Dra. Carolina Torres',
    profileImage: 'https://images.unsplash.com/photo-1556157382-97eda2f9e8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['gender-related', 'family'],
    sessionTypes: ['in-person', 'remote'],
    location: { country: 'MX', state: 'PUE' },
    availability: [
      { day: 'monday', hours: ['09:00', '10:00', '11:00'] },
      { day: 'wednesday', hours: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'friday', hours: ['14:00', '15:00', '16:00', '17:00', '18:00'] }
    ],
    bio: 'Especialista en psicología clínica con enfoque en temas de género.'
  },
  {
    id: '4',
    name: 'Dr. Miguel Ángel Rojas',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['couples', 'grief'],
    sessionTypes: ['in-person'],
    location: { country: 'MX', state: 'QRO' },
    availability: [
      { day: 'tuesday', hours: ['09:00', '10:00', '14:00', '15:00'] },
      { day: 'thursday', hours: ['14:00', '15:00', '16:00'] },
      { day: 'saturday', hours: ['09:00', '10:00', '11:00'] }
    ],
    bio: 'Terapeuta especializado en relaciones de pareja y procesos de duelo.'
  },
  {
    id: '5',
    name: 'Lic. Gabriela Fuentes',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['suicide-prevention', 'gender-related'],
    sessionTypes: ['in-person', 'remote'],
    location: { country: 'MX', state: 'CDMX' },
    availability: [
      { day: 'monday', hours: ['14:00', '15:00', '16:00'] },
      { day: 'wednesday', hours: ['17:00', '18:00', '19:00'] },
      { day: 'friday', hours: ['14:00', '15:00', '16:00', '17:00', '18:00'] },
      { day: 'sunday', hours: ['09:00', '10:00', '11:00'] }
    ],
    bio: 'Especialista en intervención en crisis y temas de identidad.'
  },
  {
    id: '6',
    name: 'Dr. Javier Campos',
    profileImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['family', 'couples', 'grief'],
    sessionTypes: ['in-person', 'remote'],
    location: { country: 'MX', state: 'PUE' },
    availability: [
      { day: 'tuesday', hours: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'] },
      { day: 'thursday', hours: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'saturday', hours: ['09:00', '10:00', '11:00'] }
    ],
    bio: 'Psicólogo clínico con especialidad en terapia familiar sistémica.'
  },
  {
    id: '7',
    name: 'Dra. Luisa Martínez',
    profileImage: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['gender-related', 'suicide-prevention'],
    sessionTypes: ['remote'],
    availability: [
      { day: 'monday', hours: ['17:00', '18:00', '19:00'] },
      { day: 'wednesday', hours: ['17:00', '18:00', '19:00'] },
      { day: 'friday', hours: ['17:00', '18:00', '19:00'] }
    ],
    bio: 'Especializada en psicoterapia con enfoque de género y prevención del suicidio.'
  },
  {
    id: '8',
    name: 'Lic. Eduardo Vega',
    profileImage: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
    specialties: ['family', 'grief'],
    sessionTypes: ['in-person'],
    location: { country: 'MX', state: 'OAX' },
    availability: [
      { day: 'tuesday', hours: ['09:00', '10:00', '11:00'] },
      { day: 'thursday', hours: ['09:00', '10:00', '11:00'] },
      { day: 'saturday', hours: ['09:00', '10:00', '14:00', '15:00'] }
    ],
    bio: 'Terapeuta familiar con enfoque en procesos de duelo y pérdida.'
  }
];
