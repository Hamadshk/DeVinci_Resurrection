import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SEOHead from '../components/SEOHead';

// Dynamic imports
const AIVoiceReceptionistCalculator = dynamic(() => import('../components/AIVoiceReceptionistCalculator'), { ssr: false });
const AIAutomationCalculator = dynamic(() => import('../components/AIAutomationCalculator'), { ssr: false });
const CalendlyBooking = dynamic(() => import('../components/CalendlyBooking'), { ssr: false });

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    { id: 1, image: '/images/testimonials/review_1.png', gradient: 'from-blue-500/10 to-primary/10' },
    { id: 2, image: '/images/testimonials/review_2.png', gradient: 'from-primary/10 to-secondary/10', featured: true },
    { id: 3, image: '/images/testimonials/review_3.png', gradient: 'from-green-500/10 to-primary/10' },
    { id: 4, image: '/images/testimonials/review_4.png', gradient: 'from-purple-500/10 to-primary/10' },
    { id: 5, image: '/images/testimonials/review_5.png', gradient: 'from-primary/10 to-purple-600/10', featured: true },
    { id: 6, image: '/images/testimonials/review_6.png', gradient: 'from-yellow-500/10 to-orange-500/10' },
    { id: 7, image: '/images/testimonials/review_7.png', gradient: 'from-teal-500/10 to-primary/10' },
    { id: 8, image: '/images/testimonials/review_8.png', gradient: 'from-pink-500/10 to-primary/10' },
    { id: 9, image: '/images/testimonials/review_9.png', gradient: 'from-indigo-500/10 to-primary/10' },
    { id: 10, image: '/images/testimonials/review_10.png', gradient: 'from-cyan-500/10 to-primary/10' },
    { id: 11, image: '/images/testimonials/review_11.png', gradient: 'from-emerald-500/10 to-primary/10' },
    { id: 12, image: '/images/testimonials/review_12.png', gradient: 'from-violet-500/10 to-primary/10' },
    { id: 13, image: '/images/testimonials/review_13.png', gradient: 'from-rose-500/10 to-primary/10' },
    { id: 14, image: '/images/testimonials/review_14.png', gradient: 'from-amber-500/10 to-primary/10' },
    { id: 15, image: '/images/testimonials/review_15.png', gradient: 'from-lime-500/10 to-primary/10' },
  ];

  const itemsPerView = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  };

  return (
    <div className="max-w-7xl mx-auto mb-12 relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`group bg-white/70 backdrop-blur-xl rounded-2xl p-1 hover:scale-105 transition-all duration-300 border ${testimonial.featured ? 'border-2 border-primary/50' : 'border border-gray-200/50'} hover:shadow-2xl animate-fadeInUp`}
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-xl p-6 h-full`}>
                <img
                  src={testimonial.image}
                  alt={`Client Review ${testimonial.id}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-4 rounded-full shadow-xl hover:bg-primary hover:text-white transition-all border border-gray-200/50 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-xl p-4 rounded-full shadow-xl hover:bg-primary hover:text-white transition-all border border-gray-200/50 z-10"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {[...Array(totalSlides)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx
                ? 'w-8 h-3 bg-primary'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <SEOHead
        title="DeVinci Codes - AI & Automation Solutions | Fiverr Level 2 | Upwork Top Rated"
        description="Transform your business with professional AI and automation solutions. Trusted by SMEs, Large Businesses & B2C companies worldwide."
      />

      <div className="min-h-screen bg-white">
        {/* Floating Sidebar Tags - Bookmark Style */}
        <div className="fixed right-0 top-1/4 z-40 flex flex-col gap-4">
          {/* View Portfolio Tag */}
          <a
            href="https://portfolio-showcase--06hhxbf.gamma.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-l-lg shadow-2xl hover:shadow-indigo-600/50 transition-all duration-300 hover:translate-x-0 translate-x-40"
            style={{ width: '200px' }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="font-bold text-sm">View Portfolio</div>
                <div className="text-xs opacity-90">100+ Projects</div>
              </div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            {/* Bookmark tab */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/30 rounded-l-lg"></div>
          </a>

          {/* Book Consultation Tag */}
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-primary to-blue-600 text-white rounded-l-lg shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:translate-x-0 translate-x-40"
            style={{ width: '200px' }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="font-bold text-sm">Book Consultation</div>
                <div className="text-xs opacity-90">Free 30-min call</div>
              </div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Bookmark tab */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/30 rounded-l-lg"></div>
          </a>

          {/* Talk with AI Tag */}
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-l-lg shadow-2xl hover:shadow-green-600/50 transition-all duration-300 hover:translate-x-0 translate-x-40"
            style={{ width: '200px' }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="font-bold text-sm">Talk with AI</div>
                <div className="text-xs opacity-90">Get instant answers</div>
              </div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            {/* Bookmark tab */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/30 rounded-l-lg"></div>
          </a>

          {/* SalesAura Showcase Tag */}
          <a
            href="https://www.salesaura.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-l-lg shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 hover:translate-x-0 translate-x-40"
            style={{ width: '200px' }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="font-bold text-sm">Built by Us</div>
                <div className="text-xs opacity-90">SalesAura.io</div>
                <div className="text-xs mt-1 bg-white/20 rounded px-2 py-0.5 inline-block">Visit Site →</div>
              </div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            {/* Bookmark tab */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/30 rounded-l-lg"></div>
          </a>

          {/* Career Tag */}
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-l-lg shadow-2xl hover:shadow-orange-600/50 transition-all duration-300 hover:translate-x-0 translate-x-40"
            style={{ width: '200px' }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex-1">
                <div className="font-bold text-sm">Join Our Team</div>
                <div className="text-xs opacity-90">Career Opportunities</div>
              </div>
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            {/* Bookmark tab */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-white/30 rounded-l-lg"></div>
          </a>
        </div>

        {/* Pill-Shaped Navigation */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <img
                  src="/logoFinal.png"
                  alt="DeVinci Codes Logo"
                  className="h-12 w-auto"
                />
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#services" className="text-gray-700 hover:text-primary font-medium">Services</a>
                <a href="#process" className="text-gray-700 hover:text-primary font-medium">Process</a>
                <a href="#clients" className="text-gray-700 hover:text-primary font-medium">Clients</a>
                <a href="#testimonials" className="text-gray-700 hover:text-primary font-medium">Reviews</a>
                <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact</a>
              </div>

              {/* CTA Button */}
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Spacer for fixed nav */}
        <div className="h-20"></div>

        {/* Hero Section - Optimized Size */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
          {/* Subtle Background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {/* Badges - No Blur */}
                <div className="flex flex-wrap gap-3 animate-fadeInUp">
                  <div className="group bg-white border border-green-200 rounded-full px-4 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold text-green-700 text-sm">Fiverr Level 2 Seller</span>
                  </div>
                  <div className="group bg-white border border-blue-200 rounded-full px-4 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg hover:scale-105 transition-all">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className="font-semibold text-blue-700 text-sm">Upwork Top Rated</span>
                  </div>
                </div>

                {/* Main Heading - Reduced Size */}
                <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                    Drive Tomorrow's
                    <span className="block bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
                      AI Possibilities
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Transform your business with cutting-edge AI solutions. Trusted by <span className="font-bold text-primary">SMEs, Enterprises & B2C</span> companies worldwide.
                  </p>
                </div>

                {/* CTA Buttons - Smaller */}
                <div className="flex flex-wrap gap-3 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                  <a href="#contact" className="group relative px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="relative z-10 flex items-center space-x-2 text-sm">
                      <span>Schedule Free Consultation</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                  <a href="#portfolio" className="px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-md text-sm">
                    View Portfolio
                  </a>
                </div>

                {/* Stats - Smaller */}
                <div className="grid grid-cols-3 gap-4 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                  <div className="text-center bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">100+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Projects Done</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">98%</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Satisfaction</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-4 border border-gray-200 shadow-md hover:shadow-lg transition-all">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">50+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Countries</div>
                  </div>
                </div>
              </div>

              {/* Hero Image - NO BLUR */}
              <div className="relative animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Image - Clear, No Blur */}
                  <div className="relative h-[400px] lg:h-[500px]">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                      alt="Professional AI team collaboration"
                      className="w-full h-full object-cover"
                    />

                    {/* Floating Stats Cards - NO BLUR, Keep as is */}
                    <div className="absolute top-6 right-6 bg-white rounded-xl p-3 shadow-2xl border border-gray-100 animate-float">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">98.5%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 bg-white rounded-xl p-3 shadow-2xl border border-gray-100 animate-float" style={{animationDelay: '1s'}}>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">&lt;200ms</div>
                          <div className="text-xs text-gray-600">Response Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Carousel */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="container-custom mb-8">
            <h3 className="text-center text-2xl font-bold text-gray-900 mb-2">Trusted by Industry Leaders</h3>
            <p className="text-center text-gray-600">We automate 35+ companies worldwide</p>
          </div>

          {/* Left to Right Scroll */}
          <div className="relative mb-8">
            <div className="flex space-x-16 animate-scroll">
              {[
                '/Company/Kitspire.png',
                '/Company/pxsquared_logo.jpg',
                '/Company/BVC-Logo-Baja.png',
                '/Company/TellAVision.svg',
                '/Company/Radaro.webp',
                '/Company/Cutco.jpg',
                '/Company/Falcon-Global-Consulting.jpeg',
                '/Company/Hostly.jpg',
                '/Company/Med Optimal.png',
                '/Company/Modern Engine Pros.jpg',
                '/Company/Pilot Trader.png',
                '/Company/Prestige-Bahamas.png',
                '/Company/Kitspire.png',
                '/Company/pxsquared_logo.jpg',
                '/Company/BVC-Logo-Baja.png',
                '/Company/TellAVision.svg'
              ].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-40 h-20 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
                  <img
                    src={logo}
                    alt={`Client Company ${idx + 1}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right to Left Scroll */}
          <div className="relative">
            <div className="flex space-x-16 animate-scroll-reverse">
              {[
                '/Company/Prestige-Bahamas.png',
                '/Company/Pilot Trader.png',
                '/Company/Modern Engine Pros.jpg',
                '/Company/Med Optimal.png',
                '/Company/Hostly.jpg',
                '/Company/Falcon-Global-Consulting.jpeg',
                '/Company/Cutco.jpg',
                '/Company/Radaro.webp',
                '/Company/TellAVision.svg',
                '/Company/BVC-Logo-Baja.png',
                '/Company/pxsquared_logo.jpg',
                '/Company/Kitspire.png',
                '/Company/Prestige-Bahamas.png',
                '/Company/Pilot Trader.png',
                '/Company/Modern Engine Pros.jpg'
              ].map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-40 h-20 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 border border-gray-200/50 shadow-sm hover:shadow-md transition-all">
                  <img
                    src={logo}
                    alt={`Client Company ${idx + 1}`}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Types Section */}
        <section id="clients" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                We Serve <span className="text-primary">Every Business Type</span>
              </h2>
              <p className="text-xl text-gray-600">From startups to enterprises, we have solutions for everyone</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* SMEs */}
              <div className="professional-card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                    alt="Small and Medium Enterprises"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">SMEs</h3>
                  <p className="text-gray-600 mb-6">
                    Small and Medium Enterprises looking to scale with AI automation
                  </p>
                  <ul className="text-left text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Cost-effective solutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Quick implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Scalable systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Large Enterprises */}
              <div className="professional-card overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-primary">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Large Enterprises"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Enterprises</h3>
                  <p className="text-gray-600 mb-6">
                    Enterprise-grade AI solutions for complex business needs
                  </p>
                  <ul className="text-left text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Custom AI development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Enterprise security</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Dedicated team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>SLA guarantees</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* B2C Companies */}
              <div className="professional-card overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&q=80"
                    alt="B2C Companies"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">B2C Companies</h3>
                  <p className="text-gray-600 mb-6">
                    Consumer-facing AI solutions that delight your customers
                  </p>
                  <ul className="text-left text-gray-600 space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Customer AI chatbots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Voice assistants</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Personalization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>CRM integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Flow/Process Section - Futuristic Design */}
        <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Project Flow</span>
              </h2>
              <p className="text-xl text-gray-600">From idea to production - A seamless journey</p>
            </div>

            {/* Horizontal Flow with Animated Lines */}
            <div className="relative max-w-6xl mx-auto">
              {/* Animated Connection Line */}
              <div className="hidden lg:block absolute top-20 left-0 right-0 h-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>
                <div className="process-line-animate absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              </div>

              {/* Steps Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">

                {/* Step 1: Meeting */}
                <div className="process-step group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-primary rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <span className="text-4xl font-bold text-white">1</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
                      <svg className="w-14 h-14 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting</h3>
                      <p className="text-sm text-gray-600">Discovery call to understand your needs</p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Deliverable */}
                <div className="process-step group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-secondary rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <span className="text-4xl font-bold text-white">2</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-red-400 to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
                      <svg className="w-14 h-14 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Deliverable</h3>
                      <p className="text-sm text-gray-600">Detailed plan and timeline</p>
                    </div>
                  </div>
                </div>

                {/* Step 3: MVP */}
                <div className="process-step group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <span className="text-4xl font-bold text-white">3</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
                      <svg className="w-14 h-14 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">MVP</h3>
                      <p className="text-sm text-gray-600">Build minimum viable product</p>
                    </div>
                  </div>
                </div>

                {/* Step 4: Testing */}
                <div className="process-step group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <span className="text-4xl font-bold text-white">4</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
                      <svg className="w-14 h-14 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Testing</h3>
                      <p className="text-sm text-gray-600">Rigorous QA and testing</p>
                    </div>
                  </div>
                </div>

                {/* Step 5: Production */}
                <div className="process-step group">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <span className="text-4xl font-bold text-white">5</span>
                      </div>
                      <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full border-2 border-primary">
                      <svg className="w-14 h-14 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Production</h3>
                      <p className="text-sm text-gray-600">Launch and ongoing support</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Our Solutions Section - Comprehensive */}
        <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h3 className="text-primary font-semibold text-sm mb-2">Our Solutions</h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Cutting-Edge AI Solutions
              </h2>
              <p className="text-lg text-gray-900 font-semibold mb-2">
                Built for Enterprise Scale
              </p>
              <p className="text-base text-gray-600 max-w-4xl mx-auto">
                Transform your business with our comprehensive AI platform that combines voice intelligence, automation, and predictive analytics to deliver unprecedented results and operational efficiency.
              </p>
            </div>

            {/* Solution Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-6 mt-12">

              {/* AI Voice Agents */}
              <div className="professional-card p-6 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Voice Agents</h3>
                <p className="text-base text-gray-600 mb-3">Human-like conversations that convert</p>
                <p className="text-sm text-gray-600 mb-4">
                  Deploy sophisticated AI voice agents that handle customer interactions with natural conversation flow, reducing response times by 90% while maintaining personalization.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">98.5%</div>
                    <div className="text-xs text-gray-600">accuracy</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">&lt;200ms</div>
                    <div className="text-xs text-gray-600">response</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">4.8/5</div>
                    <div className="text-xs text-gray-600">satisfaction</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Natural Language Understanding
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Multi-language Support (50+ languages)
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Emotional Intelligence Detection
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Real-time Sentiment Analysis
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Custom Voice Cloning
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Advanced Call Analytics
                  </li>
                </ul>

                <button className="btn-primary w-full">Learn More</button>
              </div>

              {/* Intelligent Automation */}
              <div className="professional-card p-6 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Intelligent Automation</h3>
                <p className="text-base text-gray-600 mb-3">End-to-end process automation</p>
                <p className="text-sm text-gray-600 mb-4">
                  Transform your workflows with AI-powered automation that learns, adapts, and optimizes operations autonomously, eliminating manual tasks and reducing operational costs.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-gray-600">efficiency</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">$2.3M</div>
                    <div className="text-xs text-gray-600">savings</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-gray-600">uptime</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Smart Process Mining
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Predictive Task Scheduling
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    API-First Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Self-Learning Algorithms
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Exception Handling
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Compliance Automation
                  </li>
                </ul>

                <button className="btn-primary w-full">Learn More</button>
              </div>

              {/* Marketing Intelligence */}
              <div className="professional-card p-6 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Marketing Intelligence</h3>
                <p className="text-base text-gray-600 mb-3">Data-driven growth acceleration</p>
                <p className="text-sm text-gray-600 mb-4">
                  Leverage AI-powered marketing intelligence to identify high-value prospects, optimize campaigns in real-time, and deliver personalized experiences at scale.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">340%</div>
                    <div className="text-xs text-gray-600">conversion</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">12x</div>
                    <div className="text-xs text-gray-600">roi</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-purple-600">+180%</div>
                    <div className="text-xs text-gray-600">engagement</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Predictive Lead Scoring
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Dynamic Content Optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Cross-Channel Attribution
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Behavioral Segmentation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Campaign ROI Optimization
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Automated A/B Testing
                  </li>
                </ul>

                <button className="btn-primary w-full">Learn More</button>
              </div>

              {/* Lead Generation & Scraping */}
              <div className="professional-card p-6 hover:shadow-2xl border-2 border-primary">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lead Generation & Scraping</h3>
                <p className="text-base text-gray-600 mb-3">Automated prospect discovery at scale</p>
                <p className="text-sm text-gray-600 mb-4">
                  Harness powerful data extraction tools like Apollo, ZoomInfo, Apify, and Outscraper to build comprehensive lead databases. Automate entire workflows with n8n integration for continuous prospect enrichment.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-xl font-bold text-secondary">10K+/mo</div>
                    <div className="text-xs text-gray-600">leads</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-secondary">95%</div>
                    <div className="text-xs text-gray-600">accuracy</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-xs text-gray-600">automation</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 text-gray-700 mb-4 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Apollo.io Integration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    ZoomInfo Data Enrichment
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Apify Web Scraping
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Outscraper Automation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    n8n Workflow Orchestration
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    Real-time Data Validation
                  </li>
                </ul>

                <button className="btn-primary w-full">Learn More</button>
              </div>
            </div>

            {/* Built on Advanced Technology Section */}
            <div className="mt-20">
              <h3 className="text-center text-3xl font-bold text-gray-900 mb-12">
                Built on Advanced Technology
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Machine Learning */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Machine Learning</h4>
                  <p className="text-gray-600">
                    Advanced ML models that continuously learn and improve from your data
                  </p>
                </div>

                {/* Enterprise Security */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h4>
                  <p className="text-gray-600">
                    Bank-grade security with SOC2, GDPR, and CCPA compliance
                  </p>
                </div>

                {/* Real-time Processing */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Real-time Processing</h4>
                  <p className="text-gray-600">
                    Sub-second response times with 99.9% uptime guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculators */}
        <section id="calculators" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calculate Your <span className="text-primary">ROI</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See exactly how much you could save with AI automation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <AIVoiceReceptionistCalculator />
              <AIAutomationCalculator />
            </div>
          </div>
        </section>

        {/* Testimonials Section - Futuristic with Real Reviews */}
        <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Futuristic Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-semibold text-sm">CLIENT SUCCESS STORIES</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                What Our <span className="text-primary">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real reviews from businesses worldwide who trust DeVinci Codes
              </p>
            </div>

            {/* Testimonials Carousel - All 15 Reviews */}
            <TestimonialsCarousel />

            {/* More Reviews */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Rated <span className="font-bold text-primary">4.9/5</span> from 500+ reviews</p>
              <div className="flex justify-center gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg px-6 py-3">
                  <div className="font-bold text-green-700">Fiverr: 4.9★</div>
                  <div className="text-sm text-green-600">Level 2 Seller</div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
                  <div className="font-bold text-blue-700">Upwork: 100%</div>
                  <div className="text-sm text-blue-600">Top Rated Plus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio/PDF Section */}
        <section id="portfolio" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-primary">Portfolio</span>
              </h2>
              <p className="text-xl text-gray-600">
                Explore our work and achievements
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Portfolio Showcase Card */}
              <div className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 p-12">
                <div className="text-center space-y-8">
                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      View Our Interactive Portfolio
                    </h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                      Explore our comprehensive portfolio showcasing 100+ successful projects, client testimonials,
                      and innovative AI solutions that have transformed businesses worldwide.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <div className="text-3xl font-bold text-primary">100+</div>
                        <div className="text-sm text-gray-600 mt-1">Projects</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <div className="text-3xl font-bold text-primary">35+</div>
                        <div className="text-sm text-gray-600 mt-1">Companies</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <div className="text-sm text-gray-600 mt-1">Countries</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href="https://portfolio-showcase--06hhxbf.gamma.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <span>View Full Portfolio</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>

                    <p className="text-sm text-gray-500 mt-4">Opens in new tab</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Calendly */}
        <section id="contact" className="section-padding bg-gray-50">
          <div className="container-custom">
            <CalendlyBooking />
          </div>
        </section>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default HomePage;
