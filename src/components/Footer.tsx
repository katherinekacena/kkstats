import React from 'react';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src="/Logo_Final.png" 
              alt="KK Stats" 
              className="h-8 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-gray-400 leading-relaxed">
              Transforming data into actionable insights for strategic business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Statistical Analysis</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Data Visualization</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Research Design</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Market Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@kkstats.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 KK Stats. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
