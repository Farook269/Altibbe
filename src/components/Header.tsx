import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'HEDAMO', href: '/hedamo' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navbar text-navbar-foreground shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center mr-3">
              <div className="text-white font-bold text-lg">A</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-wide">ALTIBBÉ</div>
              <div className="text-white/80 text-xs tracking-widest">HEALTH WISDOM VIRTUE</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navbar transition-all duration-300"
              >
                GET IN TOUCH
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-navbar text-white rounded-lg mt-4 p-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wider py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navbar transition-all duration-300 mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET IN TOUCH
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
