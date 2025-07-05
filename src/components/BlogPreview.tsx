import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const BlogPreview = () => {
  const scrollRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 4; // number of blog posts

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.9;

      if (direction === 'left') {
        scrollRef.current.scrollTo({ left: scrollLeft - scrollAmount, behavior: 'smooth' });
        setSlideIndex((prev) => (prev > 1 ? prev - 1 : totalSlides));
      } else {
        scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
        setSlideIndex((prev) => (prev < totalSlides ? prev + 1 : 1));
      }
    }
  };

  const blogPosts = [
    {
      date: { day: '12', month: 'Feb', year: '2025' },
      title: "Time-Tested Detox Practices: The Science Behind Nature's Healing Powers",
      category: 'Uncategorized',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'The Power of Knowledge: Educating Ourselves to Make Better Food Choices',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Mind-Body Health: Progressing Together with Natural Nutrition',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Food as Medicine: Rediscovering Ancient Wisdom for Modern Health',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'The Power of Knowledge: Educating Ourselves to Make Better Food Choices',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Mind-Body Health: Progressing Together with Natural Nutrition',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: { day: '17', month: 'Dec', year: '2024' },
      title: 'Food as Medicine: Rediscovering Ancient Wisdom for Modern Health',
      category: 'Altibbe',
      comments: '0 Comments',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What’s Happening
        </h2>
        <hr className="border-gray-300 mb-6" />

        {/* Carousel container */}
        <div ref={scrollRef} className="flex space-x-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory scroll-smooth">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-xl overflow-hidden shadow-md snap-start"
            >
              <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{post.title}</h3>
                <div className="text-sm text-gray-500 mb-1">{post.category}</div>
                <div className="text-xs text-gray-400">{post.comments}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Arrows */}
        <div className="flex items-center justify-end space-x-4 mt-6">
          <span className="text-lg font-medium text-gray-700">{slideIndex}/{totalSlides}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-400 hover:bg-gray-100 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
