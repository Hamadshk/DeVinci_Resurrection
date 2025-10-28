import { lazy, Suspense, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { initPerformanceOptimizations } from "../utils/performanceOptimizer";

const Header = lazy(() => import("../components/Header"));
const SkillsPage = lazy(() => import("../components/SkillsPage"));
const VerticalTimeline = lazy(() => import("../components/VerticalTimeline"));
const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));
const CompaniesCarousel = lazy(() => import("../components/CompaniesCarousel"));
const Goals = lazy(() => import("../components/Goals"));
const TestimonialsCarousel = lazy(() => import("../components/TestimonialsCarousel"));
const FreeConsultation = lazy(() => import("../components/FreeConsultation"));
const Portfolio = lazy(() => import("../components/Portfolio"));

// Import components dynamically to avoid SSR issues
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: false });

// Updated loading spinner for black theme
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-16 bg-pure-black">
    <div className="w-8 h-8 border-2 border-glass-white border-t-cyber-cyan rounded-full animate-spin"></div>
    <span className="ml-3 text-cyber-white text-sm font-inter">Loading...</span>
  </div>
);

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const myRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    // Initialize performance optimizations immediately
    initPerformanceOptimizations();
    
    // Ensure all critical components are loaded before showing content
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 100); // Reduced from 150ms for faster loading

    return () => clearTimeout(timer);
  }, []);

  // Highly optimized intersection observer options for better performance
  const observerOptions = useMemo(() => ({
    root: null,
    threshold: 0.05, // Lower threshold for even earlier loading
    triggerOnce: true,
    rootMargin: '150px 0px', // Larger margin for pre-loading
  }), []);

  // Consolidated intersection observers with performance optimization
  const [aboutRef, aboutInView] = useInView(observerOptions);
  const [skillsRef, skillsInView] = useInView(observerOptions);
  const [timelineRef, timelineInView] = useInView(observerOptions);
  const [contactRef, contactInView] = useInView(observerOptions);
  const [portfolioRef, portfolioInView] = useInView(observerOptions);
  const [goalsRef, goalsInView] = useInView(observerOptions);

  if (!mounted || isInitialLoading) {
    return (
      <div className="min-h-screen bg-pure-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-glass-white border-t-cyber-cyan rounded-full animate-spin"></div>
          <span className="text-cyber-white text-sm mt-2 font-inter">Preparing your experience...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>DeVinci Codes - AI & Automation Solutions</title>
        <meta name="description" content="Professional AI and automation solutions for modern businesses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preload and optimize Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet"
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <div 
        className="bg-pure-black min-h-screen opacity-0 animate-fade-in"
        style={{
          // Optimize for smooth scrolling with hardware acceleration
          WebkitOverflowScrolling: 'touch',
          overflowY: 'auto',
          animationDelay: '0.1s',
          animationFillMode: 'forwards',
          transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
          backfaceVisibility: 'hidden',
        }}
      >
      <section 
        ref={myRef} 
        className="home-page h-screen relative overflow-hidden bg-pure-black"
        style={{
          // Optimize hero section with hardware acceleration
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Futuristic grid background */}
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20" />
        
        {/* Geometric corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan opacity-30" />
        <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan opacity-30" />

        <div className="relative z-10">
          <NavBar />
          <section 
            className="pt-20 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6 flex flex-col items-center justify-center gap-8" 
            style={{ 
              minHeight: 'calc(100vh - 80px)',
            }}
          >
            <Header />
            <Suspense fallback={<LoadingSpinner />}>
              <FreeConsultation className="mt-8" />
            </Suspense>
          </section>
        </div>
      </section>

      {/* Main Content Sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="about"
          ref={aboutRef}
          className="flex justify-center py-8 items-center px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <About inView={aboutInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="skills" 
          ref={skillsRef} 
          className="py-8"
        >
          <SkillsPage inView={skillsInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section 
          id="testimonials" 
          className="py-8"
        >
          <TestimonialsCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="companies"
          ref={portfolioRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <CompaniesCarousel />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="portfolio"
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Portfolio inView={portfolioInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="contact"
          ref={contactRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Contact inView={contactInView} />
        </section>
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <section
          id="vision"
          ref={goalsRef}
          className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        >
          <Goals inView={goalsInView} />
        </section>
      </Suspense>
    </div>
    </>
  );
};

export default Home;