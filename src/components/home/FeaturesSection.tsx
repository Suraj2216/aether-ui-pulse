
import { Activity, BarChart3, Cloud, Code, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-brand-500" />,
    title: 'Lightning Fast Performance',
    description: 'Our platform is built for speed, with sub-second response times and smooth user experience.',
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-500" />,
    title: 'Enterprise-Grade Security',
    description: 'End-to-end encryption and compliance with global security standards to protect your data.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-brand-500" />,
    title: 'Advanced Analytics',
    description: 'Gain insights from your data with our powerful analytics and reporting tools.',
  },
  {
    icon: <Activity className="h-6 w-6 text-brand-500" />,
    title: 'Real-Time Monitoring',
    description: 'Track application performance and user engagement with live dashboards.',
  },
  {
    icon: <Cloud className="h-6 w-6 text-brand-500" />,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure that grows with your business needs.',
  },
  {
    icon: <Code className="h-6 w-6 text-brand-500" />,
    title: 'Developer API',
    description: 'Extensive API documentation and SDKs for seamless integration with your stack.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 reveal-element">
            <span className="text-gradient">Powerful Features</span> For Modern Businesses
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 reveal-element reveal-delay-1">
            Our platform is packed with features to help you build, launch, and scale your business efficiently.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card reveal-element"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-brand-100 dark:bg-brand-900/20 rounded-full w-12 h-12 flex items-center justify-center -z-10 blur-sm"></div>
                <div className="bg-white dark:bg-slate-800 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
