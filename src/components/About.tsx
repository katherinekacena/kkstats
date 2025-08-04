import React from 'react';
import { Award, BookOpen, Users2, Zap, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About <span className="text-teal-600">Katherine</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in statistical consulting, I specialize in 
                transforming complex data into clear, actionable insights that drive business success.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                My expertise spans across multiple industries, helping organizations of all sizes 
                make informed decisions through rigorous statistical analysis and research methodologies. 
                I pride myself on delivering clear, practical insights that drive real business results.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                From market research and survey design to advanced statistical modeling and data 
                visualization, I provide comprehensive solutions tailored to your specific needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                View Portfolio
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-200">
                Download CV
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-pink-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Statistical Training</h4>
                    <p className="text-gray-600 text-sm">Ph.D. in Statistics & Research Methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-pink-100 text-pink-500 rounded-lg">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Experience</h4>
                    <p className="text-gray-600 text-sm">10+ years across healthcare, tech, and finance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Certified Excellence</h3>
                    <p className="text-gray-600">Advanced certifications in statistical analysis and research methods</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-100 text-pink-500 rounded-lg">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Continuous Learning</h3>
                    <p className="text-gray-600">Staying current with latest statistical methods and technologies</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                    <Users2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Client-Focused</h3>
                    <p className="text-gray-600">Dedicated to understanding and solving your unique challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
