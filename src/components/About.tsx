import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const categories = [
    {
      title: 'Organic Farming',
      description: 'Sustainable agricultural practices that preserve soil health and ecosystem balance.',
      icon: '',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Transparency Reporting',
      description: 'Clear and verifiable reporting systems for organic farming and natural product manufacturing.',
      icon: '',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Natural Product Innovation',
      description: 'Verification services for natural product innovators and health-focused manufacturers.',
      icon: '',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-sage-100 mix-blend-multiply filter blur-xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-earth-100 mix-blend-multiply filter blur-xl animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-earth-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Promoting nature-led health, transparency, and sustainable growth.
          </p>
        </div>

        {/* Grid of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gradient-to-b from-sage-50 to-earth-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 text-4xl">{category.icon}</div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-earth-800 mb-4 group-hover:text-sage-700 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Button Effect */}
                <div className="relative group/button inline-flex items-center cursor-pointer text-sage-600 font-semibold transition-all duration-300 overflow-hidden text-lg">
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover/button:translate-x-2" />
                  <span className="absolute inset-0 bg-sage-50 scale-x-0 group-hover/button:scale-x-100 transition-transform duration-500 origin-left rounded-full z-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
