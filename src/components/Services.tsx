import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Organic Farm Consulting',
      description: 'Expert guidance in sustainable farming practices, soil health, and ecosystem balance.',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Soil analysis and improvement',
        'Crop rotation strategies',
        'Pest and disease management',
        'Water conservation techniques'
      ]
    },
    {
      title: 'Transparency Reporting',
      description: 'Comprehensive verification and reporting systems for organic farming practices and natural product manufacturing.',
      image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Supply chain verification',
        'Data collection and analysis',
        'Customized reporting formats',
        'Regulatory compliance'
      ]
    },
    {
      title: 'Organic Certification',
      description: 'Industry-leading certification standards ensuring authenticity and quality in organic and natural products.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Inspection and auditing services',
        'Compliance with organic standards',
        'Certification mark usage',
        'Annual renewal process'
      ]
    },
    {
      title: 'Natural Product Verification',
      description: 'Comprehensive verification services for natural product innovators and health-focused manufacturers.',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: [
        'Ingredient verification',
        'Manufacturing process review',
        'Labeling compliance',
        'Product testing'
      ]
    }
  ];

  return (
    <section className="py-20 bg-earth-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-800 mb-4 animate-fade-in-up">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Empowering businesses with transparency and sustainability solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-sage-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="group/button cursor-pointer inline-flex items-center bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
