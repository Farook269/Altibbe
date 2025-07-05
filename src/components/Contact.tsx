
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const Contact = () => {
  const formFields = [
    { name: 'name', placeholder: 'Your name', type: 'text' },
    { name: 'email', placeholder: 'E-mail', type: 'email' },
    { name: 'company', placeholder: 'Your company name', type: 'text' },
    { name: 'location', placeholder: 'Your production location', type: 'text' },
    { name: 'brand', placeholder: 'Your brand name', type: 'text' },
    { name: 'market', placeholder: 'Your geographical market', type: 'text' },
    { name: 'description', placeholder: 'Your product description', type: 'text' },
    { name: 'volume', placeholder: 'Your production volume', type: 'text' },
    { name: 'revenue', placeholder: 'Your annual revenue', type: 'text' },
    { name: 'website', placeholder: 'Your website', type: 'url' }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="bg-sage-600 text-white p-12 rounded-2xl mb-12 lg:mb-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-12 text-sage-100">
              Have questions or need support? We're here for you. Reach out and 
              let's build a healthier future together.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-gold-400" />
                <span className="text-lg">California, USA</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-gold-400" />
                <span className="text-lg">+91-9614709999</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-gold-400" />
                <span className="text-lg">corp@altibbe.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-sage-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-earth-800 text-white p-12 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl font-bold mb-6">Join The Waitlist</h2>
            <p className="text-lg mb-8 text-earth-200">
              Join us in our mission for "Health for Humanity." Whether you're 
              looking for partnerships, health solutions, or advice, connect with us 
              to make a difference.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.map((field, index) => (
                  <Input
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="bg-earth-700 border-earth-600 text-white placeholder:text-earth-300 focus:border-gold-400"
                  />
                ))}
              </div>
              
              <Textarea
                placeholder="Add your comment here"
                rows={4}
                className="bg-earth-700 border-earth-600 text-white placeholder:text-earth-300 focus:border-gold-400 resize-none"
              />
              
              <Button 
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02]"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
