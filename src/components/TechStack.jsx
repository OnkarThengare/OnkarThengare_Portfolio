import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

export default function TechStack() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-400/10 dark:bg-teal-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 mb-2.5 border border-purple-200 dark:border-purple-500/30">
            SKILLS & EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2.5">
            Technologies I Use Daily
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            Core technologies powering my full-stack web applications, microservices, and databases.
          </p>
        </div>

        {/* Clean Logo Cards Grid (2 rows of 6 on desktop, matching Image 5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-white dark:bg-[#1B1B28] rounded-2xl p-5 sm:p-6 border border-gray-200/80 dark:border-[#2A2A3A] flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 shadow-sm hover:shadow-nova-lg cursor-pointer"
            >
              {/* Subtle hover gradient backdrop */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: skill.color }}
              />

              {/* Exact official logo */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-110">
                <TechLogo name={skill.name} className="w-11 h-11 object-contain drop-shadow-sm" />
              </div>

              {/* Name */}
              <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 tracking-tight text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {skill.name}
              </span>

              {/* Bottom accent glow indicator line */}
              <div 
                className="w-0 group-hover:w-8 h-1 rounded-full transition-all duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
