
import React from 'react';
import { Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'exam-2026', name: 'Đề thi thử 2026', icon: 'folder', subtitle: 'HỆ THỐNG KHO LƯU TRỮ' },
  { id: 'solutions', name: 'BÀI GIẢI CHI TIẾT', icon: 'folder', subtitle: 'HỆ THỐNG KHO LƯU TRỮ' },
  { id: 'crash-course', name: 'Tổng Ôn Cấp Tốc', icon: 'multi-folder', subtitle: 'HỆ THỐNG KHO LƯU TRỮ' },
  { id: 'chemistry', name: 'Tài Liệu Hóa Học', icon: 'test-tube', subtitle: 'HỆ THỐNG KHO LƯU TRỮ' },
];

export const COLORS = {
  deepTeal: '#00403d',
  lighterTeal: '#005b56',
  metallicGold: '#e6b800',
  darkBg: '#002b28'
};

export const Icons = {
  Folder: () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" fill="#FACC15" />
    </svg>
  ),
  MultiFolder: () => (
    <div className="relative w-[60px] h-[60px]">
      <div className="absolute top-2 left-0 w-12 h-10 bg-pink-400 rounded shadow-sm"></div>
      <div className="absolute top-1 left-1 w-12 h-10 bg-green-400 rounded shadow-sm"></div>
      <div className="absolute top-0 left-2 w-12 h-10 bg-yellow-400 rounded shadow-sm"></div>
    </div>
  ),
  TestTube: () => (
    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 2H13.5M10.5 2V4M10.5 2L7 2V4M13.5 2V4M13.5 2L17 2V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 4V16C9 17.6569 10.3431 19 12 19C13.6569 19 15 17.6569 15 16V4" stroke="white" strokeWidth="1.5" />
      <path d="M9 12H15V15.5C15 16.3284 14.3284 17 13.5 17H10.5C9.67157 17 9 16.3284 9 15.5V12Z" fill="#4ade80" />
      <path d="M10 14H11V15H10V14Z" fill="white" />
      <path d="M13 13H14V14H13V13Z" fill="white" />
    </svg>
  ),
  GraduationCap: () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 10L12 5L2 10L12 15L22 10Z" fill="#e6b800" />
      <path d="M6 12V16C6 16 8 19 12 19C16 19 18 16 18 16V12" stroke="#e6b800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 15L12 21M12 21L14 19M12 21L10 19" stroke="#e6b800" strokeWidth="1.5" />
    </svg>
  ),
  StudentIcon: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L1 7L12 12L23 7L12 2Z" fill="#4f46e5" />
        <path d="M4 10V15.5C4 15.5 6 18 12 18C18 18 20 15.5 20 15.5V10" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" fill="#fbbf24" opacity="0.8" />
    </svg>
  ),
  AdminIcon: () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="#f59e0b" strokeWidth="2" />
        <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="12" cy="16" r="1.5" fill="#f59e0b" />
        <path d="M21 15L23 13L21 11" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};
