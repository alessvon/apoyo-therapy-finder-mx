
import React from 'react';
import { TherapistFilters, TherapyType, SessionType, Location, WeekDay, TimeSlot } from '../data/types';
import { therapyTypeLabels, sessionTypeLabels, dayLabels, timeSlotLabels } from '../data/therapists';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "./ui/card";

interface FilterSectionProps {
  filters: TherapistFilters;
  setFilters: React.Dispatch<React.SetStateAction<TherapistFilters>>;
  resetFilters: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, setFilters, resetFilters }) => {
  // Update therapy type filters
  const handleTherapyTypeChange = (type: TherapyType, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      therapyTypes: checked 
        ? [...prev.therapyTypes, type]
        : prev.therapyTypes.filter(t => t !== type)
    }));
  };

  // Update session type filters
  const handleSessionTypeChange = (type: SessionType, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      sessionTypes: checked 
        ? [...prev.sessionTypes, type]
        : prev.sessionTypes.filter(t => t !== type)
    }));
  };

  // Update location filters
  const handleLocationChange = (location: Location, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      locations: checked 
        ? [...prev.locations, location]
        : prev.locations.filter(l => l !== location)
    }));
  };

  // Update day availability filters
  const handleDayChange = (day: WeekDay, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        days: checked 
          ? [...prev.availability.days, day]
          : prev.availability.days.filter(d => d !== day)
      }
    }));
  };

  // Update time slot filters
  const handleTimeSlotChange = (slot: TimeSlot, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        timeSlots: checked 
          ? [...prev.availability.timeSlots, slot]
          : prev.availability.timeSlots.filter(s => s !== slot)
      }
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-theme-dark">Filtros</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={resetFilters}
          className="text-theme-teal hover:text-theme-teal/80"
        >
          Limpiar filtros
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Tipo de terapia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(therapyTypeLabels).map(([value, label]) => (
              <div key={value} className="flex items-center space-x-2">
                <Checkbox 
                  id={`therapy-${value}`} 
                  checked={filters.therapyTypes.includes(value as TherapyType)} 
                  onCheckedChange={(checked) => 
                    handleTherapyTypeChange(value as TherapyType, checked === true)
                  }
                />
                <label 
                  htmlFor={`therapy-${value}`} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Tipo de sesión</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {Object.entries(sessionTypeLabels).map(([value, label]) => (
              <div key={value} className="flex items-center space-x-2">
                <Checkbox 
                  id={`session-${value}`} 
                  checked={filters.sessionTypes.includes(value as SessionType)} 
                  onCheckedChange={(checked) => 
                    handleSessionTypeChange(value as SessionType, checked === true)
                  }
                />
                <label 
                  htmlFor={`session-${value}`} 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Ubicación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {['Puebla', 'Querétaro', 'CDMX', 'Oaxaca'].map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox 
                  id={`location-${location}`} 
                  checked={filters.locations.includes(location as Location)} 
                  onCheckedChange={(checked) => 
                    handleLocationChange(location as Location, checked === true)
                  }
                  disabled={!filters.sessionTypes.includes('in-person')}
                />
                <label 
                  htmlFor={`location-${location}`} 
                  className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed ${!filters.sessionTypes.includes('in-person') ? 'text-gray-400' : ''}`}
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-md">Disponibilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Días</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(dayLabels).map(([value, label]) => (
                  <div key={value} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`day-${value}`} 
                      checked={filters.availability.days.includes(value as WeekDay)} 
                      onCheckedChange={(checked) => 
                        handleDayChange(value as WeekDay, checked === true)
                      }
                    />
                    <label 
                      htmlFor={`day-${value}`} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Horarios</h3>
              <div className="space-y-2">
                {Object.entries(timeSlotLabels).map(([value, label]) => (
                  <div key={value} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`time-${value}`} 
                      checked={filters.availability.timeSlots.includes(value as TimeSlot)} 
                      onCheckedChange={(checked) => 
                        handleTimeSlotChange(value as TimeSlot, checked === true)
                      }
                    />
                    <label 
                      htmlFor={`time-${value}`} 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FilterSection;
