
import React from 'react';
import { View } from '../types';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
  onBack?: () => void;
  title?: string;
  isHome?: boolean;
}

export const SharedLayout: React.FC<LayoutProps> = ({ children, onBack, title, isHome }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#002b28]">
      <div className="w-full max-w-6xl aspect-video bg-[#00403d] rounded-[20px] shadow-2xl overflow-hidden relative border-4 border-[#004d40] flex flex-col">
        
        {/* THANH ĐIỀU HƯỚNG CẤP CAO (Như ảnh) */}
        <div className="w-full bg-[#004d40] px-8 py-4 flex justify-between items-center border-b border-emerald-900/50 z-20">
          <Logo size="sm" />
          <div className="text-[#fcf6ba] font-black tracking-widest text-lg uppercase cursor-pointer hover:opacity-80 transition-opacity">
            TRANG CHỦ
          </div>
        </div>

        {/* Thanh tiêu đề phụ (Chỉ hiện khi không phải trang chủ) */}
        {!isHome && (
          <div className="px-8 py-6 flex justify-between items-center z-10 bg-[#00403d]">
            {onBack ? (
               <button 
                  onClick={onBack}
                  className="flex items-center gap-2 text-emerald-300 font-bold tracking-widest text-sm hover:text-white transition-colors"
               >
                 <span className="text-lg">←</span> QUAY LẠI
               </button>
            ) : <div></div>}
            
            {title && (
              <h2 className="text-2xl font-black italic text-[#fcf6ba] tracking-tighter uppercase">
                {title}
              </h2>
            )}
            <div className="w-10"></div>
          </div>
        )}

        {/* Vùng nội dung chính */}
        <div className={`flex-1 flex flex-col items-center px-12 ${isHome ? 'pt-20' : 'pt-4'} pb-12 overflow-y-auto`}>
          {children}
        </div>
      </div>
    </div>
  );
};
