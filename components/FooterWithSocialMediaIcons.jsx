'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logoImg from "../assets/logoFinal.png";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function FooterWithSocialMediaIcons() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Ensure footer renders after main content
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoaded) {
        return null;
    }

    return (
        <footer className="bg-pure-black border-t border-cyber-cyan/30 opacity-0 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {/* Background grid */}
            <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-10" />
            
            {/* Geometric corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyber-cyan opacity-20" />
            <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-cyber-cyan opacity-20" />
            
            <div className="max-w-screen-xl mx-auto px-4 py-16 lg:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="relative bg-cyber-cyan backdrop-blur-sm rounded-lg p-2 border border-cyber-cyan/50">
                                    <Image
                                        alt="DeVinci Codes"
                                        src={logoImg}
                                        width={150}
                                        height={32}
                                        className="h-8 w-auto"
                                    />
                                </div>
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                            </div>
                        </div>
                        <p className="text-cyber-white text-lg mb-4 font-medium font-inter">
                            Your vision, our code
                        </p>
                        <p className="text-cyber-white/80 mb-6 leading-relaxed font-inter">
                            DeVinci Codes is devoted to providing innovative digital solutions that drive transformation 
                            and create exceptional user experiences. We bridge the gap between ideas and reality.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-cyber-white/80">
                                <FontAwesomeIcon 
                                    icon={faMapMarkerAlt} 
                                    className="text-cyber-cyan" 
                                    style={{ width: '14px', height: '14px' }}
                                />
                                <span className="font-inter">Johar Town, Lahore, Punjab, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-3 text-cyber-white/80">
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    className="text-cyber-cyan"
                                    style={{ width: '14px', height: '14px' }}
                                />
                                <a href="mailto:devincicodes.official@gmail.com" className="hover:text-cyber-cyan transition-colors font-inter">
                                    devincicodes.official@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-cyber-white font-semibold text-lg mb-6 flex items-center space-x-2 font-inter">
                            <div className="w-6 h-6 bg-cyber-cyan rounded-lg flex items-center justify-center">
                                <span className="text-pure-black text-sm">🔗</span>
                            </div>
                            <span>Quick Links</span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "https://devincicodes.com", label: "Home" },
                                { href: "#about", label: "About" },
                                { href: "#skills", label: "Services" },
                                { href: "#companies", label: "Our Clients" },
                                { href: "#vision", label: "Our Vision" },
                                { href: "#contact", label: "Contact" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-cyber-white/80 hover:text-cyber-cyan transition-colors duration-200 flex items-center space-x-2 group font-inter"
                                    >
                                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full group-hover:scale-125 transition-transform" />
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-cyber-white font-semibold text-lg mb-6 flex items-center space-x-2 font-inter">
                            <div className="w-6 h-6 bg-cyber-cyan rounded-lg flex items-center justify-center">
                                <span className="text-pure-black text-sm">🌐</span>
                            </div>
                            <span>Follow Us</span>
                        </h3>
                        <ul className="space-y-3 mb-6">
                            {[
                                { href: "https://www.instagram.com/devincicodes/", label: "Instagram", icon: faInstagram },
                                { href: "https://www.linkedin.com/company/devincicodes/", label: "LinkedIn", icon: faLinkedin },
                                { href: "https://www.fiverr.com/devinci_codes", label: "Fiverr" },
                                { href: "https://www.upwork.com/freelancers/~01e772708606ade468", label: "Upwork" },
                            ].map((social, index) => (
                                <li key={index}>
                                    <a 
                                        href={social.href} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyber-white/80 hover:text-cyber-cyan transition-colors duration-200 flex items-center space-x-2 group font-inter"
                                    >
                                        <div className="w-1.5 h-1.5 bg-cyber-cyan rounded-full group-hover:scale-125 transition-transform" />
                                        <span>{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[
                                { href: "https://www.instagram.com/devincicodes/", icon: faInstagram, color: "hover:text-cyber-cyan" },
                                { href: "https://www.linkedin.com/company/devincicodes/", icon: faLinkedin, color: "hover:text-cyber-cyan" },
                                { href: "https://www.facebook.com/profile.php?id=61552020426746", icon: faFacebook, color: "hover:text-cyber-cyan" },
                                { href: "https://twitter.com/devincicodes", icon: faTwitter, color: "hover:text-cyber-cyan" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-glass-black border border-glass-white rounded-lg flex items-center justify-center text-cyber-white/80 ${social.color} transition-all duration-200 hover:border-cyber-cyan`}
                                >
                                    <FontAwesomeIcon 
                                        icon={social.icon} 
                                        className="text-lg"
                                        style={{ width: '16px', height: '16px' }}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-cyber-cyan/30 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-2 text-cyber-white/80 mb-4 md:mb-0 font-inter">
                            <span>&copy; 2023 - {new Date().getFullYear()}</span>
                            <a 
                                href="https://devinci.codes" 
                                className="text-cyber-cyan font-semibold hover:text-cyber-white transition-all duration-200"
                            >
                                DeVinci Codes™
                            </a>
                            <span>• All rights reserved</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-cyber-white/60 font-inter">
                            <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse" />
                            <span>Crafted with passion in Pakistan</span>
                            <span className="text-cyber-cyan">🇵🇰</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}