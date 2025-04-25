
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative reveal-element">
            <div className="relative">
              <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-radial from-brand-100 to-transparent dark:from-brand-900/20 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our team" 
                className="rounded-2xl w-full h-auto shadow-lg"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-200 dark:border-slate-700 reveal-element reveal-delay-2">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-brand-600">97%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Customer satisfaction</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="lg:pl-8 reveal-element reveal-delay-1">
            <h2 className="heading-lg mb-6">
              We help companies <span className="text-gradient">transform ideas</span> into impact
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Since 2018, we've been on a mission to help companies harness the power of AI and data to grow their businesses and delight their customers.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Our team of experts combines technical excellence with business acumen to deliver solutions that drive measurable results. From startups to Fortune 500 companies, we provide the tools and expertise needed to thrive in the digital economy.
            </p>
            
            <Link to="/about">
              <Button className="gap-2">
                Learn more about us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
