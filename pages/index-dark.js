import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SEOHead from '../components/SEOHead';
import ProfessionalLoader from '../components/ProfessionalLoader';

// Dynamic imports for better performance
const AIVoiceReceptionistCalculator = dynamic(() => import('../components/AIVoiceReceptionistCalculator'), { ssr: false });
const AIAutomationCalculator = dynamic(() => import('../components/AIAutomationCalculator'), { ssr: false });
const CalendlyBooking = dynamic(() => import('../components/CalendlyBooking'), { ssr: false });
const OptimizedPDFViewer = dynamic(() => import('../components/OptimizedPDFViewer'), { ssr: false });

const DarkHomePage = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return <ProfessionalLoader />;
  }

  return (
    <>
      <SEOHead
        title="DeVinci Codes - AI & Automation Solutions"
        description="Transform your business with cutting-edge AI and automation solutions. Calculate ROI, save time, and increase revenue."
      />

      <div className="min-h-screen bg-dark">
        {/* Hero Section - Dark Blue with Red Accents */}
        <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-96 h-96 bg-red/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
            <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Heading */}
              <div className="animate-on-scroll mb-8">
                <h1 className="text-gradient mb-6 leading-tight">
                  Transform Your Business with AI
                </h1>
                <p className="text-xl md:text-2xl text-light-gray mb-8 max-w-3xl mx-auto">
                  Cutting-edge <span className="text-primary font-bold">AI solutions</span> and{' '}
                  <span className="text-secondary-light font-bold">automation</span> to revolutionize your operations
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <button className="btn-primary text-lg px-8 py-4 glow-red">
                  Get Started Now
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 mt-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
                <div className="professional-card p-6 text-center glow-blue">
                  <div className="text-5xl font-bold text-gradient mb-2">300%</div>
                  <div className="text-light-gray">Average ROI</div>
                </div>
                <div className="professional-card p-6 text-center">
                  <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-light-gray">AI Support</div>
                </div>
                <div className="professional-card p-6 text-center glow-blue">
                  <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-light-gray">Businesses Served</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-darker-section">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful <span className="text-gradient">AI Solutions</span>
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                Choose from our suite of AI-powered tools designed to save time and increase revenue
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="professional-card p-8 text-center group hover:glow-red animate-on-scroll">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Voice Receptionist</h3>
                <p className="text-light-gray mb-6">
                  Never miss a call with our 24/7 AI-powered voice receptionist. Handle customer inquiries automatically.
                </p>
                <div className="text-primary font-semibold">Learn More →</div>
              </div>

              {/* Feature 2 */}
              <div className="professional-card p-8 text-center group hover:glow-blue animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
                <p className="text-light-gray mb-6">
                  Automate repetitive tasks and save hours of manual work every day with intelligent workflows.
                </p>
                <div className="text-secondary-light font-semibold">Learn More →</div>
              </div>

              {/* Feature 3 */}
              <div className="professional-card p-8 text-center group hover:glow-red animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Custom AI Solutions</h3>
                <p className="text-light-gray mb-6">
                  Tailored AI solutions built specifically for your business needs and workflows.
                </p>
                <div className="text-primary font-semibold">Learn More →</div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculators Section */}
        <section className="section-padding bg-navy-section">
          <div className="container-custom">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Calculate Your <span className="text-gradient">ROI</span>
              </h2>
              <p className="text-xl text-light-gray max-w-3xl mx-auto">
                See exactly how much money you're losing without AI automation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="animate-on-scroll">
                <AIVoiceReceptionistCalculator />
              </div>
              <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                <AIAutomationCalculator />
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="section-padding bg-darker-section">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by <span className="text-gradient">Industry Leaders</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="professional-card p-8 flex items-center justify-center animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="text-2xl font-bold text-muted">Company {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-navy-section relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl top-0 right-0 animate-pulse-slow"></div>
            <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-light-gray mb-8">
                Join hundreds of successful businesses that have revolutionized their operations with AI
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="btn-primary text-lg px-8 py-4 glow-red">
                  Schedule Free Consultation
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-4">DeVinci Codes</h3>
                <p className="text-muted">
                  AI & Automation solutions for the modern business.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Services</h4>
                <ul className="space-y-2 text-muted">
                  <li><a href="#" className="hover:text-primary transition-colors">AI Voice Receptionist</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">AI Automation</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Custom Solutions</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Company</h4>
                <ul className="space-y-2 text-muted">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Connect</h4>
                <ul className="space-y-2 text-muted">
                  <li><a href="mailto:devincicodes.official@gmail.com" className="hover:text-primary transition-colors">Email</a></li>
                  <li><a href="https://calendly.com/devincicodes-official/salesaura" className="hover:text-primary transition-colors">Book Call</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-accent pt-8 text-center text-muted">
              <p>&copy; {new Date().getFullYear()} DeVinci Codes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DarkHomePage;
