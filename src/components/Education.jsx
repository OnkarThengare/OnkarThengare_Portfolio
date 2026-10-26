import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, Award, Building2, CheckCircle2, Briefcase } from 'lucide-react';

export default function Education() {
  const { education, internship, certifications, achievements } = portfolioData;

  return (
    <section id="education" className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-teal-400/10 dark:bg-teal-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 mb-3 border border-purple-200 dark:border-purple-500/30">
            ACADEMIC & PROFESSIONAL BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Education & Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
            Formal foundations in software development, electronics engineering, and project-based internships.
          </p>
        </div>

        {/* Clean, Refined Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-200 dark:border-[#2A2A3A] space-y-8">
          
          {/* Internship Item */}
          {internship && internship.map((item, idx) => (
            <div key={`intern-${idx}`} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#0E0E16] border-2 border-teal-500 flex items-center justify-center text-teal-500 shadow-md group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              <div className="bg-white dark:bg-[#1B1B28] rounded-2xl p-6 sm:p-7 border border-teal-500/30 dark:border-teal-500/40 shadow-sm hover:shadow-nova-lg transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {item.company}
                  </h3>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-950/40 px-3 py-1 rounded-full border border-teal-200/60 dark:border-teal-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                  {item.role}
                </div>

                <div className="space-y-1.5 pt-2 border-t border-gray-100 dark:border-[#2A2A3A]">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education Items */}
          {education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-white dark:bg-[#0E0E16] border-2 border-purple-600 flex items-center justify-center text-purple-600 shadow-md group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Compact & Clean Education Card */}
              <div className="bg-white dark:bg-[#1B1B28] rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-[#2A2A3A] shadow-sm hover:border-purple-500/40 hover:shadow-nova-lg transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {item.degree}
                  </h3>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-[#241F3D] px-3 py-1 rounded-full border border-purple-200/60 dark:border-purple-500/30">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400 mb-3">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span>{item.institution}</span>
                  {item.status && (
                    <>
                      <span className="text-gray-400">•</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">{item.status}</span>
                    </>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Refined Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-gray-100 dark:border-[#2A2A3A]">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Patent Banner */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white dark:bg-[#1B1B28] border border-gray-200/80 dark:border-[#2A2A3A] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950/40 flex items-center justify-center text-teal-500 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase">Patent Recognition</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Design Patent Granted</div>
              <div className="text-[11px] text-gray-500">Automated Microfluidic System</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-[#1B1B28] border border-gray-200/80 dark:border-[#2A2A3A] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-[#241F3D] flex items-center justify-center text-purple-600 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase">Certifications</div>
              <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Oracle Dev Gym & HackerRank</div>
              <div className="text-[11px] text-gray-500">Databases for Developers · SQL</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
