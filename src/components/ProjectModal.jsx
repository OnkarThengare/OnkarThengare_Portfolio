import React from 'react';
import { X, ExternalLink, CheckCircle2, Maximize2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose, onOpenFullImage }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#1B1B28] rounded-2xl border border-gray-200 dark:border-[#2A2A3A] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Full-Fit Image with Click-to-Zoom */}
        <div 
          onClick={() => onOpenFullImage && onOpenFullImage(project)}
          className="relative h-60 sm:h-68 bg-gray-950 overflow-hidden cursor-pointer group/modalimg border-b border-gray-100 dark:border-[#2A2A3A]"
          title="Click to view full uncropped image"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-95 group-hover/modalimg:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B28] via-transparent to-transparent pointer-events-none" />
          
          {/* Zoom In Badge Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/modalimg:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold pointer-events-none">
            <Maximize2 className="w-4 h-4 text-teal-300" />
            <span>Click to view full uncropped image</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors shadow-md z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-purple-100 dark:bg-[#241F3D] text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {project.highlights && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                Key Technical Highlights
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-200 dark:border-[#2A2A3A] flex flex-wrap items-center justify-end gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-gray-300 dark:border-[#2A2A3A] hover:border-purple-500 text-gray-800 dark:text-gray-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              Source Code
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-md transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Preview
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
