
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-theme-teal text-3xl font-bold">
              Red de Apoyo
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-theme-dark hover:text-theme-teal">Inicio</a>
            <a href="#" className="text-theme-dark hover:text-theme-teal">Cómo funciona</a>
            <a href="#" className="text-theme-dark hover:text-theme-teal">Recursos</a>
            <a href="#" className="text-theme-dark hover:text-theme-teal">Contacto</a>
          </nav>
          <div className="md:hidden">
            <button className="text-theme-dark p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
