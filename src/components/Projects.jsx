import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close full image on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-12 sm:py-16 relative bg-gray-50/50 dark:bg-[#15151F]/40 border-y border-gray-200/60 dark:border-[#2A2A3A]/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header (Slider controls moved to the right side of the cards as in Image 3) */}
        <div className="max-w-2xl mb-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 mb-3 border border-purple-200 dark:border-purple-500/30">
            PROJECT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
            Featured Projects & Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Slide through my web applications, microservices, and patented hardware automation projects.
          </p>
        </div>

        {/* Carousel Container with Controls at Position Marked in Image 3 */}
        <div className="relative">
          
          {/* Slidable Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(projects.length, 1))}%)`
              }}
            >
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 group bg-white dark:bg-[#1B1B28] rounded-2xl border border-gray-200/80 dark:border-[#2A2A3A] hover:border-purple-500/50 shadow-sm hover:shadow-nova-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Full-Fit Edge-to-Edge Project Image (No black spacing / letterbox, matches previous design) */}
                    <div 
                      onClick={() => setSelectedImage(proj)}
                      className="relative w-full h-48 sm:h-52 overflow-hidden border-b border-gray-100 dark:border-[#2A2A3A] cursor-pointer group/img bg-gray-950"
                      title="Click to view full image"
                    >
                      <img 
                        src={proj.image} 
                        alt={proj.title} 
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      {/* Project Category Tag */}
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600/95 backdrop-blur-md text-white text-[11px] font-bold shadow-md z-10 pointer-events-none">
                        <Sparkles className="w-3 h-3 text-teal-300" />
                        {proj.type || "Project"}
                      </span>

                      {/* Click to Zoom Hint Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[1px] pointer-events-none">
                        <Maximize2 className="w-4 h-4 text-teal-300" />
                        <span>Click to view full image</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 sm:p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {proj.tags.slice(0, 4).map(tag => (
                          <span 
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-gray-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 border border-gray-200/60 dark:border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {proj.tags.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-gray-500">
                            +{proj.tags.length - 4}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 tracking-tight line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {proj.title}
                      </h3>
                      
                      <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2.5 line-clamp-1">
                        {proj.subtitle}
                      </p>

                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-3">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Card Footer */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-100 dark:border-[#2A2A3A]/80 mt-2">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 dark:border-[#2A2A3A] bg-gray-50 dark:bg-[#15151F] text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 transition-all shadow-sm"
                        aria-label="GitHub Repository"
                        title="View GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>

                      {proj.liveUrl && proj.liveUrl !== '#' && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full flex items-center justify-center border border-teal-200 dark:border-teal-500/30 bg-teal-50 dark:bg-teal-950/30 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-all shadow-sm"
                          aria-label="Live Demo"
                          title="Live Preview"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Slider Arrow Controls: Moved to the exact position marked with the red circle in Image 3 */}
          <div className="hidden lg:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Project"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-[#2A2A3A] bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:border-purple-600 transition-all shadow-xl flex items-center justify-center cursor-pointer active:scale-95 group"
              title="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Project"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-[#2A2A3A] bg-white/95 dark:bg-[#1B1B28]/95 backdrop-blur-md text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:border-purple-600 transition-all shadow-xl flex items-center justify-center cursor-pointer active:scale-95 group"
              title="Next Slide"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Carousel Navigation Controls for Mobile & Tablet view */}
        <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            aria-label="Previous Project"
            className="w-11 h-11 rounded-full border border-gray-200 dark:border-[#2A2A3A] bg-white dark:bg-[#1B1B28] text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:border-purple-600 transition-all shadow-md flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx 
                    ? 'w-7 bg-purple-600 dark:bg-purple-500' 
                    : 'w-2 bg-gray-300 dark:bg-[#2A2A3A] hover:bg-purple-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next Project"
            className="w-11 h-11 rounded-full border border-gray-200 dark:border-[#2A2A3A] bg-white dark:bg-[#1B1B28] text-gray-700 dark:text-gray-200 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 hover:border-purple-600 transition-all shadow-md flex items-center justify-center cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Pagination Dots */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {projects.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === dotIdx 
                  ? 'w-7 bg-purple-600 dark:bg-purple-500' 
                  : 'w-2 bg-gray-300 dark:bg-[#2A2A3A] hover:bg-purple-400'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenFullImage={(proj) => {
          setSelectedProject(null);
          setSelectedImage(proj);
        }}
      />

      {/* High-Resolution Full Image Lightbox Modal ("big size of image not so big, using that approch i can see the Full Image") */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[85vh] w-full bg-[#12121E] rounded-2xl border border-gray-700/60 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-[#1B1B28] border-b border-[#2A2A3A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <h3 className="text-sm font-bold text-white tracking-wide truncate max-w-md">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Uncropped Full Image - Perfectly Sized */}
            <div className="p-3 sm:p-4 flex items-center justify-center overflow-auto max-h-[75vh] bg-[#0A0A10]">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Bottom Caption */}
            <div className="px-5 py-2.5 bg-[#1B1B28] border-t border-[#2A2A3A] flex items-center justify-between text-xs text-gray-400">
              <span>{selectedImage.subtitle}</span>
              <button
                onClick={() => {
                  const proj = selectedImage;
                  setSelectedImage(null);
                  setSelectedProject(proj);
                }}
                className="text-purple-400 hover:text-purple-300 font-semibold cursor-pointer"
              >
                View Full Project Details →
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
