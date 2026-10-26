import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E0E16] text-[#14141F] dark:text-[#F3F3F8] selection:bg-purple-600 selection:text-white transition-colors duration-300">
      {/* Sticky Blurred Navbar with Theme Toggle & Resume Action */}
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Single Page Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <TechStack />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer & Back to top button */}
      <Footer />

      {/* Dedicated Resume Modal with Inside Download Button */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}
