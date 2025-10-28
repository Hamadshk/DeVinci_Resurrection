import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import SEOHead from '../components/SEOHead';
import ProfessionalLoader from '../components/ProfessionalLoader';

// Dynamic imports for better performance
const AIVoiceReceptionistCalculator = dynamic(() => import('../components/AIVoiceReceptionistCalculator'), { ssr: false });
const AIAutomationCalculator = dynamic(() => import('../components/AIAutomationCalculator'), { ssr: false });
const CalendlyBooking = dynamic(() => import('../components/CalendlyBooking'), { ssr: false });
const OptimizedPDFViewer = dynamic(() => import('../components/OptimizedPDFViewer'), { ssr: false });

const DemoPage = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('calculators');

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
        title="Demo - Professional AI Solutions"
        description="Explore our professional AI and automation tools. Calculate ROI, schedule consultations, and view our portfolio."
      />

      <div className="min-h-screen bg-light">
        {/* Professional Hero Section */}
        <section className="hero-gradient section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll">
              <h1 className="text-gradient mb-6">
                Transform Your Business with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover how our AI-powered solutions can save you time, reduce costs, and increase revenue.
                Use our calculators to see your potential ROI.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">
                  Get Started
                </button>
                <button className="btn-secondary">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4 py-4">
              <button
                onClick={() => setActiveTab('calculators')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'calculators'
                    ? 'bg-primary text-white shadow-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ROI Calculators
              </button>
              <button
                onClick={() => setActiveTab('booking')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'booking'
                    ? 'bg-primary text-white shadow-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Book Consultation
              </button>
              <button
                onClick={() => setActiveTab('portfolio')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'portfolio'
                    ? 'bg-primary text-white shadow-primary'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* ROI Calculators Section */}
        {activeTab === 'calculators' && (
          <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container-custom">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Calculate Your Potential Savings
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how much money you're losing without AI automation. Our calculators provide
                  real-time estimates based on your business metrics.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* AI Voice Receptionist Calculator */}
                <div className="animate-on-scroll">
                  <AIVoiceReceptionistCalculator />
                </div>

                {/* AI Automation Calculator */}
                <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                  <AIAutomationCalculator />
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mt-16 animate-on-scroll">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
                  Why Choose Our AI Solutions?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="professional-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h4>
                    <p className="text-gray-600">Deploy in hours, not months. Our solutions integrate seamlessly with your existing systems.</p>
                  </div>

                  <div className="professional-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h4>
                    <p className="text-gray-600">Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.</p>
                  </div>

                  <div className="professional-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Proven ROI</h4>
                    <p className="text-gray-600">Our clients see an average of 300% ROI within the first 6 months of implementation.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Booking Section */}
        {activeTab === 'booking' && (
          <CalendlyBooking />
        )}

        {/* Portfolio Section */}
        {activeTab === 'portfolio' && (
          <section className="section-padding">
            <div className="container-custom">
              <div className="text-center mb-12 animate-on-scroll">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Work & Achievements
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our portfolio and see the innovative solutions we've built for businesses like yours.
                </p>
              </div>

              <div className="max-w-5xl mx-auto animate-on-scroll">
                <OptimizedPDFViewer file="/portfolio.pdf" />
              </div>

              {/* Stats Section */}
              <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="text-center animate-on-scroll">
                  <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-gray-600 font-semibold">Projects Completed</div>
                </div>
                <div className="text-center animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-gray-600 font-semibold">Client Satisfaction</div>
                </div>
                <div className="text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-gray-600 font-semibold">Countries Served</div>
                </div>
                <div className="text-center animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                  <div className="text-5xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-gray-600 font-semibold">Support Available</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Revolutionize Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of successful businesses that have transformed their operations with our AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setActiveTab('booking')}
                  className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  Schedule Free Consultation
                </button>
                <button
                  onClick={() => setActiveTab('calculators')}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all"
                >
                  Calculate Your ROI
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-dark to-gray-900 text-white py-12">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">DeVinci Codes</h3>
                <p className="text-gray-400">
                  AI & Automation solutions for the modern business.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">AI Voice Receptionist</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">AI Automation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Custom AI Solutions</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="mailto:devincicodes.official@gmail.com" className="hover:text-white transition-colors">Email Us</a></li>
                  <li><a href="tel:+1234567890" className="hover:text-white transition-colors">Call Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} DeVinci Codes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DemoPage;
