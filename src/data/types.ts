
export type TherapyType = 
  | 'family'
  | 'couples'
  | 'grief'
  | 'suicide-prevention'
  | 'gender-related';

export type SessionType = 'in-person' | 'remote';

export type Location = 'Puebla' | 'Querétaro' | 'CDMX' | 'Oaxaca';

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type TimeSlot = 
  | 'morning' // 8am-12pm
  | 'afternoon' // 12pm-5pm
  | 'evening'; // 5pm-9pm

export interface Availability {
  day: WeekDay;
  slots: TimeSlot[];
}

export interface Therapist {
  id: string;
  name: string;
  profileImage: string;
  specialties: TherapyType[];
  sessionTypes: SessionType[];
  locations?: Location[]; // Optional if remote only
  availability: Availability[];
  bio?: string;
}

export interface TherapistFilters {
  therapyTypes: TherapyType[];
  sessionTypes: SessionType[];
  locations: Location[];
  availability: {
    days: WeekDay[];
    timeSlots: TimeSlot[];
  };
}
