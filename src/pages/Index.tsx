
import { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutPreview from '@/components/home/AboutPreview';
import StatsCounter from '@/components/home/StatsCounter';
import Testimonials from '@/components/home/Testimonials';
import PricingSection from '@/components/home/PricingSection';
import FAQSection from '@/components/home/FAQSection';
import BlogPreview from '@/components/home/BlogPreview';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="space-y-20 md:space-y-32">
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <StatsCounter />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <BlogPreview />
      <Newsletter />
    </div>
  );
};

export default Index;
