import React from 'react';
import { ArrowRight, Download, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-teal-600">Katherine Kacena</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700 font-medium">Statistical Consultant</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforming complex data into clear, actionable insights for strategic business decisions. 
                Specializing in research design, statistical analysis, and data visualization.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all duration-200 flex items-center justify-center group">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-200 flex items-center justify-center">
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">15+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img 
                src="/KatherineKacenaProfilePic.jpg" 
                alt="Katherine Kacena" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Available for Projects</div>
                    <div className="text-xs text-gray-600">Book a consultation</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
