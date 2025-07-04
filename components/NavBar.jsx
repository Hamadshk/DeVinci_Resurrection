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
                    ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10' 
                    : 'bg-transparent'
            }`}>
                {/* Animated Background Grid */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-purple-900/5" />
                    <div 
                        className="absolute inset-0 opacity-20 animate-pulse"
                        style={{
                            backgroundImage: `
                                linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                                linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                            `,
                            backgroundSize: "30px 30px",
                            animation: "grid-flow 20s linear infinite"
                        }}
                    />
                </div>

                {/* Glowing Border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                {/* Animated Logo Glow */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full opacity-30 group-hover:opacity-60 blur-sm transition-all duration-300 animate-pulse" />
                                <div className="relative bg-white backdrop-blur-sm rounded-full p-2 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
                                    <Image
                                        className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                                        alt="DeVinci Codes Logo"
                                        width={200}
                                        height={40}
                                        src={logoImg}
                                        priority
                                    />
                                </div>
                            </div>
                            
                            {/* Animated Text */}
                            <div className="hidden md:block">
                                {/* <div className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text group-hover:from-cyan-300 group-hover:via-blue-400 group-hover:to-purple-500 transition-all duration-300">
                                    DeVinci Codes
                                </div> */}
                                {/* <div className="text-xs text-slate-400 group-hover:text-cyan-300 transition-colors duration-300 tracking-widest">
                                    AI • AUTOMATION • FUTURE
                                </div> */}
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item, index) => {
                                // Handle different link types safely
                                const isExternalOrHash = item.href.startsWith('#') || item.href.startsWith('/');
                                const linkProps = {
                                    href: item.href,
                                    key: item.id
                                };
                                
                                return (
                                <Link
                                    {...linkProps}
                                    className={`relative group px-4 py-2 rounded-xl transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'text-cyan-300'
                                            : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Animated Background */}
                                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30'
                                            : 'bg-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-purple-600/10 group-hover:border group-hover:border-cyan-500/20'
                                    }`} />
                                    
                                    {/* Icon and Text */}
                                    <div className="relative flex items-center space-x-2">
                                        <FontAwesomeIcon 
                                            icon={item.icon} 
                                            className={`text-sm transition-all duration-300 ${
                                                activeSection === item.id || router.pathname === item.href
                                                    ? 'text-cyan-400 animate-pulse'
                                                    : 'group-hover:text-cyan-400 group-hover:animate-pulse'
                                            }`}
                                        />
                                        <span className="font-medium tracking-wide">{item.label}</span>
                                    </div>

                                    {/* Animated Underline */}
                                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                                        activeSection === item.id || router.pathname === item.href
                                            ? 'w-full bg-gradient-to-r from-cyan-400 to-purple-500'
                                            : 'w-0 group-hover:w-full bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500'
                                    }`} />
                                </Link>
                                );
                            })}
                        </div>

                        {/* Contact Button */}
                        <div className="flex items-center space-x-4">
                            <a href="#contact" className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-all duration-300 animate-pulse" />
                                <button className="relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25 border border-cyan-500/30">
                                    <div className="flex items-center space-x-2">
                                        <FontAwesomeIcon 
                                            icon={faPhone} 
                                            className="text-sm animate-bounce group-hover:animate-pulse" 
                                        />
                                        <span className="hidden sm:inline">Contact AI</span>
                                        <span className="sm:hidden">AI</span>
                                    </div>
                                    {/* Animated Background Particles */}
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>
                                </button>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden relative p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300"
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
                    className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
                    onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Content */}
                <div className={`absolute top-20 left-0 right-0 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-500 ${
                    isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10" />
                        <div 
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `
                                    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                                    linear-gradient(180deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: "20px 20px"
                            }}
                        />
                    </div>

                    <div className="relative p-6 space-y-4">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block group transition-all duration-300 ${
                                    isMenuOpen ? 'animate-slideInUp' : ''
                                }`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                                    activeSection === item.id || router.pathname === item.href
                                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-300'
                                        : 'text-slate-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border hover:border-cyan-500/20 hover:text-cyan-400'
                                }`}>
                                    <FontAwesomeIcon 
                                        icon={item.icon} 
                                        className={`text-lg transition-all duration-300 ${
                                            activeSection === item.id || router.pathname === item.href
                                                ? 'text-cyan-400 animate-pulse'
                                                : 'group-hover:text-cyan-400 group-hover:animate-pulse'
                                        }`}
                                    />
                                    <span className="text-lg font-medium tracking-wide">{item.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                @keyframes grid-flow {
                    0% { transform: translateX(-30px) translateY(-30px); }
                    100% { transform: translateX(0) translateY(0); }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slideInUp {
                    animation: slideInUp 0.6s ease-out forwards;
                }
            `}</style>
        </>
    );
}