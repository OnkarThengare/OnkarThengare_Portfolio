import React from 'react';
import { Code2, Server, Layers, GitBranch, Zap, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const corePillars = [
    {
      icon: <Server className="w-5 h-5 text-purple-500" />,
      title: "Backend & System Design",
      desc: "Architecting secure, fault-tolerant REST APIs using Spring Boot, Spring Security, and JPA/Hibernate with clean layered design."
    },
    {
      icon: <Layers className="w-5 h-5 text-teal-400" />,
      title: "Modern Frontend Engineering",
      desc: "Creating lightning-fast, responsive web interfaces using React, Tailwind CSS, and standard ES6+ JavaScript."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: "Performance & Database Optimization",
      desc: "Optimizing relational database queries, Hibernate caching strategies, and asset bundling for maximum throughput."
    },
    {
      icon: <GitBranch className="w-5 h-5 text-pink-500" />,
      title: "API Verification & Collaboration",
      desc: "Rigorous API validation via Postman collections, Git version control, and clean documentation for effortless collaboration."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 relative bg-gray-50/50 dark:bg-[#15151F]/40 border-y border-gray-200/60 dark:border-[#2A2A3A]/60">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 mb-3 border border-purple-200 dark:border-purple-500/30">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
            Passionate Developer with a Full-Stack Mindset
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Bridging resilient backend engineering with fluid, user-first interfaces.
          </p>
        </div>

        {/* Bento Grid: Clean Balanced 2-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 bg-white dark:bg-[#1B1B28] rounded-2xl p-7 sm:p-8 border border-gray-200/80 dark:border-[#2A2A3A] shadow-sm hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-[#241F3D] flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">My Approach & Philosophy</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Quality, Scale & Maintainability</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am a passionate Java Full Stack Developer dedicated to crafting dependable, high-performing web applications. By mastering both client-side interactivity (React.js, Tailwind CSS) and server-side robustness (Java, Spring Boot, Hibernate, MySQL), I deliver complete end-to-end digital solutions.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                I believe that scalable applications arise from clear architectural boundaries: decoupled presentation layers, testable business services, and finely-tuned data persistence layers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-[#2A2A3A]">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Clean Architecture & SOLID</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Responsive & Accessible UI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>RESTful API Design Standards</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Continuous Learning Mindset</span>
              </div>
            </div>
          </div>

          {/* What Drives Me Card */}
          <div className="lg:col-span-5 relative rounded-2xl p-7 sm:p-8 border border-purple-500/30 dark:border-purple-500/40 shadow-lg overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#1B1B28] to-teal-900/20 dark:from-[#241F3D] dark:via-[#1B1B28] dark:to-[#15232A] -z-10" />
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-purple-500/25 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-teal-400/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-teal-400" />
                What Drives Me
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight">
                Solving Complex Business Logic into Simple Code
              </h4>

              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                I thrive on decomposing complex requirements into elegant, testable services, decoupling presentation from domain logic, and deploying robust user solutions.
              </p>
            </div>

            {/* Architecture Pipeline Visual */}
            <div className="pt-4 border-t border-purple-200/40 dark:border-[#2A2A3A]">
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2.5">
                Full-Stack Architecture Pipeline
              </span>
              <div className="flex items-center justify-between gap-1 text-[11px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-black/30 p-3 rounded-xl backdrop-blur-sm border border-purple-200/40 dark:border-purple-500/20 shadow-inner">
                <span className="text-teal-600 dark:text-teal-400">React UI</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span className="text-purple-600 dark:text-purple-400">REST API</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span className="text-emerald-600 dark:text-emerald-400">Spring Core</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                <span className="text-blue-500">SQL DB</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillar Cards below (DevOps removed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-[#1B1B28] rounded-xl p-6 border border-gray-200/80 dark:border-[#2A2A3A] shadow-sm hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#241F3D] flex items-center justify-center mb-4">
                {pillar.icon}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">
                {pillar.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
