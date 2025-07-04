'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logoImg from "../assets/logoFinal.png";

export default function FooterWithSocialMediaIcons() {
    return (
        <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-700/50">
            <div className="max-w-screen-xl mx-auto px-4 py-16 lg:px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-30 blur-sm"></div>
                                <div className="relative bg-white backdrop-blur-sm rounded-full p-2 border border-cyan-500/30">
                                    <img
                                        alt="DeVinci Codes"
                                        src={logoImg}
                                        width="150"
                                        className="h-8 w-auto"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 text-lg mb-4 font-medium">
                            Your vision, our code
                        </p>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            DeVinci Codes is devoted to providing innovative digital solutions that drive transformation 
                            and create exceptional user experiences. We bridge the gap between ideas and reality.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-slate-400">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400" />
                                <span>Johar Town, Lahore, Punjab, Pakistan</span>
                            </div>
                            <div className="flex items-center space-x-3 text-slate-400">
                                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400" />
                                <a href="mailto:devincicodes.official@gmail.com" className="hover:text-cyan-300 transition-colors">
                                    devincicodes.official@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm">🔗</span>
                            </div>
                            <span>Quick Links</span>
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { href: "https://devinci.codes", label: "Home" },
                                { href: "#about", label: "About" },
                                { href: "#skills", label: "Services" },
                                { href: "#portfolio", label: "Portfolio" },
                                { href: "#vision", label: "Our Vision" },
                                { href: "#contact", label: "Contact" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform"></div>
                                        <span>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm">🌐</span>
                            </div>
                            <span>Follow Us</span>
                        </h3>
                        <ul className="space-y-3 mb-6">
                            {[
                                { href: "https://www.instagram.com/devincicodes", label: "Instagram", icon: faInstagram },
                                { href: "https://www.linkedin.com/company/devincicodes", label: "LinkedIn", icon: faLinkedin },
                                { href: "https://www.fiverr.com/devinci_codes", label: "Fiverr" },
                                { href: "https://www.upwork.com/freelancers/~01e772708606ade468", label: "Upwork" },
                            ].map((social, index) => (
                                <li key={index}>
                                    <a 
                                        href={social.href} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-cyan-300 transition-colors duration-200 flex items-center space-x-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-125 transition-transform"></div>
                                        <span>{social.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            {[
                                { href: "https://www.instagram.com/devincicodes", icon: faInstagram, color: "hover:text-pink-400" },
                                { href: "https://www.linkedin.com/company/devincicodes", icon: faLinkedin, color: "hover:text-blue-400" },
                                { href: "https://www.facebook.com/profile.php?id=61552020426746", icon: faFacebook, color: "hover:text-blue-500" },
                                { href: "https://twitter.com/devincicodes", icon: faTwitter, color: "hover:text-sky-400" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 bg-slate-800/50 border border-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25`}
                                >
                                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700/50 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
                            <span>&copy; 2023 - {new Date().getFullYear()}</span>
                            <a 
                                href="https://devinci.codes" 
                                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold hover:from-cyan-300 hover:to-blue-400 transition-all duration-200"
                            >
                                DeVinci Codes™
                            </a>
                            <span>• All rights reserved</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span>Crafted with passion in Pakistan</span>
                            <span className="text-green-400">🇵🇰</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}