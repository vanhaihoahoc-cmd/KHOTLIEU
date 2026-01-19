
import React, { useState } from 'react';
import { View, Category, DocumentRecord } from './types';
import { CATEGORIES, Icons } from './constants';
import { Logo } from './components/Logo';
import { SharedLayout } from './components/SharedLayout';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Category Actions
  const handleCategoryClick = (cat: Category) => {
    setSelectedCategory(cat);
    setCurrentView(View.CATEGORY_CHOICE);
  };

  const handleBack = () => {
    if (currentView === View.CATEGORY_CHOICE) setCurrentView(View.HOME);
    else if (currentView === View.ADMIN_LOGIN) setCurrentView(View.CATEGORY_CHOICE);
    else if (currentView === View.ADMIN_PORTAL) {
      setCurrentView(View.CATEGORY_CHOICE);
      setAdminPassword('');
    }
    else if (currentView === View.STUDENT_PORTAL) setCurrentView(View.CATEGORY_CHOICE);
  };

  // Admin Login
  const handleAdminLogin = () => {
    if (adminPassword === 'admin123') {
      setCurrentView(View.ADMIN_PORTAL);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const renderHome = () => (
    <SharedLayout isHome={true}>
      <div className="text-center mb-16">
        <h1 className="text-6xl font-black italic text-[#fcf6ba] mb-4 tracking-tighter uppercase filter drop-shadow-lg">
          KHO TÀI LIỆU PHONG PHÚ
        </h1>
        <div className="h-1 w-40 bg-emerald-500 mx-auto rounded-full opacity-50"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryClick(cat)}
            className="flex items-center gap-6 p-8 rounded-[32px] border-2 border-emerald-900/50 bg-[#004d40]/60 hover:bg-[#005b56] hover:border-[#fcf6ba]/50 transition-all group text-left shadow-2xl"
          >
            <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
              {cat.icon === 'folder' && <Icons.Folder />}
              {cat.icon === 'multi-folder' && <Icons.MultiFolder />}
              {cat.icon === 'test-tube' && <Icons.TestTube />}
            </div>
            <div>
              <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-[#fcf6ba]">{cat.name}</h3>
              <p className="text-[10px] text-emerald-400 font-bold tracking-[0.2em]">{cat.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </SharedLayout>
  );

  const renderCategoryChoice = () => (
    <SharedLayout onBack={handleBack} title={selectedCategory?.name}>
      <div className="flex-1 flex items-center justify-center gap-12 w-full">
        {/* Student Portal Card */}
        <button 
          onClick={() => setCurrentView(View.STUDENT_PORTAL)}
          className="w-full max-w-sm aspect-[1.3/1] bg-[#005b56]/40 border-2 border-emerald-500/50 rounded-[40px] flex flex-col items-center justify-center hover:bg-[#006e68] transition-all group shadow-2xl"
        >
          <div className="mb-6 group-hover:rotate-6 transition-transform">
             <Icons.StudentIcon />
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">CỔNG HỌC SINH</h3>
          <p className="text-emerald-300 font-bold tracking-widest text-sm mt-1 uppercase">TRUY CẬP TÀI LIỆU</p>
        </button>

        {/* Admin Portal Card */}
        <button 
          onClick={() => setCurrentView(View.ADMIN_LOGIN)}
          className="w-full max-w-sm aspect-[1.3/1] bg-[#1a222c] border-2 border-gray-700 rounded-[40px] flex flex-col items-center justify-center hover:bg-[#232d3a] transition-all group shadow-2xl"
        >
          <div className="mb-6 group-hover:scale-110 transition-transform">
             <Icons.AdminIcon />
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">CỔNG QUẢN TRỊ</h3>
          <p className="text-gray-400 font-bold tracking-widest text-sm mt-1 uppercase">DÀNH CHO CÁN BỘ</p>
        </button>
      </div>
    </SharedLayout>
  );

  const renderAdminLogin = () => (
    <SharedLayout onBack={handleBack} title={selectedCategory?.name}>
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <h2 className="text-4xl font-black text-white mb-10 tracking-tight text-center uppercase">XÁC THỰC QUYỀN HẠN</h2>
        
        <div className="w-full space-y-6">
          <div className="relative">
            <input 
              type="password"
              placeholder="Mật khẩu Admin"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className={`w-full bg-[#002b28] border-2 ${loginError ? 'border-red-500' : 'border-emerald-800'} rounded-2xl py-6 px-8 text-center text-xl text-white placeholder-emerald-800 focus:outline-none focus:border-emerald-500 transition-colors`}
              onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
            />
            {loginError && <p className="text-red-500 text-sm mt-2 text-center font-semibold">Sai mật khẩu, vui lòng thử lại!</p>}
          </div>

          <button 
            onClick={handleAdminLogin}
            className="w-full py-6 rounded-2xl bg-[#d4af37] text-[#002b28] text-xl font-black uppercase tracking-widest hover:bg-[#e6b800] active:scale-95 transition-all shadow-lg"
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </SharedLayout>
  );

  const renderAdminPortal = () => (
    <SharedLayout onBack={handleBack} title={selectedCategory?.name}>
      <div className="w-full max-w-4xl bg-[#003d3a] rounded-[32px] p-8 border border-emerald-800 shadow-inner">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-yellow-500 text-3xl font-black">+</span>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">KHAI BÁO TÀI LIỆU MỚI</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input className="bg-[#002b28] border border-emerald-900 rounded-xl p-4 text-emerald-200 placeholder-emerald-900 uppercase font-bold focus:outline-none" placeholder="TÊN TÀI LIỆU" />
          <input className="bg-[#002b28] border border-emerald-900 rounded-xl p-4 text-emerald-200 placeholder-emerald-900 uppercase font-bold focus:outline-none" placeholder="LINK ĐỀ" />
          <input className="bg-[#002b28] border border-emerald-900 rounded-xl p-4 text-emerald-200 placeholder-emerald-900 uppercase font-bold focus:outline-none" placeholder="LINK ĐÁP ÁN" />
          <input className="bg-[#002b28] border border-emerald-900 rounded-xl p-4 text-emerald-200 placeholder-emerald-900 uppercase font-bold focus:outline-none" placeholder="LINK HƯỚNG DẪN GIẢI CHI TIẾT" />
        </div>
        
        <input className="w-full bg-[#002b28] border border-emerald-900 rounded-xl p-4 text-emerald-200 placeholder-emerald-900 uppercase font-bold mb-8 focus:outline-none" placeholder="MẬT KHẨU TÀI LIỆU (NẾU CÓ)" />

        <button className="w-full py-5 bg-emerald-600 rounded-2xl text-white font-black text-xl uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-lg">
           XÁC NHẬN KHAI BÁO
        </button>
      </div>

      <div className="w-full max-w-4xl mt-12 p-10 border-2 border-dashed border-emerald-900/50 rounded-[32px] text-center">
         <h4 className="text-2xl font-bold italic text-[#fcf6ba] uppercase mb-4 tracking-tighter">HỆ THỐNG ĐỒNG BỘ DỮ LIỆU LIÊN TRÌNH DUYỆT</h4>
         <p className="text-emerald-400 text-sm font-bold opacity-80 uppercase">* DÙNG TÍNH NĂNG NÀY ĐỂ MANG DỮ LIỆU SANG MÁY TÍNH HOẶC TRÌNH DUYỆT KHÁC</p>
      </div>
    </SharedLayout>
  );

  const renderStudentPortal = () => (
    <SharedLayout onBack={handleBack} title={selectedCategory?.name}>
        <div className="w-full text-center flex flex-col items-center">
            <h2 className="text-4xl font-black italic text-[#fcf6ba] mb-12 uppercase tracking-tighter">DANH SÁCH TÀI LIỆU</h2>
            <div className="mt-4 space-y-4">
                <p className="text-white text-xl font-medium">Đang tải danh sách tài liệu...</p>
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
                </div>
            </div>
            
            <div className="mt-12 max-w-md mx-auto p-10 bg-[#004d40]/40 rounded-[32px] border border-emerald-800">
                <p className="text-emerald-300 italic">"Tri thức là sức mạnh, hãy bắt đầu hành trình chinh phục mục tiêu của bạn ngay hôm nay!"</p>
            </div>
        </div>
    </SharedLayout>
  );

  switch (currentView) {
    case View.CATEGORY_CHOICE: return renderCategoryChoice();
    case View.ADMIN_LOGIN: return renderAdminLogin();
    case View.ADMIN_PORTAL: return renderAdminPortal();
    case View.STUDENT_PORTAL: return renderStudentPortal();
    default: return renderHome();
  }
};

export default App;
