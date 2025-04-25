
import { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AboutPreview from '@/components/home/AboutPreview';
import StatsCounter from '@/components/home/StatsCounter';
import Testimonials from '@/components/home/Testimonials';
import PricingSection from '@/components/home/PricingSection';
import BlogPreview from '@/components/home/BlogPreview';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutPreview />
      <StatsCounter />
      <Testimonials />
      <PricingSection />
      <BlogPreview />
      <Newsletter />
    </>
  );
};

export default Index;
