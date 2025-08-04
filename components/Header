import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/Logo_Final.png" 
              alt="KK Stats" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Home</a>
            <a href="#portfolio" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Portfolio</a>
            <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Contact</a>
          </nav>

          <div className="hidden md:flex">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200">
              Contact Me
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Home</a>
              <a href="#portfolio" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Portfolio</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Services</a>
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-200">Contact</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 w-fit">
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
