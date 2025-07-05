import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      title: "PIONARY ",
      subtitle: "HEALTH INNOVATION",
      description: "Pioneers in transparency reporting for Organic Farms, Food Producers, and Natural Product Innovators.",
      backgroundImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80",
      buttonText: "GET VERIFIED"
    },
    {
      title: "TRANSPARENCY",
      subtitle: "REPORTING",
      description: "Complete verification and reporting systems for organic farming practices and natural product manufacturing.",
      backgroundImage: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80",
      buttonText: "LEARN MORE"
    },
    {
      title: "ORGANIC",
      subtitle: "CERTIFICATION",
      description: "Industry-leading certification standards ensuring authenticity and quality in organic and natural products.",
      backgroundImage: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80",
      buttonText: "GET CERTIFIED"
    },
    {
      title: "NATURAL",
      subtitle: "PRODUCTS",
      description: "Comprehensive verification services for natural product innovators and health-focused manufacturers.",
      backgroundImage: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80",
      buttonText: "VERIFY NOW"
    }
  ];

  // Listen for slide change event
  useEffect(() => {
    if (!api) return;
    api.on("select", () => setSelectedIndex(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
            stopOnInteraction: false,
          }),
        ]}
        setApi={setApi}
        className="w-full h-screen"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              {/* Background Image with fade + slide transition */}
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                  selectedIndex === index
                    ? 'opacity-100 scale-100 translate-x-0'
                    : 'opacity-0 scale-105 translate-x-8'
                }`}
                style={{
                  backgroundImage: `url('${slide.backgroundImage}')`
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-800/80 to-earth-800/90" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                  <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 animate-fade-in-up tracking-wider">
                    {slide.title}
                  </h1>
                  <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    {slide.description}
                  </p>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Button
                      size="lg"
                      className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous Button */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full p-3 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
