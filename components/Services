import React from 'react';
import { TrendingUp, PieChart, Database, Target, Users, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Statistical Analysis",
      description: "Comprehensive statistical modeling and analysis to uncover insights from your data and drive strategic decisions."
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Data Visualization",
      description: "Transform complex data into clear, actionable visualizations that tell your story and support decision-making."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Research Design",
      description: "Design robust research methodologies and experiments to ensure reliable, valid, and actionable results."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Market Research",
      description: "In-depth market analysis and consumer insights to help you understand your target audience and competitive landscape."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Survey Design",
      description: "Create effective surveys and questionnaires that capture meaningful data and maximize response rates."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Strategic Consulting",
      description: "Data-driven strategic guidance to help you make informed business decisions and achieve your goals."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            My <span className="text-teal-600">Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I provide comprehensive statistical consulting services to help your organization 
            make data-driven decisions and achieve measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 p-3 bg-teal-100 text-teal-600 rounded-xl group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <button className="text-teal-600 font-medium hover:text-pink-500 transition-colors duration-200 flex items-center group">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
