'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logoImg from "../assets/logoFinal.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes, faRocket, faCog, faBrain } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id || 'home');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.6,
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const navItems = [
        { href: '/', label: 'Home', id: 'home', icon: faBrain },
        { href: '#about', label: 'About', id: 'about', icon: faRocket },
        { href: '#skills', label: 'Services', id: 'skills', icon: faCog },
        { href: '#portfolio', label: 'Portfolio', id: 'portfolio', icon: faBrain },
        { href: '/projects', label: 'Projects', id: 'projects', icon: faRocket },
        { href: '#vision', label: 'Vision', id: 'vision', icon: faCog },
    ];
    
    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-pure-black/95 backdrop-blur-cyber border-b border-cyber-cyan/20' 
                    : 'bg-transparent'
            }`}>
                {/* Minimalist grid background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10" />
                </div>

                {/* Clean top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-cyber-cyan/30" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                {/* Clean logo container */}
                                <div className="relative bg-white backdrop-blur-sm rounded-lg p-1 border border-cyber-cyan/30 group-hover:border-cyber-cyan/60 transition-all duration-300">
                                    <Image
                                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                                        alt="DeVinci Codes Logo"
                                        width={200}
                                        height={40}
                                        src={logoImg}
                                        priority
                                    />
                                </div>
                                {/* Subtle corner accent */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-cyan rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                const isExternalOrHash = item.href.startsWith('#') || item.href.startsWith('/');
                                
                                return (
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'text-cyber-cyan border border-cyber-cyan/50'
                                            : 'text-cyber-white hover:text-cyber-cyan border border-transparent hover:border-cyber-cyan/30'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Clean background */}
                                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'bg-cyber-cyan/10'
                                            : 'bg-transparent group-hover:bg-cyber-cyan/5'
                                    }`} />
                                    
                                    {/* Icon and Text */}
                                    <div className="relative flex items-center space-x-2">
                                        <FontAwesomeIcon 
                                            icon={item.icon} 
                                            className={`text-sm transition-all duration-300 ${
                                                activeSection === item.id || router.pathname === item.href
                                                    ? 'text-cyber-cyan'
                                                    : 'group-hover:text-cyber-cyan'
                                            }`}
                                        />
                                        <span className="font-medium tracking-wide font-inter">{item.label}</span>
                                    </div>

                                    {/* Minimal underline */}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'w-full bg-cyber-cyan'
                                            : 'w-0 group-hover:w-full bg-cyber-cyan'
                                    }`} />
                                </Link>
                                );
                            })}
                        </div>

                        {/* Contact Button */}
                        <div className="flex items-center space-x-4">
                            <a href="#contact" className="relative group">
                                <button className="relative px-6 py-3 bg-pure-black border-2 border-cyber-cyan text-cyber-cyan font-semibold rounded-lg transition-all duration-300 group-hover:bg-cyber-cyan group-hover:text-pure-black font-inter">
                                    <div className="flex items-center space-x-2">
                                        <FontAwesomeIcon 
                                            icon={faPhone} 
                                            className="text-sm" 
                                        />
                                        <span className="hidden sm:inline">Contact</span>
                                    </div>
                                </button>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden relative p-2 rounded-lg bg-pure-black border border-cyber-cyan/30 text-cyber-cyan hover:text-cyber-white hover:border-cyber-cyan/50 transition-all duration-300"
                            >
                                <FontAwesomeIcon 
                                    icon={isMenuOpen ? faTimes : faBars} 
                                    className="text-lg transition-transform duration-300" 
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-pure-black/95 backdrop-blur-cyber"
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Mobile Menu Content */}
                <div className="absolute top-0 right-0 w-80 h-full bg-pure-black border-l border-cyber-cyan/30 p-6">
                    <div className="flex flex-col space-y-4 mt-20">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                                    activeSection === item.id || router.pathname === item.href
                                        ? 'text-cyber-cyan border border-cyber-cyan/50 bg-cyber-cyan/10'
                                        : 'text-cyber-white hover:text-cyber-cyan border border-transparent hover:border-cyber-cyan/30'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FontAwesomeIcon 
                                    icon={item.icon} 
                                    className="text-lg"
                                />
                                <span className="font-medium font-inter">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}