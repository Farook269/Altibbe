
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-0 bg-gradient-to-br from-sage-800 via-sage-700 to-earth-800 min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-800/85 to-earth-800/90" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl min-h-screen flex items-center">
          <div className="w-full lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Side - Contact Info & Form */}
            <div className="text-white animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Ready to start your transparency journey? Get in touch with our team of experts and discover how we can help transform your business.
              </p>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-white/80">California, USA</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Phone className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-sm text-white/80">+91-9614709999</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-8 h-8 text-gold-400 mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-white/80">corp@altibbe.com</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </Button>
                
                <Link to="/blog">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-sage-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 group">
                    Find More Blogs
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-earth-800 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our services? Fill out the form below and we'll get back to you promptly.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="border-earth-200 focus:border-sage-500 py-3"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="border-earth-200 focus:border-sage-500 py-3"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Company Name"
                      className="border-earth-200 focus:border-sage-500 py-3"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="border-earth-200 focus:border-sage-500 py-3"
                    />
                  </div>
                  
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="border-earth-200 focus:border-sage-500 py-3"
                  />
                  
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="border-earth-200 focus:border-sage-500 resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
