import React from 'react';
import { ExternalLink, FileText, BarChart3, TrendingUp, Users, Target } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Healthcare Outcomes Analysis",
      category: "Healthcare Research",
      description: "Comprehensive statistical analysis of patient outcomes data for a major healthcare system, identifying key factors that improve treatment success rates.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Statistical Modeling", "Healthcare", "Outcomes Research"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Market Research Study",
      category: "Market Analysis",
      description: "Designed and executed a comprehensive market research study for a tech startup, including survey design, data collection, and strategic recommendations.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Survey Design", "Market Research", "Data Visualization"],
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Customer Behavior Analytics",
      category: "Business Intelligence",
      description: "Advanced analytics project analyzing customer behavior patterns for an e-commerce platform, resulting in 25% increase in conversion rates.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Behavioral Analysis", "E-commerce", "Predictive Modeling"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Clinical Trial Design",
      category: "Research Design",
      description: "Statistical consultation for Phase II clinical trial design, including power analysis, randomization strategies, and interim analysis planning.",
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Clinical Trials", "Research Design", "Regulatory Compliance"],
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Employee Satisfaction Survey",
      category: "Organizational Research",
      description: "Comprehensive employee satisfaction survey design and analysis for Fortune 500 company, providing actionable insights for HR strategy.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HR Analytics", "Survey Research", "Organizational Psychology"],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Financial Risk Assessment",
      category: "Financial Analytics",
      description: "Statistical modeling for credit risk assessment, developing predictive models that improved loan approval accuracy by 30%.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Risk Modeling", "Financial Services", "Machine Learning"],
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of recent projects showcasing expertise in statistical analysis, 
            research design, and data-driven consulting across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  <div className="text-teal-600">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button className="flex items-center text-teal-600 font-medium hover:text-pink-500 transition-colors duration-200 group">
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 inline-flex items-center">
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
