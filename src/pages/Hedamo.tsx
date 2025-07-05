import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Shield, Award, Globe, CheckCircle, Leaf, Users } from 'lucide-react';

const Hedamo = () => {
  const serviceCategories = [
    {
      icon: Shield,
      title: 'Holistic Audits by Altibbe',
      description: 'Our thorough evaluations encompass health practices, sustainability, and innovation. We conduct comprehensive on-site assessments, document reviews, and supply chain analyses to ensure every aspect of production meets the highest health standards',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/holistic-audits'
    },
    {
      icon: Award,
      title: 'Exclusive Labeling from Altibbe',
      description: 'Our distinctive Platinum, Gold, or Green Hedamo labels are supported by in-depth reports that foster consumer confidence. These labels are more than just symbols—they represent our assurance of exceptional quality and dedication to consumer well-being',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/exclusive-labeling'
    },
    {
      icon: Globe,
      title: 'Global Market Adaptation',
      description: 'International compliance and certification services meeting global standards for organic and natural product verification.',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      href: '/global-market-adaptation'
    },
  ];

  const hedamoBadges = [
    { color: 'bg-green-600', label: 'HEDAMO VERIFIED' },
    { color: 'bg-amber-600', label: 'HEDAMO CERTIFIED' },
    { color: 'bg-yellow-500', label: 'HEDAMO PREMIUM' }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <div className="mb-8">
            <h3 className="text-lg text-green-700 mb-2 tracking-wider">ALTIBBE INC</h3>
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Health Ecology</h2>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold text-amber-700 mb-12 animate-fade-in-up">HEDAMO</h1>

          {/* Icon Grid */}
          <div className="mb-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Leaf, label: 'Agriculture Products' },
              { icon: Shield, label: 'Meat & Dairy' },
              { icon: Award, label: 'Fruits & Vegetables' },
              { icon: Users, label: 'Fashion' },
              { icon: Globe, label: 'Wellness' },
              { icon: CheckCircle, label: 'Beauty' },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-800">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-20">
          {serviceCategories.map((service, index) => (
            <div
              key={service.title}
              className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`mb-12 lg:mb-0 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-2xl shadow-xl" />
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                {/* Title as a Link */}
                <Link to={service.href}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 hover:text-green-700 transition-all duration-300">
                    {service.title}
                  </h2>
                </Link>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.description}</p>
                <Link to={service.href}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification Badges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Certification Levels</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Distinct levels of Hedamo certification to meet diverse industry needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hedamoBadges.map((badge, index) => (
              <div
                key={badge.label}
                className="text-center p-12 bg-gradient-to-b from-green-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-24 h-24 mx-auto mb-8 ${badge.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <div className="text-white font-bold text-2xl">H</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{badge.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hedamo;
