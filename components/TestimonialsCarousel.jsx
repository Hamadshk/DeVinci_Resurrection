import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Award, TrendingUp, Shield, CheckCircle } from 'lucide-react';

const TestimonialsCarousel = ({ inView }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Updated testimonials with Fiverr screenshots
  const testimonials = [
    {
      id: 1,
      image: '/images/testimonials/review_1.png',
      platform: 'fiverr',
      rating: 5,
      alt: 'Fiverr 5-star review screenshot #1'
    },
    {
      id: 2,
      image: '/images/testimonials/review_2.png',
      platform: 'fiverr',
      rating: 5,
      alt: 'Fiverr 5-star review screenshot #2'
    },
    {
      id: 3,
      image: '/images/testimonials/review_3.png',
      platform: 'fiverr',
      rating: 5,
      alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 4,
        image: '/images/testimonials/review_4.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 5,
        image: '/images/testimonials/review_5.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 6,
        image: '/images/testimonials/review_6.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 7,
        image: '/images/testimonials/review_7.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 8,
        image: '/images/testimonials/review_8.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 9,
        image: '/images/testimonials/review_9.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 10,
        image: '/images/testimonials/review_10.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 11,
        image: '/images/testimonials/review_11.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 12,
        image: '/images/testimonials/review_12.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 13,
        image: '/images/testimonials/review_13.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },
    {
        id: 14,
        image: '/images/testimonials/review_14.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    },{
        id: 15,
        image: '/images/testimonials/review_15.png',
        platform: 'fiverr',
        rating: 5,
        alt: 'Fiverr 5-star review screenshot #3'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      platform: "Fiverr",
      title: "Level 2 Seller",
      metric: "Top Rated",
      logo: "/images/logos/fiverr.svg"
    },
    {
      icon: <Star className="w-5 h-5" />,
      platform: "Fiverr",
      title: "Perfect Rating",
      metric: "4.9/5 Reviews",
      logo: "/images/logos/fiverr.svg"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      platform: "Upwork",
      title: "Success Rate",
      metric: "100% Complete",
      logo: "/images/logos/upwork.svg"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      platform: "Upwork",
      title: "Rising Talent",
      metric: "Top Performer",
      logo: "/images/logos/upwork.svg"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="pt-8 pb-12 px-4 relative overflow-hidden bg-pure-black">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
      
      {/* Geometric corner accents */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyber-cyan opacity-20" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-cyber-cyan opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-glass-black rounded-lg border border-cyber-cyan">
            <Star className="w-4 h-4 text-cyber-cyan" />
            <span className="text-cyber-cyan text-sm font-medium font-inter">Client Reviews</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-white leading-tight mt-3 mb-3 font-mono">
            Trusted by <span className="text-cyber-cyan">Global Clients</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real reviews from satisfied clients showcasing our commitment to excellence
          </p>
        </div>

        {/* Achievements Section - Improved Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-slate-600/40 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 w-full min-h-[140px] md:min-h-[160px] flex flex-col justify-center items-center text-center space-y-3 hover:shadow-xl hover:shadow-cyan-500/10 ${
                inView ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo and Icon Container */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <div className="flex-shrink-0 p-2.5 md:p-3 rounded-xl bg-gradient-to-br from-cyan-500/25 via-blue-500/25 to-purple-500/25 backdrop-blur-sm border border-cyan-400/40 shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-300">
                    <Image
                      src={achievement.logo}
                      alt={`${achievement.platform} logo`}
                      width={24}
                      height={24}
                      className="w-6 h-6 md:w-7 md:h-7 filter brightness-110"
                    />
                  </div>
                  {/* Small icon overlay */}
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                    {React.cloneElement(achievement.icon, { className: "w-3 h-3" })}
                  </div>
                </div>
                <p className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                  {achievement.platform}
                </p>
              </div>
              
              {/* Content */}
              <div className="text-center space-y-1">
                <h3 className="text-sm md:text-base font-bold bg-gradient-to-r from-white via-cyan-50 to-blue-50 bg-clip-text text-transparent leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {achievement.metric}
                </p>
              </div>
              
              {/* Enhanced Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
              
              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto px-8 md:px-12">
          <div 
            className="relative overflow-hidden rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 pt-2 pb-4 px-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 relative">
                    {/* Review Screenshot Container - Fixed aspect ratio */}
                    <div className="aspect-[16/10] relative">
                      <div className="absolute inset-0 rounded-lg overflow-hidden border border-slate-600/50 bg-slate-800/50">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.alt}
                          fill
                          className="object-contain p-2"
                          quality={100}
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 768px"
                        />
                      </div>
                      
                      {/* Platform Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <div className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30 backdrop-blur-sm">
                          Fiverr Review
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Fixed positioning */}
            <button 
              onClick={prevSlide}
              className="absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 bg-slate-800/95 hover:bg-slate-700/95 text-white p-2.5 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-600/50 z-30 shadow-xl hover:shadow-cyan-500/20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 bg-slate-800/95 hover:bg-slate-700/95 text-white p-2.5 md:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-slate-600/50 z-30 shadow-xl hover:shadow-cyan-500/20"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-1.5 mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-6 bg-gradient-to-r from-cyan-400 to-blue-500"
                      : "bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;