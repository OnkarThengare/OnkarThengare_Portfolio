import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const { personal } = portfolioData;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-[#0E0E16] border-t border-gray-200 dark:border-[#2A2A3A] pt-10 pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-gray-100 dark:border-[#1F1F2E]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="small" />

            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              Java Full Stack Developer focused on building high-performance web applications with Java, Spring Boot, React.js, and SQL.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gray-900 dark:hover:bg-purple-900/40 transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#0A66C2] dark:hover:bg-[#0A66C2] transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#EA4335] dark:hover:bg-[#EA4335] transition-all hover:scale-110 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => scrollToSection(e, 'skills')}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  onClick={(e) => scrollToSection(e, 'education')}
                  className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies Focus */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-400">
              Core Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Java', 'Spring Boot', 'React.js', 'Hibernate', 'SQL', 'Tailwind CSS', 'JavaScript', 'Git', 'Postman'].map(tech => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 text-[11px] rounded-md bg-gray-100 dark:bg-[#15151F] text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-[#2A2A3A]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 pt-2">
              Engineered with clean architecture, high performance, and responsive design.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <div>
            © {new Date().getFullYear()} Onkar Thengare. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            Hyderabad, India · onkarspy@gmail.com
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-nova-lg hover:bg-purple-700 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
          showBackToTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
