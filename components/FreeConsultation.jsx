import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FreeConsultation = ({ className = "" }) => {
  const handleBookMeeting = () => {
    // You can replace this with your actual booking system URL
    // For example: Calendly, Acuity Scheduling, etc.
    window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  const handleCallNow = () => {
    window.open('tel:+1234567890', '_self'); // Replace with your actual phone number
  };

  const handleEmail = () => {
    window.open('mailto:your-email@example.com?subject=Free Consultation Request', '_self'); // Replace with your email
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 items-center justify-center ${className}`}>
      {/* Primary CTA - Book Meeting */}
      <button
        onClick={handleBookMeeting}
        className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-3">
          <FontAwesomeIcon icon={faCalendar} className="text-lg" />
          <span className="text-lg">Book Free Consultation</span>
        </div>
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
      </button>

      {/* Secondary CTAs */}
      <div className="flex gap-3">
        <button
          onClick={handleCallNow}
          className="group px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
          title="Call Now"
        >
          <FontAwesomeIcon icon={faPhone} className="text-cyan-400 group-hover:text-cyan-300" />
        </button>
        
        <button
          onClick={handleEmail}
          className="group px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-600 hover:border-cyan-500"
          title="Send Email"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 group-hover:text-cyan-300" />
        </button>
      </div>
    </div>
  );
};

export default FreeConsultation;