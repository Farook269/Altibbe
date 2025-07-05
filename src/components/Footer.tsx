
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-earth-900 text-white py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4">
                <div className="text-white font-bold text-xl">A</div>
              </div>
              <div>
                <div className="text-white font-bold text-xl tracking-wide">ALTIBBÉ</div>
                <div className="text-white/80 text-sm tracking-widest">HEALTH WISDOM VIRTUE</div>
              </div>
            </div>
            <p className="text-earth-300 leading-relaxed">
              Pioneers in transparency reporting for Organic Farms, Food Producers, and Natural Product Innovators.
            </p>
          </div>

          {/* Additional Menu */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-4">ADDITIONAL MENU</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-earth-300 hover:text-white transition-colors duration-300 group flex items-center"
              >
                <span>HOME</span>
              </Link>
              <Link 
                to="/hedamo" 
                className="text-earth-300 hover:text-white transition-colors duration-300 group flex items-center"
              >
                <span>HEDAMO</span>
              </Link>
              <Link 
                to="/blog" 
                className="text-earth-300 hover:text-white transition-colors duration-300 group flex items-center"
              >
                <span>BLOG</span>
              </Link>
              <Link 
                to="/contact" 
                className="text-earth-300 hover:text-white transition-colors duration-300 group flex items-center"
              >
                <span>CONTACTS</span>
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-4">GET A NEWSLETTER</h3>
            <p className="text-earth-300 leading-relaxed">
              Stay updated with our latest insights, updates, and news. Subscribe to receive valuable content delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="w-full px-4 py-3 bg-earth-800 border border-earth-700 rounded-lg text-white placeholder-earth-400 focus:outline-none focus:border-gold-500 transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-earth-700 pt-8 mt-12 text-center">
          <p className="text-earth-400 text-sm">
            © 2024 Altibbe Inc. All rights reserved. | Health for Humanity
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
