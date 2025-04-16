
import React from 'react';
import { Therapist, Hour } from '../data/types';
import { therapyTypeLabels, sessionTypeLabels, dayLabels, hourLabels } from '../data/therapists';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { MapPin, Phone, Video } from 'lucide-react';

interface TherapistCardProps {
  therapist: Therapist;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  const getInitials = (name: string) => {
    return name.split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const formatHours = (hours: Hour[]) => {
    return hours.sort().map(hour => hourLabels[hour]).join(', ');
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar className="h-16 w-16">
          <AvatarImage src={therapist.profileImage} alt={therapist.name} />
          <AvatarFallback>{getInitials(therapist.name)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-xl font-semibold">{therapist.name}</h3>
          <div className="flex items-center flex-wrap gap-1 mt-1">
            {therapist.sessionTypes.map(type => (
              <div key={type} className="flex items-center text-sm text-gray-500 mr-3">
                {type === 'remote' ? (
                  <Video size={14} className="mr-1" />
                ) : (
                  <MapPin size={14} className="mr-1" />
                )}
                {sessionTypeLabels[type]}
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="space-y-4">
          {therapist.bio && (
            <p className="text-sm text-gray-600 line-clamp-2">{therapist.bio}</p>
          )}
          
          <div>
            <h4 className="text-sm font-medium mb-1">Especialidades:</h4>
            <div className="flex flex-wrap gap-1">
              {therapist.specialties.map(specialty => (
                <Badge key={specialty} variant="outline" className="bg-theme-teal/10 text-theme-dark border-theme-teal/20">
                  {therapyTypeLabels[specialty]}
                </Badge>
              ))}
            </div>
          </div>
          
          {therapist.location && (
            <div>
              <h4 className="text-sm font-medium mb-1">Ubicación:</h4>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="bg-theme-light border-theme-gray">
                  <MapPin size={12} className="mr-1" /> {therapist.location.state}
                </Badge>
              </div>
            </div>
          )}
          
          <div>
            <h4 className="text-sm font-medium mb-1">Disponibilidad:</h4>
            <div className="grid grid-cols-1 gap-1">
              {therapist.availability.map((avail, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-medium">{dayLabels[avail.day]}: </span>
                  {formatHours(avail.hours)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <Button className="w-full bg-theme-teal hover:bg-theme-teal/90 text-white">
          Contactar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TherapistCard;
