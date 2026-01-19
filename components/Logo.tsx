
import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const scale = size === 'sm' ? '0.8' : size === 'lg' ? '1.2' : '1';
  
  return (
    <div className="flex items-center gap-3 select-none" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      {/* Icon trong hình vuông bo góc */}
      <div className="w-12 h-12 bg-[#003d3a] rounded-xl flex items-center justify-center shadow-lg border border-emerald-800/50">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 10L12 5L2 10L12 15L22 10Z" fill="#fcf6ba" />
          <path d="M6 12V16C6 16 8 19 12 19C16 19 18 16 18 16V12" stroke="#fcf6ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15L12 21M12 21L14 19M12 21L10 19" stroke="#fcf6ba" strokeWidth="1.5" />
        </svg>
      </div>
      
      {/* Chữ Logo */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-black tracking-wider text-[#fcf6ba] leading-none uppercase">
          VANHAI
        </h1>
        <p className="text-[10px] text-emerald-400 tracking-[0.3em] font-bold mt-1 uppercase leading-none">
          EDUCATION
        </p>
      </div>
    </div>
  );
};
