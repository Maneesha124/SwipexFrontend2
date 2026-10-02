import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';

export default function Header() {
  const navigate = useNavigate();
  const { showToast } = useAdmin();

  return (
    <header className="sticky top-0 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 flex items-center justify-between z-20 shadow-xs">
      <div className="relative w-96">
        <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
        <input 
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus:border-transparent transition-all shadow-xs" 
          placeholder="Search users, recruiters, job IDs, or audit logs..." 
          type="search"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-3.5"></span>
          <span>ALL SYSTEMS OPERATIONAL</span>
        </div>

        <div className="relative">
          <button 
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => showToast('3 listings requiring executive consensus')}
          >
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center ring-2 ring-white">3</span>
        </div>

        <div className="h-6 w-[1px] bg-slate-200"></div>

        <button 
          className="cursor-pointer hover:bg-slate-100/90 rounded-2xl transition-all p-1.5 border border-transparent hover:border-slate-200 flex items-center gap-3 text-left group" 
          onClick={() => navigate('/profile')} 
          title="Admin Profile & Root Credentials"
        >
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-xs font-bold text-slate-900 group-hover:text-[#EA580C] transition-colors">Executive Admin</span>
            <span className="text-[11px] text-slate-500 font-medium">admin@swipex.com • Zone 0 Root</span>
          </div>
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] border border-slate-700 text-white flex items-center justify-center shadow-xs group-hover:bg-[#EA580C] transition-colors">
            <span className="material-symbols-outlined text-[19px]">shield</span>
          </div>
        </button>
      </div>
    </header>
  );
}
