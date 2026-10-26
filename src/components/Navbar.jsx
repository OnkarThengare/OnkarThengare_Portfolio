import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowRight, FileText } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ isDark, toggleTheme, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-[#0E0E16]/90 backdrop-blur-md border-b border-gray-200/80 dark:border-[#2A2A3A] shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Matching Image 3 */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="cursor-pointer"
          aria-label="Onkar Thengare Home"
        >
          <BrandLogo size="normal" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/70 dark:bg-[#15151F]/70 p-1.5 rounded-full border border-gray-200/60 dark:border-[#2A2A3A]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-[#241F3D] text-purple-600 dark:text-purple-300 shadow-sm font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle, Resume Button, & Let's Talk CTA */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 dark:border-[#2A2A3A] bg-white dark:bg-[#1B1B28] text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-sm cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button (Opens Resume view modal - Download button is shown inside the resume view!) */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-semibold bg-white dark:bg-[#1B1B28] hover:bg-gray-50 dark:hover:bg-[#241F3D] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-[#2A2A3A] hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            Resume
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-[#2A2A3A] bg-white dark:bg-[#1B1B28] text-gray-700 dark:text-gray-200"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 dark:border-[#2A2A3A] bg-white dark:bg-[#1B1B28] text-gray-700 dark:text-gray-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0E0E16]/95 backdrop-blur-xl border-b border-gray-200 dark:border-[#2A2A3A] px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-50 dark:bg-[#241F3D] text-purple-600 dark:text-purple-300 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#15151F]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            
            <div className="pt-4 border-t border-gray-200 dark:border-[#2A2A3A] mt-2 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full text-base font-semibold border border-purple-300 dark:border-purple-500 text-purple-600 dark:text-purple-300 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-full text-base font-semibold bg-purple-600 text-white shadow-md"
              >
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
