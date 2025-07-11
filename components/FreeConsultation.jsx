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
    window.open('mailto:devincicodes.official@gmail.com?subject=Free Consultation Request', '_self'); // Replace with your email
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {/* Futuristic Consultation Button */}
      <button
        onClick={handleBookMeeting}
        className="group relative px-6 py-3 bg-cyber-cyan hover:bg-cyber-white text-pure-black font-bold rounded-lg shadow-xl hover:shadow-neon-cyan transition-all duration-500 hover:scale-105 transform overflow-hidden border border-cyber-cyan/50 hover:border-cyber-cyan font-inter"
      >
        {/* Clean background transition */}
        <div className="absolute inset-0 bg-cyber-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        
        {/* Content Container */}
        <div className="relative flex items-center gap-2 z-10">
          <div className="relative">
            <FontAwesomeIcon 
              icon={faCalendar} 
              className="text-base group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" 
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-base font-bold tracking-wide">Book Free Consultation</span>
            <span className="text-xs opacity-90 font-medium">30 min • No commitment</span>
          </div>
        </div>
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12 rounded-lg" />
        
        {/* Minimal corner accent */}
        <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-pure-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};

export default FreeConsultation;