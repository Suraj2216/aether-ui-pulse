
import { useEffect, useRef, useState } from 'react';
import { FileText, Users, Database, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    value: 5000,
    suffix: '+',
    label: 'Active Users',
  },
  {
    icon: <Database className="h-6 w-6 text-brand-500" />,
    value: 1000000,
    suffix: '+',
    label: 'API Requests Daily',
  },
  {
    icon: <FileText className="h-6 w-6 text-brand-500" />,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
  },
  {
    icon: <Award className="h-6 w-6 text-brand-500" />,
    value: 12,
    suffix: '',
    label: 'Industry Awards',
  },
];

const StatsCounter = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState(stats.map(stat => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // Animation duration in ms
    const frameRate = 60;
    const totalFrames = duration * frameRate / 1000;
    
    let frame = 0;
    const intervals: NodeJS.Timeout[] = [];

    stats.forEach((stat, index) => {
      const interval = setInterval(() => {
        frame++;
        
        const progress = frame / totalFrames;
        const currentCount = Math.floor(easeOutQuart(progress) * stat.value);
        
        setCounters(prevCounters => {
          const newCounters = [...prevCounters];
          newCounters[index] = currentCount;
          return newCounters;
        });
        
        if (frame >= totalFrames) {
          clearInterval(interval);
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = stat.value;
            return newCounters;
          });
        }
      }, 1000 / frameRate);
      
      intervals.push(interval);
    });

    // easeOutQuart easing function
    function easeOutQuart(x: number): number {
      return 1 - Math.pow(1 - x, 4);
    }

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [inView]);

  // Format the number with commas
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  return (
    <section ref={sectionRef} className="section bg-gradient-to-br from-brand-500/10 via-white to-blue-500/10 dark:from-brand-900 dark:via-slate-900 dark:to-blue-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-md border border-slate-100 dark:border-slate-700 relative overflow-hidden reveal-element"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Background decoration */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-brand-50 dark:bg-brand-900/20 rounded-full opacity-70"></div>
              
              <div className="relative">
                <div className="bg-brand-50 dark:bg-brand-900/20 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1 flex items-end">
                  {formatNumber(counters[index])}{stat.suffix}
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
