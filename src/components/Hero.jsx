import React, { useState, useEffect, useMemo } from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import HeroAvatar from './HeroAvatar';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  // Typewriter line animation: prints letter one-by-one from left to right
  const targetText = "Passionate Java Full Stack Developer 🚀";
  const graphemes = useMemo(() => Array.from(targetText), [targetText]);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting) {
      if (charCount < graphemes.length) {
        // Typing forward: print letters one by one from left to right (~75ms per letter)
        timer = setTimeout(() => {
          setCharCount((prev) => prev + 1);
        }, 75);
      } else {
        // Fully typed out: hold pause so visitor can read and admire (~2.8s)
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2800);
      }
    } else {
      if (charCount > 0) {
        // Smoothly delete backward (~35ms per letter)
        timer = setTimeout(() => {
          setCharCount((prev) => prev - 1);
        }, 35);
      } else {
        // Finished deleting: short pause before typing again
        timer = setTimeout(() => {
          setIsDeleting(false);
        }, 500);
      }
    }

    return () => clearTimeout(timer);
  }, [charCount, isDeleting, graphemes.length]);

  // Breakdown for styled gradient accent on "Java Full Stack Developer"
  // "Passionate " -> 11 chars
  // "Java Full Stack Developer" -> 25 chars (indices 11 to 36)
  // " 🚀" -> 2 chars (indices 36 to 38)
  const currentChars = graphemes.slice(0, charCount);
  const prefix = currentChars.slice(0, 11).join('');
  const highlight = currentChars.slice(11, 36).join('');
  const suffix = currentChars.slice(36).join('');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[88vh] pt-28 pb-14 flex items-center overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/15 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-teal-400/10 dark:bg-teal-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Eyebrow Badge (Nova style) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-[#241F3D] border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>{personal.badge}</span>
            </div>

            {/* Main Greeting with Shaking Waving Hand Animation 👋 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="gradient-heading">Onkar Thengare</span>{' '}
              <span className="animate-waving-hand inline-block origin-[75%_75%] select-none cursor-default">
                👋
              </span>
            </h1>

            {/* Animated Role Title: Prints letter one-by-one from left to right */}
            <h2 
              className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-100 mb-4 min-h-[2.4rem] sm:min-h-[2.6rem] flex items-center justify-center lg:justify-start"
              aria-label="Passionate Java Full Stack Developer"
            >
              <span className="font-bold">{prefix}</span>
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 dark:from-purple-400 dark:via-teal-300 dark:to-cyan-400 font-extrabold ml-1">
                  {highlight}
                </span>
              )}
              {suffix && <span className="ml-1">{suffix}</span>}
              <span 
                className="inline-block w-[3px] h-[1.15em] ml-1 bg-purple-600 dark:bg-purple-400 rounded-full animate-cursor align-middle shadow-sm"
                aria-hidden="true" 
              />
            </h2>

            {/* Subtext description (Clean without quotes) */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {personal.description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct Original Resume Download Button */}
              <a
                href="/resume.pdf"
                download="Onkar_Thengare_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold bg-white dark:bg-[#1B1B28] hover:bg-purple-50 dark:hover:bg-[#241F3D] text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/50 hover:border-purple-500 dark:hover:border-purple-400 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                title="Download Original Resume (PDF from Assets)"
              >
                <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Download Resume
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold bg-white dark:bg-[#1B1B28] hover:bg-gray-50 dark:hover:bg-[#241F3D] text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-[#2A2A3A] hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-200 shadow-sm cursor-pointer"
              >
                Contact Me
              </button>

              {/* Social Link Buttons with brand colorful hovers */}
              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] hover:bg-gray-900 hover:text-white dark:hover:bg-purple-900/60 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-[#2A2A3A] transition-all shadow-sm hover:scale-110"
                  aria-label="GitHub Profile"
                  title="GitHub: OnkarThengare"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] text-[#0A66C2] dark:text-[#38BDF8] border border-gray-200/80 dark:border-[#2A2A3A] transition-all shadow-sm hover:scale-110"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: onkar-thengare"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-100 dark:bg-[#1B1B28] hover:bg-[#EA4335] hover:text-white dark:hover:bg-[#EA4335] text-[#EA4335] dark:text-[#F87171] border border-gray-200/80 dark:border-[#2A2A3A] transition-all shadow-sm hover:scale-110"
                  aria-label="Send Email"
                  title={`Email: ${personal.email}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-6 border-t border-gray-200/80 dark:border-[#2A2A3A] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {personal.stats.map((stat, i) => (
                <div key={i} className="p-2">
                  <div className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Upgraded 3D Developer Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroAvatar />
          </div>

        </div>
      </div>
    </section>
  );
}
