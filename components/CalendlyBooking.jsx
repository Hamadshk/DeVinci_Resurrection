import React, { useEffect } from 'react';

const CalendlyBooking = ({ url = 'https://calendly.com/devincicodes-official/salesaura' }) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-section py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a free consultation to discuss how AI can revolutionize your operations
            </p>
          </div>

          {/* Calendly Inline Widget */}
          <div className="animate-on-scroll professional-card p-4">
            <div
              className="calendly-inline-widget"
              data-url={url}
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>

          {/* Alternative CTA */}
          <div className="mt-8 text-center animate-on-scroll">
            <p className="text-gray-600 mb-4">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:devincicodes.official@gmail.com"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyBooking;
