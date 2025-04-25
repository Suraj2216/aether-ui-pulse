
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AetherUI has transformed our workflow and increased our team's productivity by 40% in just three months.",
    name: "Sarah Johnson",
    title: "CTO, TechSolutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote: "The analytics dashboard provides insights that have helped us make data-driven decisions and grow our user base significantly.",
    name: "Michael Chen",
    title: "Growth Lead, Startup Ventures",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 5,
  },
  {
    quote: "We've tried many platforms, but AetherUI stands out with its intuitive interface and exceptional customer support.",
    name: "Elena Rodriguez",
    title: "Product Manager, Global Enterprises",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 reveal-element">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
            Don't just take our word for it. Here's what our customers have to say about their experience with AetherUI.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 md:p-10">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl italic text-center mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-200 dark:border-brand-800">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 dark:hover:border-brand-400 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index
                      ? 'bg-brand-500'
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500 dark:hover:border-brand-400 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
