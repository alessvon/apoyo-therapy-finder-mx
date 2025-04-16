
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FilterSection from '../components/FilterSection';
import SearchResults from '../components/SearchResults';
import MobileFilterDrawer from '../components/MobileFilterDrawer';
import { therapists } from '../data/therapists';
import { TherapistFilters, Therapist, TherapyType, SessionType, WeekDay, Hour } from '../data/types';

const Index: React.FC = () => {
  const [filters, setFilters] = useState<TherapistFilters>({
    therapyTypes: [],
    sessionTypes: [],
    location: undefined,
    availability: {
      days: [],
      hours: [],
    },
  });

  const [filteredTherapists, setFilteredTherapists] = useState<Therapist[]>(therapists);
  const [loading, setLoading] = useState(false);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      therapyTypes: [],
      sessionTypes: [],
      location: undefined,
      availability: {
        days: [],
        hours: [],
      },
    });
  };

  useEffect(() => {
    setLoading(true);
    
    const timeoutId = setTimeout(() => {
      const newFilteredTherapists = therapists.filter(therapist => {
        // Filter by therapy types
        if (filters.therapyTypes.length > 0 && 
            !therapist.specialties.some(specialty => 
              filters.therapyTypes.includes(specialty))) {
          return false;
        }
        
        // Filter by session types
        if (filters.sessionTypes.length > 0 && 
            !therapist.sessionTypes.some(session => 
              filters.sessionTypes.includes(session))) {
          return false;
        }
        
        // Filter by location (only if in-person is selected)
        if (filters.sessionTypes.includes('in-person') && 
            filters.location?.country && 
            (!therapist.location || therapist.location.country !== filters.location.country)) {
          return false;
        }

        // Filter by state if both country and state are selected
        if (filters.sessionTypes.includes('in-person') && 
            filters.location?.country && filters.location?.state && 
            (!therapist.location || therapist.location.state !== filters.location.state)) {
          return false;
        }
        
        // Filter by availability days
        if (filters.availability.days.length > 0 && 
            !therapist.availability.some(avail => 
              filters.availability.days.includes(avail.day))) {
          return false;
        }
        
        // Filter by specific hours
        if (filters.availability.hours.length > 0 && 
            !therapist.availability.some(avail => 
              avail.hours.some(hour => 
                filters.availability.hours.includes(hour)))) {
          return false;
        }
        
        return true;
      });
      
      setFilteredTherapists(newFilteredTherapists);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-theme-light">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-theme-dark mb-4">
            Encuentra el terapeuta ideal para ti
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conectamos contigo profesionales especializados según tus necesidades. Filtra por especialidad, tipo de sesión y disponibilidad.
          </p>
        </div>
      
        <div className="flex gap-8">
          {/* Sidebar with filters - hidden on mobile */}
          <div className="hidden md:block w-64 shrink-0">
            <FilterSection
              filters={filters}
              setFilters={setFilters}
              resetFilters={resetFilters}
            />
          </div>
          
          {/* Main content area */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-theme-dark">
                  Resultados {loading ? "" : `(${filteredTherapists.length})`}
                </h2>
              </div>
              
              {/* Mobile filter drawer */}
              <MobileFilterDrawer 
                filters={filters}
                setFilters={setFilters}
                resetFilters={resetFilters}
              />
            </div>
            
            <SearchResults 
              therapists={filteredTherapists} 
              loading={loading} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
