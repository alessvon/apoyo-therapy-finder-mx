export type TherapyType = 
  | 'family'
  | 'couples'
  | 'grief'
  | 'suicide-prevention'
  | 'gender-related';

export type SessionType = 'in-person' | 'remote';

export type Location = 'Puebla' | 'Querétaro' | 'CDMX' | 'Oaxaca';

export type WeekDay = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type Hour = 
  | '08:00' | '09:00' | '10:00' | '11:00' 
  | '12:00' | '13:00' | '14:00' | '15:00' | '16:00' 
  | '17:00' | '18:00' | '19:00' | '20:00' | '21:00';

export type Availability = {
  day: WeekDay;
  hours: Hour[];
};

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
    hours: Hour[];
  };
}
