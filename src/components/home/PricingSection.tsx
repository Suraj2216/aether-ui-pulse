
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'Perfect for individuals and small projects',
    features: [
      'Up to 3 projects',
      '1,000 API requests/month',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started',
    href: '/signup',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '49',
    description: 'For growing teams and businesses',
    features: [
      'Unlimited projects',
      '50,000 API requests/month',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    href: '/signup',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited everything',
      'Dedicated account manager',
      'Custom SLA',
      'Enterprise security',
      'Single sign-on (SSO)',
      'Custom training',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 reveal-element">
            <span className="text-gradient">Simple Pricing</span>, No Hidden Fees
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
            Choose the plan that's right for you and start building amazing applications today.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-2xl overflow-hidden transition-all duration-300 reveal-element ${
                plan.highlight
                  ? 'border-2 border-brand-500 dark:border-brand-400 shadow-lg scale-105 md:scale-110'
                  : 'border border-slate-200 dark:border-slate-700 shadow'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="bg-brand-500 text-white py-2 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="bg-white dark:bg-slate-800 p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-slate-500 dark:text-slate-400">/month</span>}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-brand-500 mr-2">
                        <Check size={20} />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={plan.href} className="block">
                  <Button 
                    variant={plan.highlight ? "default" : "outline"} 
                    className={`w-full ${plan.highlight ? 'bg-brand-500 hover:bg-brand-600' : ''}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
