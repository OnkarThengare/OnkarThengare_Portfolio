import React from 'react';
import { Award, Sparkles, Terminal } from 'lucide-react';
import { TechLogo } from './TechLogos';

export default function HeroAvatar() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Background ambient radial glow orbs */}
      <div className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-teal-400/25 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/20 dark:border-purple-400/15 animate-spin-slow pointer-events-none" />
      <div className="absolute w-[490px] h-[490px] rounded-full border border-teal-500/10 border-dashed pointer-events-none" />

      {/* Main floating container with the top-tier 3D developer illustration */}
      <div className="relative z-10 w-full h-full flex items-center justify-center animate-float-slow p-2 sm:p-4">
        
        {/* Modern 3D Tech Developer Illustration */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src="/developer-3d.svg" 
            alt="Onkar Thengare — Java Full Stack Developer" 
            className="w-full h-full max-h-[460px] object-contain drop-shadow-2xl filter saturate-[1.08] transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // Fallback to developer-about.png if needed
              e.target.src = '/developer-about.png';
            }}
          />
        </div>

        {/* Floating Badge 1: Java & Spring (Top Left) */}
        <div className="absolute top-4 left-0 md:-left-4 bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-nova-lg flex items-center gap-2.5 animate-float-slow">
          <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <TechLogo name="java" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">Java & Spring</div>
            <div className="text-[10px] text-purple-600 dark:text-purple-400 font-medium">Enterprise Backend</div>
          </div>
        </div>

        {/* Floating Badge 2: React.js (Top Right) */}
        <div className="absolute top-8 right-0 md:-right-4 bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md border border-teal-500/30 dark:border-teal-500/40 px-3.5 py-2 rounded-2xl shadow-nova-lg flex items-center gap-2.5 animate-float-delayed">
          <div className="w-8 h-8 rounded-xl bg-cyan-400/10 flex items-center justify-center">
            <TechLogo name="react" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">React.js</div>
            <div className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">Interactive Frontend</div>
          </div>
        </div>

        {/* Floating Badge 3: MySQL & Hibernate (Bottom Left) */}
        <div className="absolute bottom-12 -left-2 md:-left-6 bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md border border-purple-500/30 dark:border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-nova-lg flex items-center gap-2.5 animate-float-delayed">
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center">
            <TechLogo name="mysql" className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-900 dark:text-white leading-tight">MySQL & Hibernate</div>
            <div className="text-[10px] text-purple-600 dark:text-purple-400 font-medium">Database Persistence</div>
          </div>
        </div>

        {/* Floating Badge 4: Design Patent Granted (Bottom Right) */}
        <div className="absolute bottom-10 right-2 md:-right-2 bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md border border-teal-500/30 dark:border-teal-500/40 px-3.5 py-2 rounded-2xl shadow-nova-lg flex items-center gap-2 animate-float-slow">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
          </span>
          <div className="flex items-center gap-1.5 text-xs font-bold text-gray-800 dark:text-gray-200">
            <Award className="w-3.5 h-3.5 text-teal-500" />
            <span>Patent Granted</span>
          </div>
        </div>

      </div>
    </div>
  );
}
