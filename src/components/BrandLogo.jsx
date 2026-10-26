import React from 'react';

/**
 * BrandLogo matches Image 3:
 * - Rounded squircle with gradient border (violet/purple to cyan/teal)
 * - Inside the squircle: </> code brackets in violet
 * - ONKAR in bold black/white uppercase font
 * - Followed by a solid cyan dot ●
 */
export default function BrandLogo({ size = "normal" }) {
  const isSmall = size === "small";

  return (
    <div className="flex items-center gap-2.5 select-none group">
      {/* Squircle with violet-to-cyan gradient border */}
      <div 
        className={`${
          isSmall ? 'w-8 h-8 rounded-xl p-[1.5px]' : 'w-10 h-10 rounded-2xl p-[2px]'
        } bg-gradient-to-tr from-[#7C3AED] via-[#6366F1] to-[#00D2C4] shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
      >
        <div className="w-full h-full bg-white dark:bg-[#0E0E16] rounded-[10px] sm:rounded-[12px] flex items-center justify-center">
          {/* </> Code Glyph in Violet matching Image 3 */}
          <svg 
            className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'} text-[#7C3AED] dark:text-[#A78BFA]`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* < bracket */}
            <polyline points="7.5 7.5 3.5 12 7.5 16.5" />
            {/* / slash */}
            <line x1="14" y1="5.5" x2="10" y2="18.5" />
            {/* > bracket */}
            <polyline points="16.5 7.5 20.5 12 16.5 16.5" />
          </svg>
        </div>
      </div>

      {/* Brand Text: ONKAR with cyan circular dot ● */}
      <div className="flex items-center gap-1.5">
        <span className={`font-black ${isSmall ? 'text-lg tracking-tight' : 'text-xl sm:text-2xl tracking-tight'} text-gray-950 dark:text-white leading-none`}>
          ONKAR
        </span>
        <span className={`${isSmall ? 'w-2 h-2' : 'w-2.5 h-2.5'} rounded-full bg-[#00D2C4] inline-block shadow-[0_0_8px_rgba(0,210,196,0.6)] flex-shrink-0`} />
      </div>
    </div>
  );
}
