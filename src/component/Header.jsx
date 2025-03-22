import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="https://samarthanamusa.org/wp-content/uploads/2023/07/samarthanam-trust-for-the-disabled-logo.jpg" 
            alt="Samarthanam Trust for the Disabled" 
            className="h-16 w-auto"
          />
        </Link>
      </div>
      <div className="container mx-auto px-4 flex justify-center items-center space-x-8 py-4">
        <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
        <Link to="/events" className="text-red-600 font-medium">Events</Link>
        <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
        <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
        <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors">Donate</Link>
      </div>
    </header>
  );
};

export default Header; 