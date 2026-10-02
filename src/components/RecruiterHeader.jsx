import React from 'react';
import { Search, Plus, Bell, ChevronDown } from 'lucide-react';

export default function RecruiterHeader({ onNewJobClick, onProfileClick }) {
  return (
    <header className="sticky top-0 z-20 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between">
      <div className="relative w-full max-w-md">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search applicants, job titles, or skills..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange transition-all"
        />
      </div>

      <div className="flex items-center gap-4 ml-4">
        <button
          onClick={onNewJobClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-orange hover:bg-orange-700 text-white text-xs font-bold shadow-md shadow-orange-600/25 transition-all"
        >
          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
          <span>Post a Job</span>
        </button>

        <button className="relative p-2 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-100">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-orange ring-2 ring-white animate-pulse"></span>
        </button>

        <button
          onClick={onProfileClick}
          className="flex items-center gap-3 pl-3 border-l border-slate-200 py-1.5 px-2 rounded-xl hover:bg-slate-100 transition-all text-left"
        >
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
            alt="Sarah Jenkins"
            className="w-9 h-9 rounded-xl object-cover border border-slate-300"
          />
          <div className="hidden lg:block">
            <div className="text-xs font-bold text-slate-900 leading-tight flex items-center gap-1">
              <span>Sarah Jenkins</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
            <div className="text-[10px] font-semibold text-slate-500">Talent Acquisition Lead</div>
          </div>
        </button>
      </div>
    </header>
  );
}
