
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section bg-brand-500 dark:bg-brand-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4 reveal-element">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto reveal-element reveal-delay-1">
            Subscribe to receive the latest news, updates, and exclusive content delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto reveal-element reveal-delay-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="secondary"
                disabled={isLoading}
                className="whitespace-nowrap bg-white text-brand-500 hover:bg-white/90 hover:text-brand-600"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
            <p className="mt-3 text-sm text-white/70">
              We respect your privacy and will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
