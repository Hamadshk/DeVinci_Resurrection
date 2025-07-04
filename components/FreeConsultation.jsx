import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FreeConsultation = ({ className = "" }) => {
  const handleBookMeeting = () => {
    // Updated with your actual Calendly booking link
    window.open('https://calendly.com/devincicodes-official/30min', '_blank');
  };

  const handleCallNow = () => {
    window.open('tel:+1234567890', '_self'); // Replace with your actual phone number
  };

  const handleEmail = () => {
    window.open('mailto:your-email@example.com?subject=Free Consultation Request', '_self'); // Replace with your email
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Enhanced Rounded Consultation Button - Smaller Size */}
      <button
        onClick={handleBookMeeting}
        className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105 transform overflow-hidden border border-cyan-400/30 hover:border-cyan-300/60"
      >
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
        
        {/* Pulsing Ring Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500 animate-pulse"></div>
        
        {/* Content Container */}
        <div className="relative flex items-center gap-2 z-10">
          <div className="relative">
            <FontAwesomeIcon 
              icon={faCalendar} 
              className="text-base group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" 
            />
            <div className="absolute -inset-0.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-base font-bold tracking-wide">Book Free Consultation</span>
            <span className="text-xs text-cyan-100 opacity-90 font-medium">30 min • No commitment</span>
          </div>
        </div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12 rounded-full"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full">
          <div className="absolute top-2 left-4 w-0.5 h-0.5 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-4 right-5 w-0.5 h-0.5 bg-cyan-200 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-2 left-6 w-0.5 h-0.5 bg-purple-200 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      </button>
    </div>
  );
};

export default FreeConsultation;