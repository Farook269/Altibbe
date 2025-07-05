import { motion } from 'framer-motion';
import { Wheat, Apple, Drumstick, Shirt, Sparkles, HeartPulse } from 'lucide-react';

const HealthForHumanity = () => {
  const categories = [
    { title: 'Agriculture Products', icon: <Wheat className="w-16 h-16 text-sage-600" /> },
    { title: 'Fruits & Vegetables', icon: <Apple className="w-16 h-16 text-sage-600" /> },
    { title: 'Meat, Seafood & Dairy', icon: <Drumstick className="w-16 h-16 text-sage-600" /> },
    { title: 'Fashion', icon: <Shirt className="w-16 h-16 text-sage-600" /> },
    { title: 'Beauty', icon: <Sparkles className="w-16 h-16 text-sage-600" /> },
    { title: 'Wellness', icon: <HeartPulse className="w-16 h-16 text-sage-600" /> },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-5xl font-extrabold text-earth-800 mb-6 tracking-wide leading-tight">
              Altibbe Inc <br /> Health Ecology
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Altibbe Inc. is redefining health and transparency in the post-pandemic world. Rooted in innovation and timeless wisdom, we empower consumers to make informed choices by ensuring complete transparency in food and wellness products.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission, <strong>"Health for Humanity"</strong>, drives us to create tools that connect people with health-focused producers through sustainable practices. From organic farms to modern techniques, we highlight excellence in agriculture, livestock, and farm technology to build a healthier, more transparent future.
            </p>
          </div>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.07,
                rotate: [0, 2, -2, 0],
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                transition: { duration: 0.4 }
              }}
              className="p-6 rounded-3xl bg-white/70 backdrop-blur-lg border-2 border-transparent hover:border-gradient-to-r from-green-500 to-yellow-500 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 flex justify-center">{category.icon}</div>
              <h3 className="font-bold text-lg text-earth-800 text-center tracking-wide">{category.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HealthForHumanity;
