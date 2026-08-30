import React from 'react';
import { MOCK_TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: typeof MOCK_TESTIMONIALS[0];
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-indigo-500 flex flex-col h-full">
      <blockquote className="text-xl italic text-gray-700 mb-6 flex-grow">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
        {/* Avatar */}
        <img 
          className="w-12 h-12 rounded-full object-cover mr-4" 
          src={testimonial.avatarUrl} 
          alt={testimonial.name} 
        />
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-indigo-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wider uppercase">Hear It From Our Users</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Real Savings. Real Stories.
          </p>
        </div>

        {/* Testimonial Grid - Composition Variation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;