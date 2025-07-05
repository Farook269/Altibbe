
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HealthForHumanity from '@/components/HealthForHumanity';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen transition-all duration-700 ease-in-out">
      <Header />
      <div className="relative">
        <Hero />
        
        {/* Content that slides up on scroll */}
        <div 
          className="relative z-20 bg-white transition-transform duration-500 ease-out"
          style={{
            transform: scrollY > 100 ? 'translateY(-50px)' : 'translateY(0px)',
          }}
        >
          <div className="shadow-2xl">
            <About />
            <HealthForHumanity />
            <Services />
            <BlogPreview />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
