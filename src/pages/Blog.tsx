
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;
  
  const blogPosts = [
    {
      date: { day: '12', month: 'Feb', year: '2025' },
      title: 'Time-Tested Detox Practices: The Science Behind Nature\'s Healing Powers',
      category: 'Uncategorized',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Explore ancient detox practices backed by modern science and discover how nature\'s healing powers can transform your health journey.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'The Power of Knowledge: Educating Ourselves to Make Better Food Choices',
      category: 'Nutrition',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Understanding food sources, production methods, and nutritional value empowers us to make informed decisions for our health.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Mind-Body Health: Progressing Together with Natural Nutrition',
      category: 'Wellness',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'The connection between mental and physical well-being through natural nutrition and holistic health approaches.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Food as Medicine: Rediscovering Ancient Wisdom for Modern Health',
      category: 'Health',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Ancient wisdom meets modern science in understanding how food can be our most powerful medicine.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '15', month: 'Dec', year: '2024' },
      title: 'Sustainable Farming: The Future of Food Production',
      category: 'Agriculture',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Exploring sustainable farming practices that protect our environment while producing nutritious food.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '10', month: 'Dec', year: '2024' },
      title: 'Organic Certification: What It Really Means',
      category: 'Certification',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Understanding organic certification standards and what they mean for consumers and producers.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '8', month: 'Dec', year: '2024' },
      title: 'Natural Product Innovation: The Future of Wellness',
      category: 'Innovation',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'Exploring breakthrough innovations in natural product development and their impact on global wellness.',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '5', month: 'Dec', year: '2024' },
      title: 'Transparency in Food Production: Building Consumer Trust',
      category: 'Transparency',
      author: 'Altibbe Team',
      comments: '0 Comments',
      excerpt: 'How transparency in food production processes builds trust and ensures quality for consumers worldwide.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogPosts.slice(startIndex, startIndex + blogsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen transition-all duration-700 ease-in-out">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-sage-800 via-sage-700 to-earth-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-900/90 via-sage-800/80 to-earth-800/90" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            What's Happening
          </h1>
          <p className="text-xl text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest insights, research, and developments in health and wellness.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid with Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Navigation Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="text-sm text-gray-500">
              {startIndex + 1}-{Math.min(startIndex + blogsPerPage, blogPosts.length)} of {blogPosts.length}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-sage-600 hover:bg-sage-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-sage-600 transition-colors duration-300" />
              </button>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-sage-600 hover:bg-sage-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-sage-600 transition-colors duration-300" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((post, index) => (
              <article 
                key={`${currentPage}-${index}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up group transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Date Badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-sage-600 text-white rounded-lg p-3 text-center min-w-[60px] transform group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold leading-none">{post.date.day}</div>
                    <div className="text-sm font-medium">{post.date.month}</div>
                    <div className="text-sm">{post.date.year}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-transform duration-300">
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-earth-800 mb-3 text-xl leading-tight group-hover:text-sage-700 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center items-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === i + 1 
                    ? 'bg-sage-600 scale-125' 
                    : 'bg-gray-300 hover:bg-sage-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
