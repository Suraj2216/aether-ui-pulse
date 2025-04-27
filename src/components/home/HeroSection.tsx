import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute -top-24 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-brand-400/30 to-transparent opacity-70 blur-3xl animate-pulse-slow"
          style={{ animationDuration: '8s' }}
        ></div>
        <div 
          className="absolute -bottom-32 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-400/20 to-transparent opacity-70 blur-3xl animate-pulse-slow"
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        ></div>
      </div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-200 bg-brand-100/50 dark:bg-brand-900/20 dark:border-brand-800 text-brand-800 dark:text-brand-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2"></span>
              Introducing AetherUI v2.0
            </div>
            
            <h1 className="heading-xl mb-4 reveal-element font-bold">
              <span className="text-gradient">Supercharge</span> your SaaS with
              <span className="relative z-10 px-2 mx-1">
                AI
                <svg className="absolute bottom-1 -z-10 w-full h-3 left-0" viewBox="0 0 200 15">
                  <path fill="rgba(127, 86, 217, 0.2)" d="M0,3.5 C50,18 150,18 200,3.5 L200,15 L0,15 L0,3.5 Z"></path>
                </svg>
              </span>
              capabilities
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-4 reveal-element reveal-delay-1">
              Creative Solutions for Modern Brands
            </p>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 reveal-element reveal-delay-1">
              Elevate your business with our next-generation platform that brings AI-powered analytics, automation, and insights to help you make data-driven decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal-element reveal-delay-2">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(127,86,217,0.3)] dark:hover:shadow-[0_0_20px_rgba(127,86,217,0.2)]"
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm reveal-element reveal-delay-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white dark:border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-rose-500 border-2 border-white dark:border-slate-900"></div>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                <span className="font-semibold">2,000+</span> happy customers
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="lg:ml-auto reveal-element reveal-delay-2">
            <div className="relative">
              {/* Main Image */}
              <div className="glass-card p-2 shadow-lg animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 glass-card-sm p-3 animate-pulse-slow shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium">AI processing</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card-sm p-3 shadow-lg animate-pulse-slow">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="text-sm font-medium">Data secured</div>
                </div>
              </div>
              
              {/* Floating dots decoration */}
              <div className="absolute top-1/4 -left-12 w-24 h-24 blur-sm opacity-50">
                <div className="w-2 h-2 bg-brand-500 rounded-full absolute top-0 left-0 animate-pulse-slow"></div>
                <div className="w-2 h-2 bg-brand-500 rounded-full absolute top-4 left-8 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-2 h-2 bg-brand-500 rounded-full absolute top-10 left-2 animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
              </div>
              
              <div className="absolute bottom-1/4 -right-12 w-24 h-24 blur-sm opacity-50">
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0 right-0 animate-pulse-slow"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-8 right-4 animate-pulse-slow" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-4 right-10 animate-pulse-slow" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
