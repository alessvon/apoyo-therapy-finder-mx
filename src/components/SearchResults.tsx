
import React from 'react';
import { Therapist } from '../data/types';
import TherapistCard from './TherapistCard';

interface SearchResultsProps {
  therapists: Therapist[];
  loading?: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ therapists, loading = false }) => {
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-theme-teal border-t-transparent mx-auto"></div>
          <p className="mt-2 text-theme-dark">Buscando terapeutas...</p>
        </div>
      </div>
    );
  }

  if (therapists.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <div className="rounded-full h-12 w-12 bg-theme-gray/20 flex items-center justify-center mx-auto">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="mt-2 text-lg font-medium text-theme-dark">No se encontraron resultados</h3>
          <p className="mt-1 text-gray-500">Intenta ajustar tus filtros de búsqueda.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {therapists.map(therapist => (
        <TherapistCard key={therapist.id} therapist={therapist} />
      ))}
    </div>
  );
};

export default SearchResults;
