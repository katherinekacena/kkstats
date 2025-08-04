import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Marketing",
      company: "TechCorp Solutions",
      content: "KK Stats transformed our approach to data analysis. Their insights helped us increase our marketing ROI by 40% and make more informed strategic decisions.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Research Director",
      company: "Healthcare Innovations",
      content: "The statistical rigor and clarity of communication from KK Stats is exceptional. They helped us design and execute a complex research study that led to breakthrough insights.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupVenture",
      content: "As a growing startup, we needed expert guidance on market research and data strategy. KK Stats provided invaluable support that helped us secure our Series A funding.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Client <span className="text-teal-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our statistical consulting services have helped organizations 
            achieve their goals and drive meaningful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-teal-600 mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-teal-600 font-medium">{testimonial.role}</div>
                <div className="text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
