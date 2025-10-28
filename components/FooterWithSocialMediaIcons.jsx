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
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 opacity-0 animate-fade-in relative overflow-hidden" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>
            
            <div className="max-w-screen-xl mx-auto px-4 py-16 lg:px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative bg-white rounded-lg p-2 shadow-lg">
                                <Image
                                    alt="DeVinci Codes"
                                    src={logoImg}
                                    width={150}
                                    height={32}
                                    className="h-8 w-auto"
                                />
                            </div>
                        </div>
                        <p className="text-white text-lg mb-4 font-semibold font-inter">
                            Your vision, our code
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed font-inter">
                            DeVinci Codes is devoted to providing innovative digital solutions that drive transformation
                            and create exceptional user experiences. We bridge the gap between ideas and reality.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="text-blue-400"
                                    style={{ width: '14px', height: '14px' }}
                                />
                                <span className="font-inter">Johar Town, Lahore, Punjab, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-300">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-blue-400"
                                    style={{ width: '14px', height: '14px' }}
                                />
                                <a href="mailto:team@devincicodes.com" className="hover:text-blue-400 transition-colors font-inter">
                                    team@devincicodes.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-inter">
                            Quick Links
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
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group font-inter"
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-125 transition-transform" />
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 font-inter">
                            Follow Us
                        </h3>
                        <ul className="space-y-3 mb-6">
                            {[
                                { href: "https://www.instagram.com/devincicodes/", label: "Instagram" },
                                { href: "https://www.linkedin.com/company/devincicodes/", label: "LinkedIn" },
                                { href: "https://www.fiverr.com/devinci_codes", label: "Fiverr" },
                                { href: "https://www.upwork.com/freelancers/~01e772708606ade468", label: "Upwork" },
                            ].map((social, index) => (
                                <li key={index}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group font-inter"
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-125 transition-transform" />
                                        <span>{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[
                                { href: "https://www.instagram.com/devincicodes/", icon: faInstagram },
                                { href: "https://www.linkedin.com/company/devincicodes/", icon: faLinkedin },
                                { href: "https://www.facebook.com/profile.php?id=61552020426746", icon: faFacebook },
                                { href: "https://twitter.com/devincicodes", icon: faTwitter },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-200 hover:border-blue-400 hover:bg-gray-600"
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
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0 font-inter">
                            <span>&copy; 2023 - {new Date().getFullYear()}</span>
                            <a
                                href="https://devinci.codes"
                                className="text-blue-400 font-semibold hover:text-white transition-all duration-200"
                            >
                                DeVinci Codes™
                            </a>
                            <span>• All rights reserved</span>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-400 font-inter">
                            <span>Crafted with passion in Pakistan</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}