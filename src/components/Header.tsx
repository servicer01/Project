import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 py-4 shadow-sm">
      <div className="container flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <a href="src\components\Services.tsx" className="text-gray-600 hover:text-primary-600">Services</a>
          <a href="src\components\packages\Packages.tsx" className="text-gray-600 hover:text-primary-600">Packages</a>
          <a href="#testimonials" className="text-gray-600 hover:text-primary-600">Results</a>
          <a href="src\components\ai-booking-system.tsx" className="btn-primary">Book Free Session</a>
        </nav>
        <button className="md:hidden btn-primary">Menu</button>
      </div>
    </header>
  );
}