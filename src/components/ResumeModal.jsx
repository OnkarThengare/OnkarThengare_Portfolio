import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Award, Briefcase, GraduationCap, Mail, Phone, MapPin, ExternalLink, Globe, Eye, FileCode } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'document'
  const { personal, education, internship, certifications, achievements } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-[#15151F] rounded-2xl border border-gray-200 dark:border-[#2A2A3A] shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-gray-50 dark:bg-[#1B1B28] border-b border-gray-200 dark:border-[#2A2A3A] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 dark:bg-[#241F3D] flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-tight">
                  ONKAR THENGARE — Original Resume
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                  Original PDF
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Java Full Stack Developer · Onkar_Resume_2002.pdf
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* View Mode Tabs */}
            <div className="hidden md:flex items-center p-1 bg-gray-200/70 dark:bg-[#12121A] rounded-xl text-xs font-semibold">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'pdf'
                    ? 'bg-white dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                Original PDF
              </button>
              <button
                onClick={() => setActiveTab('document')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'document'
                    ? 'bg-white dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                Document View
              </button>
            </div>

            {/* Direct Open in New Tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold bg-gray-100 dark:bg-[#241F3D] hover:bg-gray-200 dark:hover:bg-[#2E2850] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-[#3A355A] transition-all cursor-pointer"
              title="Open Original PDF in New Browser Tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open PDF</span>
            </a>

            {/* Native Direct PDF Download Anchor (Downloads user's original PDF) */}
            <a
              href="/resume.pdf"
              download="Onkar_Thengare_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-600/30 transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 dark:bg-[#2A2A3A] text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#3A3A4E] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch for mobile */}
        <div className="flex md:hidden items-center justify-center p-2 bg-gray-100 dark:bg-[#1B1B28] border-b border-gray-200 dark:border-[#2A2A3A] text-xs font-medium gap-2">
          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex-1 py-1.5 text-center rounded-lg transition-colors cursor-pointer ${
              activeTab === 'pdf'
                ? 'bg-purple-600 text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-black/30'
            }`}
          >
            Original PDF
          </button>
          <button
            onClick={() => setActiveTab('document')}
            className={`flex-1 py-1.5 text-center rounded-lg transition-colors cursor-pointer ${
              activeTab === 'document'
                ? 'bg-purple-600 text-white font-semibold'
                : 'text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-black/30'
            }`}
          >
            Document View
          </button>
        </div>

        {/* Modal Content Body */}
        {activeTab === 'pdf' ? (
          <div className="relative flex-1 bg-gray-100 dark:bg-[#0B0B11] flex flex-col min-h-[60vh] sm:min-h-[75vh]">
            <iframe
              src="/resume.pdf#view=FitH"
              title="Onkar Thengare Original Resume PDF"
              className="w-full h-full flex-1 min-h-[60vh] sm:min-h-[75vh] border-0 bg-white"
            />
            {/* Helpful footer info bar */}
            <div className="px-4 py-2 bg-gray-50 dark:bg-[#1B1B28] border-t border-gray-200 dark:border-[#2A2A3A] flex flex-wrap items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Original Resume PDF from Assets (LaTeX formatted)
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab('document')}
                  className="text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                >
                  View responsive text format
                </button>
                <a
                  href="/resume.pdf"
                  download="Onkar_Thengare_Resume.pdf"
                  className="font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                >
                  Direct Download (.pdf)
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10 overflow-y-auto space-y-7 bg-white dark:bg-[#0E0E16] text-gray-800 dark:text-gray-200">
          
          {/* Header */}
          <div className="text-center border-b border-gray-200 dark:border-[#2A2A3A] pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight uppercase mb-2">
              ONKAR THENGARE
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-purple-500" />
                {personal.phone}
              </span>
              <a 
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-500" />
                {personal.email}
              </a>
              <a 
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                linkedin.com/in/onkar-thengare
              </a>
              <a 
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-gray-900 dark:text-white" />
                github.com/OnkarThengare
              </a>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-2.5">
              Objective
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {personal.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-3">
              Education
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">Full Stack Java Development</strong>
                  <div className="text-gray-500 dark:text-gray-400">Naresh IT, Hyderabad</div>
                </div>
                <div className="font-semibold text-purple-600 dark:text-purple-400 sm:text-right">
                  Feb 2026 – Present
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">Shri Ramdeobaba College of Engineering and Management</strong>
                  <div className="text-gray-500 dark:text-gray-400">B.Tech in Electronics Engineering</div>
                </div>
                <div className="text-right sm:text-right">
                  <span className="font-semibold text-purple-600 dark:text-purple-400">Dec 2021 – May 2025</span>
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">CGPA: 8.17</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-3">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Programming:</span> Java
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Core Java:</span> OOP, Data Structures, Exception Handling, Collections, Multithreading
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Java Web:</span> JDBC, Servlets, JSP
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Backend:</span> Spring Core, Spring JDBC, Spring Boot, Hibernate
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Frontend:</span> HTML5, CSS3, JavaScript, React.js, Tailwind CSS
              </div>
              <div>
                <span className="font-bold text-gray-900 dark:text-white">• Database:</span> MySQL
              </div>
              <div className="sm:col-span-2">
                <span className="font-bold text-gray-900 dark:text-white">• Tools:</span> Eclipse IDE, Git, GitHub, VS Code, Postman
              </div>
            </div>
          </div>

          {/* Internship */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-3">
              Internship
            </h4>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                <div>
                  <strong className="text-gray-900 dark:text-white font-bold">Infosys Springboard 7.0 – Virtual Internship</strong>
                  <div className="text-teal-600 dark:text-teal-400 text-xs font-semibold">Selected — Project-Based Internship</div>
                </div>
                <div className="font-semibold text-purple-600 dark:text-purple-400">
                  2026 – Present
                </div>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Selected for the Infosys Springboard 7.0 Virtual Internship Program and currently working on a project as part of the internship.</li>
                <li>Collaborating on project development and applying software development concepts to build and implement project requirements.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-3">
              Projects
            </h4>
            <div className="space-y-4">
              
              {/* OneShop */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200/70 dark:border-[#2A2A3A]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h5 className="font-bold text-sm text-gray-900 dark:text-white">
                    OneShop – Multivendor E-Commerce Platform | <span className="text-purple-600 dark:text-purple-400">GitHub</span>
                  </h5>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1 mb-2">
                  <li>Developed a full-stack multivendor e-commerce application using Java, Spring Boot, React.js, and MySQL for customer, seller, and admin operations.</li>
                  <li>Implemented REST APIs for user authentication, product management, seller operations, cart, and order management.</li>
                  <li>Implemented role-based authentication and authorization using Spring Security and JWT and used Spring Data JPA/Hibernate for database persistence.</li>
                </ul>
                <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-300">
                  Tech Stack: Java, Spring Boot, Spring Security, JWT, Spring Data JPA, Hibernate, MySQL, React.js
                </div>
              </div>

              {/* Nutrifit */}
              <div className="p-3.5 rounded-xl bg-gray-50 dark:bg-[#15151F] border border-gray-200/70 dark:border-[#2A2A3A]">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h5 className="font-bold text-sm text-gray-900 dark:text-white">
                    Nutrifit | <span className="text-purple-600 dark:text-purple-400">GitHub</span>
                  </h5>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-600 dark:text-gray-300 space-y-1 mb-2">
                  <li>Developed a responsive web application providing nutritional analysis of food items using an external Nutrition API.</li>
                  <li>Integrated external APIs for nutritional information and health-related news and built the interface using React.js and Tailwind CSS.</li>
                </ul>
                <div className="text-[11px] font-semibold text-teal-600 dark:text-teal-300">
                  Tech Stack: React.js, Tailwind CSS, REST APIs
                </div>
              </div>

            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-2.5">
              Certifications
            </h4>
            <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li><strong>Databases for Developers: Foundations</strong> — Oracle Dev Gym</li>
              <li><strong>SQL</strong> — HackerRank</li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-500/30 pb-1 mb-2.5">
              Achievements
            </h4>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
              <Award className="w-4 h-4 text-teal-500 flex-shrink-0" />
              <span><strong>Design Patent Granted</strong> – Automated Microfluidic System for Flow and Pressure Control</span>
            </div>
          </div>

        </div>
        )}
      </div>
    </div>
  );
}
